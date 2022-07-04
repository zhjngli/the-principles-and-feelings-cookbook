import { Link } from 'gatsby';
import React from 'react';

import styles from './style';

export default function Title() {
  return (
    <Link to={'/'}>
      <div {...styles.container}>
        <div {...styles.line1}>&nbsp;&nbsp;the</div>
        <div {...styles.line2}>&nbsp;&nbsp;&nbsp;&nbsp;principles</div>
        <div {...styles.amp}>&amp;</div>
        <div {...styles.line4}>&nbsp;&nbsp;&nbsp;feelings</div>
        <div {...styles.line5}>&nbsp;cookbook</div>
      </div>
    </Link>
  );
}
