import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M3</span>
            </div>
            <span className="text-xl font-bold">Labs</span>
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="/contact" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Support
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 M3 Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
