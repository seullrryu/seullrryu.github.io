import React from "react"

export default function Header() {
  return (
    <nav className="sticky flex flex-col justify-between items-center tracking-wider w-5/6 md:w-2/5 mx-auto pt-24 sm:flex-row">
      <div className="">
        <a className="text-2xl font-semibold text-indigo-500" href="/">
          SEULMIN RYU
        </a>
      </div>
      <div className="flex justify-between mt-4 sm:mt-0">
        <a className="hover:text-indigo-500" href="/about">
          About
        </a>
        <a className="hover:text-indigo-500 ml-12" href="/projects">
          Projects
        </a>
        <a
          className="hover:text-indigo-500 ml-12"
          href="resume/Ryu, Seulmin - Resume.pdf"
        >
          Resume
        </a>
      </div>
    </nav>
  )
}
