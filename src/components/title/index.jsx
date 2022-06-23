import { Link } from 'gatsby';
import React from 'react';

import styles from './style';

export default function Title() {
  return (
    <Link to={'/'}>
      <div {...styles.container}>
        <div {...styles.line1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the</div>
        <div {...styles.line2}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;principles</div>
        <div {...styles.line3}>&nbsp;&nbsp;&nbsp;&nbsp;&amp;</div>
        <div {...styles.line4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;feelings</div>
        <div {...styles.line5}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cookbook</div>
      </div>
    </Link>
  );
}
