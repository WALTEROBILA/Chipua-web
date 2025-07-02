import Link from 'next/link'
import { Brain, ClipboardPenLine, ChartScatter } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'Capacity Building',
      href: '/services#capacity-building'
    },
    {
      icon: ClipboardPenLine,
      title: 'Representation',
      href: '/services#representation'
    },
    {
      icon: ChartScatter,
      title: 'Data Analytics',
      href: '/services#data-analytics'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-secondary-900 dark:to-primary-900">
      <div className="container-max section-padding">
        
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-16">
            What We Do
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.2}>
              <Link href={service.href} className="group">
                <div className="bg-white dark:bg-secondary-800 p-8 rounded-2xl shadow-lg card-hover text-center h-full">
                  <div className="bg-primary-100 dark:bg-primary-900 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 dark:text-secondary-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}