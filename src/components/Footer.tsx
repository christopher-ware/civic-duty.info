import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-purple-500 to-red-500 rounded-full" />
              <span className="text-xl font-bold text-gray-900">civic-duty.ai</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              An educational tool for exploring different political perspectives through AI. 
              Building empathy and understanding across political divides.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Navigate</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/explore" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Explore Perspectives
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/disclaimer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} civic-duty.ai. For educational purposes only. 
            AI-generated responses do not represent the views of the creators.
          </p>
        </div>
      </div>
    </footer>
  );
}
