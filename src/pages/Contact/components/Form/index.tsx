import { motion } from 'framer-motion';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  FieldInput,
  FormInput,
  FieldTextArea,
  FormSchemaContainer,
  ErrorMessage
} from "./styles";

import { Button } from "../../../../styles/global";

const ContactSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name required'),
  email: Yup.string()
    .email('Invalid e-mail address')
    .required('Email is required'),
  queryRelated: Yup.string()
    .min(10, 'Write a little more')
    .max(50, 'Need to write more than that')
    .required('Query Related is required'),
  message: Yup.string()
    .required('Message is required'),
});

export const FormSchema = () => {
  return (
    <>
      <FormSchemaContainer>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            queryRelated: '',
            message: '',
          }}
          validationSchema={ContactSchema}
          onSubmit={(values) => {
            console.log(values);
          }}>
          {({ errors, touched }) => (
            <FormInput>
              <motion.div
                style={{ width: '100%' }}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                  mass: 3.5,
                  delay: 0.2,
                }}>
                <FieldInput name="fullName" placeholder="Your full Name" />
              </motion.div>
              {errors.fullName && touched.fullName ? (
                <ErrorMessage>{errors.fullName}</ErrorMessage>
              ) : null}

              <motion.div
                style={{ width: '100%' }}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                  mass: 3.5,
                  delay: 0.3,
                }}>

                <FieldInput name="email" placeholder="Your Email Id" />
              </motion.div>
              {errors.email && touched.email ? (
                <ErrorMessage>{errors.email}</ErrorMessage>
              ) : null}

              <motion.div
                style={{ width: '100%' }}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                  mass: 3.5,
                  delay: 0.4,
                }}>
                <FieldInput name="queryRelated" placeholder="Query Related" />
              </motion.div>
              {errors.queryRelated && touched.queryRelated ? (
                <ErrorMessage>{errors.queryRelated}</ErrorMessage>
              ) : null}

              <motion.div
                style={{ width: '100%' }}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                  mass: 3.5,
                  delay: 0.5,
                }}>
                <FieldTextArea name="message" placeholder="Message" />
              </motion.div>

              <motion.div
                style={{ width: '100%' }}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                  mass: 3.5,
                  delay: 0.7,
                }}>

                <Button
                  variant="Primary_Button"
                  type="submit">
                  Contact now
                </Button>
              </motion.div>
            </FormInput>
          )}
        </Formik>
      </FormSchemaContainer>
    </>
  );
}