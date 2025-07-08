"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PublicHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation Header */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/Lolek-logo.png"
                  alt="Lolek Productions Logo"
                  width={40}
                  height={50}
                  className="w-auto h-12 object-contain"
                  priority
                />
                <span className="text-xl font-bold">Lolek Productions</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              {/* <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button> */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 px-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/login"
                className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
