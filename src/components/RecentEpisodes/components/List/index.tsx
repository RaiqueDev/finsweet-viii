import {
  ListContainer,
  ListMain,
  ListItem,
  ItemContent,
  ItemImage
} from "./styles";

import {
  HeadingH3,
  Body,
  Button
} from '../../../../styles/global';

import {
  PlayCircle
} from "phosphor-react";

export const List = () => {
  return (
    <>
      <ListContainer>
        <ListMain>
          <ListItem>
            <ItemImage>
              <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </ItemImage>

            <ItemContent>
              <HeadingH3>
                Ep 1: How to build a world-class business brand
              </HeadingH3>

              <Body>
                Lorem ipsum at vero eos et accusam et justo duo <br />
                dolores et ea rebum.
              </Body>

              <Button variant="Listen">
                <PlayCircle size={32} color="#503AE7" weight="fill" />

                Listen Now
              </Button>
            </ItemContent>
          </ListItem>

          <ListItem>
            <ItemImage>
              <img src="https://images.pexels.com/photos/3182807/pexels-photo-3182807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </ItemImage>

            <ItemContent>
              <HeadingH3>
                Ep 2: Getting the first 100 customers for your business
              </HeadingH3>

              <Body>
                Lorem ipsum at vero eos et accusam et justo duo <br />
                dolores et ea rebum.
              </Body>

              <Button variant="Listen">
                <PlayCircle size={32} color="#503AE7" weight="fill" />

                Listen Now
              </Button>
            </ItemContent>
          </ListItem>

          <ListItem>
            <ItemImage>
              <img src='https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </ItemImage>

            <ItemContent>
              <HeadingH3>
                Ep 3: Should I raise money for my startup, or not?
              </HeadingH3>

              <Body>
                Lorem ipsum at vero eos et accusam et justo duo <br />
                dolores et ea rebum.
              </Body>

              <Button variant="Listen">
                <PlayCircle size={32} color="#503AE7" weight="fill" />

                Listen Now
              </Button>
            </ItemContent>
          </ListItem>
        </ListMain>
      </ListContainer>
    </>
  );
}