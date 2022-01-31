import React from "react"
import Layout from "./Layout"

export default function Works() {
  return (
    <Layout>
      <div class="text-center mb-24">
        <img
          class="w-32 sm:w-24 mx-auto my-8"
          src={"assets/code.svg"}
          alt="Coding"
        ></img>
        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2">
          <a href="https://github.com/seullrryu/Alcohometrics" target="_blank">
            <div className="group flex justify-center items-center p-8 text-center border border-solid shadow-md h-40 rounded-md bg-indigo-200">
              <p className="group-hover:hidden">Alcohometrics</p>
              <p className="text-sm hidden group-hover:block">
                Full stack web app created to measure your alcohol tolerance.
              </p>
            </div>
          </a>
          <a href="https://github.com/seullrryu/Chop-Chop" target="_blank">
            <div className="group flex justify-center items-center p-8 text-center border border-solid shadow-md h-40 rounded-md bg-indigo-200">
              <p className="group-hover:hidden">Chop Chop!</p>
              <p className="text-sm hidden group-hover:block">
                The Ultimate iOS App for Recipes and Ingredients.
              </p>
            </div>
          </a>
          <a href="https://github.com/seullrryu/VR-Maze" target="_blank">
            <div className="group flex justify-center items-center p-8 text-center border border-solid shadow-md h-40 rounded-md bg-indigo-200">
              <p className="group-hover:hidden">VR Maze</p>
              <p className="text-sm hidden group-hover:block">
                Web VR Maze. Find the treasure to win!
              </p>
            </div>
          </a>
          <a
            href="https://github.com/seullrryu/fall-2019-spotterfly"
            target="_blank"
          >
            <div className="group flex justify-center items-center p-8 text-center border border-solid shadow-md h-40 rounded-md bg-indigo-200">
              <a className="group-hover:hidden">Spotterfly</a>
              <p className="text-sm hidden group-hover:block">
                Share your playlists with people near you with similar tastes.
                Discover new music.
              </p>
            </div>
          </a>
          <a href="https://github.com/seullrryu/Blackjack" target="_blank">
            <div className="group flex justify-center items-center p-8 text-center border border-solid shadow-md h-40 rounded-md bg-indigo-200">
              <p className="group-hover:hidden">Blackjack</p>
              <p className="text-sm hidden group-hover:block">
                A two-player (user vs computer) client-side single hand
                blackjack game.
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="text-center mb-24">
        <img
          class="w-32 sm:w-24 mx-auto my-8"
          src={"assets/design.svg"}
          alt="Design"
        ></img>
        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2">
          <a href="/podcast" target="_blank">
            <div className="group flex justify-center items-center p-8 text-center border border-solid shadow-md h-40 rounded-md bg-indigo-200">
              <p className="group-hover:hidden">Apple Podcast App Redesign</p>
              <p className="text-sm hidden group-hover:block">
                UX Case Study on the Podcast App.
              </p>
            </div>
          </a>
          <a href="/espn" target="_blank">
            <div className="group flex justify-center items-center p-8 text-center border border-solid shadow-md h-40 rounded-md bg-indigo-200">
              <a className="group-hover:hidden">
                ESPN Fantasy Football App Redesign
              </a>
              <p className="text-sm hidden group-hover:block">
                UX Case Study on the Fantasy Football App.
              </p>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  )
}
