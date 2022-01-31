import React from "react"
import Layout from "../Layout";

export default function Sketches(props) {
    const sketches = props.imgs.map(item =>
        <img src={item} alt="sketches"></img>
    );
    return (
        <Layout>
            <h2>Initial Sketches</h2>
            <div className="grid grid-cols-2 gap-8 mt-4">
                {sketches}
            </div>
        </Layout>
    )
}