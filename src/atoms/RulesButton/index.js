import { styled } from '../../stitches.config';

const StyledRulesButton = styled('button', {
  backgroundColor: 'transparent',
  textTransform: 'uppercase',
  letterSpacing: '0.2rem',
  border: 'solid 0.125rem $headerOutline',
  borderRadius: '0.5rem',
  width: '8.25rem',
  padding: '0.5rem',

  '@media (min-width:768px)': {
    position: 'absolute',
    bottom: '2rem',
    right: '2rem'
  }
});

export default function RulesButton() {
  return <StyledRulesButton>Rules</StyledRulesButton>;
}
