import React from "react"
import Layout from "../Layout";

export default function Conclusion(props) {
    return (
        <Layout>
            <h2>Conclusion</h2>
            <p>{props.finalWords}</p>
        </Layout>
    )
}