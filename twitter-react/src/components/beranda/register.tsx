import { Button, useDisclosure, ModalBody, ModalFooter, Heading, Flex } from "@chakra-ui/react"
import { ModalComp } from "../modalOverlay"
import { BsKey, BsPerson } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md"
import { Form, Formik } from "formik";
import * as yup from "yup";
import { InputField } from "../input";
import { axios } from "../../api/axios";

const RegisterSchema = yup.object().shape({
    nama: yup.string().required("nama wajib diisi"),
    email: yup.string().email("invalid email").required("email wajib diisi"),
    password: yup.string()
      .min(6, "password must be at least 6 characters")
      .required("password wajib diisi")
  });

export const Register = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onRegister = async (data) => {
      try {
        await axios.post("/users", data)
      } catch (err) {
        console.log(err);
        
      }
    }

  return (
    <>
      <Button borderRadius={"20px"} 
        fontSize={{ base: '11px', sm: '12px', md: '14px' }} 
        colorScheme="blue" 
        w={{ base: '200px', sm: '250px', md: '300px' }} 
        onClick={onOpen} 
      >
        Buat akun
      </Button>

      <ModalComp isOpen={isOpen} onClose={onClose}>
        <Formik
            initialValues={{
                nama: "",
                email: "",
                password: ""
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values, action) => {
                console.log(values);
                onRegister(values)
                action.resetForm()
            }}
        >
            {
                () => {
                    return (
                    <Form>
                        <ModalBody>
                            <Flex flexDirection={'column'} gap={'15px'}>
                                <Heading>Buat Akun</Heading>
                                <InputField name="nama" placeholder="Nama" Icon={BsPerson} />
                                <InputField name="email" placeholder="Email" Icon={MdOutlineMail} />
                                <InputField name="password" placeholder="Password" Icon={BsKey} type="password" />
                            </Flex>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" borderRadius={"20px"} padding={"25px"} w={'full'}>
                                Daftar
                            </Button>
                        </ModalFooter>
                    </Form>
                    )
                }
            }
        </Formik>
      </ModalComp>
    </>
  )
}
