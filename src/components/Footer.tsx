import { Box, Container, Text, Flex, Link, HStack, VStack, Separator } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" borderTopWidth="1px" borderColor="border.default" py={12} mt="auto" bg="bg.subtle">
      <Container maxW="7xl" justifySelf="center">
        <VStack gap={8}>
          {/* Links de navegación y redes sociales */}
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align={{ base: 'center', md: 'start' }} w="full" gap={8}>
            {/* Marca */}
            <VStack align={{ base: 'center', md: 'start' }} gap={2}>
              <Text fontSize="xl" fontWeight="black" bgGradient="to-r" gradientFrom="blue.500" gradientTo="purple.600" bgClip="text">
                Zaid Alberto Ramírez Hernández
              </Text>
              <Text fontSize="sm" color="fg.muted">
                Desarrollador Full Stack
              </Text>
            </VStack>

            {/* Enlaces de navegación */}
            <HStack gap={8} flexWrap="wrap" justify={{ base: 'center', md: 'start' }}>
              <Link href="#sobre-mi" fontSize="sm" fontWeight="medium" _hover={{ color: 'blue.500' }} transition="color 0.3s">
                Sobre mí
              </Link>
              <Link href="#proyectos" fontSize="sm" fontWeight="medium" _hover={{ color: 'blue.500' }} transition="color 0.3s">
                Proyectos
              </Link>
              <Link href="#contacto" fontSize="sm" fontWeight="medium" _hover={{ color: 'blue.500' }} transition="color 0.3s">
                Contacto
              </Link>
            </HStack>

            {/* Redes sociales */}
            <HStack gap={4}>
              <Link
                href="https://github.com/ZaidHernandezDev"
                target="_blank"
                rel="noopener noreferrer"
                p={2}
                borderRadius="md"
                transition="all 0.3s"
                _hover={{
                  bg: 'bg.muted',
                  transform: 'translateY(-2px)',
                }}
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/zaid-alberto-ramirez-hernandez-web-dev-jr/"
                target="_blank"
                rel="noopener noreferrer"
                p={2}
                borderRadius="md"
                transition="all 0.3s"
                _hover={{
                  bg: 'bg.muted',
                  transform: 'translateY(-2px)',
                }}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </Link>
            </HStack>
          </Flex>

          {/* Copyright */}
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" w="full" gap={4}>
            <Text fontSize="sm" color="fg.muted" textAlign="center">
              &copy; {currentYear} Zaid Alberto Ramírez Hernández. Todos los derechos reservados.
            </Text>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
