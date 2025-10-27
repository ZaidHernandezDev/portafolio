import { Box, Card, Flex, Heading, Text, Badge, Link, Image } from '@chakra-ui/react';
import type { Project } from '../types';
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

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card.Root
      overflow="hidden"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: 'xl',
      }}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Image src={project.image} alt={project.title} height="200px" objectFit="cover" borderBottomWidth="1px" />

      <Card.Body flex="1" display="flex" flexDirection="column" p={{ base: 6, md: 8 }}>
        <Heading size="lg" mb={3}>
          {project.title}
        </Heading>

        <Text mb={4} flex="1" color="fg.muted">
          {project.description}
        </Text>

        <Box mb={3}>
          <Text fontWeight="semibold" mb={2}>
            Tecnologías utilizadas:
          </Text>
          <Flex gap={2} wrap="wrap">
            {project.technologies.map((tech, index) => {
              const Icon = iconMap[tech.icon];
              return (
                <Box key={index} display="flex" alignItems="center" gap={1} px={2} py={1} bg="bg.subtle" borderRadius="md" fontSize="sm" borderWidth="1px" pointerEvents={'none'}>
                  {Icon && <Icon />}
                  <Text>{tech.name}</Text>
                </Box>
              );
            })}
          </Flex>
        </Box>

        <Box mb={4}>
          <Text fontWeight="semibold" mb={1}>
            Estado actual:
          </Text>
          <Badge colorPalette={project.status === 'completed' ? 'green' : 'orange'} size="lg" px={2} py={1}>
            {project.statusText}
          </Badge>
        </Box>

        <Flex gap={3} wrap="wrap">
          {project.projectUrl && (
            <Link
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              px={4}
              py={2}
              bg="blue.500"
              color="white"
              borderRadius="md"
              fontWeight="medium"
              transition="all 0.3s"
              _hover={{
                bg: 'blue.600',
                transform: 'scale(1.05)',
              }}
            >
              Ver Proyecto
            </Link>
          )}
          <Link
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            px={4}
            py={2}
            borderWidth="1px"
            borderColor="border.default"
            borderRadius="md"
            fontWeight="medium"
            transition="all 0.3s"
            _hover={{
              bg: 'bg.muted',
              transform: 'scale(1.05)',
            }}
          >
            Ver Código
          </Link>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}
