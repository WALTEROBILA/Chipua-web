import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'

export default function PartnersNews() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-16 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-800">
        <div className="container-max section-padding">
          
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-secondary-800 p-8 md:p-12 rounded-3xl shadow-xl">
                
                <h1 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-8">
                  Chipua Invites Partners to Kickstart "Inua Mkufunzi, Inua Mchezaji" Initiative
                </h1>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed mb-6">
                    With a shared passion for transforming grassroots football in Kenya, Chipua is officially inviting partners, supporters, and collaborators 
                    to join us as we prepare to launch the "Inua Mkufunzi, Inua Mchezaji" program. This initiative is more than just a training program; it 
                    is a movement to uplift high school football coaches, strengthen youth development systems, and build sustainable pathways for talent across 
                    the country. By equipping coaches with the tools, knowledge, and networks they need, we believe we can transform not just individual 
                    careers, but entire communities.
                  </p>
                  
                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed mb-6">
                    We're currently laying the groundwork for implementation and are seeking partnerships to support areas such as:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 mb-6 text-secondary-600 dark:text-secondary-300">
                    <li>Curriculum development and technical support</li>
                    <li>Resource and material production</li>
                    <li>Training logistics and coordination</li>
                    <li>Digital infrastructure for learning and mentorship</li>
                    <li>Monitoring and evaluation frameworks</li>
                  </ul>
                  
                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed mb-6">
                    Whether you're an NGO, football organization, county government, corporate sponsor, or simply someone who believes in the power of 
                    sport, there's a seat at the table for you.
                  </p>
                  
                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed mb-8">
                    Let's build this together.
                  </p>
                  
                  <div className="bg-primary-50 dark:bg-primary-900/30 p-6 rounded-2xl text-center">
                    <p className="text-secondary-700 dark:text-secondary-300 mb-4">
                      If you'd like to partner, collaborate, or simply learn more, feel free to reach out to us.
                    </p>
                    <Link href="/contact" className="btn-primary">
                      Contact Us
                    </Link>
                  </div>
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