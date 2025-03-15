import styled from "styled-components";
import Card from "../common/Card/Card";
import Button from "../common/Button/Button";

const ConfirmModal = ({ onDismiss }) => {
  return (
    <Card>
      <Modal>
        <img
          src="/src/assets/images/icon-success.svg"
          alt="Success"
          width={64}
          height={64}
        />
        <Title>Thanks for subscribing! </Title>
        <Text>
          A confirmation email has been sent to{" "}
          <Bold>ash@loremcompany.com</Bold>. Please open it and click the button
          inside to confirm your subscription.
        </Text>
        <Actions>
          <Button onClick={onDismiss}>Dismiss message</Button>
        </Actions>
      </Modal>
    </Card>
  );
};

export default ConfirmModal;

const Modal = styled.div`
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

const Title = styled.h1`
  font: ${({ theme }) => theme.fontStyles.textPreset1};
  font-size: clamp(2.5rem, 8vw, 3.5rem);
`;

const Text = styled.p`
  font: ${({ theme }) => theme.fontStyles.textPreset2Regular};
`;

const Bold = styled.span`
  font-weight: 700;
`;

const Actions = styled.div`
  margin-top: auto;
  margin-bottom: 5.5vh;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: unset;
    margin-bottom: unset;
  }
`;
