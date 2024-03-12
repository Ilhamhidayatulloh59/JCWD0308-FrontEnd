import { Button, Center, Flex, Icon, Text } from "@chakra-ui/react"
import React from "react"
import { IconType } from "react-icons"

interface IButton {
    desc: string,
    icon: IconType
}

export const SosmedBtn: React.FC<IButton> = ({ desc, icon }) => {
    return (
        <Flex>
            <Button 
                borderRadius={"20px"} 
                minW={{ base: '200px', sm: '250px', md: '300px' }} 
                variant={'outline'} 
                leftIcon={<Icon w={{ base: '20px', sm: '25px', md: '30px' }} h={{ base: '20px', sm: '25px', md: '30px' }} as={icon} />}
            >
                <Center>
                    <Text fontSize={{ base: '11px', sm: '12px', md: '14px' }}>{desc}</Text>
                </Center>
            </Button>
        </Flex>
    )
}