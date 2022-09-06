import { styled } from '../../stitches.config';

const StyledScore = styled('section', {
  backgroundColor: '$white',
  borderRadius: '0.25rem',
  height: '4.5rem',
  width: '5rem',
  textTransform: 'uppercase',
  color: '$scoreText',
  fontSize: '0.75rem',
  letterSpacing: '0.06125rem',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',

  span: {
    fontSize: '1.75rem',
    color: '$darkText',
    fontWeight: 700
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
