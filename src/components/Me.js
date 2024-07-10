import React from "react"
import Layout from "./Layout"
import Contact from "./Contact"

export default function Me() {
  return (
    <Layout>
      <img
        class="w-1/3 mx-auto mb-16"
        src={"assets/seul.svg"}
        alt="Seulmin Ryu"
      ></img>
      <div className="text-4xl mb-8">
        <strong>Hi again! 👋</strong>
      </div>{" "}
      <div className="mt-10 mb-10">
        <p className="">I'm Seul. </p>
        <br></br>
        <div className="">
          <p className="">
            I am a graduate of New York University with a B.A in Computer
            Science, along with a minor in Web Programming and Applications. I
            am currently an Senior Associate Software Engineer at Capital One.
          </p>
          <p className="mt-4">
            Even though I am passionate about all sides of software development,
            I am especially passionate about front end development and UI
            design. I love how users can visually and physically interact with
            my code and development. As a Software Engineer, I value simple code
            structure and meaningful interactions.
          </p>
          <p className="mt-4">
            When I am not developing, you can see me playing soccer in the fields of NYC or engaging in various debates about NBA, NFL and Soccer. Shoot me a message if you want to talk about Manchester
            United or Brooklyn Nets!
          </p>
        </div>
      </div>
      <Contact></Contact>
    </Layout>
  )
}
