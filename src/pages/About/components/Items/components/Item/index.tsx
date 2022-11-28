import { ItemContainer } from "./styles";

import {
  Body,
  HeadingH4
} from "../../../../../../styles/global";

interface ItemProps {
  id?: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

export const Item = ({ icon, title, description }: ItemProps) => {
  return (
    <>
      <ItemContainer>
        {icon}

        <HeadingH4>
          {title}
        </HeadingH4>

        <Body>
          {description}
        </Body>
      </ItemContainer>
    </>
  );
}