import Card from "../common/Card/Card";
import Button from "../common/Button/Button";
import { Title, Text } from "../common/Texts/Texts.styled";
import Input from "../common/Input/GeneralInput";
import {
  Form,
  Image,
  Body,
  Information,
  Interactions,
} from "./SubscriptionForm.styled";
import useSubscriptionForm from "./useSubscriptionForm";
import FeaturesList from "./List/List";

const SubscriptionForm = ({ onSubscribe }) => {
  const {
    email,
    inputRef,
    isError,
    isValidEmail,
    handleInputChange,
    handleSubscribe,
  } = useSubscriptionForm(onSubscribe);

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
            <FeaturesList />
          </Information>
          <Interactions>
            <Input
              ref={inputRef}
              label="Email address"
              errorLabel="Valid email required"
              placeholder="email@company.com"
              value={email}
              onChange={handleInputChange}
              isError={isError}
            />
            <Button onClick={handleSubscribe} shouldHighlight={isValidEmail}>
              Subscribe to monthly newsletter
            </Button>
          </Interactions>
        </Body>
      </Form>
    </Card>
  );
};

export default SubscriptionForm;
