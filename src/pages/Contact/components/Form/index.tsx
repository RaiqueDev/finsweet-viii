import {
  FieldInput,
  FormInput,
  FieldTextArea,
  FormSchemaContainer,
  ErrorMessage
} from "./styles";

import { Formik } from 'formik';

import * as Yup from 'yup';

import { Button, Caption } from "../../../../styles/global";

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
    .min(10, 'Write a little more')
    .required('Message is required')
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
              <FieldInput name="fullName" placeholder="Your full Name" />
              {errors.fullName && touched.fullName ? (
                <ErrorMessage>{errors.fullName}</ErrorMessage>
              ) : null}

              <FieldInput name="email" placeholder="Your Email Id" />
              {errors.email && touched.email ? (
                <ErrorMessage>{errors.email}</ErrorMessage>
              ) : null}

              <FieldInput name="queryRelated" placeholder="Query Related" />
              {errors.queryRelated && touched.queryRelated ? (
                <ErrorMessage>{errors.queryRelated}</ErrorMessage>
              ) : null}

              <FieldTextArea name="message" placeholder="Message" />
              {errors.message && touched.message ? (
                <ErrorMessage>{errors.message}</ErrorMessage>
              ) : null}

              <Button
                variant="Primary_Button"
                type="submit">
                Contact now
              </Button>
            </FormInput>
          )}
        </Formik>
      </FormSchemaContainer>
    </>
  );
}

/*
        <form>
          <input type="text"  required />
          <input type="text"  required />
          <input type="text"  required />
          <textarea  />
        </form>
*/