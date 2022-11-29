import {
  AllBlogsContainer,
  AllBlogsMain,
  BlogItems
} from "./styles";

import { AllBlogsItems } from "./components/AllBlogsItems";

import { HeadingH2 } from "../../../../styles/global";

const blogitems = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&',
    title: 'How to build a world-class business brand',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/3182747/pexels-photo-3182747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Getting the first 100 customers for your business',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/3182749/pexels-photo-3182749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Should I raise money for my startup, or not?',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'How to build a world-class business brand',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
  },
  {
    id: 5,
    img: 'https://images.pexels.com/photos/3184585/pexels-photo-3184585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Getting the first 100 customers for your business',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
  },
  {
    id: 6,
    img: 'https://images.pexels.com/photos/3182742/pexels-photo-3182742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Should I raise money for my startup, or not?',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
  }
]

export const AllBlogs = () => {
  return (
    <>
      <AllBlogsContainer>
        <AllBlogsMain>
          <HeadingH2>
            All Blogs
          </HeadingH2>

          <BlogItems>
            {blogitems.map(allblogsitems => {
              return (
                <AllBlogsItems
                  key={allblogsitems.id}
                  img={allblogsitems.img}
                  title={allblogsitems.title}
                  description={allblogsitems.description}
                />
              )
            })}
          </BlogItems>
        </AllBlogsMain>
      </AllBlogsContainer>
    </>
  );
}