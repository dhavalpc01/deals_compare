"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">TravelEase</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-blue-600">
            About
          </Link>
          <Link to="/services" className="text-sm font-medium hover:text-blue-600">
            Services
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-blue-600">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm font-medium hover:bg-gray-100 rounded-md">Sign In</button>
          <button className="px-3 py-1.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-md">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="flex flex-col gap-4 p-4">
            <Link to="/" className="text-lg font-semibold hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="text-lg font-semibold hover:text-blue-600">
              About
            </Link>
            <Link to="/services" className="text-lg font-semibold hover:text-blue-600">
              Services
            </Link>
            <Link to="/contact" className="text-lg font-semibold hover:text-blue-600">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
