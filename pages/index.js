import React from 'react'
import { Flex } from '@chakra-ui/react'
import Title from '../components/title'

export default function Index() {
  return (
    <Flex direction="column" backgroundSize='cover' width="100vw" height="100vh" bg="black">
      <Title />
      {/* Add other components/content here */}
    </Flex>
  )
}
