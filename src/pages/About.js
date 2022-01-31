import React from "react"
import Header from "../components/Header"
import Info from "../components/info"
import Me from "../components/Me"

export default function about() {
  return (
    <main className="text-base">
      <Info />
      <Header />
      <Me />
    </main>
  )
}
