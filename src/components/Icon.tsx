import React from "react"

// gatsby-image / sharp 依存を切り、静的アセットから直接読む
const Icon: React.FC<{ size?: number }> = ({ size = 128 }) => (
  <img
    src="/icon.png"
    alt="odmishien"
    width={size}
    height={size}
    style={{ width: size, height: size, display: "block", objectFit: "cover" }}
  />
)

export default Icon
