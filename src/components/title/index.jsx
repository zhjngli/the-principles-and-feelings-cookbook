import { Link } from 'gatsby';
import React from 'react';

import styles from './style';

export default function Title() {
  return (
    <Link to={'/'}>
      <div className={styles.container}>
        <div className={styles.line1}>&nbsp;&nbsp;the</div>
        <div className={styles.line2}>&nbsp;&nbsp;&nbsp;&nbsp;principles</div>
        <div className={styles.amp}>&amp;</div>
        <div className={styles.line4}>&nbsp;&nbsp;&nbsp;feelings</div>
        <div className={styles.line5}>&nbsp;cookbook</div>
      </div>
    </Link>
  );
}
