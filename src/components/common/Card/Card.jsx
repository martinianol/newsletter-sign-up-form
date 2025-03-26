import styled from "styled-components";

const Card = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Card;

const StyledDiv = styled.article`
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 15px 60px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-radius: 36px;
  }
`;
