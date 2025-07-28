import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import Link from 'next/link'

export default function Partners() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[90vh] min-h-[500px] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dgs7wqzhg/image/upload/v1751530882/partner_mc96tj.jpg"
          alt="Partnership and collaboration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 text-white section-padding">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Become a partner
              </h1>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </AnimatedSection>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/60" />
      </div>

      {/* Content Section */}
      <div className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-800">
        <div className="container-max section-padding">
          
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-12">
                Partnering Prospects
              </h1>
              
              <div className="bg-white dark:bg-secondary-800 p-8 md:p-12 rounded-3xl shadow-xl">
                <div className="prose prose-lg max-w-none">
                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed mb-6">
                    At Chipua, we understand that transforming the future of football in Kenya requires more than talent on the pitch. It takes a united 
                    effort to develop the people, platforms, and systems that support long-term success. We are actively 
                    seeking forward-thinking partners who share our commitment to unlocking youth potential, strengthening grassroots football, and building 
                    communities through sport, education, and data-driven innovation.
                  </p>
                  
                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed mb-6">
                    Whether you're a donor agency, corporate sponsor, foundation, government 
                    institution, academic body, or local initiative, there is a role for you in this journey.
                  </p>

                  <div className="bg-primary-50 dark:bg-primary-900/30 p-6 rounded-2xl text-lg mb-8">
                    <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                      Partnering with Chipua means:
                    </h2>
                    
                    <div className="space-y-4 ">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-secondary-800 dark:text-secondary-200">Driving impact at the grassroots:</span>
                          <span className="text-secondary-600 dark:text-secondary-300 ml-2">
                            Collaborate on sustainable, scalable programs that uplift local coaches, players, and community clubs across counties.
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-secondary-800 dark:text-secondary-200">Strengthening football ecosystems:</span>
                          <span className="text-secondary-600 dark:text-secondary-300 ml-2">
                            Work with us to improve coaching standards, talent pathways, and the support structures around youth football.
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-secondary-800 dark:text-secondary-200">Co-creating context-aware solutions:</span>
                          <span className="text-secondary-600 dark:text-secondary-300 ml-2">
                            Design training, mentorship, and development initiatives that are responsive to the realities on the ground.
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-secondary-800 dark:text-secondary-200">Amplifying shared missions:</span>
                          <span className="text-secondary-600 dark:text-secondary-300 ml-2">
                            Leverage Chipua's reach in schools, communities, and digital platforms to engage youth audiences in meaningful ways.
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-secondary-800 dark:text-secondary-200">Investing in the long game:</span>
                          <span className="text-secondary-600 dark:text-secondary-300 ml-2">
                            Support systemic change, not just tournaments and kits, through capacity building, research, digital tools, and inclusive leadership development.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed mb-8">
                    We are open to multi-year partnerships, pilot collaborations, and idea-stage conversations. If you're looking for a trusted local 
                    partner with the passion, credibility, and capabilities to deliver, Chipua is ready. 
                    Let's build the future together.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection delay={0.4}>
            <div id="partner-us" className="text-center mt-16">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-12 rounded-3xl text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Partner</h2>
                <Link href="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>

      <Footer />
    </main>
  )
}