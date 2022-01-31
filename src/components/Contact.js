import React from "react"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Contact() {
  return (
    <div className="flex items-center mt-1 mb-12">
      <div className="mr-8">
        <a
          href="https://www.linkedin.com/in/seulminryu/"
          className="hover:text-indigo-500"
          target="blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>

      <div className="mr-8">
        <a
          href="https://www.github.com/seullrryu/"
          className="hover:text-indigo-500"
          target="blank"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>

      <div className="mr-8">
        <a
          href="mailto:ryu.seulmin@gmail.com"
          className="hover:text-indigo-500"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
    </div>
  )
}
