import { css } from 'glamor';

import colors from '../../theme/colors';
import { rhythm, scale } from '../../theme/typography';

export default {
  title: css({
    marginBottom: 0
  }),
  infoSection: css({
    ...scale(-1 / 4),
    display: `block`,
    fontStyle: `normal`,
    textAlign: `left`,
    color: colors.light,
    marginBottom: rhythm(1 / 4)
  }),
  minorLink: css({
    color: colors.light,
    borderColor: colors.light,
    ':hover': {
      color: colors.light,
      borderColor: colors.linkHover
    }
  }),
  postNavigation: css({
    ...scale(-1 / 4)
  }),
  nextPost: css({
    float: `right`,
    marginLeft: `1rem`
  }),
  prevPost: css({
    float: `left`,
    marginRight: `1rem`
  })
};
