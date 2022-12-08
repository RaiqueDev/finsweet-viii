import {
  ListContainer,
  ListMain
} from "./styles";

import { ItemList } from "./components/Item";

import { Ep1Image, Ep2Image, Ep3Image } from "../../../../assets/ItemImage";

const list = [
  {
    id: 1,
    img: <Ep1Image />,
    title: 'Ep 1: How to build a world-class business brand',
    description: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.',
    link: 'Listen Now'
  },
  {
    id: 2,
    img: <Ep2Image />,
    title: 'Ep 2: Getting the first 100 customers for your business',
    description: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.',
    link: 'Listen Now'
  },
  {
    id: 3,
    img: <Ep3Image />,
    title: 'Ep 3: Should I raise money for my startup, or not?',
    description: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.',
    link: 'Listen Now'
  },
]

export const List = () => {
  return (
    <>
      <ListContainer>
        <ListMain>
          {list.map(itemlist => {
            return (
              <ItemList
                key={itemlist.id}
                img={itemlist.img}
                title={itemlist.title}
                description={itemlist.description}
                link={itemlist.link}
              />
            );
          })}
        </ListMain>
      </ListContainer>
    </>
  );
}