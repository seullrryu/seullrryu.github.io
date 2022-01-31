import React from "react"
import Header from "../components/Header"
import Works from "../components/Works"
import Footer from "../components/Footer"
import Experience from "../components/Experience"
import HomeHero from "../components/HomeHero"
import Info from "../components/info"

export default function Home() {
  return (
    <main className="text-base">
      <Info />
      <Header />
      <HomeHero />
    </main>
  )
}
