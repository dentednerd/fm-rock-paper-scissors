import { styled } from '../../stitches.config';

const StyledScore = styled('section', {
  backgroundColor: '$white',
  borderRadius: '0.25rem',
  aspectRatio: '10 / 9',
  height: '4.5rem',
  textTransform: 'uppercase',
  color: '$scoreText',
  fontSize: '0.75rem',
  letterSpacing: '0.06125rem',
  lineHeight: '1',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',

  span: {
    fontSize: '2.5rem',
    lineHeight: '1',
    height: '2.5rem',
    color: '$darkText',
    fontWeight: '$2'
  },

  '@bp1': {
    height: '5.75rem',

    span: {
      fontSize: '2.75rem'
    }
  }
});

export default function Score() {
  return (
    <StyledScore>
      Score
      <span>0</span>
    </StyledScore>
  );
}
