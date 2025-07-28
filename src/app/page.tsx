import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import LatestUpdates from '@/components/LatestUpdates'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <LatestUpdates />
      <Footer />
    </main>
  )
}