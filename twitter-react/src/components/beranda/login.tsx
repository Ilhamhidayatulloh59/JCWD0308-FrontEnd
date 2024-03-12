import { Button, useDisclosure, ModalBody, ModalFooter, Flex, Heading } from "@chakra-ui/react"
import { ModalComp } from "../modalOverlay"
import { MdOutlineEmail } from "react-icons/md"
import { BsKey } from "react-icons/bs"
import { Form, Formik } from "formik";
import * as yup from "yup";
import { InputField } from "../input";
import { axios } from "../../api/axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user";
import { useNavigate } from "react-router-dom";

const LoginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("email wajib diisi"),
    password: yup.string()
      .min(6, "password must be at least 6 characters")
      .required("password wajib diisi")
  });

export const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogin = async (data) => {
      try {
        const response = await axios.get(`/users?email=${data.email}&password=${data.password}`)
        if (response.data.length == 0) throw "akun tidak ditemukan"
        console.log(response.data[0]);
        dispatch(setUser(response.data[0]))
        localStorage.setItem("id", response.data[0].id)
        navigate('/')
      } catch (err) {
        console.log(err)
      }
    }

  return (
    <>
      <Button 
        borderRadius={"20px"} 
        fontSize={{ base: '11px', sm: '12px', md: '14px' }} 
        colorScheme="blue" 
        variant={'outline'} 
        w={{ base: '200px', sm: '250px', md: '300px' }} 
        onClick={onOpen}
      >
            Masuk
      </Button>
        <ModalComp isOpen={isOpen} onClose={onClose}>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            onSubmit={(values) => {
              onLogin(values)
            }}
            validationSchema={LoginSchema}
          >
            {
              () => {
                return (
                  <Form>
                    <ModalBody>
                    <Flex flexDirection={'column'} gap={'15px'}>
                      <Heading>Masuk</Heading>
                      <InputField name="email" placeholder="Email" Icon={MdOutlineEmail} />
                      <InputField type="password" name="password" placeholder="Password" Icon={BsKey} />
                    </Flex>
                    </ModalBody>

                    <ModalFooter>
                      <Button type="submit" borderRadius={"20px"} padding={"25px"} w={'full'}>
                          Masuk
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