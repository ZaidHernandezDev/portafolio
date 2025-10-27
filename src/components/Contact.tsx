import { Box, Container, Heading, Text, VStack, HStack, Button, Link, SimpleGrid } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const contactMethods = [
  {
    icon: FaEnvelope,
    title: 'Email',
    description: 'Envíame un correo directamente',
    action: 'zramirezh1801@alumno.ipn.mx',
    href: 'mailto:zramirezh1801@alumno.ipn.mx',
    color: 'red',
  },
  {
    icon: FaGithub,
    title: 'GitHub',
    description: 'Revisa mi código y proyectos',
    action: '@ZaidHernandezDev',
    href: 'https://github.com/ZaidHernandezDev',
    color: 'gray',
  },
  {
    icon: FaLinkedin,
    title: 'LinkedIn',
    description: 'Conectemos profesionalmente',
    action: 'Ver perfil',
    href: 'https://www.linkedin.com/in/zaid-alberto-ramirez-hernandez-web-dev-jr/',
    color: 'blue',
  },
];

export function Contact() {
  return (
    <Box
      as="section"
      id="contacto"
      py={{ base: 12, md: 16, lg: 24 }}
      bgGradient="to-br"
      gradientFrom="blue.50"
      gradientTo="purple.50"
      _dark={{
        gradientFrom: 'gray.900',
        gradientTo: 'blue.900/30',
      }}
    >
      <Container maxW="7xl" justifySelf="center" px={{ base: 4, sm: 6, md: 8 }}>
        <VStack gap={{ base: 8, md: 12 }}>
          {/* Título con CTA fuerte */}
          <VStack gap={{ base: 4, md: 6 }} textAlign="center" maxW="3xl" px={{ base: 2, sm: 0 }}>
            <Heading as="h2" fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }} fontWeight="black" lineHeight="1.1">
              ¿Tienes un proyecto en mente?
            </Heading>
            <Text fontSize={{ base: 'md', sm: 'lg', md: 'xl' }} color="fg.muted" lineHeight="tall">
              Estoy disponible para colaborar en proyectos interesantes. Ya sea que necesites un nuevo sitio web, una aplicación o ayuda con tu proyecto actual, me encantaría escucharte.
            </Text>
          </VStack>

          {/* Métodos de contacto */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={{ base: 4, md: 6 }} w="full">
            {contactMethods.map((method, index) => (
              <Link key={index} href={method.href} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
                <Box
                  p={{ base: 5, sm: 6, md: 8 }}
                  bg="bg"
                  borderRadius="xl"
                  borderWidth="2px"
                  borderColor="border.default"
                  transition="all 0.3s"
                  height="100%"
                  width={'full'}
                  _hover={{
                    borderColor: `${method.color}.500`,
                    transform: 'translateY(-4px)',
                    boxShadow: 'xl',
                  }}
                >
                  <VStack align="start" gap={{ base: 3, md: 4 }}>
                    <Box as={method.icon} fontSize={{ base: "2xl", md: "3xl" }} color={`${method.color}.500`} />
                    <VStack align="start" gap={2}>
                      <Heading size={{ base: "sm", md: "md" }}>{method.title}</Heading>
                      <Text fontSize={{ base: "xs", sm: "sm" }} color="fg.muted">
                        {method.description}
                      </Text>
                    </VStack>
                    <Text fontWeight="bold" color={`${method.color}.500`} fontSize={{ base: "xs", sm: "sm" }}>
                      {method.action} →
                    </Text>
                  </VStack>
                </Box>
              </Link>
            ))}
          </SimpleGrid>

          {/* CTA principal */}
          <VStack gap={4} pt={{ base: 4, md: 8 }} width={{ base: "100%", sm: "auto" }} px={{ base: 2, sm: 0 }}>
            <Link href="mailto:zramirezh1801@alumno.ipn.mx" _hover={{ textDecoration: 'none' }} width={{ base: "100%", sm: "auto" }}>
              <Button
                size={{ base: "md", sm: "lg" }}
                colorPalette="blue"
                px={{ base: 6, sm: 8, md: 10 }}
                py={{ base: 5, sm: 6, md: 7 }}
                fontSize={{ base: "md", sm: "lg", md: "xl" }}
                fontWeight="bold"
                width={{ base: "100%", sm: "auto" }}
                _hover={{
                  transform: 'scale(1.05)',
                  boxShadow: '2xl',
                }}
                transition="all 0.3s"
              >
                <HStack gap={{ base: 2, md: 3 }} justify="center">
                  <FaEnvelope />
                  <Text>Iniciar una conversación</Text>
                  <FaArrowRight />
                </HStack>
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
