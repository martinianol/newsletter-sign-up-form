import styled from "styled-components";
import { Text } from "../../common/Texts/Texts.styled";

const FeaturesList = () => {
  return (
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
  );
};

export default FeaturesList;

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
