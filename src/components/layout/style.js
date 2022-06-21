import 'prism-themes/themes/prism-dracula.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import '../../theme/global.css';
import '../../theme/fonts.css';

import { css } from 'glamor';

import colors from '../../theme/colors';
import { rhythm } from '../../theme/typography';

export default {
  // top level container styles
  container: css({
    maxWidth: `36rem`,
    margin: `0 auto`,
    padding: rhythm(1)
  }),
  // header styles
  headerContainer: css({
    display: 'flex',
    alignItems: 'baseline',
    padding: `${rhythm(1)} ${rhythm(1)} ${rhythm(1)} 0`
  }),
  title: css({
    color: colors.header,
    fontSize: `110%`,
    fontWeight: 700,
    letterSpacing: '0.07em',
    textDecoration: 'none',
    margin: `0 ${rhythm(1 / 2)} 0 0`,
    borderBottom: `none`,
    ':hover': {
      color: colors.header,
      borderBottom: `3px solid ${colors.linkHover}`
    }
  }),
  navLink: css({
    color: colors.header,
    textDecoration: 'none',
    fontSize: `110%`,
    margin: `0 ${rhythm(1 / 2)}`,
    borderBottom: `none`,
    ':hover': {
      color: colors.header,
      borderBottom: `3px solid ${colors.linkHover}`
    }
  }),
  activeNavLink: css({
    borderBottom: `3px solid ${colors.linkHover}`
  }),
  // main styles
  mainContainer: css({
    padding: `${rhythm(1)} 0`
  }),
  // footer styles
  footerContainer: css({
    padding: `${rhythm(2)} 0`
  })
};
