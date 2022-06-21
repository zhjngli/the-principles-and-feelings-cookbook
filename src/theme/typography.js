import Typography from 'typography';

import colors from './colors';

const baseFontSize = '16px';
const codeFontSize = '14px';

const options = {
  scaleRatio: 1.5,
  baseFontSize: baseFontSize,
  baseLineHeight: 1.8,
  headerColor: `${colors.header}`,
  bodyColor: `${colors.body}`,
  blockMarginBottom: 0.75,
  headerWeight: 600,
  headerFontFamily: [`Noto Serif`, `serif`],
  bodyFontFamily: [`Noto Serif`, `serif`],
  // eslint-disable-next-line no-unused-vars
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
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
      },
      // Code highlighting.
      'tt, code': {
        fontFamily: `Hack,monospace`,
        // TODO: revisit Disable ligatures as they don't exist in Hack
        // fontVariant: `none`,
        fontSize: codeFontSize, // needed for certain themes which set font-size
        WebkitFontFeatureSettings: `"clig" 0, "calt" 0`,
        fontFeatureSettings: `"clig" 0, "calt" 0`,
        paddingTop: `0.1em`,
        paddingBottom: `0.1em`,
        backgroundColor: colors.codeBackground,
        borderRadius: `2px`
      },
      // Inline code highlighting.
      "body :not(pre) > code[class*='language-']": {
        backgroundColor: colors.codeBackground
      },
      // Add space before and after code/tt elements.
      // @see https://github.com/KyleAMathews/typography.js/blob/66f78f0f4b8d2c5abf0262bcc1118610139c3b5f/packages/typography-plugin-code/src/index.js#L38-L46
      'code:before,code:after,tt:before,tt:after': {
        letterSpacing: `-0.2em`,
        content: `"\u00A0"`
      },
      // But don't add spaces if the code is inside a pre.
      'pre code:before,pre code:after,pre tt:before,pre tt:after': {
        content: `""`
      },
      // Highlighted code blocks in Markdown via gatsby-remark-prismjs.
      '.gatsby-highlight': {
        backgroundColor: colors.codeBackground,
        borderRadius: `.15rem`,
        marginTop: `0`,
        marginBottom: rhythm(3 / 4),
        padding: rhythm(3 / 4),
        overflow: `auto`
      },
      ".gatsby-highlight pre[class*='language-']": {
        backgroundColor: `transparent`,
        borderRadius: 0,
        margin: 0,
        padding: 0,
        overflow: `initial`,
        float: `left`,
        minWidth: `100%`,
        textShadow: `none`
      },
      ".gatsby-highlight pre[class*='language-'].line-numbers": {
        fontSize: codeFontSize, // needed for certain themes which set font-size
        paddingLeft: `2.9em`
      },
      '.gatsby-highlight-code-line': {
        background: colors.codeHighlight,
        display: `block`,
        marginRight: rhythm(-3 / 4),
        marginLeft: rhythm(-3 / 4),
        paddingRight: rhythm(3 / 4),
        paddingLeft: rhythm(2 / 4),
        borderLeft: `${rhythm(1 / 5)} solid ${colors.codeHighlightLeftBorder}`
      }
    };
  }
};

const typography = new Typography(options);

export default typography;

export const scale = typography.scale;
export const rhythm = typography.rhythm;
