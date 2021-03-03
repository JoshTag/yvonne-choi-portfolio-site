module.exports = {
  siteMetadata: {
    title: `Yvonne Choi`,
    description: `Portfolio site for Yvonne Choi - Pianist`,
    keywords: [
      "Piano",
      "Pianist",
      "Music",
      "Classical",
      "Music Directing",
      "Solo Piano Performance",
      "Collaborative Piano Performance",
      "Music Education",
      "Music Coaching",
      "Choral Music",
      "Musical Theatre",
      "Contemporary Pop",
    ],
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#23201C`,
        theme_color: `#23201C`,
        display: `minimal-ui`,
        icon: `src/img/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
