import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.blue[800]};
  min-height: 100vh;
  margin-top: 15vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 23.5rem;
    min-height: unset;
    margin-top: unset;
  }
`;

export const Title = styled.h1`
  font: ${({ theme }) => theme.fontStyles.textPreset1};
  font-size: clamp(2.5rem, 8vw, 3.5rem);
`;

export const Text = styled.p`
  font: ${({ theme }) => theme.fontStyles.textPreset2Regular};
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Actions = styled.div`
  margin-top: auto;
  margin-bottom: 5.5vh;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: unset;
    margin-bottom: unset;
  }
`;
