import { useEffect, useRef, useState } from "react";
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
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        inputRef.current.focus();
      }
    };

    const handleKeyDown = (event) => {
      if (
        event.key === "Escape" &&
        document.activeElement === inputRef.current
      ) {
        inputRef.current.blur();
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleInputChange = (e) => {
    setIsError(false);
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      onSubscribe(email);
    } else {
      setIsError(true);
    }
  };

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
