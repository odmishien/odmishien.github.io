const plugins = [
  `gatsby-plugin-typescript`,
  `gatsby-plugin-postcss`,
  `gatsby-plugin-react-helmet`,
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
]

// GITHUB_API_TOKEN がある時だけ GitHub からリポジトリを取得
if (process.env.GITHUB_API_TOKEN) {
  plugins.push({
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
  })
}

module.exports = {
  siteMetadata: {
    title: "odmishien",
    description: "Hello, World! I'm odmishien!",
    author: "@odmishien",
  },
  plugins,
}
