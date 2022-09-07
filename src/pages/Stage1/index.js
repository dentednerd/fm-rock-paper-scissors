import { styled } from '../../stitches.config';
import Triangle from '../../assets/bg-triangle.svg';
import Choice from '../../atoms/Choice';

const StageGridContainer = styled('section', {
  backgroundImage: `url(${Triangle})`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '16rem',
  height: '20rem',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 50%)',
  gridTemplateRows: 'repeat(2, 50%)',

  '@media (min-width: 768px)': {
    height: '27rem',
    width: '30rem',
    margin: '0 auto'
  }
});

const StageGridItem = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export default function Stage1() {
  return (
    <StageGridContainer>
      <StageGridItem>
        <Choice choice="paper" />
      </StageGridItem>
      <StageGridItem>
        <Choice choice="scissors" />
      </StageGridItem>
      <StageGridItem style={{ gridColumn: '1 / 3' }}>
        <Choice choice="rock" />
      </StageGridItem>
    </StageGridContainer>
  );
}
