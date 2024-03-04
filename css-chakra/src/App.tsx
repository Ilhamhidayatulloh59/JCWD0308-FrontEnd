import { Button, Flex } from "@chakra-ui/react"

function App() {
  return (
    <Flex
      bgColor={{ base: "teal", md: "green", lg: "red" }}
      height={"100vh"} 
      color={"white"} 
      justifyContent={"center"} 
      alignItems={"center"} 
      gap={"10px"}
      flexDirection={"column"}
    >
      HOME
      <Button
        width={"100px"} 
        borderRadius={"5px"} 
        border={"1px solid black"}
      >
        Submit
      </Button>
    </Flex>
  )
}

export default App
