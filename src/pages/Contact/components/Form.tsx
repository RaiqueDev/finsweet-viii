import {
  FormContainer
} from "./styles";

export const Form = () => {
  return (
    <>
      <FormContainer>
        <form>
          <input type="text" placeholder="Your full Name" />
          <input type="text" placeholder="Your Email Id" />
          <input type="text" placeholder="Query Related" />
          <textarea placeholder="Message" />
        </form>
      </FormContainer>
    </>
  );
}