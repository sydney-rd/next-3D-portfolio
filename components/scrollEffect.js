import React from 'react';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import { ChevronDownIcon } from '@chakra-ui/icons';

const ScrollEffect = ({ currentPage }) => {
  const handleScroll = () => {
    if (currentPage === 'index') {
      // Scroll to the projects section
      animateScroll.scrollTo('projectPage', {
        duration: 800,
        smooth: 'easeInOutQuart'
      });
    } else if (currentPage === 'projectPage') {
      // Scroll to the about section
      animateScroll.scrollTo('about', {
        duration: 800,
        smooth: 'easeInOutQuart'
      });
    }
  };

  const chevronStyle = {
    position: 'fixed',
    bottom: '2rem',
    right: '1rem',
    zIndex: 999,
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '50%',
    padding: '0.5rem',
    cursor: 'pointer'
  };

  return (
    <ScrollLink to={currentPage === 'index' ? 'projectPage' : 'about'} smooth={true} duration={800}>
      <ChevronDownIcon onClick={handleScroll} style={chevronStyle} />
    </ScrollLink>
  );
};

export default ScrollEffect;
