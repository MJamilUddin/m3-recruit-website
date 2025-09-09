"use client";

import { useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">M3</span>
          </div>
          <span className="text-xl font-bold">Recruit</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <Link href="/integrations" className="text-sm font-medium hover:text-primary transition-colors">
            Integrations
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/contact">
            <button className="text-sm font-medium hover:text-primary transition-colors">
              Sign In
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1 p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-foreground transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container max-w-screen-xl px-4 mx-auto py-4">
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Features
            </a>
            <Link
              href="/integrations"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Integrations
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col space-y-3 pt-4 border-t">
              <Link href="/contact" onClick={closeMobileMenu}>
                <button className="w-full text-sm font-medium hover:text-primary transition-colors py-2 text-left">
                  Sign In
                </button>
              </Link>
              <Link href="/contact" onClick={closeMobileMenu}>
                <button className="w-full text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
