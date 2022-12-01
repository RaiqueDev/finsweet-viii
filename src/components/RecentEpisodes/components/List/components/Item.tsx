import {
  ItemContent,
  ItemImage,
  ListItemContainer
} from "./styles";

import {
  Body,
  Button,
  HeadingH3
} from "../../../../../styles/global";

import { PlayCircle } from "phosphor-react";
import { Link } from "react-router-dom";
import { SingleBlog } from '../../../../SingleBlog';
import { SinglePodcast } from "../../../../SinglePodcast";

interface ItemListProps {
  id?: number;
  img: string;
  title: string;
  description: string;
  link: string;
}

export const ItemList = ({ img, title, description, link }: ItemListProps) => {
  return (
    <>
      <ListItemContainer>
        <ItemImage>
          <img src={img} />
        </ItemImage>

        <ItemContent>
          <HeadingH3>
            {title}
          </HeadingH3>

          <Body>
            {description}
          </Body>

          <Button variant="Listen">
            <PlayCircle size={32} color="#503AE7" weight="fill" />
            {link}
          </Button>
        </ItemContent>
      </ListItemContainer>
    </>
  );
}