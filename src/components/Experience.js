import React from "react"
import Layout from "./Layout"

export default function Experience() {
  return (
    <Layout>
      <strong>Work Experience</strong>
      <ul className="mt-8">
        <li>
          <a className="font-semibold" href="https://www.biodigital.com">
            Publicis Sapient
          </a>{" "}
          - New York, NY
          <p>Associate Software Engineer, May 2021 - Present</p>
        </li>
        <li>
          <a className="font-semibold" href="https://www.biodigital.com">
            BioDigital
          </a>{" "}
          - New York, NY
          <p>Software Engineering Intern, Summer 2020</p>
        </li>
        <li>
          <a className="font-semibold" href="https://gallatin.nyu.edu/">
            NYU Gallatin School of Individualized Study
          </a>{" "}
          - New York, NY
          <p>Information Technology Intern, Spring 2019 - Spring 2020</p>
        </li>
        <li>
          <a className="font-semibold" href="http://worldfinancialgroup.com/">
            World Financial Group
          </a>{" "}
          - Fort Lee, NJ
          <p>Web Development Intern, Summer 2017</p>
        </li>
      </ul>
    </Layout>
  )
}
