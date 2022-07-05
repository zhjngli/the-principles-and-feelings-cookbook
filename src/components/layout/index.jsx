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
        <nav {...styles.navContainer}>
          <div {...styles.title}>
            <Title />
          </div>
          <Link to={'/principles'} {...styles.navLink} activeClassName={styles.activeNavLink}>
            principles
          </Link>
          <Link to={'/techniques'} {...styles.navLink} activeClassName={styles.activeNavLink}>
            techniques
          </Link>
          <Link to={'/recipes'} {...styles.navLink} activeClassName={styles.activeNavLink}>
            recipes
          </Link>
          <Link to={'/tags'} {...styles.navLink} activeClassName={styles.activeNavLink}>
            tags
          </Link>
          <Link to={'/contact'} {...styles.navLink} activeClassName={styles.activeNavLink}>
            contact
          </Link>
          <footer {...styles.footerContainer}>&copy; 2021.</footer>
        </nav>
      </header>
      <main {...styles.mainContainer}>{children}</main>
    </div>
  );
}
