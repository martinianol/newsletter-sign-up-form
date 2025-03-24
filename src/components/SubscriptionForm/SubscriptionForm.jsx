import Card from "../common/Card/Card";
import Button from "../common/Button/Button";
import { Title, Text } from "../common/Texts/Texts.styled";
import Input from "../common/Input/GeneralInput";
import {
  Form,
  Image,
  Body,
  Information,
  List,
  ListItem,
  Interactions,
} from "./SubscriptionForm.styled";

const SubscriptionForm = ({ onSubscribe }) => {
  return (
    <Card>
      <Form>
        <Image />
        <Body>
          <Information>
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
          </Information>
          <Interactions>
            <Input label="Email address" placeholder="email@company.com" />
            <Button onClick={onSubscribe}>
              Subscribe to monthly newsletter
            </Button>
          </Interactions>
        </Body>
      </Form>
    </Card>
  );
};

export default SubscriptionForm;
