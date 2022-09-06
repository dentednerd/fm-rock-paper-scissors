import PropTypes from 'prop-types';
import { styled } from '../../stitches.config';

import paper from '../../assets/icon-paper.svg';
import rock from '../../assets/icon-rock.svg';
import scissors from '../../assets/icon-scissors.svg';

const StyledChoice = styled('section', {
  borderStyle: 'solid',
  borderWidth: '1rem',
  borderRadius: '50%',
  backgroundColor: '$white',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '0 1 9rem',
  aspectRatio: '1 / 1',
  color: '$darkText',
  margin: '0 auto'
});

export default function Choice({ choice }) {
  const icons = {
    paper,
    rock,
    scissors
  };

  return (
    <StyledChoice css={{ bc: `$${choice}Light`, dropShadow: `$colors$${choice}Dark` }}>
      <img src={icons[choice]} alt={choice} />
    </StyledChoice>
  );
}

Choice.propTypes = {
  choice: PropTypes.string.isRequired
};
