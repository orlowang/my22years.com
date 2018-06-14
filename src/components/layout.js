import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery } from 'gatsby'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
    render={data => [
      <Helmet
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        defaultTitle={data.site.siteMetadata.title}
      />,
      children
    ]}
  />
)
