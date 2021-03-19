import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  container: {
    position: 'relative',
    width: '100vw',
    height: '100%',
    transition: '1.8s ease-in-out',
    overflow: 'overlay',
    msOverflowStyle: 'none' /* IE and Edge */,
    scrollbarWidth: 'auto' /* Firefox */,
    '::webkitScrollbar': {
      width: '0px',
      background: 'transparent' /* make scrollbar transparent */
    },
    '::webkitScrollbarTrack': {
      background: 'transparent'
    }
  }
}));
