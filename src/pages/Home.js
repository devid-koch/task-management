import React from 'react'
import { TodoList } from '../components/TodoList';
import { VisibilityFilter } from '../components/VisibilityFilter';
import { Container, Heading } from '@chakra-ui/react';
import { AddTodo } from '../components/AddTodo';

const Home = () => {
  return (
    <Container maxW="container.sm">
      <Heading my="4">Task Management App</Heading>
      <AddTodo />
      <TodoList />
      <VisibilityFilter />
    </Container>
  )
}

export default Home