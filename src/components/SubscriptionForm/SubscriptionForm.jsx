import Card from "../common/Card/Card";
import Button from "../common/Button/Button";
import styled from "styled-components";
import { Title, Text } from "../common/Texts/Texts.styled";

const SubscriptionForm = ({ onSubscribe }) => {
  return (
    <Card>
      <Form>
        <Image src="/src/assets/images/illustration-sign-up-mobile.svg" />
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
          Email address email@company.com
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
  min-height: 100vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 38rem;
    min-height: unset;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 56.5rem;
    min-height: unset;
    flex-direction: row-reverse;
  }
`;

const Image = styled.img`
  width: calc(100% + 48px);
  transform: translate(-24px, -24px);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    transform: unset;
    border-radius: 16px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const List = styled.ul``;
const ListItem = styled.li``;
