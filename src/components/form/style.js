import { css } from 'glamor';

import colors from '../../theme/colors';
import { rhythm, scale } from '../../theme/typography';

const formStyle = css({
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '14px',
  color: colors.body
});

export default {
  formContainer: css({
    maxWidth: `24rem`,
    margin: `${rhythm(1)} 0`
  }),
  formFieldsContainer: css({
    margin: `${rhythm(3 / 4)} 0`,
    '& label': {
      ...scale(-2 / 5),
      display: 'inline-block',
      margin: `${rhythm(1 / 4)} 0`,
      lineHeight: '1rem'
    },
    '& textarea, & input': [
      formStyle,
      {
        ...scale(-2 / 5),
        width: '100%',
        backgroundColor: colors.lightBackground,
        padding: `${rhythm(1 / 8)}`,
        border: `1px solid ${colors.body}`,
        borderRadius: '3px',
        resize: 'vertical',
        '&:focus': {
          backgroundColor: `${colors.whiteSmoke}`,
          outline: `${colors.header} auto 1px`
        }
      }
    ]
  }),
  nameContainer: css([
    formStyle,
    {
      ...scale(-4 / 5),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  ]),
  firstNameContainer: css({
    marginRight: rhythm(1)
  }),
  submitButton: css([
    formStyle,
    {
      ...scale(2 / 5),
      fontVariant: 'small-caps',
      letterSpacing: '0.04em',
      cursor: 'pointer',

      border: 'none',
      borderRadius: '3px',
      backgroundColor: `${colors.header}`,
      color: `${colors.white}`,
      padding: '6px 16px',

      '&:hover': {
        backgroundColor: '#555'
      }
    }
  ])
};
