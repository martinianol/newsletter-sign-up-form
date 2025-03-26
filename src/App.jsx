import { useState } from "react";
import "./App.css";
import SubscriptionForm from "./components/SubscriptionForm/SubscriptionForm";
import Card from "./components/common/Card/Card";
import Button from "./components/common/Button/Button";

import ConfirmModal from "./components/ConfirmModal/ConfirmModal";

function App() {
  const [subscribedEmail, setSubscribedEmail] = useState(null);

  const handleSubscribe = (email) => {
    setSubscribedEmail(email);
  };

  const handleDismiss = () => {
    setSubscribedEmail(null);
  };

  return !subscribedEmail ? (
    <SubscriptionForm onSubscribe={handleSubscribe} />
  ) : (
    <ConfirmModal onDismiss={handleDismiss} email={subscribedEmail} />
  );
}

export default App;
