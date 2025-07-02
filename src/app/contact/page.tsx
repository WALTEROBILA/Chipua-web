import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import AnimatedSection from '@/components/AnimatedSection'

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-16 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-800">
        <div className="container-max section-padding">
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-white dark:bg-secondary-800 p-8 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Contact Us</h2>
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-secondary-800 p-8 rounded-3xl shadow-xl h-fit">
                <h2 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
                  Get in touch with us and we will get back to you as soon as we can.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-800 dark:text-secondary-200 mb-1">Email</h3>
                      <p className="text-secondary-600 dark:text-secondary-300">aderobila@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-800 dark:text-secondary-200 mb-1">Phone</h3>
                      <p className="text-secondary-600 dark:text-secondary-300">+254707981332</p>
                      <p className="text-secondary-600 dark:text-secondary-300">+254754617845</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}