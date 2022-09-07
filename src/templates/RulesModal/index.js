import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled } from '../../stitches.config';
import RulesImage from '../../assets/image-rules.svg';
import CloseIcon from '../../assets/icon-close.svg';

const Overlay = styled('section', {
  position: 'absolute',
  top: '0',
  left: '0',
  backgroundColor: 'rgba(0,0,0,0.25)',
  height: '100vh',
  width: '100vw',
  display: 'grid',
  placeItems: 'center'
});

const StyledRulesModal = styled('section', {
  position: 'relative',
  height: '100vh',
  width: '100vw',
  backgroundColor: '$white',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: '$darkText',
  textTransform: 'uppercase',
  fontSize: '2rem',
  fontWeight: '700',
  padding: '4rem auto',

  button: {
    backgroundColor: 'transparent',
    border: 'none'
  },

  '@bp1': {
    width: '25rem',
    height: '25rem',
    borderRadius: '1rem',
    display: 'grid',
    gridTemplateRows: 'repeat(2, auto)',

    button: {
      position: 'absolute',
      top: '2rem',
      right: '2rem'
    }
  }
});

export default function RulesModal({ show, setShow }) {
  if (!show) return null;

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <Overlay onClick={() => setShow(false)}>
      <StyledRulesModal onClick={(e) => e.stopPropagation()}>
        Rules
        <img src={RulesImage} alt="rules" />
        <button type="button" onClick={() => setShow(false)}>
          <img src={CloseIcon} alt="close rules" />
        </button>
      </StyledRulesModal>
    </Overlay>
  );
}

RulesModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired
};
