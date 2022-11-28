import {
  AllBlogsContainer,
  AllBlogsMain,
  BlogItems
} from "./styles";

import { AllBlogsItems } from "./components/AllBlogsItems";

import { HeadingH2 } from "../../../../styles/global";

import {
  ImgBlogs1,
  ImgBlogs2,
  ImgBlogs3,
  ImgBlogs4,
  ImgBlogs5,
  ImgBlogs6
} from "../../../../assets/AllBlogsImg";

const blogitems = [
  {
    id: 1,
    img: <ImgBlogs1 />,
    title: 'How to build a world-class business brand',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
  },
  {
    id: 2,
    img: <ImgBlogs2 />,
    title: 'Getting the first 100 customers for your business',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
  },
  {
    id: 3,
    img: <ImgBlogs3 />,
    title: 'Should I raise money for my startup, or not?',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
  },
  {
    id: 4,
    img: <ImgBlogs4 />,
    title: 'How to build a world-class business brand',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
  },
  {
    id: 5,
    img: <ImgBlogs5 />,
    title: 'Getting the first 100 customers for your business',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
  },
  {
    id: 6,
    img: <ImgBlogs6 />,
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