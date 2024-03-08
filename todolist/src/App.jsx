import "./App.css";
import { Flex, Box, Input, Button, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./redux/todo";
import { TodoList } from "./components/todolist";

function App() {
  const todos = useSelector((state) => state.todolist.value);
  const todoRef = useRef();
  const dispatch = useDispatch()

  const onAdd = () => {
    const data = todoRef.current.value;
    if (data == "") {
      alert("todo tidak boleh kosong");
    } else {
      dispatch(addTodo(data))
      todoRef.current.value = ""
    }
  };
  return (
    <>
      <Box>
        <Text fontSize={"62px"} fontWeight={"bold"} color={"teal"}>
          TODO LIST
        </Text>
        <Flex gap={"10px"}>
          <Input ref={todoRef} type="text" placeholder="add your todo" />
          <Button onClick={onAdd} colorScheme="teal">
            Add
          </Button>
        </Flex>
        <TodoList todos={todos} />
      </Box>
    </>
  );
}

export default App;
