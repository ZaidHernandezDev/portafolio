import { Box, Container, Heading, Text, Flex, Button, Link, VStack, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaArrowRight, FaEnvelope } from 'react-icons/fa';

export function Hero() {
  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      py={{ base: 12, sm: 16, md: 24, lg: 32 }}
      bgGradient="to-br"
      gradientFrom="blue.50"
      gradientTo="purple.50"
      _dark={{
        gradientFrom: 'gray.900',
        gradientTo: 'blue.900/30',
      }}
    >
      {/* Elemento decorativo de fondo */}
      <Box 
        position="absolute" 
        top="-10%" 
        right="-5%" 
        width={{ base: "300px", md: "500px" }} 
        height={{ base: "300px", md: "500px" }} 
        bg="blue.400/10" 
        borderRadius="full" 
        filter="blur(100px)" 
        pointerEvents="none" 
      />

      <Container maxW="7xl" justifySelf="center" position="relative" zIndex={1} px={{ base: 4, sm: 6, md: 8 }}>
        <Flex direction="column" align="center" textAlign="center" gap={{ base: 6, md: 8 }}>
          {/* Badge de disponibilidad */}
          <Box
            px={{ base: 3, sm: 4 }}
            py={{ base: 1.5, sm: 2 }}
            bg="green.100"
            borderRadius="full"
            borderWidth="1px"
            borderColor="green.300"
            display="inline-flex"
            alignItems="center"
            gap={2}
            animation="pulse 2s ease-in-out infinite"
            _dark={{
              bg: 'green.900/30',
              borderColor: 'green.700',
            }}
          >
            <Box width="8px" height="8px" bg="green.500" borderRadius="full" animation="ping 2s ease-in-out infinite" />
            <Text fontSize={{ base: "xs", sm: "sm" }} fontWeight="medium" color="green.700" _dark={{ color: 'green.300' }}>
              Disponible para nuevos proyectos
            </Text>
          </Box>

          {/* Título principal - Propuesta de valor clara */}
          <VStack gap={{ base: 3, md: 4 }} maxW="4xl" px={{ base: 2, sm: 4 }}>
            <Heading 
              as="h1" 
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl', xl: '6xl' }} 
              fontWeight="black" 
              lineHeight="1.1" 
              letterSpacing="-0.02em"
            >
              Transformo ideas en{' '}
              <Text 
                as="span" 
                bgGradient="to-r" 
                gradientFrom="blue.500" 
                gradientTo="purple.600" 
                bgClip="text" 
                display="inline-block" 
                paddingY={{ base: "4px", md: "7px" }}
              >
                experiencias digitales
              </Text>{' '}
              que funcionan
            </Heading>

            <Text 
              fontSize={{ base: 'md', sm: 'lg', md: 'xl' }} 
              color="fg.muted" 
              maxW="2xl" 
              lineHeight="tall" 
              fontWeight="medium"
              px={{ base: 2, sm: 0 }}
            >
              Desarrollador Full Stack especializado en crear aplicaciones web modernas, rápidas y escalables con React, TypeScript y Python.
            </Text>
          </VStack>

          {/* CTAs principales */}
          <VStack gap={{ base: 3, sm: 4 }} width={{ base: "100%", sm: "auto" }} px={{ base: 4, sm: 0 }}>
            <HStack gap={4} flexWrap="wrap" justify="center" width="100%">
              <Link href="#proyectos" _hover={{ textDecoration: 'none' }} width={{ base: "100%", sm: "auto" }}>
                <Button
                  size={{ base: "md", sm: "lg" }}
                  colorPalette="blue"
                  px={{ base: 6, sm: 8 }}
                  py={{ base: 5, sm: 6 }}
                  fontSize={{ base: "md", sm: "lg" }}
                  fontWeight="bold"
                  width={{ base: "100%", sm: "auto" }}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'xl',
                  }}
                  transition="all 0.3s"
                >
                  <HStack gap={2}>
                    <Text>Ver mis proyectos</Text>
                    <FaArrowRight />
                  </HStack>
                </Button>
              </Link>

              <Link href="#contacto" _hover={{ textDecoration: 'none' }} width={{ base: "100%", sm: "auto" }}>
                <Button
                  size={{ base: "md", sm: "lg" }}
                  variant="outline"
                  px={{ base: 6, sm: 8 }}
                  py={{ base: 5, sm: 6 }}
                  fontSize={{ base: "md", sm: "lg" }}
                  fontWeight="bold"
                  borderWidth="2px"
                  width={{ base: "100%", sm: "auto" }}
                  _hover={{
                    transform: 'translateY(-2px)',
                    borderColor: 'blue.500',
                  }}
                  transition="all 0.3s"
                >
                  <HStack gap={2}>
                    <FaEnvelope />
                    <Text>Contáctame</Text>
                  </HStack>
                </Button>
              </Link>
            </HStack>
          </VStack>

          {/* Links sociales */}
          <HStack gap={{ base: 2, sm: 4 }} pt={{ base: 2, md: 4 }} flexWrap="wrap" justify="center">
            <Link
              href="https://github.com/ZaidHernandezDev"
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              gap={2}
              px={{ base: 3, sm: 4 }}
              py={2}
              borderRadius="md"
              transition="all 0.3s"
              _hover={{
                bg: 'bg.muted',
                transform: 'translateY(-2px)',
              }}
            >
              <FaGithub size={20} />
              <Text fontWeight="medium" fontSize={{ base: "sm", sm: "md" }}>GitHub</Text>
            </Link>

            <Link
              href="https://www.linkedin.com/in/zaid-alberto-ramirez-hernandez-web-dev-jr/"
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              gap={2}
              px={{ base: 3, sm: 4 }}
              py={2}
              borderRadius="md"
              transition="all 0.3s"
              _hover={{
                bg: 'bg.muted',
                transform: 'translateY(-2px)',
              }}
            >
              <FaLinkedin size={20} />
              <Text fontWeight="medium" fontSize={{ base: "sm", sm: "md" }}>LinkedIn</Text>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
