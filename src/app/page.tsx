import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              AI-Powered Educational Tool
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Explore Political Perspectives
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent">
                Through AI
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Select a position on the political spectrum, ask any question, and receive 
              an AI-generated response that authentically represents that perspective.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/explore"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Try It Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Educational Disclaimer */}
            <p className="mt-8 text-sm text-gray-500 max-w-lg mx-auto">
              This tool generates simulated political perspectives for educational purposes. 
              Responses do not represent the views of the creators.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </section>

      {/* Spectrum Preview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              The Political Spectrum
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore responses from across the political landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Conservative Spectrum */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Conservative</h3>
              <p className="mt-2 text-blue-700">
                From moderate conservative to far-right MAGA perspectives. Explore traditional values, 
                limited government, and America First viewpoints.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-blue-800">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mr-2" />
                  Moderate Conservative
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                  Center-Right
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-700 mr-2" />
                  Far-Right MAGA
                </li>
              </ul>
            </div>

            {/* Liberal Spectrum */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-900">Liberal</h3>
              <p className="mt-2 text-red-700">
                From center-left to far-left perspectives. Explore progressive policies, 
                social justice, and systemic change viewpoints.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-red-800">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-red-400 mr-2" />
                  Center-Left Liberal
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                  Progressive
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-red-700 mr-2" />
                  Far-Left
                </li>
              </ul>
            </div>

            {/* Black American Skeptic Spectrum */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Black American Skeptic</h3>
              <p className="mt-2 text-gray-700">
                A critically analytical perspective rooted in historical experience. Examines policies 
                through the lens of documented exploitation and earned institutional distrust.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-800">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-500 mr-2" />
                  Historical awareness
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-500 mr-2" />
                  Earned institutional distrust
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-500 mr-2" />
                  Community protection focus
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to explore different political worldviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Select a Perspective</h3>
              <p className="mt-3 text-gray-600">
                Use the interactive spectrum dial to choose a political perspective, 
                from far-left to far-right or the cynical middle ground.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Ask Your Question</h3>
              <p className="mt-3 text-gray-600">
                Type any question about politics, social issues, or current events 
                that you&apos;d like to understand from different angles.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-600 to-red-600 flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Explore the Response</h3>
              <p className="mt-3 text-gray-600">
                Receive an AI-generated response that authentically represents 
                how someone with that perspective might answer your question.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/explore"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Start Exploring
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Understanding Perspectives Matters
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            In an increasingly polarized world, understanding how others think is more 
            important than ever. civic-duty.ai helps you step into different political 
            worldviews, not to change your mind, but to build empathy and understanding 
            for those who see the world differently.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-semibold text-gray-900">Build Empathy</h4>
              <p className="mt-2 text-sm text-gray-600">Understand the values and concerns behind different viewpoints</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-3">💡</div>
              <h4 className="font-semibold text-gray-900">Learn Framing</h4>
              <p className="mt-2 text-sm text-gray-600">See how the same issues are framed differently across the spectrum</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-semibold text-gray-900">Engage Better</h4>
              <p className="mt-2 text-sm text-gray-600">Improve your ability to have productive conversations across divides</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
