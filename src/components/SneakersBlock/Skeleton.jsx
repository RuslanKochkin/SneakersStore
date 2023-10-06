import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    className="sneakers-block"
    speed={0}
    width={280}
    height={340}
    viewBox="0 0 280 340"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="65" y="224" rx="0" ry="0" width="207" height="24" /> 
    <rect x="45" y="258" rx="0" ry="0" width="231" height="37" /> 
    <rect x="148" y="309" rx="0" ry="0" width="131" height="37" /> 
    <rect x="3" y="2" rx="10" ry="10" width="266" height="200" />
  </ContentLoader>
)

export default Skeleton;