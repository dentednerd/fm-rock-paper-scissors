import { globalCss } from '../stitches.config';
import '@fontsource/barlow-semi-condensed/600.css';
import '@fontsource/barlow-semi-condensed/700.css';

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontSize: '16px',
    lineHeight: '1.2',
    color: 'white',
    fontFamily: '$Barlow'
  },

  body: {
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    backgroundImage: 'radial-gradient(circle at center, $radialLight, $radialDark)'
  },

  main: {
    maxWidth: '1366px',
    margin: '0 auto',
    padding: '1rem'
  }
});

export default globalStyles;
