import React from "react"
import Layout from "../Layout";

export default function Quotes(props) {
    const quotes = props.quotes.map(quote =>
        <p className="mb-4">{quote}</p>
    )
    return (
        <Layout>
            <p>{props.heading}</p>
            <div className="my-4 ml-8">
                {quotes}
            </div>
        </Layout>
    )
}