import { styled } from '../../stitches.config';

const StyledRulesButton = styled('button', {
  backgroundColor: 'transparent',
  textTransform: 'uppercase',
  letterSpacing: '0.2rem',
  border: 'solid 0.125rem $headerOutline',
  borderRadius: '0.5rem',
  width: '40%',
  padding: '0.5rem'
});

export default function RulesButton() {
  return <StyledRulesButton>Rules</StyledRulesButton>;
}
