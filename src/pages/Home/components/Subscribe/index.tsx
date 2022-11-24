import {
  SubscribeContainer,
  SubscribeForm,
  SubscribeMain
} from './styles';

import {
  Button,
  HeadingH2
} from '../../../../styles/global';

export const Subscribe = () => {
  return (
    <>
      <SubscribeContainer>
        <SubscribeMain>
          <HeadingH2>
            Receive new episodes in your inbox.
          </HeadingH2>

          <SubscribeForm>
            <input type="email" placeholder='Enter Your Email' />

            <Button variant='Input_Subscribe'>
              Subscribe
            </Button>
          </SubscribeForm>
        </SubscribeMain>
      </SubscribeContainer>
    </>
  );
}