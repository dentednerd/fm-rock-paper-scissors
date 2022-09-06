import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        scissorsDark: 'hsl(39, 89%, 49%)',
        scissorsLight: 'hsl(40, 84%, 53%)',
        paperDark: 'hsl(230, 89%, 62%)',
        paperLight: 'hsl(230, 89%, 65%)',
        rockDark: 'hsl(349, 71%, 52%)',
        rockLight: 'hsl(349, 70%, 56%)',
        lizardDark: 'hsl(261, 73%, 60%)',
        lizardLight: 'hsl(261, 72%, 63%)',
        cyanDark: 'hsl(189, 59%, 53%)',
        cyanLight: 'hsl(189, 58%, 57%)',
        darkText: 'hsl(229, 25%, 31%)',
        scoreText: 'hsl(229, 64%, 46%)',
        headerOutline: 'hsl(217, 16%, 45%)',
        radialLight: 'hsl(214, 47%, 23%)',
        radialDark: 'hsl(237, 49%, 15%)',
        white: 'hsl(255, 100%, 100%)'
      },
      fonts: {
        Barlow: 'Barlow Semi Condensed'
      },
      fontWeights: {
        1: '600',
        2: '700'
      }
    },
    media: {
      bp1: '(min-width: 480px)'
    },
    utils: {
      marginX: (value) => ({ marginLeft: value, marginRight: value })
    }
  });
