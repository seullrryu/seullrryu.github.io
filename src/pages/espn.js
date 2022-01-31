import React from "react"
import Header from "../components/Header"
import Hero from "../components/case-studies/hero"
import Overview from "../components/case-studies/overview"
import Sketches from "../components/case-studies/sketches"
import Prototype from "../components/case-studies/prototype"
import Conclusion from "../components/case-studies/conclusion"
import PainPoints from "../components/case-studies/painpoints"
import Layout from "../components/Layout"
import Tasks from "../components/case-studies/tasks"
import Quotes from "../components/case-studies/quotes"
import Info from "../components/info"

export default function espn() {
  return (
    <main className="text-base">
      <Info />
      <Header></Header>

      <Hero
        img="./assets/espn/football.jpg"
        title="Using the ESPN Fantasy Football App is stressful."
        heading="A UX Case Study on ESPN Fantasy Football iOS App"
        date="September 2019"
      ></Hero>

      <Overview
        comments={[
          "As an avid sports fan, one of my favorite activities to do is actively participating in Fantasy Sports leagues with my close friends. For those of you who are unfamiliar with fantasy sports, fantasy sports is where you and your friends form a “league” of 8–16 “teams”, of which you are the manager. Each participant create their own virtual teams; made up of real players of a professional sport. The players are picked through the league’s own virtual draft. These teams compete based on the statistical performance of those players in actual games.",
          "What makes the fantasy leagues more fun and interesting besides tracking how your team is performing against other teams is the fact that you can also pick up new players from “Free Agency”; and also propose to trade your players with those of other teams which are owned by your friends in the league.",
          "To facilitate the process of managing your team anywhere, ESPN created a fantasy sports app for your mobile devices. However, there are various pain points makes managing my team a harder process than it should be - which led me to redesign the app, especially the Fantasy Football section as it is football season right now in September.",
        ]}
        img="./assets/espn/draft.jpg"
        caption="Me and my friends drafting our fantasy football teams back in 2017"
      ></Overview>

      <Tasks
        intro="For my research, I asked two of my fellow NYU students, one being a passionate football fan as well as an avid fantasy sports player, and other one being a passionate football fan but NOT an avid fantasy football player, to use the app in front of me and provided them with a scenario that represents a typical behavior of a fantasy football player."
        steps={[
          "Open the app, and find another team's page to look at their roster.",
          "Go to the player section, and find players who you might want to add to your roster.",
          "Go to the matchup section to see how your team is doing against the other team.",
        ]}
      ></Tasks>

      <section className="w-5/6 pt-10 mx-auto tracking-wide md:w-1/2">
        <p>Here are the pain points I found out from my research: </p>
        <ul className="my-4">
          <div className="my-12">
            <div className="text-lg mb-4">
              Difficult to view and compare against opposing teams.
            </div>
            <li>
              For example, to get to other teams, there are multiple touches
              involved. You have to click on the "Matchup" tab and click the
              icon of the team you want to take a look at, or you have to go to
              the "Standings" section and click the team name from there. There
              is no uniform section that contains all the opposing teams.
            </li>
            <img
              className="mx-auto my-4"
              src="/assets/espn/gifs/hard.gif"
              alt="Demonstration of two main ways you can get to other teams in the current app"
            />
          </div>
          <div className="my-12">
            <div className="text-lg mb-4">
              Difficult to find and compare specific players.
            </div>
            <li>
              Finding players of different positions need too many scrolls.
            </li>
            <img
              className="mx-auto my-4"
              src="/assets/espn/gifs/scrolls.gif"
              alt="QB, RB, WR, TE, D/ST, K, are all different positions played in football. In this app, if you want to go find players who play K, you have to scroll all the way down like it is shown above."
            />
            <li>
              In order to filter out the players via position, teams, or
              owned/available, you have to go into one of the position sections
              of players, and then select the filters.
            </li>
            <img
              className="mx-auto my-4"
              src="/assets/espn/gifs/filters.gif"
              alt=""
            />
            <li>
              There is no way to filter out the watchlist using positions.
            </li>
            <img
              className="mx-auto my-4"
              src="/assets/espn/gifs/watchlist.gif"
              alt=""
            />
          </div>
          <div className="my-12">
            <div className="text-lg mb-4">
              Games going on are hidden in the matchup section, but you want to
              check how a player in your team is doing and also check how the
              player's actual team is doing simultaneously.
            </div>
            <img
              className="mx-auto my-4"
              src="/assets/espn/gifs/scores.gif"
              alt=""
            />
          </div>
          <div className="my-12">
            <div className="text-lg mb-4">
              Sliding to see different matchup is annoying as the amount of
              sliding you have to do increases for certain matchups.
            </div>
            <img
              className="mx-auto my-4"
              src="/assets/espn/gifs/matchups.gif"
              alt=""
            />
          </div>
        </ul>
      </section>

      <Quotes
        heading="These hardships of approaching other teams and finding and comparing players often led to frustration and poor user experience as a result. It turns out, however, the NYU students I researched were not the only one frustrated with this problem. Here are some reviews I found in the app store:"
        quotes={[
          '"Many things you wish to accomplish takes two or three steps." - sjupete1851',
          '"It fails to make transitioning from live games, player content, and fantasy owner lineups fluid." - Anna Boyton',
        ]}
      ></Quotes>
      <PainPoints
        goals={["Design a easier way to compare/contrast teams and players"]}
        pains={[
          "Difficulty in visiting opposing teams",
          "Hidden live games and too many movements to see other matchups",
          "Difficulty in finding and comparing players",
        ]}
      ></PainPoints>
      <Sketches
        imgs={[
          "./assets/espn/sketch1.jpg",
          "./assets/espn/sketch2.jpg",
          "./assets/espn/sketch3.jpg",
        ]}
      ></Sketches>

      <Layout>
        <h2>Design Decisions</h2>
        <div className="p-8">
          <h4 className="font-semibold">
            1. Difficulty in visiting opposing teams
          </h4>
          <div className="mb-12">
            <p class="how">
              {" "}
              Added an “Opposing Teams” feature; you can approach it from the
              roster section and from the league section where you can select
              certain teams to look at their roster from there.{" "}
            </p>
            <img className="mb-8" src="/assets/espn/solution1.1.png" alt="" />
            <img src="/assets/espn/solution1.2.png" alt="" />
          </div>
        </div>

        <div className="p-8">
          <h4 className="font-semibold">
            2. Hidden live games and too many movements to see other matchups{" "}
          </h4>
          <div className="mb-12">
            <p class="how">
              {" "}
              Added a section where you can see the ongoing/future games in the
              main matchup section.
            </p>
            <img src="/assets/espn/solution2.1.png" alt="" />
          </div>
          <div className="mb-12">
            <p class="how">
              {" "}
              Added a dropdown “All Matchups” feature so you don’t have to
              scroll as much to see the matchups you desire.
            </p>
            <img src="/assets/espn/solution2.2.png" alt="" />
          </div>
        </div>

        <div className="p-8">
          <h4 className="font-semibold">
            3. Difficulty in finding and comparing players
          </h4>
          <div className="mb-12">
            <p class="how">
              {" "}
              Separated watchlist and overall players using filters. Can filter
              the watchlist with positions now.
            </p>
            <img className="mb-8" src="/assets/espn/solution3.1.png" alt="" />
            <img src="/assets/espn/watchlistfilter.png" alt="" />
          </div>
          <div className="mb-12">
            <p class="how">
              {" "}
              Implemented filters to separate each position rather than
              scrolling.{" "}
            </p>
            <img src="/assets/espn/solution3.2.png" alt="" />
          </div>
        </div>
      </Layout>

      <Prototype
        iframe={
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/368300909"
            width="375"
            height="667"
            frameborder="0"
            allowfullscreen="allowfullscreen"
          >
            &nbsp;
          </iframe>
        }
      ></Prototype>
      <Conclusion finalWords="The process of using the Fantasy Football app itself was very stressful and was not a fun experience. I had to go through a series of steps just to take a look at my friends’ teams, search for players, and take a look the actual current NFL game scores. I really hope ESPN incorporates some of my redesigns and allow many NFL fans to have fun this season!"></Conclusion>
    </main>
  )
}
