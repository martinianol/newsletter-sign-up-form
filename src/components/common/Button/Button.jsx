import styled from "styled-components";

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  width: 100%;
  font: ${({ theme }) => theme.fontStyles.textPreset2Bold};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.blue[800]};
  padding: 16px 0px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 500ms ease-in-out;


  &:hover {
    background: ${({ theme }) => theme.colors.gradient};
  }
`;
