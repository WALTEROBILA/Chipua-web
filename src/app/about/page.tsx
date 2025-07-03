import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-60 pb-16 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-800">
        <div className="container-max section-padding">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                  About Chipua
                </h1>
                <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed ">
                  Chipua is a Kenya-based social enterprise committed to transforming the local football landscape through capacity 
                  building, data analytics, and inclusive representation. We believe that sustainable football development begins 
                  with strong systems, empowered people, and clear, actionable insight. From the grassroots to the national stage, 
                  we work to strengthen the structures and people behind the game, equipping them with the tools, knowledge, and visibility they need to thrive.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <AnimatedSection delay={0.2}>
                  <div className="bg-white dark:bg-secondary-800 p-8 rounded-2xl shadow-lg card-hover">
                    <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">Our Mission</h2>
                    <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                      To drive systems-level change in football by investing in people, data, and long-term development infrastructure.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <div className="bg-white dark:bg-secondary-800 p-8 rounded-2xl shadow-lg card-hover">
                    <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">Our Vision</h2>
                    <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                      A thriving football ecosystem in Kenya where every stakeholder has the tools and support to grow, lead, and win on and off the pitch.
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection delay={0.6}>
                <div className="bg-white dark:bg-secondary-800 p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-6">What We Do</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-secondary-800 dark:text-secondary-200 mb-2">Coach Development and Mentorship</h3>
                        <p className="text-secondary-600 dark:text-secondary-300 ">
                          We train, mentor, and elevate grassroots coaches, with a focus on youth-centered, context-aware coaching practices.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-800 dark:text-secondary-200 mb-2">Football Data & Insights</h3>
                        <p className="text-secondary-600 dark:text-secondary-300 ">
                          We collect, analyze, and translate football data to support better decision-making, performance tracking, and policy development at the grassroots level.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-secondary-800 dark:text-secondary-200 mb-2">Representation & Visibility</h3>
                        <p className="text-secondary-600 dark:text-secondary-300 ">
                          We create platforms for coaches, players, and clubs who are often overlooked, helping them access opportunities, build credibility, and tell their stories.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-800 dark:text-secondary-200 mb-2">Program Design & Advisory</h3>
                        <p className="text-secondary-600 dark:text-secondary-300 ">
                          We co-create football development programs with federations, counties, and organizations, focusing on impact, scalability, and sustainability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.8}>
                <div className="bg-white dark:bg-secondary-800 p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-6">Our Values</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="text-xl">
                        <span className="font-semibold text-secondary-800 dark:text-secondary-200">Equity:</span>
                        <span className="text-secondary-600 dark:text-secondary-300 ml-2">Everyone deserves access, not just the few who make it to the top.</span>
                      </div>
                      <div className="text-xl">
                        <span className="font-semibold text-secondary-800 dark:text-secondary-200">Credibility:</span>
                        <span className="text-secondary-600 dark:text-secondary-300 ml-2">We build trust by delivering consistently and transparently.</span>
                      </div>
                      <div className="text-xl">
                        <span className="font-semibold text-secondary-800 dark:text-secondary-200">Local Leadership:</span>
                        <span className="text-secondary-600 dark:text-secondary-300 ml-2">We believe in growing talent from within communities.</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-xl">
                        <span className="font-semibold text-secondary-800 dark:text-secondary-200">Innovation:</span>
                        <span className="text-secondary-600 dark:text-secondary-300 ml-2">We use data and creativity to challenge outdated systems.</span>
                      </div>
                      <div className="text-xl">
                        <span className="font-semibold text-secondary-800 dark:text-secondary-200">Sustainability:</span>
                        <span className="text-secondary-600 dark:text-secondary-300 ml-2">We think long-term, always building for tomorrow.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={1.0}>
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 rounded-2xl text-white text-center">
                  <p className="text-lg leading-relaxed">
                    Chipua is not just part of the game. We are here to change how it's played, coached, and supported. 
                    If you're passionate about building a better future for football in Kenya, you belong in this journey.
                  </p>
                </div>
              </AnimatedSection>

            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </main>
  )
}