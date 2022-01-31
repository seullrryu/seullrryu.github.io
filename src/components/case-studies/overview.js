import React from "react"
import Layout from "../Layout";

export default function Overview(props) {
    const comments = props.comments.map(comment =>
        <p className="mb-4">{comment}</p>
    )

    return (
        <Layout>
            <h2>Overview</h2>
            {comments}
            <img className="mt-8 mb-2 mx-auto w-1/3" src={props.img}></img>
            <p className="italic text-center">{props.caption}</p>
        </Layout>
    )
}