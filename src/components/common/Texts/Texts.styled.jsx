import styled from "styled-components";

export const Title = styled.h1`
  font: ${({ theme }) => theme.fontStyles.textPreset1};
  font-size: clamp(2.5rem, 8vw, 3.5rem);
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Text = styled.p`
  font: ${({ theme }) => theme.fontStyles.textPreset2Regular};
`;
