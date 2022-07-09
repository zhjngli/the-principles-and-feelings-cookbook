import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../components/layout';
import Posts from '../../components/posts';
import SEO from '../../components/seo';

export default function CategoryPage({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title={pageContext.category} path={pageContext.slug} />
      <h1>{pageContext.category}</h1>
      <Posts posts={posts} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($category: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
