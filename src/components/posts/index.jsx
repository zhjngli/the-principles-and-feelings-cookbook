import { Link } from 'gatsby';
import React from 'react';

import styles from './style';

export default function Posts({ posts }) {
  return (
    <ul {...styles.listContainer}>
      {posts.map(({ node: post }) => (
        <li key={post.fields.slug}>
          <h2 {...styles.post}>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </h2>
        </li>
      ))}
    </ul>
  );
}
