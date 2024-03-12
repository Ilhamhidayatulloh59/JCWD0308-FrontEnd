import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { IconType } from "react-icons"
import { Field, ErrorMessage } from "formik";

interface IInputFiled {
    Icon: IconType,
    name: string
    placeholder: string
    type?: string | "text"
}

export const InputField: React.FC<IInputFiled> = ({ Icon, name, placeholder, type }) => {
    return (
        <Box>
            <InputGroup>
                <InputLeftElement h={'full'}>
                    <Icon color="gray.800" size={"20px"}/>
                </InputLeftElement>
                <Input as={Field} type={type} name={name} placeholder={placeholder} size="lg" />
            </InputGroup>
            <ErrorMessage name={name} component={"div"} style={{ color: "red", marginLeft: "10px" }} />
        </Box>
    )
}