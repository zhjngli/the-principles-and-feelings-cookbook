import { graphql, Link } from 'gatsby';
import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { renderAst } from '../../util';
import styles from './style';

export default function Post({ data, pageContext }) {
  const { markdownRemark: post } = data;
  let tags;
  if (post.fields.tagSlugs) {
    const tagsArray = post.fields.tagSlugs;
    tags = tagsArray.map((tag, i) => {
      const divider = i < tagsArray.length - 1 && <span>{`, `}</span>;
      return (
        <>
          {' '}
          <span key={tag}>
            <Link to={tag} {...styles.minorLink}>
              {post.frontmatter.tags[i]}
            </Link>
            {divider}
          </span>
        </>
      );
    });
  }
  const infoSection = <span {...styles.infoSection}>tagged in: {tags}</span>;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} path={post.fields.slug} />
      <h1 {...styles.title}>{post.frontmatter.title}</h1>
      {infoSection}
      <hr />
      {renderAst(post.htmlAst)}
      <hr />
      <div {...styles.postNavigation}>
        {pageContext.prev && (
          <Link to={pageContext.prev.fields.slug} {...styles.minorLink} {...styles.prevPost}>
            &#8592; {pageContext.prev.frontmatter.title}
          </Link>
        )}
        {pageContext.next && (
          <Link to={pageContext.next.fields.slug} {...styles.minorLink} {...styles.nextPost}>
            {pageContext.next.frontmatter.title} &#8594;
          </Link>
        )}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        tagSlugs
        slug
      }
      frontmatter {
        title
        tags
      }
    }
  }
`;
