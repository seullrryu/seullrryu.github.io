import React from "react"
import { Helmet } from "react-helmet"

export default function Info() {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="author" content="Seulmin Ryu" />
      <meta name="description" content="Seulmin Ryu Portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="copyright" content="Seulmin Ryu 2022" />
      <meta name="icon" href="/assets/seul.svg" />
      <meta property="og:image" content="/assets/seul.svg" />
      <title>Seulmin Ryu</title>
    </Helmet>
  )
}
