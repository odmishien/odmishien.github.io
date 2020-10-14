module.exports = {
  siteMetadata: {
    title: `odmishien`,
    description: `odmishien's portfolio site.`,
    author: `odmishien`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: "6c863b1a1b07a4636aa7de7f8dfe9326181c6b64",
        graphQLQuery: `
        query ($q: String="", $nFirst: Int=0) {
          allGithubData: search(query: $q, type: REPOSITORY, first: $nFirst) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  description
                  url
                }
              }
            }
          }
        }
        `,
        variables: {
          q: `topic:portfolio user:odmishien`,
          nFirst: 10,
        },
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://tech.odmishien.fun/rss`,
        name: `HatenaBlogPosts`,
      },
    },
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
