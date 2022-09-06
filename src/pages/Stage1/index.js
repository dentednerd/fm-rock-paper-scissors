import { styled } from '../../stitches.config';
import Triangle from '../../assets/bg-triangle.svg';
import Choice from '../../atoms/Choice';

const StyledStage1 = styled('section', {
  backgroundImage: `url(${Triangle})`,
  backgroundPosition: '50% 25%',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '17.5rem',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  textAlign: 'center'
});

export default function Stage1() {
  return (
    <StyledStage1>
      <Choice choice="paper" />
      <Choice choice="scissors" />
      <Choice choice="rock" />
    </StyledStage1>
  );
}
