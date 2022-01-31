import React from "react"
import Header from "../components/Header";
import Hero from "../components/case-studies/hero";
import Overview from "../components/case-studies/overview";
import Sketches from "../components/case-studies/sketches";
import Prototype from "../components/case-studies/prototype";
import Conclusion from "../components/case-studies/conclusion";
import PainPoints from "../components/case-studies/painpoints";
import Layout from "../components/Layout";
import Tasks from "../components/case-studies/tasks";
import Quotes from "../components/case-studies/quotes";
import Info from "../components/info";

export default function podcast() {
    return (
        <main className="text-base">
            <Info />
            <Header />
            <Hero img="./assets/podcast/podcast.png" title="Apple Podcast App: UX Case Study." heading="" date="December 2019"></Hero>
            <Overview comments={["Over the summer, I was commuting to NYC from NJ to go to work in the morning and take a class after.", "It takes about 45-50 minutes to commute from my town; so I spent about a total of 90-100 minutes a day commuting. During my commute, I often listened to podcasts to get some entertainment throughout the journey.", "My main source of podcasts came from Apple's Podcasts app in the iPhone. While I had an ok experience using the app, a lot of my friends expressed their complaints about the app and how frustrating it is to use it. As a result, I decided to do a case study about it."]}
                img="./assets/podcast/sas_show.jpg" caption="Stephen A Smith show, one of my favorite Podcast/Radio shows."></Overview>
            <Tasks
                intro="To understand the user's issues, I conducted 5 usability test sessions with a combination of 5 NYU Students and young adults who use the app frequently. As I gave them certain tasks to do, I listened and jotted down notes about their behavior and interactions."
                steps={['Find a brand new podcast you might be interested in.',
                    'Find the latest episode of a podcast you listen to often.',
                    'Find an episode of ESPN First Take with Kevin Durant as the guest.',
                    'Go to the extended options of a specific podcast episode to share the episode via social media.',
                    "Try to find the podcast episode you just listened to before the one you're currently listening to.",
                    'Find the third-most popular podcast show currently as well as the third most popular episode.'
                ]}></Tasks>
            <section className="w-5/6 pt-10 mx-auto tracking-wide md:w-1/2">
                <p>These are the two personas that best represents the users I tested for this case study.</p>
                <img className="mx-auto w-4/5 my-8" src="/assets/podcast/persona1.png" alt="Image of a typical persona" />
                <img className="mx-auto w-4/5 my-8" src="/assets/podcast/persona2.png" alt="Image of a typical persona" />
            </section>
            <Quotes heading="Some common quotes I got from my usability tests were:"
                quotes={["Where can I view the podcast I just played before the one that's currently playing?",
                    "How do I find extended options?",
                    "I wish I can sort the podcast chronologically. Or even search through certain episodes.",
                    "The browse section looks so disorganized.",
                    "Why is 'My Episodes' section in the show's page not linked to a separate page like 'Previously Played' and 'See All Episodes' sections are?",
                    "The browse section doesn't have a single podcast that seems interesting to me. What's funny is that if you go more down the podcast page it has more recommendations similar to that podcast.",
                    "I feel like there's too much scrolling in the app.",
                    "What's the point of the 'Listen Now' section?"
                ]}></Quotes>
            <PainPoints goals={['Lessen the scrolling from user by categorizing certain sections.', 'Make the discovery process more relevant to the user.', 'Add more options to find certain episodes.', 'Bring in more clarity for options available.', 'Develop a more natural organization of the podcasts.']} pains={["Lack of various sorting options in the podcast page and in the 'Library' section", "Lack of personalized recommendations in the 'Browse' section.", "Hidden options that are only available through force touch which some users had trouble finding."]}></PainPoints>
            <Sketches imgs={["./assets/podcast/sketch1.jpg", "./assets/podcast/sketch2.jpg", "./assets/podcast/sketch3.jpg", "./assets/podcast/sketch4.jpg"]}></Sketches>

            <Layout>
                <h2>Design Decisions</h2>
                <div className="p-8">
                    <h4 className="font-semibold">1. Organization: Lack of various sorting options in the podcast page and in the "Library" section</h4>
                    <div className="mb-12">
                        <p class="how"> Rearranged the options in the navbar and the library page.</p>
                        <img className="mb-8 mx-auto w-3/4" src="/assets/podcast/solution1.png" alt="" />
                    </div>
                    <div className="mb-12">
                        <p class="how">Separated "Downloaded Episodes", "Previously Played", "See All Episodes" sections of the podcast page into a separate window to provide less scrolling. </p>
                        <p class="how">Added Search bar and Sorting Option to sort the episodes of podcasts by latest, oldest, or most played to help users find specific episodes more easily and provide better prioritization of podcasts.</p>
                        <p class="font-semibold text-center">BEFORE</p>
                        <img className="w-1/2 mx-auto" src="/assets/podcast/podcast-page.gif" alt="" />
                    </div>
                    <div className="mb-12">
                        <p class="font-semibold text-center">AFTER</p>
                        <img className="w-3/4 mx-auto" src="/assets/podcast/solution1.1.png" alt="" />
                    </div>
                    <div className="mb-12">
                        <p class="how"> Added segmented controls within the podcast page to separate different sections of the podcast page to "Podcast", "Reviews", "Related" pages to solve the problem of scrolling through the entire page to find each section.</p>
                        <p class="font-semibold text-center">AFTER</p>
                        <img className="w-3/4 mx-auto" src="/assets/podcast/solution1.2.png" alt="" />
                    </div>
                </div>
                <div className="p-8">
                    <h4 className="font-semibold">2. Content Discovery: Lack of personalized recommendations in the "Browse" section.</h4>
                    <div className="mb-12">
                        <p class="how">Removed most of the recommendations in the browse page that has nothing to do with what the user listened to. </p>
                        <p class="how">Added more personalized recommendations based on what podcasts they listened to and which genre of podcasts they listened to. </p>
                        <p class="font-semibold text-center">BEFORE</p>
                        <img className="w-1/2 mx-auto" src="/assets/podcast/old-browse.gif" alt="" />
                    </div>
                    <div className="mb-12">
                        <p class="font-semibold text-center">AFTER</p>
                        <img className="w-1/2 mx-auto" src="/assets/podcast/browse.gif" alt="" />
                    </div>
                    <div className="mb-12">
                        <p class="how">Provided separated pages for Top Charts and Categories.</p>
                        <img className="w-3/4 mx-auto" src="/assets/podcast/solution2.1.png" alt="" />
                    </div>
                    <div className="mb-12">
                        <p class="how">Even though personalized recommendations are important, it is also important to provide users with podcast recommendations outside of their interests. As a result, I left in "Curated Collections", "Featured", and "Shows We Love" sections in the Browse page to provide listeners with podcast recommendations outside of their interests, as well as adding "Trending Near You" section in the search button.</p>
                        <img className="w-3/4 mx-auto" src="/assets/podcast/search.png" alt="" />
                    </div>
                </div>
                <div className="p-8">
                    <h4 className="font-semibold">3. Feature Discoverability: Hidden options that are only available through force touch which some users had trouble finding.</h4>
                    <img className="w-3/4 mx-auto" src="/assets/podcast/force-touch.png" alt="" />
                </div>
            </Layout>
            <Layout>
                <h2>Validating with User Testing</h2>
                <p>To see the effectiveness of my design decisions, I developed three tasks to test for with the original users who participated in my test sessions. </p>
                <ol className="p-8">
                    <li>Share an episode of a podcast via iMessage to your friend.</li>
                    <li>Find a new podcast you might be interested in via browse page. Were you statisfied with the process?</li>
                    <li>Find a podcast episode you played two episodes ago.</li>
                </ol>
                <div class="mb-12">
                    <h4 className="font-semibold">Task 1:</h4>
                    <div className="mb-8">
                        <img className="mx-auto" src="/assets/podcast/two.png" width="500" alt="" />
                        <p>Original:</p>
                        <br></br>
                        <p> 2/5 users were able share the podcast via share option from force touch in one try; rest of my users had trouble finding the share option on episodes in one try as they scrolled and looked all over on the page for the share option. One user wasn't even aware that this option existed.</p>
                    </div>
                    <div className="mb-8">
                        <img className="mx-auto" src="/assets/podcast/five.png" width="500" alt="" />
                        <p>Redesign:</p>
                        <br></br>
                        <p> All 5/5 users were able to find the share button in one try via extended options icon available on the episode. </p>
                    </div>
                </div>
                <div class="mb-12">
                    <h4 className="font-semibold">Task 2:</h4>
                    <div className="mb-8">
                        <img className="mx-auto" src="/assets/podcast/zero.png" width="500" alt="" />
                        <p>Original:</p>
                        <br></br>
                        <p> 0/5 were satisfied with the browse section to find new podcasts they might be interested in. They pointed out how most of the browse section was filled with genre of podcasts they are not interested in as well as had no personalization.</p>
                    </div>
                    <div className="mb-8">
                        <img className="mx-auto" src="/assets/podcast/four.png" width="500" alt="" />
                        <p>Redesign:</p>
                        <br></br>
                        <p> 4/5 were satisfied with the browse section as they thought it really gave them recommendations that fit more with their played history and liked how top charts and categories were separated into different pages. Those four users also liked how I kept some of the recommendations from Apple as it expanded their podcast network. One user didn't want any recommendations from Apple, explaining why he didn't like the new browse section. </p>
                    </div>
                </div>
                <div class="mb-12">
                    <h4 className="font-semibold">Task 3:</h4>
                    <div className="mb-8">
                        <img className="mx-auto" src="/assets/podcast/two.png" width="500" alt="" />
                        <p>Original:</p>
                        <br></br>
                        <p> 2/5 users didn't have trouble finding the podcast episodes they played two episodes ago. The other three users simply couldn't find that function, until I told them it's in "Play Now" section. Once I told them, they were super confused in why that would be in the "Play Now" page.</p>
                    </div>
                    <div className="mb-8">
                        <img className="mx-auto" src="/assets/podcast/five.png" width="500" alt="" />
                        <p>Redesign:</p>
                        <br></br>
                        <p> All 5/5 users found the podcast episodes they played two episodes ago, as "Watch Now" page was gone on my redesign and the "Previously Played" function was on the "Library" page which served as a home page of the app. </p>
                    </div>
                </div>
            </Layout>
            <Prototype iframe={<iframe title="vimeo-player" src="https://player.vimeo.com/video/375797401" width="375" height="667" frameborder="0" allowfullscreen="allowfullscreen">&nbsp;</iframe>}></Prototype>
            <Conclusion finalWords="From this case study, I conducted user research on my own for the first time as well as implemented their concerns and comments into my more user-centered design. I was glad to see how most of my users were statified with my redesign. However, there are still many areas Apple can improve on this app. This redesign is should not be the end, but the beginning. Thank you for reading!"></Conclusion>
        </main >
    )
}