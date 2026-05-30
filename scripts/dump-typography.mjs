import Typography from 'typography'
import { writeFileSync, mkdirSync } from 'node:fs'

const colors = {
  header: 'hsla(0,0%,10%,1)',
  body: 'hsla(0,0%,20%,1)',
  calm: 'hsla(0,0%,75%,1)',
  smoke: 'hsla(0,0%,80%,1)',
  background: '#f0ead6',
  linkHover: '#D70C0C'
}

const typography = new Typography({
  scaleRatio: 2,
  baseFontSize: '16px',
  baseLineHeight: 1.8,
  headerColor: colors.header,
  bodyColor: colors.body,
  headerWeight: 600,
  headerFontFamily: ['Open Sans', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  overrideStyles: ({ rhythm }) => ({
    html: { backgroundColor: colors.background },
    'h1,h2,h3,h4,h5,h6': { fontVariant: 'all-small-caps' },
    a: { color: colors.body, textDecoration: 'none', borderBottom: `1px solid ${colors.body}` },
    'a:hover': { borderBottom: `2px solid ${colors.linkHover}` },
    blockquote: {
      borderLeft: `${rhythm(1 / 4)} solid ${colors.smoke}`,
      color: colors.calm,
      fontStyle: 'italic',
      marginLeft: 0,
      marginRight: rhythm(1),
      marginTop: rhythm(1),
      marginBottom: rhythm(1),
      paddingLeft: rhythm(2 / 4),
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0
    },
    hr: { background: colors.smoke, height: '2px' }
  })
})

mkdirSync('src/styles', { recursive: true })
writeFileSync('src/styles/typography-base.css', typography.toString() + '\n')
console.log('Wrote src/styles/typography-base.css')
