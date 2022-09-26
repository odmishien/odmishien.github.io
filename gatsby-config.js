module.exports = {
  siteMetadata: {
    title: "odmishien",
    description: "Hello, World! I'm odmishien!",
    author: "@odmishien",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "odmishien",
        short_name: "odmishien",
        start_url: "/",
        icon: "src/images/icon.png",
      },
    },
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
        token: process.env.GITHUB_API_TOKEN,
        graphQLQuery: `
        query ($nFirst: Int, $q: String!) {
          search(query: $q, type: REPOSITORY, first: $nFirst) {
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
        }`,
        variables: {
          q: `topic:portfolio user:odmishien`,
          nFirst: 10,
        },
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://odmishien-tech.hatenablog.jp/rss`,
        name: `HatenaBlogPosts`,
      },
    },
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    `gatsby-plugin-transition-link`,
  ],
}
