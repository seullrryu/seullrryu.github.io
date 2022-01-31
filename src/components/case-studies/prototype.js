import React from "react"
import Layout from "../Layout";

export default function Prototype(props) {
    return (
        <Layout>
            <h2>Full Prototype</h2>
            <div className="w-1/2 mx-auto">
                {props.iframe}
            </div>
        </Layout>
    )
}