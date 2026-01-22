import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | civic-duty.ai',
  description: 'Learn about civic-duty.ai, an educational tool for exploring political perspectives through AI.',
};

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            About civic-duty.ai
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Building understanding across political divides
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              In an era of increasing political polarization, civic-duty.ai was created with a simple 
              but important mission: to help people understand how those with different political 
              perspectives think and communicate about the issues that matter most.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We believe that democracy works best when citizens can engage with each other 
              constructively, even—especially—across lines of political difference. The first step 
              toward that kind of engagement is understanding.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <ol className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">1</span>
                  <div>
                    <strong className="text-gray-900">Select a Perspective:</strong> Use our interactive 
                    spectrum dial to choose from a range of political perspectives, from far-left to 
                    far-right, including a cynical/disengaged perspective.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mr-4">2</span>
                  <div>
                    <strong className="text-gray-900">Ask Your Question:</strong> Type any question about 
                    politics, policy, current events, or social issues that you&apos;d like to explore.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold mr-4">3</span>
                  <div>
                    <strong className="text-gray-900">Explore the Response:</strong> Receive an AI-generated 
                    response that authentically represents how someone with that perspective might answer 
                    your question.
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Political Spectrum</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We&apos;ve organized perspectives into three main spectrums:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-blue-50 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Conservative Spectrum</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Moderate Conservative</li>
                  <li>• Center-Right</li>
                  <li>• Far-Right MAGA</li>
                </ul>
              </div>
              
              <div className="p-5 rounded-xl bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-900 mb-2">Liberal Spectrum</h3>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Center-Left Liberal</li>
                  <li>• Progressive</li>
                  <li>• Far-Left</li>
                </ul>
              </div>
              
              <div className="p-5 rounded-xl bg-gray-100 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Cynical/Disengaged</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Institutional distrust</li>
                  <li>• Both-sides criticism</li>
                  <li>• Political disillusionment</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                <strong className="text-gray-900">Authenticity, not caricature:</strong> We strive to 
                represent each perspective authentically—as someone within that worldview would actually 
                express themselves—rather than creating strawman versions or caricatures.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">Education, not advocacy:</strong> This tool doesn&apos;t 
                advocate for any particular political position. It&apos;s designed to help users understand 
                different perspectives, not to convince them of any particular view.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">Ethical guardrails:</strong> All AI responses are 
                bounded by ethical guidelines that prevent the generation of content that calls for 
                violence, uses slurs, or promotes harm. We aim to represent perspectives accurately 
                while maintaining responsible AI practices.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Educational Goals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-purple-50 border border-purple-200">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-semibold text-purple-900 mb-2">Build Empathy</h3>
                <p className="text-sm text-purple-800">
                  Understanding doesn&apos;t mean agreement. Learn to see the world through different lenses 
                  to better understand your fellow citizens.
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-green-50 border border-green-200">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-semibold text-green-900 mb-2">Improve Dialogue</h3>
                <p className="text-sm text-green-800">
                  When you understand how others frame issues, you can communicate more effectively 
                  across political divides.
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-amber-50 border border-amber-200">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-semibold text-amber-900 mb-2">Critical Thinking</h3>
                <p className="text-sm text-amber-800">
                  Exposure to different perspectives helps develop stronger critical thinking skills 
                  and a more nuanced understanding of complex issues.
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-cyan-50 border border-cyan-200">
                <div className="text-3xl mb-3">🏛️</div>
                <h3 className="font-semibold text-cyan-900 mb-2">Civic Engagement</h3>
                <p className="text-sm text-cyan-800">
                  A healthy democracy requires informed citizens who can engage constructively with 
                  diverse viewpoints.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology</h2>
            <p className="text-gray-600 leading-relaxed">
              civic-duty.ai is powered by Claude, an AI assistant created by Anthropic. We use 
              carefully crafted prompts to help Claude authentically represent different political 
              perspectives while maintaining ethical boundaries. The responses are generated in 
              real-time based on your questions and the selected perspective.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center py-8 px-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Explore?</h2>
            <p className="text-blue-100 mb-6">
              Start exploring different political perspectives today.
            </p>
            <Link 
              href="/explore"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-blue-600 bg-white rounded-xl hover:bg-gray-100 transition-all"
            >
              Try It Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
