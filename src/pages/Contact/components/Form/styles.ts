import styled from "styled-components";

import { Form, Field } from 'formik';

export const FormSchemaContainer = styled.div`
  width: 100%;
  max-width: 39rem;

  margin-top: 3.25rem;

  display: flex;
  align-items: flex-start;
`;

export const FormInput = styled(Form)`
  width: 100%;

  padding: 0 0 2rem 0;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: 1rem;
`;

export const FieldInput = styled(Field)`
  width: 100%;
  height: 3rem;

  border: none;
  background-color: ${props => props.theme.off_white};

  padding: 0 1rem;

  ::placeholder {
    color: ${props => props.theme.gray};
  }
`;

export const FieldTextArea = styled.textarea`
  width: 100%;
  height: 8rem;

  border: none;
  background-color: ${props => props.theme.off_white};

  padding: 1rem;
  resize: none;

  ::placeholder {
    color: ${props => props.theme.gray};
  }
`;

export const ErrorMessage = styled.div`
  font: 700 1rem AdihausDIN, sans-serif;

  color: ${props => props.theme.purple};
`;