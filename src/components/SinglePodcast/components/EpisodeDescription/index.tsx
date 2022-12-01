import {
  Body,
  HeadingH2,
  HeadingH3
} from '../../../../styles/global';

import {
  EpisodeDescriptionContainer,
  EpisodeDescriptionContent,
  EpisodeDescriptionMain,
  ListEpisodeDescription,
  Subscribe
} from "./styles";

import { LogoEpisodeDescription } from '../../../../assets/Logos/LogoEpisodeDescription';

export const EpisodeDescription = () => {
  return (
    <>
      <EpisodeDescriptionContainer>
        <EpisodeDescriptionMain>
          <EpisodeDescriptionContent>
            <HeadingH2>
              A podcast for makers and entrepreneurs
            </HeadingH2>

            <Body>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
              laborum et dolorum fuga.
            </Body>

            <Body>
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
              est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus.
            </Body>

            <HeadingH3>
              Apparently we had reached a great height in the
              atmosphere, for the sky was a dead black
            </HeadingH3>

            <Body>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
              laborum et dolorum fuga.
            </Body>

            <ListEpisodeDescription>
              <ul>
                <li>we both celebrate and challenge</li>
                <li>the culture around us as we orient our lives around Jesus</li>
                <li>we want to help you take that next step</li>
              </ul>
            </ListEpisodeDescription>

            <Body>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
              laborum et dolorum fuga.
            </Body>
          </EpisodeDescriptionContent>

          <Subscribe>
            <HeadingH3>Listen on</HeadingH3>

            <LogoEpisodeDescription />
          </Subscribe>
        </EpisodeDescriptionMain>
      </EpisodeDescriptionContainer>
    </>
  );
}