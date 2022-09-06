import { styled } from '../../stitches.config';
import Logo from '../../atoms/Logo';
import Score from '../../atoms/Score';

const StyledHeader = styled('header', {
  padding: '10px',
  border: 'solid 0.125rem $headerOutline',
  borderRadius: '0.5rem',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',

  img: {
    height: '3rem',
    padding: '0 12px'
  }
});

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Score />
    </StyledHeader>
  );
}
