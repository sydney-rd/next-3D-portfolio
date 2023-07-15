import {
  Modal,
  ModalContent,
  ModalHeader,
  Box,
  ModalCloseButton,
  ModalOverlay,
  Flex,
  useBreakpointValue
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionModal = motion(Modal);
const MotionModalContent = motion(ModalContent);

const ProjectModal = ({ isOpen, onClose, project }) => {
  const { name, description, projectBg, color, github, link } = project;

  const responsiveStyles = useBreakpointValue({
    base: {
      titleFontSize: '4.5rem',
      gifHeight: '25vh',
      gifWidth: '70vw',
      top: '21rem',
      contentFontSize: '.9rem',
      showBorder: true,
      CloseBtnPosTop: '1.5rem',
      CloseBtnPosRight: '45%'
    },
    md: {
      titleFontSize: '8rem',
      gifHeight: '45vh',
      gifWidth: '45vw',
      contentFontSize: '1rem',
      CloseBtnPosTop: '2rem',
      CloseBtnPosRight: '50%'
    }
  });

  return (
    <MotionModal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
    >
      <ModalOverlay />
      <MotionModalContent
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        textAlign="center"
        backgroundColor="black"
        border="solid"
        borderColor={color}
        borderRadius="2rem"
        zIndex={1}
        position="relative"
        userSelect="none"
      >
        <ModalHeader
          sx={{
            fontFamily: 'Ailerons',
            fontSize: responsiveStyles?.titleFontSize,
            textAlign: 'center',
            color: color,
            textShadow: `0px 0px 10px ${color}`
          }}
        >
          {name}
        </ModalHeader>
        <ModalCloseButton
          sx={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            top: responsiveStyles?.CloseBtnPosTop,
            right: responsiveStyles?.CloseBtnPosRight,
            transform: 'translateY(-50%)',
            size: 'xl',
            color: color,
            zIndex: 10,
            '&:focus': {
              boxShadow: 'none'
            }
          }}
        />
        {/* gif */}
        <Box display="flex" justifyContent="center">
          <Box
            sx={{
              backgroundImage: `url(${projectBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: responsiveStyles?.gifHeight,
              width: responsiveStyles?.gifWidth,
              borderRadius: '2rem',
              zIndex: 2
            }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: responsiveStyles?.top,
            bottom: '3rem',
            fontSize: responsiveStyles?.contentFontSize,
            color: 'white',
            fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflowY: responsiveStyles?.showBorder ? 'scroll' : 'visible',
            borderTop: responsiveStyles?.showBorder
              ? `1px solid ${color}`
              : 'none',
            borderBottom: responsiveStyles?.showBorder
              ? `1px solid ${color}`
              : 'none',
            padding: responsiveStyles?.showBorder ? '1rem' : 0
          }}
        >
          <Flex flexDirection="row">
            <motion.div
              whileHover={{ scale: 1.1 }} // Scale up on hover
              style={{
                display: 'inline-block',
                marginRight: '.8rem',
                paddingBottom: '.5rem'
              }}
            >
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: 'white',
                  textShadow: `0px 0px 5px ${color}` // Add text shadow effect
                }}
              >
                GITHUB
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }} // Scale up on hover
              style={{
                display: 'inline-block',
                marginRight: '.8rem',
                paddingBottom: '.5rem'
              }}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: 'white',
                  textShadow: `0px 0px 5px ${color}` // Add text shadow effect
                }}
              >
                LINK
              </a>
            </motion.div>
          </Flex>
          <p style={{ marginTop: '1rem' }}>{description}</p>
        </Box>
      </MotionModalContent>
    </MotionModal>
  );
};

export default ProjectModal;

