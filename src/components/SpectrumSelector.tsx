'use client';

import { useState, useRef, useEffect } from 'react';
import { Perspective, PerspectiveId } from '@/lib/types';
import { perspectives } from '@/lib/prompts';

interface SpectrumSelectorProps {
  selectedPerspective: PerspectiveId | null;
  onSelectPerspective: (id: PerspectiveId) => void;
}

export default function SpectrumSelector({ 
  selectedPerspective, 
  onSelectPerspective 
}: SpectrumSelectorProps) {
  const [hoveredPerspective, setHoveredPerspective] = useState<PerspectiveId | null>(null);
  const [dimensions, setDimensions] = useState({ width: 320, height: 320 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive sizing
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const size = Math.min(containerWidth - 40, 400);
        setDimensions({ width: size, height: size });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const { width, height } = dimensions;
  const centerX = width / 2;
  const centerY = height / 2;
  const outerRadius = Math.min(width, height) / 2 - 10;
  const innerRadius = outerRadius * 0.35;

  // Group perspectives by spectrum for rendering segments
  const blueSpectrum = perspectives.filter(p => p.spectrum === 'blue');
  const redSpectrum = perspectives.filter(p => p.spectrum === 'red');
  const blackSpectrum = perspectives.filter(p => p.spectrum === 'black');

  const createArcPath = (
    startAngle: number, 
    endAngle: number, 
    innerR: number, 
    outerR: number
  ): string => {
    const startRad = (startAngle - 90) * Math.PI / 180;
    const endRad = (endAngle - 90) * Math.PI / 180;
    
    const x1 = centerX + innerR * Math.cos(startRad);
    const y1 = centerY + innerR * Math.sin(startRad);
    const x2 = centerX + outerR * Math.cos(startRad);
    const y2 = centerY + outerR * Math.sin(startRad);
    const x3 = centerX + outerR * Math.cos(endRad);
    const y3 = centerY + outerR * Math.sin(endRad);
    const x4 = centerX + innerR * Math.cos(endRad);
    const y4 = centerY + innerR * Math.sin(endRad);
    
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    
    return `M ${x1} ${y1} L ${x2} ${y2} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x3} ${y3} L ${x4} ${y4} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x1} ${y1}`;
  };

  const renderSegment = (perspective: Perspective, startAngle: number, endAngle: number) => {
    const isSelected = selectedPerspective === perspective.id;
    const isHovered = hoveredPerspective === perspective.id;
    
    const segmentOuterRadius = isSelected || isHovered ? outerRadius + 8 : outerRadius;
    const path = createArcPath(startAngle, endAngle, innerRadius, segmentOuterRadius);
    
    // Calculate label position
    const midAngle = (startAngle + endAngle) / 2;
    const labelRadius = (innerRadius + outerRadius) / 2;
    const labelRad = (midAngle - 90) * Math.PI / 180;
    const labelX = centerX + labelRadius * Math.cos(labelRad);
    const labelY = centerY + labelRadius * Math.sin(labelRad);

    return (
      <g key={perspective.id}>
        <path
          d={path}
          fill={isSelected ? perspective.hoverColor : perspective.color}
          stroke={isSelected ? '#fff' : 'rgba(255,255,255,0.3)'}
          strokeWidth={isSelected ? 3 : 1}
          className="cursor-pointer transition-all duration-200"
          onClick={() => onSelectPerspective(perspective.id)}
          onMouseEnter={() => setHoveredPerspective(perspective.id)}
          onMouseLeave={() => setHoveredPerspective(null)}
          style={{
            filter: isHovered || isSelected ? 'brightness(1.1)' : 'none',
            transform: isSelected ? `scale(1.02)` : 'scale(1)',
            transformOrigin: `${centerX}px ${centerY}px`
          }}
        />
        {/* Perspective label inside segment */}
        <text
          x={labelX}
          y={labelY}
          textAnchor="middle"
          dominantBaseline="middle"
          className="pointer-events-none select-none"
          fill="white"
          fontSize={dimensions.width > 300 ? "10" : "8"}
          fontWeight="500"
        >
          {perspective.name.split(' ').map((word, i) => (
            <tspan 
              key={i} 
              x={labelX} 
              dy={i === 0 ? 0 : 12}
            >
              {word}
            </tspan>
          ))}
        </text>
      </g>
    );
  };

  // Define angle ranges for each spectrum section
  const blueAngles = { start: 240, end: 360 }; // Right side (conservative)
  const redAngles = { start: 60, end: 180 };   // Left side (liberal)
  const blackAngles = { start: 180, end: 240 }; // Bottom (cynical)

  const renderSpectrumSegments = (
    spectrumPerspectives: Perspective[], 
    startAngle: number, 
    endAngle: number
  ) => {
    const anglePerSegment = (endAngle - startAngle) / spectrumPerspectives.length;
    return spectrumPerspectives.map((p, index) => 
      renderSegment(
        p, 
        startAngle + index * anglePerSegment, 
        startAngle + (index + 1) * anglePerSegment
      )
    );
  };

  const selectedInfo = selectedPerspective 
    ? perspectives.find(p => p.id === selectedPerspective) 
    : null;

  const hoveredInfo = hoveredPerspective
    ? perspectives.find(p => p.id === hoveredPerspective)
    : null;

  const displayInfo = hoveredInfo || selectedInfo;

  return (
    <div className="flex flex-col items-center" ref={containerRef}>
      {/* Spectrum Legend */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-600" />
          <span className="text-sm text-gray-600">Conservative</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-600" />
          <span className="text-sm text-gray-600">Liberal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-gray-600" />
          <span className="text-sm text-gray-600">Black American Skeptic</span>
        </div>
      </div>

      {/* Circular Dial */}
      <div className="relative">
        <svg 
          width={width} 
          height={height} 
          viewBox={`0 0 ${width} ${height}`}
          className="drop-shadow-lg"
        >
          {/* Background circle */}
          <circle 
            cx={centerX} 
            cy={centerY} 
            r={outerRadius} 
            fill="rgba(0,0,0,0.05)" 
          />
          
          {/* Blue spectrum segments */}
          {renderSpectrumSegments(blueSpectrum, blueAngles.start, blueAngles.end)}
          
          {/* Red spectrum segments */}
          {renderSpectrumSegments(redSpectrum, redAngles.start, redAngles.end)}
          
          {/* Black spectrum segment */}
          {renderSpectrumSegments(blackSpectrum, blackAngles.start, blackAngles.end)}
          
          {/* Gap segments (neutral zones) */}
          <path
            d={createArcPath(0, 60, innerRadius, outerRadius)}
            fill="rgba(156, 163, 175, 0.3)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth={1}
          />

          {/* Center circle with instruction */}
          <circle 
            cx={centerX} 
            cy={centerY} 
            r={innerRadius - 5} 
            fill="white" 
            stroke="rgba(0,0,0,0.1)"
            strokeWidth={2}
          />
          <text
            x={centerX}
            y={centerY - 10}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#6b7280"
            fontSize="11"
            fontWeight="500"
          >
            Select a
          </text>
          <text
            x={centerX}
            y={centerY + 5}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#6b7280"
            fontSize="11"
            fontWeight="500"
          >
            perspective
          </text>
        </svg>
      </div>

      {/* Selected/Hovered Perspective Info */}
      <div className="mt-6 text-center min-h-[80px]">
        {displayInfo ? (
          <div className="animate-fadeIn">
            <h3 
              className="text-lg font-semibold"
              style={{ color: displayInfo.color }}
            >
              {displayInfo.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1 max-w-md">
              {displayInfo.description}
            </p>
            {selectedPerspective === displayInfo.id && (
              <div className="mt-2 inline-flex items-center text-green-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Selected
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">
            Click on a section of the wheel to select a political perspective
          </p>
        )}
      </div>
    </div>
  );
}
