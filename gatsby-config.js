module.exports = {
  siteMetadata: {
    title: `alternacrow portfolio`,
    description: `alternacrow portfolio`,
    author: `@alternacrow`,
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
        name: `alternacrow portfolio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
  ],
};
