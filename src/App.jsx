import { useState } from "react";
import "./App.css";
import Card from "./components/common/Card/Card";
import Button from "./components/common/Button/Button";
import ConfirmModal from "./components/ConfirmModal/ConfirmModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleDismiss = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <>
      {/* <!-- Sign-up form start --> */}
      <Card>
        Stay updated! Join 60,000+ product managers receiving monthly updates
        on: Product discovery and building what matters Measuring to ensure
        updates are a success And much more! Email address email@company.com
        <Button onClick={handleSubscribe}>
          Subscribe to monthly newsletter
        </Button>
      </Card>
      {showModal && <ConfirmModal onDismiss={handleDismiss} />}
    </>
  );
}

export default App;
