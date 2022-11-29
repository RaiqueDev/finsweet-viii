import {
  ListContainer,
  ListMain
} from "./styles";

import { ItemList } from "./components/Item";

const list = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Ep 1: How to build a world-class business brand',
    description: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.',
    link: 'Listen Now'
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/3182807/pexels-photo-3182807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Ep 2: Getting the first 100 customers for your business',
    description: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.',
    link: 'Listen Now'
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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