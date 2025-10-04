import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50/30 py-12">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-800 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M3</span>
            </div>
            <span className="text-xl font-bold text-slate-900">Labs</span>
          </div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <Link href="/contact" className="hover:text-purple-800 transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-purple-800 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-purple-800 transition-colors">
              Support
            </Link>
            <Link href="/contact" className="hover:text-purple-800 transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © 2024 M3 Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
