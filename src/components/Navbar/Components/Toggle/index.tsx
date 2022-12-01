import { List } from "phosphor-react";
import { ToggleContainer } from "./styles";

export const Toggle = ({ handleOpen }: any) => {
  return (
    <>
      <ToggleContainer onClick={handleOpen}>
        <List size={26} weight="duotone" />
      </ToggleContainer>
    </>
  );
}