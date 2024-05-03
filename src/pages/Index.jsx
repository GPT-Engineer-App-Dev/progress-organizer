// Complete the Index page component here
// Use chakra-ui
import { Box, Text, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => (
  <Box p={4} bg="tomato" color="white">
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
      <Heading as="h1" size="2xl" mb={4} fontFamily="monospace">Retro Todo App</Heading>
      <Text fontSize="xl" mb={6} fontFamily="monospace">Manage your tasks with a nostalgic feel!</Text>
      <VStack spacing={4}>
        <Button leftIcon={<FaPlus />} colorScheme="yellow" variant="solid" fontFamily="monospace">
          Add New Task
        </Button>
        <Button colorScheme="green" variant="outline" fontFamily="monospace">
          View Tasks
        </Button>
      </VStack>
    </Flex>
  </Box>
);

export default Index;