import React, { useState } from 'react'
import { VStack, useBreakpointValue, IconButton, Collapse } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { projects } from '../utilities/projects'
import { HamburgerIcon } from '@chakra-ui/icons'

const MotionIconButton = motion(IconButton)

export default function ProjectCategories({
  selectedCategory,
  onCategoryClick
}) {
  const categories = [...new Set(projects.map(project => project.category))]
  const isMobile = useBreakpointValue({ base: true, md: false })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const topPosition = useBreakpointValue({
    base: '2%',
    md: '45%'
  })

  return (
    <VStack
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
      position="fixed"
      top={topPosition}
      left="4"
      backgroundColor="transparent"
      zIndex="10"
      cursor="pointer"
      fontFamily="Verdana, Geneva, Tahoma, sans-serif"
      fontSize=".7rem"
      fontWeight="bold"
      filter='brightness(150%)'
      spacing={6}
    >
      {isMobile ? (
        <>
          <MotionIconButton
            icon={<HamburgerIcon />}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            userSelect='none'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            sx={{
              bg: 'transparent',
              _active: { bg: 'transparent' },
              _hover: { bg: 'transparent' },
              _focus: { boxShadow: 'none' },
              _visited: { boxShadow: 'none' },
              _focusVisible: { boxShadow: 'none' },
              _disabled: { cursor: 'not-allowed', opacity: 0.5 },
              color: 'white'            }}
          />

          <Collapse in={isMenuOpen}>
            <VStack
              position="absolute"
              userSelect='none'
              top={isMobile ? '100%' : 'auto'}
              left={isMobile ? '0' : 'auto'}
              right={isMobile ? '0' : 'auto'}
              backgroundColor="transparent"
              boxShadow="md"
              zIndex="100"
              mt="1"
              p="2"
              opacity={selectedCategory ? 1 : 0.7}
            >
              {categories.map((category, index) => {
                const categoryColor =
                  selectedCategory === category
                    ? projects.find(project => project.category === category).color
                    : 'white'

                return (
                  <motion.p
                    key={index}
                    onClick={() => onCategoryClick(category)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: selectedCategory === category ? 1 : 0.7, color: categoryColor }}
                    transition={{ duration: 0.2 }}
                    className="projectCategories"
                  >
                    {category}
                  </motion.p>
                )
              })}
            </VStack>
          </Collapse>
        </>
      ) : (
        // Render desktop version without hamburger menu
        categories.map((category, index) => {
          const categoryColor =
            selectedCategory === category
              ? projects.find(project => project.category === category).color
              : 'white'

          return (
            <motion.p
              key={index}
              onClick={() => onCategoryClick(category)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedCategory === category ? 1 : 0.7, color: categoryColor }}
              transition={{ duration: 0.2 }}
              className="projectCategories"
            >
              {category}
            </motion.p>
          )
        })
      )}
    </VStack>
  )
}
