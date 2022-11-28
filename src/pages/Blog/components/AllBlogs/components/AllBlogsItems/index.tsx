import { AllBlogsItemsContainer } from "./styles";
import { Body, Button, HeadingH3 } from "../../../../../../styles/global";

interface AllBlogsItemsProps {
  id?: number;
  img: JSX.Element;
  title: string;
  description: string;
}

export const AllBlogsItems = ({ img, title, description }: AllBlogsItemsProps) => {
  return (
    <>
      <AllBlogsItemsContainer>
        {img}

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