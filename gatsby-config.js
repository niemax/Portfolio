module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `Niemax's Portfolio`,
    description: `niemax's portfolio`,
    author: `Axel Nieminen`,
    siteUrl: `https://niemax.me/portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-RG7VE91W6E"],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `staticImages`,
        path: `${__dirname}/src/staticImages`,
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projectDetails`,
        path: `${__dirname}/src/projectDetails`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Niemax's Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `orange`,
        icon: `src/staticImages/memoji.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
