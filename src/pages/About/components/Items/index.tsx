import {
  ItemsContainer,
  ItemsMain
} from './styles';

import { Item } from './components/Item';

import {
  IconPodcast,
  IconSubs,
  IconViews
} from '../../../../assets/Icon';

const items = [
  {
    id: 1,
    icon: <IconPodcast />,
    title: '500+ Podcast',
    description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
  },
  {
    id: 2,
    icon: <IconViews />,
    title: '24M Views',
    description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
  },
  {
    id: 3,
    icon: <IconSubs />,
    title: '600k Subs',
    description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
  },
]

export const Items = () => {
  return (
    <>
      <ItemsContainer>
        <ItemsMain>
          {items.map(item => {
            return (
              <Item
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            )
          })}
        </ItemsMain>
      </ItemsContainer>
    </>
  );
}