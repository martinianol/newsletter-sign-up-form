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

export const Actions = styled.div`
  margin-top: auto;
  margin-bottom: 5.5vh;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: unset;
    margin-bottom: unset;
  }
`;
