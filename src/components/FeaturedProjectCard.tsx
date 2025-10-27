import { Box, Heading, Text, Badge, Link, Image, VStack, HStack, Button } from '@chakra-ui/react';
import type { Project } from '../types';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaSass, FaPython, FaReact, FaNode, FaDocker } from 'react-icons/fa';
import { SiDjango, SiSqlite, SiJquery, SiLess, SiTypescript, SiFastapi, SiScikitlearn, SiMui, SiExpress, SiMongodb, SiSocketdotio, SiMariadb, SiPrisma, SiRedis } from 'react-icons/si';

const iconMap: Record<string, React.ComponentType> = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaSass,
  FaPython,
  FaReact,
  FaNode,
  FaDocker,
  SiDjango,
  SiSqlite,
  SiJquery,
  FaLess: SiLess,
  SiTypescript,
  SiFastapi,
  SiScikitlearn,
  SiMui,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiMariadb,
  SiPrisma,
  SiRedis,
};

interface FeaturedProjectCardProps {
  project: Project;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <Box
      bg="bg"
      borderRadius="2xl"
      overflow="hidden"
      borderWidth="1px"
      transition="all 0.3s"
      _hover={{
        boxShadow: '2xl',
        transform: 'translateY(-4px)',
      }}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      {/* Imagen del proyecto */}
      <Box position="relative" maxH={{ base: "300px", sm: "350px" }}>
        <Image src={project.image} alt={project.title} width="100%" height="100%" objectFit="cover" />
        <Box 
          position="absolute" 
          top={{ base: 2, sm: 4 }} 
          right={{ base: 2, sm: 4 }} 
          px={{ base: 2, sm: 3 }} 
          py={1} 
          bg="blue.500" 
          color="white" 
          borderRadius="full" 
          fontSize={{ base: "xs", sm: "sm" }} 
          fontWeight="bold"
        >
          ⭐ Destacado
        </Box>
      </Box>

      {/* Contenido */}
      <VStack p={{ base: 4, sm: 5, md: 6, lg: 8 }} align="start" justify="space-between" gap={{ base: 3, md: 4 }} flex="1">
        <VStack align="start" gap={{ base: 3, md: 4 }} flex="1">
          <Heading size={{ base: "lg", sm: "xl" }}>{project.title}</Heading>

          <Text fontSize={{ base: "sm", md: "md" }} color="fg.muted" lineHeight="tall">
            {project.description}
          </Text>

          <Box>
            <Text fontWeight="semibold" mb={{ base: 2, md: 3 }} fontSize="xs" color="fg.muted">
              TECNOLOGÍAS
            </Text>
            <HStack gap={2} wrap="wrap">
              {project.technologies.slice(0, 6).map((tech, index) => {
                const Icon = iconMap[tech.icon];
                return (
                  <Box 
                    key={index} 
                    display="flex" 
                    alignItems="center" 
                    gap={{ base: 1, sm: 2 }} 
                    px={{ base: 2, sm: 3 }} 
                    py={{ base: 1.5, sm: 2 }} 
                    bg="bg.subtle" 
                    borderRadius="md" 
                    borderWidth="1px" 
                    pointerEvents={'none'}
                  >
                    {Icon && <Box as={Icon} fontSize={{ base: "md", sm: "lg" }} />}
                    <Text fontWeight="medium" fontSize={{ base: "xs", sm: "sm" }}>
                      {tech.name}
                    </Text>
                  </Box>
                );
              })}
            </HStack>
          </Box>

          <Badge colorPalette={project.status === 'completed' ? 'green' : 'orange'} size={{ base: "md", sm: "lg" }} px={2} py={1}>
            {project.statusText}
          </Badge>
        </VStack>

        {/* CTAs */}
        <HStack gap={{ base: 2, sm: 3 }} w="full" flexWrap={{ base: "wrap", sm: "nowrap" }}>
          {project.projectUrl && (
            <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer" flex="1" minW={{ base: "100%", sm: "140px" }} _hover={{ textDecoration: 'none' }}>
              <Button colorPalette="blue" w="full" size={{ base: "sm", sm: "md" }}>
                <HStack gap={1.5}>
                  <Text fontSize={{ base: "xs", sm: "sm" }}>Ver proyecto</Text>
                  <FaExternalLinkAlt />
                </HStack>
              </Button>
            </Link>
          )}
          <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer" flex="1" minW={{ base: "100%", sm: "140px" }} _hover={{ textDecoration: 'none' }}>
            <Button variant="outline" w="full" size={{ base: "sm", sm: "md" }}>
              <HStack gap={1.5}>
                <FaGithub />
                <Text fontSize={{ base: "xs", sm: "sm" }}>Ver código</Text>
              </HStack>
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
