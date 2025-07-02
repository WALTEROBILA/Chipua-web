import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { Brain, Clipboard as ClipboardPenLine, ScatterChart as ChartScatter } from 'lucide-react'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      id: 'capacity-building',
      icon: Brain,
      title: 'Capacity Building',
      description: 'At Chipua, we understand that high school coaches play a vital role in shaping the future of football, both on and off the pitch. That\'s why our capacity building programs are designed specifically to empower secondary school football coaches with the tools, techniques, and support they need to develop talent and build winning teams.',
      features: [
        'Practical Coaching Workshops - We run on-the-ground workshops that focus on tactical training, player development, session planning, and effective game management, all tailored to the high school level.',
        'Modern Coaching Techniques - Stay up-to-date with the latest trends in football coaching, including small-sided games, performance analysis, injury prevention, and youth psychology.',
        'Resource Support & Curriculum Development - Chipua helps coaches structure their training throughout the school term with ready-to-use drills, seasonal planning guides, and access to expert advice.',
        'Coach Mentorship & Peer Learning - We connect high school coaches to experienced mentors and a network of fellow coaches to share ideas, challenges, and solutions, building a community of growth and support.',
        'Certification Opportunities - We offer pathways to recognized coaching certifications through our training partners, giving coaches professional credibility and advancement opportunities.'
      ],
      conclusion: 'At Chipua, we believe that when coaches grow, players thrive. Let\'s build better football together; starting in our schools.'
    },
    {
      id: 'representation',
      icon: ClipboardPenLine,
      title: 'Representation',
      description: 'At Chipua, we are dedicated to opening doors and creating opportunities for talented players and coaches to reach their full potential both on and off the pitch. Our representation services are built on trust, transparency, and long-term career growth.',
      features: [
        'Player Representation - We work closely with young and emerging players, helping them navigate the path to professional football. From career planning and contract negotiation to club placement and personal development, Chipua stands with our athletes every step of the way.',
        'Coach Representation - We represent qualified coaches seeking roles in schools, academies, clubs, and beyond. Our support includes profile building, job matching, interview preparation, and ongoing mentorship to ensure success in every assignment.',
        'Talent Scouting and Placement - Our network allows us to identify and connect promising talent with fitting opportunities; whether for trials, scholarships, tournaments, or permanent contracts.',
        'Career Development Support - Representation is more than just contracts. We guide our clients on branding, communication, performance tracking, and decision-making thus helping them build not just a career, but a legacy.'
      ],
      conclusion: 'With Chipua, players and coaches are not just represented; they are supported, empowered, and championed.'
    },
    {
      id: 'data-analytics',
      icon: ChartScatter,
      title: 'Data Analytics',
      description: 'In today\'s game, data makes the difference, and at Chipua, we\'re helping schools, teams, and coaches harness the power of football analytics to improve performance, make smarter decisions, and gain a competitive edge. Our data analytics services turn raw match and training data into meaningful insights that drive results.',
      features: [
        'Match & Player Performance Analysis - Using structured data collection tools, we analyze individual and team performances. These include passing patterns, shot locations, defensive actions, and more in a bid to highlight strengths, identify weaknesses, and support tactical decisions.',
        'Video Tagging & Breakdown - We break down match footage into key moments, helping coaches and players review tactical setups, movement, and decision-making. Every second becomes a learning opportunity.',
        'Team Reports & Dashboards - Our visual reports and interactive dashboards make it easy to track progress over time. Understand what\'s working, what\'s not, and where to focus.',
        'Talent Identification Metrics - For scouts and school competitions, we provide data-backed profiles to help recognize potential beyond what meets the eye; helping promising players get noticed for the right reasons.',
        'Custom Solutions for Clubs, Schools and Academies - Whether you need help setting up data tracking from scratch or want ongoing analytical support for your program, Chipua provides tools and guidance tailored to your level and goals.'
      ],
      conclusion: 'At Chipua, we don\'t just collect data. We translate it into actionable insight that helps coaches coach better and players play smarter.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1993&q=80"
          alt="Football training session"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white section-padding">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Want to seek out our services?
              </p>
              <a href="/contact" className="btn-outline">
                Contact Us
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-800">
        <div className="container-max section-padding">
          <div className="space-y-20">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.2}>
                <div id={service.id} className="bg-white dark:bg-secondary-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="p-8 md:p-12">
                    <div className="flex items-center mb-6">
                      <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-2xl mr-4">
                        <service.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-6 mb-8">
                      <h3 className="text-xl font-semibold text-secondary-800 dark:text-secondary-200">
                        Our services include:
                      </h3>
                      <div className="grid gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                            <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                              <span className="font-semibold text-secondary-800 dark:text-secondary-200">
                                {feature.split(' - ')[0]}
                              </span>
                              {feature.includes(' - ') && (
                                <span> - {feature.split(' - ').slice(1).join(' - ')}</span>
                              )}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-primary-50 dark:bg-primary-900/30 p-6 rounded-2xl">
                      <p className="text-secondary-700 dark:text-secondary-300 font-medium italic">
                        {service.conclusion}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}