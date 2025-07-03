import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export default function InuaProject() {
  const sections = [
    {
      title: "Identifying Skill Gaps",
      content: "At Chipua, we believe that meaningful transformation begins with understanding. As part of the Inua Mkufunzi, Inua Mchezaji initiative, we will actively listen to the target group, the high school coaches. Through structured assessments, field observations, and one-on-one engagements, we will identify the areas in which they come up short in terms of skill and capacity. We will map out technical gaps, tactical limitations, and areas where support is needed. Through this, Chipua will ensure that every intervention is not just informed, but also impactful and relevant."
    },
    {
      title: "Curriculum Development & Delivery",
      content: "Building on the insights gathered during our needs assessment, Chipua will design a comprehensive training curriculum tailored specifically for the Kenyan football context. Our goal is to equip coaches with both foundational and advanced tools to nurture the next generation of footballers.",
      list: [
        "Modern coaching methodologies",
        "Age-appropriate training practices", 
        "Game model development and match preparation",
        "Physical conditioning and injury prevention",
        "Player psychology and character development"
      ],
      additionalContent: "To ensure this curriculum is both practical and impactful, we will work in close collaboration with local club coaches, youth football development specialists, and football education experts. This co-creation process will help us build a program that truly addresses the shortcomings identified on the ground. Training will be delivered through a hybrid approach, combining engaging theoretical workshops, on-pitch practicals, and tactical group sessions. To support continued learning, Chipua will launch a dedicated Information Management and Learning Portal where coaches can access digital course materials, videos, planning templates, and progress-tracking tools from anywhere. Physical training workshops will also be held periodically across various counties, creating localized spaces for peer learning, mentorship, and direct interaction with CAF/FKF-licensed facilitators and industry professionals. This will go a long way in ensuring the country has a pool of high school coaches that is well informed and well equipped, ready to raise the bar in the development of youth football across the country."
    },
    {
      title: "Mentorship & Continuous Support",
      content: "Training will not be a one-time event. Chipua will ensure that each participating coach is paired with a dedicated mentor for the duration of an entire season. These mentors will be experienced football educators or professional coaches who understand the local context and developmental goals of youth football.",
      list: [
        "Reviewing and analyzing match performance",
        "Planning and improving training sessions",
        "Conducting mid-season reflections and evaluations", 
        "Navigating the emotional and leadership challenges of coaching"
      ],
      additionalContent: "Chipua believes in sustainable growth, not one-time motivation."
    },
    {
      title: "Tools & Resources",
      content: "Chipua will go beyond the classroom. We will provide coaches with practical, ready-to-use tools that they can take directly into their schools and clubs. These include:",
      list: [
        "Printable session plans and drills",
        "Tactical notebooks for use on match days",
        "Access to a digital resource hub with updated learning materials",
        "Templates for monitoring player growth and tracking individual performance"
      ],
      additionalContent: "These tools are designed to make implementation simple, effective, and consistent. By placing the right resources in the hands of grassroots coaches, Chipua will empower them to translate learning into action."
    },
    {
      title: "Player Impact Model",
      content: "At the heart of Inua Mkufunzi, Inua Mchezaji is a simple but powerful truth: one empowered coach can transform the sporting journey of 20 to 30 young players every season. Chipua will strengthen the coaching ecosystem to directly enhance the quality of training, the safety and discipline of team environments, and the character development of each player. With better coaching comes better teamwork, stronger school performances, and more inspired players who see a future in football. As we invest in the coach, we shape the next generation of confident, skilled, and motivated young athletes. By elevating coaching quality, we directly raise the quality of training environments, team culture, and individual player growth. This, in turn, boosts talent pipelines, school team performance, and player motivation."
    },
    {
      title: "Pathways for Growth",
      content: "At Chipua, we believe in creating opportunities beyond the pitch. For outstanding grassroots coaches, training is just the beginning. We are committed to walking with them further by:",
      list: [
        "Showcasing their profiles through our platforms and trusted partner networks",
        "Facilitating access to scholarships and support for formal coaching certifications like CAF D and C",
        "Creating linkages with professional clubs, academies, and talent development agencies",
        "Offering performance-based endorsements that build their credibility and visibility in the football ecosystem"
      ],
      additionalContent: "Chipua will continue to open doors and build bridges, ensuring that talent, passion, and dedication never go unnoticed."
    },
    {
      title: "Why This Matters",
      content: "Great footballers begin with great mentors. At the heart of every confident pass, smart decision, and disciplined player is a coach who made it possible. Inua Mkufunzi, Inua Mchezaji is Chipua's commitment to uplifting those mentors—because when we invest in coaches, we invest in the future of the game. Stronger coaches lead to better players, more cohesive teams, and healthier communities. This is more than a project. It is the beginning of a long-term shift in how grassroots football is supported, valued, and grown in Kenya and across the region. Chipua will continue to champion this movement—one coach, one player, one pitch at a time."
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-48 pb-16 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-800">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            
            <AnimatedSection>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                  Inua Mkufunzi, Inua Mchezaji
                </h1>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-3xl mx-auto">
                  At Chipua, we understand that the growth of football talent is directly linked to the quality and confidence of those guiding it 
                  ,the coaches. <strong>"Inua Mkufunzi, Inua Mchezaji"</strong> is our flagship initiative focused on empowering grassroots and high school-level 
                  football coaches, knowing that when coaches rise, players follow.
                </p>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed mt-4">
                  This initiative is a strategic, structured, and sustainable approach to improving football outcomes at the base of the pyramid.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-white dark:bg-secondary-800 p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-6">
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                        {section.content}
                      </p>
                      
                      {section.list && (
                        <ol className="list-decimal list-inside space-y-2 ml-4">
                          {section.list.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-secondary-600 dark:text-secondary-300">
                              {item}
                            </li>
                          ))}
                        </ol>
                      )}
                      
                      {section.additionalContent && (
                        <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                          {section.additionalContent}
                        </p>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}