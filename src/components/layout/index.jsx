import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Title from '../title';
import styles from './style';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  const md = data.site.siteMetadata;
  return (
    <div css={styles.container}>
      <Helmet titleTemplate={`%s | ${md.title}`} defaultTitle={md.title} defer={false}>
        <html lang="en" />
        <meta name="description" content={`${md.description}`} />
      </Helmet>
      <header css={styles.headerContainer}>
        <nav css={styles.navContainer}>
          <div css={styles.title}>
            <Title />
          </div>
          <div css={styles.navLinksContainer}>
            <Link to={'/principles'} css={styles.navLink} activecss={String(styles.activeNavLink)}>
              principles
            </Link>
            <Link to={'/techniques'} css={styles.navLink} activecss={String(styles.activeNavLink)}>
              techniques
            </Link>
            <Link to={'/recipes'} css={styles.navLink} activecss={String(styles.activeNavLink)}>
              recipes
            </Link>
            <Link to={'/tags'} css={styles.navLink} activecss={String(styles.activeNavLink)}>
              tags
            </Link>
          </div>
          <footer css={[styles.footerContainer, styles.footerContainerInSidebar]}>&copy; 2022.</footer>
        </nav>
      </header>
      <main css={styles.mainContainer}>
        {children}
        <footer css={[styles.footerContainer, styles.footerContainerInMain]}>&copy; 2022.</footer>
      </main>
    </div>
  );
}
