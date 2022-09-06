import { styled } from '../../stitches.config';
import logo from '../../assets/logo.svg';

const StyledLogo = styled('img', {
  height: '3rem',
  padding: '0 12px'
});

export default function Logo() {
  return <StyledLogo src={logo} alt="Rock Paper Scissors" />;
}
