import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import styles from './style';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  const md = data.site.siteMetadata;
  return (
    <div {...styles.container}>
      <Helmet titleTemplate={`%s | ${md.title}`} defaultTitle={md.title} defer={false}>
        <html lang="en" />
        <meta name="description" content={`${md.description}`} />
      </Helmet>
      <header {...styles.headerContainer}>
        <nav>
          <Link to={'/'} {...styles.title} activeClassName={styles.activeNavLink}>
            ts-blog
          </Link>
          <Link to={'/about'} {...styles.navLink} activeClassName={styles.activeNavLink}>
            about
          </Link>
          <Link to={'/contact'} {...styles.navLink} activeClassName={styles.activeNavLink}>
            contact
          </Link>
          <Link to={'/tags'} {...styles.navLink} activeClassName={styles.activeNavLink}>
            tags
          </Link>
        </nav>
      </header>
      <main {...styles.mainContainer}>{children}</main>
      <footer {...styles.footerContainer}>&copy; 2021.</footer>
    </div>
  );
}
