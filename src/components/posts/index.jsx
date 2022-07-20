import { Link } from 'gatsby';
import React from 'react';

import styles from './style';

export default function Posts({ posts }) {
  return (
    <ul className={styles.listContainer}>
      {posts.map(({ node: post }) => (
        <li key={post.fields.slug}>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  );
}
