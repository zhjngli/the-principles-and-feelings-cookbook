import { Link } from 'gatsby';
import React from 'react';

import styles from './style';

export default function Posts({ posts }) {
  return (
    <ul {...styles.listContainer}>
      {posts.map(({ node: post }) => (
        <li key={post.fields.slug}>
          <span {...styles.date}>{post.frontmatter.date}</span>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  );
}
