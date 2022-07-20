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
    <div className={styles.container}>
      <Helmet titleTemplate={`%s | ${md.title}`} defaultTitle={md.title} defer={false}>
        <html lang="en" />
        <meta name="description" content={`${md.description}`} />
      </Helmet>
      <header className={styles.headerContainer}>
        <nav className={styles.navContainer}>
          <div className={styles.title}>
            <Title />
          </div>
          <div className={styles.navLinksContainer}>
            <Link to={'/principles'} className={styles.navLink} activeClassName={String(styles.activeNavLink)}>
              principles
            </Link>
            <Link to={'/techniques'} className={styles.navLink} activeClassName={String(styles.activeNavLink)}>
              techniques
            </Link>
            <Link to={'/recipes'} className={styles.navLink} activeClassName={String(styles.activeNavLink)}>
              recipes
            </Link>
            <Link to={'/tags'} className={styles.navLink} activeClassName={String(styles.activeNavLink)}>
              tags
            </Link>
          </div>
          <footer className={`${styles.footerContainer} ${styles.footerContainerInSidebar}`}>&copy; 2022.</footer>
        </nav>
      </header>
      <main className={styles.mainContainer}>
        {children}
        <footer className={`${styles.footerContainer} ${styles.footerContainerInMain}`}>&copy; 2022.</footer>
      </main>
    </div>
  );
}
