import { css } from 'glamor';

import colors from '../../theme/colors';
import presets from '../../theme/presets';
import { rhythm } from '../../theme/typography';

export default {
  listContainer: css({
    paddingTop: rhythm(1),
    paddingBottom: rhythm(1),
    marginLeft: 0,
    listStyle: `none`
  }),
  date: css({
    color: colors.light,
    display: `block`,
    [presets.Mobile]: {
      float: `right`,
      marginLeft: `1rem`
    }
  })
};
