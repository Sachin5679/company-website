import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About';
import Services from '@/components/Services';
import Profile from '@/components/Profile';
import Team from '@/components/Team';
import ContactUs from '@/components/ContactUs';
import '@fontsource/jost';

export default function Home() {
  return (
    <main className="font-jost w-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Profile />
      {/* <Team /> */}
      <ContactUs />
    </main>
  )
}
