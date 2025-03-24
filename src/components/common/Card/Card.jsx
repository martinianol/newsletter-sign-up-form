import styled from "styled-components";

const Card = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Card;

const StyledDiv = styled.div`
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  box-shadow: 0px 15px 60px 0px rgba(0, 0, 0, 0.25); /* Added shadow */

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2.5rem;
    border-radius: 36px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.5rem 2rem;
  }
`;
