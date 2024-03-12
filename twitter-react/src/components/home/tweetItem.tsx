import { Avatar, Flex, Text } from "@chakra-ui/react"
import React from "react"

interface ITweetItem {
    name: string
    email: string
    text: string
}

export const TweetItem: React.FC<ITweetItem> = ({ name, email, text }) => {
    return (
        <Flex p={"20px"} gap={'10px'} borderBottom={'1px solid'} borderBottomColor={'gray.100'}>
            <Avatar />
            <Flex flexDirection={'column'} w={'full'}>
                <Flex fontSize={'18px'} gap={'10px'}>
                    <Text fontWeight={'bold'}>{name}</Text>
                    <Text color={'gray'}>{email}</Text>
                </Flex>
                <Text fontSize={'18px'}>
                    {text}
                </Text>
            </Flex>
        </Flex>
    )
}