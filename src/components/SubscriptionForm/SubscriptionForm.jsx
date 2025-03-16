import Card from "../common/Card/Card";
import Button from "../common/Button/Button";
import styled from "styled-components";
import { Title, Text } from "../common/Texts/Texts.styled";
import Input from "../common/Input/GeneralInput";

const SubscriptionForm = ({ onSubscribe }) => {
  return (
    <Card>
      <Form>
        <Image />
        <Body>
          <Title>Stay updated!</Title>
          <Text>
            Join 60,000+ product managers receiving monthly updates on:
          </Text>
          <List>
            <ListItem>
              <Text>Product discovery and building what matters</Text>
            </ListItem>
            <ListItem>
              <Text>Measuring to ensure updates are a success</Text>
            </ListItem>
            <ListItem>
              <Text>And much more!</Text>
            </ListItem>
          </List>
          <Inputs>
            <Input label="Email address" placeholder="email@company.com" />
          </Inputs>

          <Button onClick={onSubscribe}>Subscribe to monthly newsletter</Button>
        </Body>
      </Form>
    </Card>
  );
};

export default SubscriptionForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 100vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: unset;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row-reverse;
    gap: 2rem;
  }
`;

const Image = styled.div`
  width: calc(100% + 48px);
  height: auto;
  transform: translate(-24px, -24px);
  background-image: url("/src/assets/images/illustration-sign-up-mobile.svg");
  background-size: cover;
  background-position: center;
  border-end-end-radius: 16px;
  aspect-ratio: 1.32;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    transform: unset;
    border-radius: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-image: url("/src/assets/images/illustration-sign-up-desktop.svg");
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 38rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 56.5rem;
    min-height: unset;
    gap: 2rem;
  }
`;

const List = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* Adjust spacing between items */
`;

const ListItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem; /* Space between bullet and text */
  align-items: center;

  &::before {
    content: "";
    display: inline-block;
    width: 21px;
    height: 21px;
    background-image: url("/src/assets/images/icon-success.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const Inputs = styled.div`
  margin-top: 1rem;
`