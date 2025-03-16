import Card from "../common/Card/Card";
import Button from "../common/Button/Button";
import { Modal, Title, Text, Bold, Actions } from "./ConfirmModal.styled";

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
