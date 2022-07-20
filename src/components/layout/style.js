import 'prism-themes/themes/prism-dracula.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import '../../theme/global.css';
import '../../theme/fonts.css';

import { css } from '@emotion/react';

import colors from '../../theme/colors';
import { ResponsiveMaxWidth, ResponsiveMinWidth } from '../../theme/presets';
import { rhythm } from '../../theme/typography';

const contentMaxWidth = '45rem';
// 151.66px comes from header width + header padding
const headerWidth = '151.66px';

export default {
  // top level container styles
  container: css({
    [ResponsiveMinWidth]: {
      display: 'flex',
      flexDirection: 'row',
      maxWidth: contentMaxWidth,
      margin: `0 auto`,
      padding: rhythm(1)
    },
    [ResponsiveMaxWidth]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }),
  // header styles
  headerContainer: css({
    [ResponsiveMinWidth]: {
      paddingRight: rhythm(3 / 2)
    },
    [ResponsiveMaxWidth]: {
      display: 'flex',
      alignItems: 'center',
      margin: `${rhythm(1)} auto`
    }
  }),
  navContainer: css({
    [ResponsiveMinWidth]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end'
    },
    [ResponsiveMaxWidth]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }),
  navLinksContainer: css({
    [ResponsiveMinWidth]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end'
    },
    [ResponsiveMaxWidth]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }),
  title: css({
    margin: `${rhythm(1)} ${rhythm(-1 / 4)} ${rhythm(1)} 0`
  }),
  navLink: css({
    padding: `${rhythm(1 / 8)} 0`,
    borderBottom: 0,
    '&:hover': {
      borderBottom: 0,
      color: colors.linkHover
    },
    [ResponsiveMaxWidth]: {
      padding: `0 ${rhythm(1 / 2)}`
    }
  }),
  activeNavLink: css({
    fontWeight: 800,
    '&:hover': {
      color: colors.header
    }
  }),
  // main styles
  mainContainer: css({
    [ResponsiveMinWidth]: {
      marginTop: rhythm(5 / 2),
      // hack to make the width fill the allotted space only
      // rehypeReact for some reason causes the container to match parent width
      width: `calc(100% - ${headerWidth})`
    },
    [ResponsiveMaxWidth]: {
      margin: `0 ${rhythm(3 / 2)}`,
      width: `calc(100% - ${rhythm(3 / 2)})`,
      maxWidth: `calc(${contentMaxWidth} - ${headerWidth})`
    },
    paddingTop: rhythm(1)
  }),
  // footer styles
  footerContainer: css({
    padding: `${rhythm(2)} 0`,
    fontSize: `80%`
  }),
  footerContainerInSidebar: css({
    [ResponsiveMaxWidth]: {
      display: 'none'
    }
  }),
  footerContainerInMain: css({
    [ResponsiveMinWidth]: {
      display: 'none'
    }
  })
};
