import { Link } from 'gatsby';
import React from 'react';

import styles from './style';

export default function Title() {
  return (
    <Link to={'/'}>
      <div css={styles.container}>
        <div css={styles.line1}>&nbsp;&nbsp;the</div>
        <div css={styles.line2}>&nbsp;&nbsp;&nbsp;&nbsp;principles</div>
        <div css={styles.amp}>&amp;</div>
        <div css={styles.line4}>&nbsp;&nbsp;&nbsp;feelings</div>
        <div css={styles.line5}>&nbsp;cookbook</div>
      </div>
    </Link>
  );
}
