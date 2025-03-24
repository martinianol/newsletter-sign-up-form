import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.blue[800]};
  min-height: 100vh;
  padding: 8.75rem 1.5rem 4.375rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 3.75rem 4rem;
    max-width: 31.5rem;
    min-height: unset;
    margin-top: unset;
  }
`;

export const Actions = styled.div`
  margin-top: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: unset;
    margin-bottom: unset;
  }
`;
