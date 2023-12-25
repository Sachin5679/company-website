import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About';
import '@fontsource/jost';

export default function Home() {
  return (
    <main className="font-jost">
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}
