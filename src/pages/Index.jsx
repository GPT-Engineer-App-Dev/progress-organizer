import { useState } from 'react';
import { Box, Button, Input, List, ListItem, IconButton, useToast, Flex, Heading, Text } from '@chakra-ui/react';
import { FaTrash, FaCheck } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const addTask = () => {
    if (input.trim() === '') {
      toast({
        title: 'No task entered',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: input, isCompleted: false }]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  return (
    <Box p={8}>
      <Flex direction="column" align="center" justify="center">
        <Heading mb={6}>Todo App</Heading>
        <Flex as="form" onSubmit={(e) => { e.preventDefault(); addTask(); }}>
          <Input
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            size="lg"
            mr={2}
          />
          <Button onClick={addTask} colorScheme="blue" px={8} size="lg">Add</Button>
        </Flex>
        <List spacing={3} mt={6} w="100%" maxW="500px">
          {tasks.map(task => (
            <ListItem key={task.id} p={2} bg={task.isCompleted ? 'green.100' : 'gray.100'}>
              <Flex align="center" justify="space-between">
                <Text as={task.isCompleted ? 's' : 'span'}>{task.text}</Text>
                <Box>
                  <IconButton
                    icon={<FaCheck />}
                    onClick={() => toggleTaskCompletion(task.id)}
                    aria-label="Complete task"
                    colorScheme="green"
                    mr={2}
                  />
                  <IconButton
                    icon={<FaTrash />}
                    onClick={() => deleteTask(task.id)}
                    aria-label="Delete task"
                    colorScheme="red"
                  />
                </Box>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Box>
  );
};

export default Index;