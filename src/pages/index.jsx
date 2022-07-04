import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import Posts from '../components/posts';
import SEO from '../components/seo';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO />
      <Posts posts={posts} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { category: { ne: "about" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
