import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1993&q=80"
        alt="Young football players training"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/60" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white section-padding max-w-4xl">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Rethinking Youth Football in Kenya
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-medium">
              Become part of the force driving change in Kenyan football
            </p>
            <Link href="/partners#partner-us" className="btn-outline text-lg px-8 py-4">
              Become a Partner
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}