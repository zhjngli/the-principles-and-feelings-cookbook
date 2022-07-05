import { css } from 'glamor';

import { rhythm } from '../../theme/typography';

export default {
  listContainer: css({
    paddingTop: rhythm(1),
    paddingBottom: rhythm(1),
    marginLeft: 0,
    listStyle: `none`
  }),
  post: css({
    fontWeight: 400
  })
};
