/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Seulmin Ryu",
        short_name: "seulminryu",
        start_url: "/",
        display: "standalone",
        icon: "static/assets/seul.svg",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
