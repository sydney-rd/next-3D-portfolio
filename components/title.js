import React from 'react';
import { motion } from 'framer-motion';
import { Box, Text } from '@chakra-ui/react';

const Title = () => {
  return (
    <Box
      className="container"
      display="grid"
      placeItems="center"
      textAlign="center"
    >
      <style jsx>{`
      @font-face {
        font-family: 'Ailerons';
        src: url('public/assets/Ailerons-TrialVersion/Ailerons-TrialVersion.otf') format('opentype');
    }
    

        .container {
          font-family: 'Ailerons', sans-serif;
          /* Rest of your styles */
        }

        .title {
          font-weight: 800;
          font-size: 8.5vw;
          text-transform: uppercase;
        }

        .title-word {
          animation: color-animation 4s linear infinite;
        }

        .title-word-1 {
          --color-1: #df8453;
          --color-2: #3d8dae;
          --color-3: #e4a9a8;
        }

        .title-word-2 {
          --color-1: #dbad4a;
          --color-2: #accfcb;
          --color-3: #17494d;
        }

        .title-word-3 {
          --color-1: #accfcb;
          --color-2: #e4a9a8;
          --color-3: #accfcb;
        }

        .title-word-4 {
          --color-1: #3d8dae;
          --color-2: #df8453;
          --color-3: #e4a9a8;
        }

        @keyframes color-animation {
          0% {
            color: var(--color-1);
          }
          32% {
            color: var(--color-1);
          }
          33% {
            color: var(--color-2);
          }
          65% {
            color: var(--color-2);
          }
          66% {
            color: var(--color-3);
          }
          99% {
            color: var(--color-3);
          }
          100% {
            color: var(--color-1);
          }
        }
      `}</style>
      
      <h2 className="title">
        <motion.span
          className="title-word title-word-1"
          animate={{ color: ['#DF8453', '#3D8DAE', '#E4A9A8'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Text as="span" color="var(--color-1)">
            SYDNEY
          </Text>
        </motion.span>
        <motion.span
          className="title-word title-word-2"
          animate={{ color: ['#DBAD4A', '#ACCFCB', '#17494D'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Text as="span" color="var(--color-2)">
            SOFTWARE
          </Text>
        </motion.span>
        <motion.span
          className="title-word title-word-3"
          animate={{ color: ['#ACCFCB', '#E4A9A8', '#ACCFCB'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Text as="span" color="var(--color-3)">
            DEVELOPER
          </Text>
        </motion.span>
        <motion.span
          className="title-word title-word-4"
          animate={{ color: ['#3D8DAE', '#DF8453', '#E4A9A8'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Text as="span" color="var(--color-1)">
            ENTER
          </Text>
        </motion.span>
      </h2>
    </Box>
  );
};

export default Title;
