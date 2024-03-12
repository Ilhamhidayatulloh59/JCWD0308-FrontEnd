import { Avatar, Box, Button, CircularProgress, CircularProgressLabel, Divider, Flex, Text, Textarea } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { TweetItem } from "./tweetItem"
import { useSelector } from "react-redux"
import { axios } from "../../api/axios"

export const Tweets = () => {
    const [text, setText] = useState<string>('')
    const user = useSelector((state) => state?.user?.value)
    const textRef = useRef(null)
    const handleChange = () => {
        if (textRef.current) {
            setText(textRef.current.value)
        }
    }

    const onTweet = async () => {
        try {
            const data = {
                text: textRef.current.value,
                userId: user.id
            }

            axios.post('/tweets', data)
            textRef.current.value = ""
            setText("")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Box>
            <Flex h={'60px'} borderBottom={'1px solid'} borderBottomColor={'gray.100'}>
                <Flex flex={1} _hover={{ bgColor: 'gray.50', cursor: 'pointer' }} justifyContent={'center'} alignItems={'center'}>
                    <Flex fontWeight={'bold'} alignItems={'center'} h={'95%'} borderBottom={"4px solid"} borderBottomColor={"blue.500"}>Untuk anda</Flex>
                </Flex>
                <Flex flex={1} _hover={{ bgColor: 'gray.50', cursor: 'pointer' }} justifyContent={'center'} alignItems={'center'}>
                    Mengikuti
                </Flex>
            </Flex>
            <Flex p={"20px"} gap={'10px'} borderBottom={'1px solid'} borderBottomColor={'gray.100'}>
                <Avatar />
                <Flex flexDirection={'column'} w={'full'}>
                    <Textarea
                        onChange={handleChange} 
                        ref={textRef} 
                        fontSize={{ base: '14px', sm: '18px', md: '24px'}} 
                        resize={"none"} 
                        _placeholder={{ fontSize: { base: '14px', sm: '18px', md: '24px'}}} 
                        _focusVisible={{ border: 'none' }} 
                        placeholder='Apa yang sedang hangat dibicarakan?!' 
                        border={'none'} 
                    />
                    <Divider m={'10px 0'} />
                    <Flex justifyContent={'flex-end'} w={'full'} alignItems={'center'} gap={'10px'}>
                        <CircularProgress size={'32px'} value={text.length * 2} color={text.length > 50 ? 'orange' : 'blue.500'}>
                            <CircularProgressLabel fontSize={"14px"}>{text.length}</CircularProgressLabel>
                        </CircularProgress>
                        <Button onClick={onTweet} isDisabled={text.length > 50 || text.length <= 0} w={'100px'} borderRadius={"20px"} colorScheme="blue">Posting</Button>
                    </Flex>
                </Flex>
            </Flex>
            <TweetItem name="John" email="john@gmail.com" text="Jam 3 bahas" />
            <TweetItem name="John" email="john@gmail.com" text="Jam 3 bahas" />
            <TweetItem name="John" email="john@gmail.com" text="Jam 3 bahas" />
            <TweetItem name="John" email="john@gmail.com" text="Jam 3 bahas" />
        </Box>
    )
}