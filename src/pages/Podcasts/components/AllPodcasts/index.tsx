import {
  AllPodcastsContainer,
  AllPodcastsMain
} from './styles';

import {
  List
} from './components/List';

import {
  TopRow
} from './components/TopRow';

export const AllPodcasts = () => {
  return (
    <>
      <AllPodcastsContainer>
        <AllPodcastsMain>
          <TopRow />
          <List />
        </AllPodcastsMain>
      </AllPodcastsContainer>
    </>
  );
}