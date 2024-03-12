import { AbsoluteCenter, Box, Divider, Flex, Icon, Text } from "@chakra-ui/react"
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { SosmedBtn } from "../sosmedBtn";
import { Login } from "./login";
import { Register } from "./register";

export const Beranda = () => {
    return (
        <Box>
            <Flex minH={"90vh"} flexDirection={{ base: 'column', sm: 'column', md: 'row' }} alignItems={'center'}>
                <Flex flex={1} justifyContent={'center'} alignItems={'center'} margin={{ base: '30px 0' }} >
                    <Icon w={{ base: '30px', sm: '100px', md: '300px' }} h={{ base: '30px', sm: '100px', md: '300px' }} as={FaXTwitter} />
                </Flex>
                <Flex flex={1} flexDirection={'column'}>
                    <Text fontSize={{ base: '30px', sm: '50px', md: '75px' }} fontWeight={"bold"} >
                        Sedang tren saat ini
                    </Text>
                    <Text fontSize={{ base: '20px', sm: '30px', md: '40px' }} fontWeight={"bold"} >
                        Bergabunglah sekarang.
                    </Text>
                    <Flex flexDirection={"column"} mt={"20px"} gap={'10px'}>
                        <SosmedBtn desc="Daftar dengan google" icon={FcGoogle} />
                        <SosmedBtn desc="Daftar dengan apple" icon={FaApple} />
                        <Box position='relative' maxW={{ base: '200px', sm: '250px', md: '300px' }} margin={"20px 0"}>
                            <Divider />
                            <AbsoluteCenter bg='white' px='4'>
                                Atau
                            </AbsoluteCenter>
                        </Box>
                        <Register />
                        <Box mt={2} w={{ base: '250px', sm: '300px', md: '350px' }}>
                            <Text fontSize={11}>Dengan mendaftar, Anda menyetujui <a href="https://twitter.com/en/tos" target="_blank" rel="noopener noreferrer" style={{ color:"blue" }}>Persyaratan Layanan</a> dan <a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" style={{ color:"blue" }}>Kebijakan Privasi</a>, termasuk <a href="https://help.twitter.com/id/rules-and-policies/twitter-cookies" target="_blank" rel="noopener noreferrer" style={{ color:"blue" }}>Penggunaan Kuki.</a></Text>
                        </Box>
                        <Text fontWeight="bold" mt={50}>Sudah Punya Akun?</Text>
                        <Login />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}