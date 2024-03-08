import { Box, Flex, Button, Text } from "@chakra-ui/react"

export const TodoList = ({ todos }) => {
  return (
    <Box>
      {todos.map((item, idx) => {
        return (
          <Flex
            key={idx}
            minW={"100px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            border={"2px solid teal"}
            margin={"10px 0"}
            padding={"5px"}
          >
            <Text>{item}</Text>
            <Button onClick={() => dispatch(removeTodo(idx))}>Delete</Button>
          </Flex>
        );
      })}
    </Box>
  );
};
