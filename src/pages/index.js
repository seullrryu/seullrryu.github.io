import React from "react"
import Header from "../components/Header"
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
