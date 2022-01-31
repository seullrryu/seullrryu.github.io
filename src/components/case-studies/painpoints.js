import React from "react"
import Layout from "../Layout";

export default function PainPoints(props) {
    const pains = props.pains.map(point =>
        <li>{point}</li>
    )
    const goals = props.goals.map(goal =>
        <li>{goal}</li>
    )

    return (
        <Layout>
            <h2>Pain Points and Goals</h2>
            <p>From my user research, I decided to address these pain points:</p>
            <div className="w-1/2 my-6 mx-auto">
                <ol>
                    {pains}
                </ol>
            </div>

            <p>The goals for my redesign are:</p>
            <div className="w-1/2 my-6 mx-auto">
                <ol>
                    {goals}
                </ol>
            </div>
        </Layout>
    )
}
