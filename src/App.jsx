import { useState } from "react";
import "./App.css";
import SubscriptionForm from "./components/SubscriptionForm/SubscriptionForm";
import Card from "./components/common/Card/Card";
import Button from "./components/common/Button/Button";

import ConfirmModal from "./components/ConfirmModal/ConfirmModal";

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed((prevState) => !prevState);
  };

  const handleDismiss = () => {
    setIsSubscribed((prevState) => !prevState);
  };

  return !isSubscribed ? (
    <SubscriptionForm onSubscribe={handleSubscribe} />
  ) : (
    <ConfirmModal onDismiss={handleDismiss} />
  );
}

export default App;
