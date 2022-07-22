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
            <Link to={tag} css={styles.minorLink}>
              {post.frontmatter.tags[i]}
            </Link>
            {divider}
          </span>
        </>
      );
    });
  }
  const infoSection = <span css={styles.infoSection}>tagged with: {tags}</span>;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} path={post.fields.slug} />
      <h1 css={styles.title}>{post.frontmatter.title}</h1>
      {infoSection}
      <hr />
      {renderAst(post.htmlAst)}
      <hr />
      <div css={styles.postNavigation}>
        {pageContext.next && (
          <Link to={pageContext.next.fields.slug} css={[styles.minorLink, styles.nextPost]}>
            &#8592; {pageContext.next.frontmatter.title}
          </Link>
        )}
        {pageContext.prev && (
          <Link to={pageContext.prev.fields.slug} css={[styles.minorLink, styles.prevPost]}>
            {pageContext.prev.frontmatter.title} &#8594;
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
