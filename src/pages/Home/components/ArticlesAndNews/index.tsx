import {
  ArticlesAndNewsContainer,
  ArticlesAndNewsMain,
  ItemCard,
  ItemCardContent,
  ItemCardImg
} from "./styles";

import {
  Body,
  HeadingH3,
  Button,
  HeadingH2,
  HeadingH4
} from '../../../../styles/global';

export const ArticlesAndNews = () => {
  return (
    <>
      <ArticlesAndNewsContainer>
        <ArticlesAndNewsMain>
          <ItemCard variant="Off_White">
            <ItemCardContent variant="Margin">
              <HeadingH2>
                Read our <br />
                articles & new2
              </HeadingH2>

              <a href="#">
                <HeadingH4>
                  See More
                </HeadingH4>
              </a>
            </ItemCardContent>
          </ItemCard>

          <ItemCard>
            <ItemCardImg>
              <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </ItemCardImg>

            <ItemCardContent>
              <HeadingH3>
                Getting the first 100 customers for your business
              </HeadingH3>

              <Body>
                Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
              </Body>

              <Button variant="Read_Now">
                Read Now
              </Button>
            </ItemCardContent>
          </ItemCard>

          <ItemCard>
            <ItemCardImg>
              <img src="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </ItemCardImg>

            <ItemCardContent>
              <HeadingH3>
                Apparently we had reached a great height in the atmosphere, ...
              </HeadingH3>

              <Body>
                Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
              </Body>

              <Button variant="Read_Now">
                Read Now
              </Button>
            </ItemCardContent>
          </ItemCard>

        </ArticlesAndNewsMain>
      </ArticlesAndNewsContainer>
    </>
  );
}