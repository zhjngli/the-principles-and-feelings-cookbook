import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { renderAst } from '../util';

export default function Index({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <SEO />
      {renderAst(post.htmlAst)}
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    markdownRemark(fields: { category: { eq: "about" } }) {
      htmlAst
    }
  }
`;
