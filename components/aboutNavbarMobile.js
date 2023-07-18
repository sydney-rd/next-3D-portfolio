// import React from 'react';
// import { Box, VStack, Image } from '@chakra-ui/react';
// import Link from 'next/link';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// export default function AboutNavbarMobile() {
//   const iconStyle = {
//     fontSize: '1.1rem',
//     color: 'white',
//     cursor: 'pointer'
//   };

//   const navBarStyle = {
//     color: 'white',
//     whiteSpace: 'pre',
//     WebkitTextStroke: `1px purple`,
//     transition: 'color 0.3s',
//     fontSize: '.7rem',
//     fontWeight: 'bold',
//     fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
//     filter: 'brightness(150%)',
//     transitionDelay: '0.8s',
//     userSelect: 'none',
//     cursor: 'crosshair'
//   };

//   return (
//     <Box
//       position="fixed"
//       top="10"
//       right="0"
//       h="50vh"
//       display="flex"
//       flexDirection="column"
//       paddingRight=".7rem"
//       zIndex="1"
//     >
//       {/* Your Logo component */}
//       <Link href="/" passHref>
//         <a>
//           <Image src={Logo.src} alt="Logo" w="90px" style={{ cursor: 'crosshair' }} />
//         </a>
//       </Link>
//       <VStack spacing={20} align="flex-end">
//         <Box pr=".6rem" pt="2">
//           <Box transform="rotate(90deg)" whiteSpace="pre">
//             <Link href="/about" passHref>
//               <Box as="a" style={navBarStyle}>
//                 ABOUT
//               </Box>
//             </Link>
//           </Box>
//         </Box>
//         <Box pt="2">
//           <Box transform="rotate(90deg)" whiteSpace="pre">
//             <Link href="/projectPage" passHref>
//               <Box as="a" style={navBarStyle}>
//                 PROJECTS
//               </Box>
//             </Link>
//           </Box>
//         </Box>
//         <Box pr="2" pt="4">
//           <Box className="navBar" transform="rotate(90deg)" whiteSpace="pre" style={navBarStyle}>
//             RESUME
//           </Box>
//         </Box>
//       </VStack>

//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//         <Box pr="7" pt="96">
//           <Box pt="6">
//             <a href="https://www.linkedin.com/in/sydneydavid/" target="_blank" rel="noopener noreferrer">
//               <motion.span whileHover={{ color: 'pink' }} style={iconStyle}>
//                 <FaLinkedin />
//               </motion.span>
//             </a>
//           </Box>
//         </Box>
//         <Box pt="8">
//           <a href="https://github.com/sydney-rd" target="_blank" rel="noopener noreferrer">
//             <motion.span whileHover={{ color: 'pink' }} style={iconStyle}>
//               <FaGithub />
//             </motion.span>
//           </a>
//         </Box>
//         <Box pt="8">
//           <a href="mailto:sydneydavid56@gmail.com" target="_blank" rel="noopener noreferrer">
//             <motion.span whileHover={{ color: 'pink' }} style={iconStyle}>
//               <FaEnvelope />
//             </motion.span>
//           </a>
//         </Box>
//       </motion.div>
//     </Box>
//   );
// }
