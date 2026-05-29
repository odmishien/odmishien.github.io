/**
 * gatsby-source-github-api が読み込まれない場合 (GITHUB_API_TOKEN 未設定時) でも
 * works ページの GraphQL クエリ (`githubData`) がビルドエラーにならないよう、
 * スキーマを常に定義しておく。
 *
 * プラグイン有効時は実データが流れ込み、無効時は githubData が null を返す。
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type GithubData implements Node {
      data: GithubDataData
    }
    type GithubDataData {
      search: GithubDataDataSearch
    }
    type GithubDataDataSearch {
      edges: [GithubDataDataSearchEdges]
    }
    type GithubDataDataSearchEdges {
      node: GithubDataDataSearchEdgesNode
    }
    type GithubDataDataSearchEdgesNode {
      id: String
      name: String
      description: String
      url: String
    }
  `)
}
