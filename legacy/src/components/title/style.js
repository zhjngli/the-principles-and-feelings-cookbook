import { css } from '@emotion/react';

import { rhythm } from '../../theme/typography';

export default {
  container: css({
    fontFamily: 'Yellowtail, cursive',
    fontSize: '200%',
    lineHeight: 1.1,
    marginRight: rhythm(-21 / 32)
  }),
  line1: css({
    marginTop: rhythm(-13 / 32)
  }),
  line2: css({
    marginTop: rhythm(-13 / 32)
  }),
  amp: css({
    position: 'absolute',
    top: '90px'
  }),
  line4: css({
    marginTop: rhythm(-7 / 32)
  }),
  line5: css({
    marginTop: rhythm(-7 / 32)
  })
};
