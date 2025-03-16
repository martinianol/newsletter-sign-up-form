import styled from "styled-components";

const Card = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Card;

const StyledDiv = styled.div`
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  box-shadow: 0px 15px 60px 0px rgba(0, 0, 0, 0.25); /* Added shadow */

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 40px;
    border-radius: 36px;
  }
`;
