import Typography from 'typography';

import colors from './colors';

const baseFontSize = '16px';

const options = {
  scaleRatio: 3,
  baseFontSize: baseFontSize,
  baseLineHeight: 2,
  headerColor: `${colors.header}`,
  bodyColor: `${colors.body}`,
  headerWeight: 600,
  headerFontFamily: [`Open Sans`, `sans-serif`],
  bodyFontFamily: [`Open Sans`, `sans-serif`],
  // eslint-disable-next-line no-unused-vars
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      html: {
        backgroundColor: colors.background
      },
      'h1,h2,h3,h4,h5,h6': {
        fontVariant: 'small-caps'
      },
      a: {
        color: colors.body,
        textDecoration: `none`,
        borderBottom: `1px solid ${colors.body}`
      },
      'a:hover': {
        borderBottom: `2px solid ${colors.linkHover}`
      },
      blockquote: {
        borderLeft: `${rhythm(1 / 4)} solid ${colors.smoke}`,
        color: `${colors.calm}`,
        fontStyle: `italic`,
        marginLeft: 0,
        marginRight: rhythm(1),
        marginTop: rhythm(1),
        marginBottom: rhythm(1),
        paddingLeft: rhythm(2 / 4),
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
      },
      hr: {
        background: `${colors.smoke}`,
        height: `2px`
      },
      // TODO: revisit Style gatsby-remark-images elements.
      '.gatsby-resp-image-link': {
        boxShadow: `none`
      },
      '.gatsby-resp-image-link:hover': {
        background: `none`,
        boxShadow: `none`
      },
      '@media only screen and (min-width:38rem)': {
        '.gatsby-resp-image-link': {
          borderRadius: `.15rem`,
          overflow: `hidden`
        }
      }
    };
  }
};

const typography = new Typography(options);

export default typography;

export const scale = typography.scale;
export const rhythm = typography.rhythm;
