import { forwardRef } from "react";
import styled from "styled-components";

const GeneralInput = forwardRef(
  (
    {
      type = "email",
      placeholder,
      label,
      errorLabel,
      onChange,
      isError,
      onBlur,
    },
    ref
  ) => {
    return (
      <StyledDiv>
        <Labels>
          <Label>{label}</Label>
          {isError && <ErrorLabel>{errorLabel}</ErrorLabel>}
        </Labels>
        <Input
          ref={ref}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          $isError={isError}
        />
      </StyledDiv>
    );
  }
);

export default GeneralInput;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Labels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Label = styled.label`
  display: inline;
  font: ${({ theme }) => theme.fontStyles.textPreset3};
  color: ${({ theme }) => theme.colors.blue[800]};
  font-weight: 700;
`;

const ErrorLabel = styled(Label)`
  color: ${({ theme }) => theme.colors.red};
`;

const Input = styled.input`
  outline: 1px solid
    ${({ theme, $isError }) =>
      $isError ? theme.colors.red : theme.colors.grey};
  border: none;
  color: ${({ theme, $isError }) =>
    $isError ? theme.colors.red : theme.colors.blue[800]};
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font: ${({ theme }) => theme.fontStyles.textPreset2Regular};
  transition: outline-color 0.3s, box-shadow 0.3s;
  background-color: ${({ $isError, theme }) =>
    $isError ? theme.colors.red10 : "unset"};

  &::placeholder {
    font: ${({ theme }) => theme.fontStyles.textPreset2Regular};
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 400;
  }

  &:focus {
    outline-color: ${({ theme, $isError }) =>
      $isError ? theme.colors.red : theme.colors.blue[800]};
  }
`;
