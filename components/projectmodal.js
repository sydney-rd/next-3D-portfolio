import { Modal, ModalContent, ModalHeader, Box, ModalCloseButton, ModalBody, ModalOverlay, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionModal = motion(Modal);
const MotionModalContent = motion(ModalContent);

const ProjectModal = ({ isOpen, onClose, project }) => {
  const { name, description, projectBg, color, github, link } = project;

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
        backgroundColor="transparent"
        border="solid"
        borderColor={color}
        borderRadius= "2rem"
        zIndex={1}
        position="relative"
      >
        <ModalHeader
          sx={{
            fontFamily: 'Ailerons',
            fontSize: '8rem',
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
            top: '2rem',
            right: '50%',
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
              height: '45vh',
              width: '45vw',
              borderRadius: '2rem',
              zIndex: 2
            }}
          />
        </Box>
        <ModalBody
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '2rem',
            fontSize: '1rem',
            color: 'white',
            maxW: '40rem',
            fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Flex flexDirection="row">
            <motion.div
              whileHover={{ scale: 1.1 }} // Scale up on hover
              style={{
                display: 'inline-block',
                marginRight: '.8rem',
                paddingBottom: '.5rem',
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
                paddingBottom: '.5rem',
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
          <p style={{ marginTop: '1rem'}}>{description}</p>
        </ModalBody>
      </MotionModalContent>
    </MotionModal>
  );
};

export default ProjectModal;

// higher scale or hoover 