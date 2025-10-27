import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from '@chakra-ui/react';
import { FaCode, FaGraduationCap, FaRocket, FaUsers } from 'react-icons/fa';

const metrics = [
  { icon: FaCode, value: '6+', label: 'Proyectos completados' },
  { icon: FaGraduationCap, value: 'UPIICSA', label: 'IPN - Lic. en Ciencias de la Informática' },
  { icon: FaRocket, value: '100%', label: 'Proyectos responsivos' },
  { icon: FaUsers, value: 'Oracle', label: 'Next Education' },
];

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'ChakraUI', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Python', 'Django', 'Node.js', 'REST APIs'] },
  { category: 'Herramientas', items: ['Git', 'Vite', 'Docker', 'Postman'] },
  { category: 'Bases de datos', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'MariaDB'] },
];

export function About() {
  return (
    <Box as="section" id="sobre-mi" py={{ base: 12, md: 16, lg: 24 }} bg="bg.subtle">
      <Container maxW="7xl" justifySelf="center" px={{ base: 4, sm: 6, md: 8 }}>
        <VStack gap={{ base: 8, md: 12 }} align="stretch">
          {/* Título de sección */}
          <VStack gap={{ base: 3, md: 4 }} textAlign="center">
            <Heading as="h2" fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} fontWeight="black">
              Sobre mí
            </Heading>
            <Text fontSize={{ base: 'md', sm: 'lg', md: 'xl' }} color="fg.muted" maxW="3xl" px={{ base: 2, sm: 0 }}>
              Desarrollador full stack
            </Text>
          </VStack>

          {/* Storytelling */}
          <Box maxW="4xl" mx="auto" px={{ base: 2, sm: 0 }}>
            <VStack gap={{ base: 4, md: 6 }} align="start" fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} lineHeight="tall">
              <Text>
                Desarrollador Jr. con enfoque en React + TypeScript (frontend) y Node.js + Express (backend). Experiencia creando servicios web REST e integrando interfaces en React con APIs en Node,
                incluyendo autenticación con JWT, validación de datos y manejo centralizado de errores. Me gusta trabajar cercano al negocio para traducir requisitos en funcionalidades claras.
              </Text>

              <Text>En datos, uso bases relacionales (MariaDB/MySQL/PostgreSQL) y no relacionales (MongoDB), cuidando el modelado, los índices y el rendimiento de consultas.</Text>

              <Text>
                En el día a día trabajo con Git/GitHub (ramas, PRs y revisiones) y soy familiar con Docker para entornos reproducibles y consistentes; cuando aplica, hago despliegues sencillos en
                Vercel. Busco entregar soluciones funcionales, simples y mantenibles, con atención a la calidad del código y a la experiencia de usuario.
              </Text>

              <Text>Inglés B2: comunicación técnica fluida en reuniones, documentación y lectura especializada.</Text>
            </VStack>
          </Box>

          {/* Métricas verificables */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={{ base: 4, md: 6 }} pt={{ base: 4, md: 8 }}>
            {metrics.map((metric, index) => (
              <VStack
                key={index}
                p={{ base: 4, sm: 5, md: 6 }}
                bg="bg"
                borderRadius="xl"
                borderWidth="1px"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'lg',
                }}
              >
                <Box as={metric.icon} fontSize={{ base: "2xl", md: "3xl" }} color="blue.500" />
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="black" bgGradient="to-r" gradientFrom="blue.500" gradientTo="purple.600" bgClip="text">
                  {metric.value}
                </Text>
                <Text fontSize={{ base: "xs", sm: "sm" }} color="fg.muted" textAlign="center" fontWeight="medium">
                  {metric.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>

          {/* Habilidades organizadas */}
          <Box pt={{ base: 4, md: 8 }}>
            <Heading as="h3" fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }} mb={{ base: 4, md: 6 }} textAlign="center">
              Stack Tecnológico
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={{ base: 4, md: 6 }}>
              {skills.map((skillGroup, index) => (
                <Box key={index} p={{ base: 4, sm: 5, md: 6 }} bg="bg" borderRadius="xl" borderWidth="1px" borderColor="border.default">
                  <Text fontSize={{ base: "md", sm: "lg" }} fontWeight="bold" mb={{ base: 3, md: 4 }} color="blue.500">
                    {skillGroup.category}
                  </Text>
                  <VStack align="start" gap={2}>
                    {skillGroup.items.map((skill, idx) => (
                      <HStack key={idx} gap={2}>
                        <Box width="6px" height="6px" bg="blue.500" borderRadius="full" flexShrink={0} />
                        <Text fontSize={{ base: "xs", sm: "sm" }} color="fg.muted">
                          {skill}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
