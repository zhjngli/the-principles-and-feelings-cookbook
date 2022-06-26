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
    display: 'flex',
    flexDirection: 'row',
    maxWidth: `45rem`,
    margin: `0 auto`,
    padding: rhythm(1)
  }),
  // header styles
  headerContainer: css({
    paddingRight: rhythm(3 / 2)
  }),
  navContainer: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end'
  }),
  title: css({
    margin: `${rhythm(1)} ${rhythm(-1 / 4)} ${rhythm(1)} 0`
  }),
  navLink: css({
    padding: `${rhythm(1 / 8)} 0`,
    borderBottom: 0,
    ':hover': {
      borderBottom: 0,
      color: colors.linkHover
    }
  }),
  activeNavLink: css({
    fontWeight: 800,
    ':hover': {
      color: colors.header
    }
  }),
  // main styles
  mainContainer: css({
    marginTop: rhythm(3 / 2),
    paddingTop: rhythm(3 / 2),
    // hack to make the width fill the allotted space only
    // rehypeReact for some reason causes the container to match parent width
    // 154.234px comes from header width + header padding
    width: `calc(100% - 154.234px)`
  }),
  // footer styles
  footerContainer: css({
    padding: `${rhythm(2)} 0`,
    fontSize: `80%`
  })
};
