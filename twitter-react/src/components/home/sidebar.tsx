import { Avatar, Box, Flex, Menu, MenuButton, MenuItem, MenuList, Tag, Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../../redux/user"
import { useNavigate } from "react-router-dom"

export const Sidebar = () => {
    const user = useSelector((state) => state?.user?.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogout = () => {
        localStorage.removeItem('id')
        dispatch(setUser({}))
        navigate('/beranda')
    }
    
    return (
        <Flex w={'full'} h='full' p={{ base: 'none', sm: 'none', md: 'none', lg: '50px' }} flexDirection={'column'} justifyContent={'flex-end'} >
            <Menu>
                <MenuButton>
                    <Flex justifyContent={{ base: 'center', sm: 'flex-start' }}>
                        <Tag size='lg'  borderRadius='full' p="6px"  _hover={{ colorScheme: "blue" }} _focus={{ boxShadow: "outline" }}>
                            <Avatar name={user.nama} />
                            <Box ml='3' display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }} >
                                <Text fontWeight='bold'>
                                    {user.nama}
                                </Text>
                                <Text fontSize='sm'>{user.email}</Text>
                            </Box>
                        </Tag>
                    </Flex>
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={onLogout} >Keluar dari {user.nama}</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}