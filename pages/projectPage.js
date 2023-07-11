import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, Stars, Html } from '@react-three/drei'
import { projects } from '../utilities/projects'
import { motion } from 'framer-motion'
import ProjectCategories from '../components/projectCategories'
import ProjectModal from '../components/projectmodal'
import NavBar from '../components/navBar'
import {
  Flex,
  useDisclosure,
  VStack,
  Link as ChakraLink
} from '@chakra-ui/react'

const MotionChakraLink = motion(ChakraLink)

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState('WEB')
  const [hoveredItem] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Modal
  const handleClick = project => {
    setSelectedProject(project)
    onOpen()
  }

  const filteredProjects = projects.filter(
    project => project.category === selectedCategory
  )

  return (
    <>
      {!isOpen && <NavBar />}
      <Flex minHeight="100vh" width="100vw" position="relative">
        {!isOpen && (
          <ProjectCategories
            selectedCategory={selectedCategory}
            onCategoryClick={setSelectedCategory}
          />
        )}
        <Canvas
          camera={{ position: [0, 5, 30] }}
          style={{ width: '100vw', height: '100vh' }}
        >
          <OrbitControls autoRotate autoRotateSpeed={0.3} maxDistance={60} />
          <Sky sunPosition={[0, 0, 0]} />
          <Stars fade />
          <Html fullscreen transform>
            <VStack
              align="flex-end"
              flexGrow={1}
              pr={['4rem', '7rem']}
              zIndex={0}
              maxH="100vh"
              position="relative"
              visibility={isOpen ? 'hidden' : 'visible'}
              userSelect="none"
            >
              {filteredProjects.map((project, index) => (
                <MotionChakraLink
                  key={index}
                  sx={{
                    opacity: '1',
                    fontFamily: 'Ailerons',
                    fontSize: ['3rem', '9rem'],
                    whiteSpace: ['normal', 'nowrap'],
                    textAlign: 'right',
                    cursor: 'pointer',
                    filter: 'brightness(150%)',
                    color:
                      hoveredItem === project.name
                        ? project.color
                        : 'transparent',
                    WebkitTextStroke: '2px',
                    WebkitTextStrokeColor: project.color,
                    _hover: {
                      color: project.color,
                      textShadow: `1px 1px 7px ${project.color}`,
                      transition: '1s' 
                    }
                  }}
                  onClick={() => handleClick(project)}
                >
                  {project.name}
                </MotionChakraLink>
              ))}
            </VStack>
          </Html>
        </Canvas>
        {selectedProject && (
          <ProjectModal
          isOpen={isOpen}
          onClose={onClose}
          project={selectedProject}
          zIndex={10}
          />
          )}
      </Flex>
    </>
  )
}
