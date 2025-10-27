import { Box, Spinner, Text, VStack } from '@chakra-ui/react';

export function LoadingSpinner() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack gap={4}>
        <Spinner
          size="xl"
          color="blue.500"
        />
        <Text fontSize="lg" color="fg.muted">
          Cargando portafolio...
        </Text>
      </VStack>
    </Box>
  );
}
