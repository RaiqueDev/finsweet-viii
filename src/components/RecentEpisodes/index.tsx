import {
  RecentEpisodesContainer,
  RecentEpisodesMain
} from './styles';

import { List } from './components/List';

import { TopRow } from './components/TopRow';

export const RecentEpisodes = () => {
  return (
    <>
      <RecentEpisodesContainer>
        <RecentEpisodesMain>
          <TopRow />
          <List />
        </RecentEpisodesMain>
      </RecentEpisodesContainer>
    </>
  );
}