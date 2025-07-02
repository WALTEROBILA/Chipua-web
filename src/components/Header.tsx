'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/services', label: 'SERVICES' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/partners', label: 'PARTNERS' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-primary-600/90 backdrop-blur-sm'
    }`}>
      
      {/* Top Header Section */}
      <div className={`border-b transition-colors duration-300 ${
        isScrolled 
          ? 'border-secondary-200 dark:border-secondary-700' 
          : 'border-white/20'
      }`}>
        <div className="container-max section-padding">
          <div className="flex items-center justify-between py-3">
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white p-1">
                <Image
                  src="https://images.unsplash.com/photo-1614632537190-23e4b2e69c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Chipua Logo"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </Link>

            {/* Right Side - Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/partners#partner-us" 
                className={`font-medium transition-colors duration-300 hover:opacity-80 ${
                  isScrolled 
                    ? 'text-secondary-700 dark:text-secondary-300' 
                    : 'text-white'
                }`}
              >
                BECOME A PARTNER
              </Link>
              
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              
              <Link href="/contact" className={
                isScrolled 
                  ? 'btn-primary' 
                  : 'btn-outline'
              }>
                CONTACT US
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-secondary-700 dark:text-secondary-300' 
                  : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Desktop */}
      <div className="hidden md:block">
        <div className="container-max section-padding">
          <nav className="flex items-center justify-center space-x-8 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-300 border-b-2 border-transparent hover:border-current pb-1 ${
                  isScrolled 
                    ? 'text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400' 
                    : 'text-white hover:border-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700">
          <div className="section-padding py-4">
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-secondary-700 dark:text-secondary-300 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-secondary-200 dark:border-secondary-700 space-y-4">
                <Link
                  href="/partners#partner-us"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-secondary-700 dark:text-secondary-300 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  BECOME A PARTNER
                </Link>
                <div className="flex items-center justify-between">
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary"
                  >
                    CONTACT US
                  </Link>
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                  >
                    {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}