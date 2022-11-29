import {
  AllBlogsImg,
  AllBlogsItemsContainer
} from "./styles";

import {
  Body,
  Button,
  HeadingH3
} from "../../../../../../styles/global";

interface AllBlogsItemsProps {
  id?: number;
  img: string;
  title: string;
  description: string;
}

export const AllBlogsItems = ({ img, title, description }: AllBlogsItemsProps) => {
  return (
    <>
      <AllBlogsItemsContainer>
        <AllBlogsImg>
          <img src={img} />
        </AllBlogsImg>

        <HeadingH3>
          {title}
        </HeadingH3>

        <Body>
          {description}
        </Body>

        <Button variant="Read_Now">
          Read Now
        </Button>
      </AllBlogsItemsContainer>
    </>
  );
}