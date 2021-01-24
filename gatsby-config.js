const config = require('./config/site');

module.exports = {
  siteMetadata: {
    title: `Food Demo 01`,
    description: `Restaurant Demo Template`,
    author: `@salemaziel`,
    siteUrl: `https://food-demo01.viadelweb.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./site/customization.yml`,
      },
    },
     {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://food-demo01.viadelweb.com',
        sitemap: 'https://food-demo01.viadelweb.com/sitemap.xml',
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Food Demo 01`,
        short_name: `Food 01`,
        start_url: `/`,
        background_color: `#dc3545`,
        theme_color: `#dc3545`,
        display: `minimal-ui`,
        icon: `src/images/generic-logo.png`, // This path is relative to the root of the site.
      },
    },
//    { 
//      resolve: `gatsby-plugin-purgecss`,
//      options: {
//        printRejected: true, // Print removed selectors and processed file names
//        develop: true, // Enable while using `gatsby develop`
//        // tailwind: true, // Enable tailwindcss support
//        whitelist: ['body.is-preload *',' body.is-preload *:before',' body.is-preload *:after','NoDesktop'], // Don't remove this selector
//         whitelistPatterns: [/btn/, /container/, /row/, /col/, /card/, /body/, /form/, /input/, /NoDesktop/, /is-preload/, /nav/, /navbar/ ]
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['bootstrap/'], // Purge only these files/folders
//      }
//    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`,
    },
  ],
};
