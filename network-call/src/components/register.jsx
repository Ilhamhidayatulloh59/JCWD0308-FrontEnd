import { Form, Field, ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import axios from 'axios'

const RegisterSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().email("invalid email").required("email is required"),
  password: yup.string()
    .min(6, "password must be at least 6 characters")
    .required("password is required")
});

export const RegisterComp = () => {
    const addUser = async (data) => {
        try {
            axios.post("http://localhost:2000/users", data)
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: ""
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, action) => {
          console.log(values);
          addUser(values)
          action.resetForm()
        }}
      >
        {(props) => {
          return (
            <Form>
              <div>
                <label htmlFor="name">name</label>
                <Field type="text" placeholder="your name" name="name" />
                <ErrorMessage component="div" name="name" style={{ color: "red" }} />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <Field type="email" placeholder="your email" name="email" />
                <ErrorMessage component="div" name="email" style={{ color: "red" }} />
              </div>
              <div>
                <label htmlFor="password">password</label>
                <Field type="password" placeholder="your password" name="password" />
                <ErrorMessage component="div" name="password" style={{ color: "red" }} />
              </div>
              <button type="submit">register</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
