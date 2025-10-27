import { Box, Container, Flex, Heading, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ColorModeButton } from './ColorMode';

export function Header() {
  return (
    <Box 
      as="header" 
      borderBottomWidth="1px" 
      borderColor="border.default" 
      py={{ base: 3, md: 4 }} 
      position="sticky" 
      top={0} 
      backdropFilter="blur(10px)" 
      bg="bg/80" 
      zIndex={10}
    >
      <Container maxW="7xl" justifySelf="center" px={{ base: 4, sm: 6, md: 8 }}>
        <Flex justify="space-between" align="center" wrap="wrap" gap={{ base: 2, sm: 4 }}>
          <Heading 
            as="h1" 
            size={{ base: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} 
            fontWeight="bold" 
            bgGradient="to-r" 
            gradientFrom="blue.400" 
            gradientTo="purple.500" 
            bgClip="text"
            lineHeight="1.2"
          >
            Zaid Alberto Ramírez Hernández
          </Heading>

          <Flex gap={{ base: 3, sm: 4, md: 6 }} align="center">
            <Link
              href="https://github.com/ZaidHernandezDev"
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              gap={2}
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              fontWeight="medium"
              transition="all 0.3s"
              _hover={{
                color: 'blue.500',
                transform: 'translateY(-2px)',
              }}
            >
              <FaGithub size={20} />
              <Box display={{ base: 'none', md: 'block' }}>Github</Box>
            </Link>

            <Link
              href="https://www.linkedin.com/in/zaid-alberto-ramirez-hernandez-web-dev-jr/"
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              gap={2}
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              fontWeight="medium"
              transition="all 0.3s"
              _hover={{
                color: 'blue.500',
                transform: 'translateY(-2px)',
              }}
            >
              <FaLinkedin size={20} />
              <Box display={{ base: 'none', md: 'block' }}>LinkedIn</Box>
            </Link>

            <ColorModeButton />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
