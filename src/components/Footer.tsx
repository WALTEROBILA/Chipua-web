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
            <div className="  overflow-hidden ">
                <img
                  src="https://res.cloudinary.com/dgs7wqzhg/image/upload/v1751526571/logov4_vmyyfs.png"
                  alt="Chipua Logo"
                  className="w-35 h-20"
                />
              </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-bold text-secondary-300 mb-4 tracking-wider">
                {section.title}
              </h3>
              <div className="space-y-3 text-xl">
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
            <h3 className="text-xl font-bold text-secondary-300 mb-4 tracking-wider">
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