import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

export default function LatestUpdates() {
  const updates = [
    {
      image: "https://res.cloudinary.com/dgs7wqzhg/image/upload/v1751530895/pexels-workman-19416414_qgnqbt.jpg",
      tag: "Official",
      title: "Chipua inviting partners to kickstart \"Inua Mkufunzi, Inua Mchezaji\"",
      excerpt: "With a shared passion for transforming grassroots football in Kenya, Chipua is officially ...",
      date: "27 May 2025",
      href: "/news/partners-news"
    },
    {
      image: "https://res.cloudinary.com/dgs7wqzhg/image/upload/v1751530895/pexels-workman-19416414_qgnqbt.jpg",
      tag: "Official",
      title: "Chipua inviting partners to kickstart \"Inua Mkufunzi, Inua Mchezaji\"",
      excerpt: "With a shared passion for transforming grassroots football in Kenya, Chipua is officially ...",
      date: "27 May 2025",
      href: "/news/partners-news"
    },
    {
      image: "https://res.cloudinary.com/dgs7wqzhg/image/upload/v1751530895/pexels-workman-19416414_qgnqbt.jpg",
      tag: "Official",
      title: "Chipua inviting partners to kickstart \"Inua Mkufunzi, Inua Mchezaji\"",
      excerpt: "With a shared passion for transforming grassroots football in Kenya, Chipua is officially ...",
      date: "27 May 2025",
      href: "/news/partners-news"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-secondary-900 dark:to-primary-900">
      <div className="container-max section-padding">
        
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-16">
            Latest Updates
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {updates.map((update, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-lg overflow-hidden card-hover h-full">
                
                <div className="relative h-48">
                  <Image
                    src={update.image}
                    alt={update.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {update.tag}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200 mb-3 line-clamp-2">
                    {update.title}
                  </h3>
                  
                  <p className="text-secondary-600 dark:text-secondary-300 text-lg mb-4 line-clamp-3">
                    {update.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-400 text-sm">{update.date}</span>
                    <Link 
                      href={update.href}
                      className="text-primary-600 dark:text-primary-400 font-medium text-lg hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      Read more
                    </Link>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <button className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              All News
            </button>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}