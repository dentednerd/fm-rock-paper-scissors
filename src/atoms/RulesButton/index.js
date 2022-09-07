import PropTypes from 'prop-types';
import { styled } from '../../stitches.config';

const StyledRulesButton = styled('button', {
  backgroundColor: 'transparent',
  textTransform: 'uppercase',
  letterSpacing: '0.2rem',
  border: 'solid 0.125rem $headerOutline',
  borderRadius: '0.5rem',
  width: '8.25rem',
  padding: '0.5rem',
  margin: '0 auto',

  '@bp1': {
    position: 'absolute',
    bottom: '2rem',
    right: '2rem'
  }
});

export default function RulesButton({ setShow }) {
  return <StyledRulesButton onClick={() => setShow(true)}>Rules</StyledRulesButton>;
}

RulesButton.propTypes = {
  setShow: PropTypes.func.isRequired
};
