import React from "react"
import Layout from "../Layout";

export default function Tasks(props) {
    const steps = props.steps.map(step => 
        <li className="mb-0">{step}</li>
    )
    return (
        <Layout>
            <h2>Experience Audit</h2>
            <p>{props.intro}</p>
            <br></br>
            <p>The list of tasks I gave were:</p>
            <ul className="my-4 ml-8">
                {steps}
            </ul>
        </Layout>
    )
}