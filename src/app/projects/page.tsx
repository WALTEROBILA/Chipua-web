import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[90vh] min-h-[500px] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dgs7wqzhg/image/upload/v1751530894/pitch_yy49bd.jpg"
          alt="Football coach training young players"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white section-padding">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Rethinking Youth Football in Kenya
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Join us in our quest to raise the football standards in the country
              </p>
              <Link href="/partners#partner-us" className="btn-outline">
                Collaborate with Us
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-800">
        <div className="container-max section-padding">
          <AnimatedSection>
            <div className="bg-white dark:bg-secondary-800 rounded-3xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full min-h-[400px]">
                  <Image
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1993&q=80"
                    alt="Football pitch with young players"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                    Inua Mkufunzi, Inua Mchezaji
                  </h2>
                  <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed mb-8">
                    Football development is not just about players. The people who teach, lead and inspire them are pivotal figures in the process.
                    At Chipua, we believe that transforming youth football starts with empowering the people who shape it, the coaches. That's the heart of our "Inua Mkufunzi, Inua Mchezaji" initiative.
                  </p>
                  <Link 
                    href="/projects/inua" 
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 text = xlfont-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
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
      </div>

      <Footer />
    </main>
  )
}