import styled from "styled-components";

const GeneralInput = ({ type = "email", placeholder, label }) => {
  return (
    <StyledDiv>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} />
    </StyledDiv>
  );
};

export default GeneralInput;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  display: inline;
  font: ${({ theme }) => theme.fontStyles.textPreset3};
  color: ${({ theme }) => theme.colors.blue[800]};
  font-weight: 700;
`;

const Input = styled.input`
  outline: 1px solid ${({ theme }) => theme.colors.grey};
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font: ${({ theme }) => theme.fontStyles.textPreset2Regular};

  &::placeholder {
    font: ${({ theme }) => theme.fontStyles.textPreset2Regular};
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 400;
  }
`;
