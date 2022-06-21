import { graphql, Link } from 'gatsby';
import React from 'react';

import Layout from '../../components/layout';
import Posts from '../../components/posts';
import SEO from '../../components/seo';

export default function TagPage({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges;
  const totalCount = data.allMarkdownRemark.totalCount;

  return (
    <Layout>
      <SEO title={pageContext.tag} path={pageContext.slug} />
      <h1>
        {totalCount}
        {` `}
        post{totalCount != 1 && 's'} in “{pageContext.tag}”
      </h1>
      <Posts posts={posts} />
      <p>
        Or check out <Link to="/tags">all tags</Link>.
      </p>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
