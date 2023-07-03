import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { projects } from '../utilities/projects'

const MotionBox = motion(Box)

export default function ProjectCategories({
  selectedCategory,
  onCategoryClick
}) {
  const categories = [...new Set(projects.map(project => project.category))]

  return (
    <VStack
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
      position="fixed"
      top="45%"
      left="4"
      backgroundColor="transparent"
      zIndex="10"
      cursor="pointer"
      fontFamily="Verdana, Geneva, Tahoma, sans-serif"
      fontSize=".7rem"
      fontWeight="bold"
    >
      {categories.map((category, index) => {
        const categoryColor =
          selectedCategory === category
            ? projects.find(project => project.category === category).color
            : 'white'

        return (
          <MotionBox
            p="2"
            key={index}
            onClick={() => onCategoryClick(category)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: selectedCategory === category ? 1 : 0.7,
              color: categoryColor
            }}
            transition={{ duration: 0.2 }}
          >
            <p className="projectCategories">{category}</p>
          </MotionBox>
        )
      })}
    </VStack>
  )
}
