import React from "react"
import Layout from "./Layout"

export default function HomeHero() {
  return (
    <Layout>
      <section className="flex items-center">
        <div>
          <div className="text-4xl mb-8">
            <strong>Hi! 👋</strong>
          </div>
          <p className="mb-2">I'm Seul.</p>
          <p className="mb-6">
            I am a Software Engineer who is passionate about creating meaningful
            UI components and interactions to solve complex problems.{" "}
          </p>
          <p>Currently @ Capital One</p>
        </div>
      </section>
    </Layout>
  )
}
