import Card from "../common/Card/Card";
import Button from "../common/Button/Button";
import { Modal, Actions } from "./ConfirmModal.styled";
import { Title, Text, Bold } from "../common/Texts/Texts.styled";

const ConfirmModal = ({ onDismiss, email }) => {
  return (
    <Card>
      <Modal>
        <img
          src="public/assets/images/icon-success.svg"
          alt="Success"
          width={64}
          height={64}
        />
        <Title>Thanks for subscribing!</Title>
        <Text>
          A confirmation email has been sent to <Bold>{email}</Bold>. Please
          open it and click the button inside to confirm your subscription.
        </Text>
        <Actions>
          <Button onClick={onDismiss} $allowHover>
            Dismiss message
          </Button>
        </Actions>
      </Modal>
    </Card>
  );
};

export default ConfirmModal;
