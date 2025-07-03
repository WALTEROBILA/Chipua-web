import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-primary-900 dark:to-secondary-900">
      <div className="container-max section-padding">
        
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-16">
            Our Projects
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white dark:bg-secondary-800 rounded-3xl shadow-xl overflow-hidden max-w-6xl mx-auto">
            
            <div className="text-center p-8 border-b border-secondary-200 dark:border-secondary-700">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-800 dark:text-secondary-200">
                1. Inua Mkufunzi, Inua Mchezaji
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full min-h-[300px]">
                <Image
                  src="https://res.cloudinary.com/dgs7wqzhg/image/upload/v1751530890/pexels-kenechukwu-emmanuel-1635620388-30449542_czn6bu.jpg"
                  alt="Football coach training young players"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed mb-6">
                  <strong>"Inua Mkufunzi, Inua Mchezaji"</strong> is our flagship project, aimed at building the capacities of youth football coaches in a bid to
                  equip them with the skills necessary to foster the development of young footballers.
                </p>
                <Link 
                  href="/projects/inua" 
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
                >
                  Read More
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}