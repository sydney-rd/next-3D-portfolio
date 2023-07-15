import React, { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Layout from '../components/layouts/main';
import '../styles.css';

const Website = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      setIsLoading(false);
    }, 3000); // Adjust the countdown time and delay time as needed
  }, []);

  return (
    <ChakraProvider>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '2rem',
          }}
        >
          {countdown}
        </div>
      ) : (
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      )}
    </ChakraProvider>
  );
};

export default Website;
