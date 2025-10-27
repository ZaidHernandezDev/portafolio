import { Box, Container, Heading, Text, VStack, SimpleGrid, Tabs } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { projects } from '../data/projects';
import { useState } from 'react';

const categories = ['Todos', 'React', 'Python/Django', 'HTML/CSS/JS'];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Proyectos destacados (los primeros 2)
  const featuredProjects = projects.slice(0, 2);

  // Otros proyectos (legacy)
  const otherProjects = projects.slice(2);

  const filteredProjects =
    selectedCategory === 'Todos'
      ? otherProjects
      : otherProjects.filter((project) => {
          if (selectedCategory === 'React') return false; // El proyecto React principal está en featured
          if (selectedCategory === 'Python/Django') return [7].includes(project.id); // Proyecto Wiki (Django)
          if (selectedCategory === 'HTML/CSS/JS') return [3, 4, 5, 6].includes(project.id); // HTML/CSS/JS projects
          return true;
        });

  return (
    <Box as="section" id="proyectos" py={{ base: 12, md: 16, lg: 24 }}>
      <Container maxW="7xl" justifySelf="center" px={{ base: 4, sm: 6, md: 8 }}>
        <VStack gap={{ base: 8, md: 12 }} align="stretch">
          {/* Título de sección */}
          <VStack gap={{ base: 3, md: 4 }} textAlign="center">
            <Heading as="h2" fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} fontWeight="black">
              Proyectos Destacados
            </Heading>
            <Text fontSize={{ base: 'md', sm: 'lg', md: 'xl' }} color="fg.muted" maxW="3xl" px={{ base: 2, sm: 0 }}>
              Una selección de mis mejores trabajos, desde aplicaciones full-stack hasta maquetaciones responsivas
            </Text>
          </VStack>

          {/* Proyectos principales - Destacados con diseño grande */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 6, md: 8 }}>
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </SimpleGrid>

          {/* Separador visual */}
          <Box py={{ base: 4, md: 8 }}>
            <Heading as="h3" fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }} textAlign="center" mb={{ base: 6, md: 8 }}>
              Más Proyectos
            </Heading>

            {/* Filtros por categoría */}
            <Tabs.Root defaultValue="Todos" variant="enclosed" mb={{ base: 6, md: 8 }} onValueChange={(e) => setSelectedCategory(e.value as string)}>
              <Tabs.List justifyContent="center" flexWrap="wrap" gap={{ base: 1, sm: 2 }}>
                {categories.map((category) => (
                  <Tabs.Trigger
                    key={category}
                    value={category}
                    px={{ base: 3, sm: 4, md: 6 }}
                    py={{ base: 2, sm: 2.5, md: 3 }}
                    fontSize={{ base: "xs", sm: "sm", md: "md" }}
                    fontWeight="medium"
                    _selected={{
                      color: 'blue.500',
                      borderColor: 'blue.500',
                    }}
                  >
                    {category}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </Tabs.Root>

            {/* Grid de proyectos */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 4, md: 6 }}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
