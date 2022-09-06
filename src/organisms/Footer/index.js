import { styled } from '../../stitches.config';
import RulesButton from '../../atoms/RulesButton';

const StyledFooter = styled('footer', {
  display: 'grid',
  placeItems: 'center'
});

export default function Footer() {
  return (
    <StyledFooter>
      <RulesButton />
    </StyledFooter>
  );
}
