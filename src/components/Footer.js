import React from "react"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
  return (
    <footer
      className="w-full bg-indigo-200 text-sm fixed bottom-0"
      id="contact"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 w-5/6 mx-auto tracking-wide md:w-1/2">
        <div className="text-center my-4 w-1/3">
          <h3 className="font-bold">Location</h3>
          <p>New York, NY</p>
        </div>
        <div className="text-center my-4 w-1/3">
          <h3 className="font-bold">Contact</h3>
          <div className="flex justify-center items-center mt-1">
            <div className="mx-4">
              <a href="https://www.linkedin.com/in/seulminryu/" target="blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>

            <div className="mx-4">
              <a href="https://www.github.com/seullrryu/" target="blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>

            <div className="mx-4">
              <a href="mailto:ryu.seulmin@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center my-4 w-1/3">
          <p className="">Built with GatsbyJS & TailwindCSS.</p>
          <p className="">Copyright © Seulmin Ryu 2022</p>
        </div>
      </div>
    </footer>
  )
}
