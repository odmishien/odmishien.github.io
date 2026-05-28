// このコンポーネントはリデザイン後 Layout に統合され、未使用です。
// 互換のためファイルは残していますが、import している箇所はありません。
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header: React.FC = () => (
  <AniLink fade to="/" className="font-mono text-xs uppercase tracking-widest">
    ← back
  </AniLink>
)

export default Header
