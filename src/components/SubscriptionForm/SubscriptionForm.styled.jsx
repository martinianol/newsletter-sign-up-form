import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 1rem;
  padding: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: unset;
    gap: 2.5rem;
    min-width: clamp(25rem, 80vw, 33rem);
    padding: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row-reverse;
    gap: 4rem;
    align-items: center;
    max-width: 56.5rem;
    padding: 1.5rem 2rem;
  }
`;

export const Image = styled.div`
  width: calc(100% + 48px);
  height: auto;
  transform: translate(-24px, -24px);
  background-image: url("${import.meta.env.BASE_URL}/assets/images/illustration-sign-up-mobile.svg");
  background-size: cover;
  background-position: center;
  border-end-end-radius: 16px;
  aspect-ratio: 1.32;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    transform: unset;
    border-radius: 16px;
    height: 22.375rem;
    background-position: unset;
    aspect-ratio: unset;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-image: url("${import.meta.env.BASE_URL}/assets/images/illustration-sign-up-desktop.svg");
    height: 37.0625rem;
    aspect-ratio: 0.67;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 38rem;
    gap: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 56.5rem;
    min-height: unset;
    gap: 2rem;
    min-width: 23.5rem;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 2rem;
  }
`;



export const Interactions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 1rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 1.5rem;
  }
`;
