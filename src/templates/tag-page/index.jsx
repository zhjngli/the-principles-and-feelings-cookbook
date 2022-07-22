import { graphql, Link } from 'gatsby';
import React from 'react';

import Layout from '../../components/layout';
import Posts from '../../components/posts';
import SEO from '../../components/seo';

export default function TagPage({ data, pageContext }) {
  const allPosts = data.allMarkdownRemark.edges;

  const categorizedPosts = {};
  allPosts.forEach((p) => {
    if (p.node.fields.category in categorizedPosts) {
      categorizedPosts[p.node.fields.category].push(p);
    } else {
      categorizedPosts[p.node.fields.category] = [p];
    }
  });

  return (
    <Layout>
      <SEO title={pageContext.tag} path={pageContext.slug} />
      <h1>
        posts tagged with “{pageContext.tag}”
      </h1>
      {Object.keys(categorizedPosts)
        .sort()
        .map((category) => {
          const posts = categorizedPosts[category];
          return (
            <div key={category}>
              <h2>
                {posts.length}
                {` `}
                post{posts.length != 1 && 's'} under “{category}”
              </h2>
              <Posts posts={posts} />
            </div>
          );
        })}
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
      edges {
        node {
          fields {
            slug
            category
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
