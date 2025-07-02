import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const footerSections = [
    {
      title: 'SERVICES',
      links: [
        { href: '/services#capacity-building', label: 'Capacity Building' },
        { href: '/services#representation', label: 'Representation' },
        { href: '/services#data-analytics', label: 'Data Analytics' },
      ]
    },
    {
      title: 'PROJECTS',
      links: [
        { href: '/projects/inua', label: 'Inua Mkufunzi, Inua Mchezaji' },
      ]
    },
    {
      title: 'ORGANISATION',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/projects', label: 'Our Projects' },
        { href: '/partners', label: 'Partnerships' },
      ]
    }
  ]

  return (
    <footer className="bg-secondary-800 dark:bg-secondary-950 text-white">
      <div className="container-max section-padding py-16">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo */}
          <div className="lg:col-span-1">
            <div className="relative w-20 h-20 rounded-full overflow-hidden bg-white p-1 mb-6">
              <Image
                src="https://images.unsplash.com/photo-1614632537190-23e4b2e69c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Chipua Logo"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold text-secondary-300 mb-4 tracking-wider">
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-secondary-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Button */}
          <div>
            <h3 className="text-sm font-bold text-secondary-300 mb-4 tracking-wider">
              CONTACT
            </h3>
            <Link
              href="/contact"
              className="inline-block border border-white text-white hover:bg-white hover:text-secondary-800 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-700 mt-12 pt-8 text-center">
          <p className="text-secondary-400">
            © 2025 Chipua. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}