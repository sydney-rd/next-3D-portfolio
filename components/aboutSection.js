import React from 'react'
import { Text } from '@chakra-ui/react'

const AboutSection = () => {
  return (
    <>
      <Text fontSize="25" fontFamily="Ailerons">
        What you'll find me coding in
      </Text>
      <Text textAlign="center">
        <Text fontWeight="bold">Languages</Text> JavaScript, Python, C/C++
      </Text>
      <Text textAlign="center">
        <Text fontWeight="bold">Databases</Text> MongoDB, SQL
      </Text>
      <Text textAlign="center">
        <Text fontWeight="bold">Web Dev</Text> React, Next.js, Express, React-Fiber-Three, <br /> HTML, CSS, Tailwind, Chakra-UI, Framer Motion
      </Text>
    </>
  )
}

export default AboutSection
