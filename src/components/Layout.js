import React from "react"

export default function Layout({ children }) {
  return (
    <section className="w-5/6 pt-20 mx-auto tracking-wide md:w-2/5">
      {children}
    </section>
  )
}
