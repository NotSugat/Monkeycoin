import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import StatsSection from "../components/StatsSection"
import AboutUs from "../components/AboutUs"
import Feature from "../components/Feature"
import Collection from "../components/Collection"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Monkey Coin</title>
      </Head>
      <main className='w-[80%] mx-auto'>
        <Navbar />
        <HeroSection />
        <StatsSection />
        <AboutUs />
        <Feature />
        <Collection />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
