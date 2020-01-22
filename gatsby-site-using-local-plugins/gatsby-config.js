module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // including a plugin from the plugins folder
    `gatsby-plugin-console-log-a`,
    {
      // including a plugin from outside the plugins folder needs the path to it
      resolve: require.resolve(`../gatsby-plugin-console-log-b`),
    },
    // including a plugin with yarn or npm link
    //   in order for this plugin to be found when you run gatsby develop
    //   you first need to run `npm link ../gatsby-plugin-console-log-c` in the `gatsby-site-using-local-plugins` root folder
    `gatsby-plugin-console-log-c`,
  ],
}
