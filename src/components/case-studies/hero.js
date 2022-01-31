import React from "react"
import Layout from "../Layout"


export default function Hero(props) {
    return (
        <Layout>
            <img class="w-1/3 mb-16" src={props.img} alt="Seulmin Ryu"></img>
            <h2>{props.title}</h2>
            <p>{props.heading}</p>
            <br></br>
            <i>{props.date}</i>
        </Layout>
    )
}