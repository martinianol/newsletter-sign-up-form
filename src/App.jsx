import { useState } from "react";
import "./App.css";
import SubscriptionForm from "./components/SubscriptionForm/SubscriptionForm";
import ConfirmModal from "./components/ConfirmModal/ConfirmModal";

function App() {
  const [subscribedEmail, setSubscribedEmail] = useState(null);

  const handleSubscribe = (email) => {
    setSubscribedEmail(email);
  };

  const handleDismiss = () => {
    setSubscribedEmail(null);
  };

  return (
    <main>
      {!subscribedEmail ? (
        <SubscriptionForm onSubscribe={handleSubscribe} />
      ) : (
        <ConfirmModal onDismiss={handleDismiss} email={subscribedEmail} />
      )}
    </main>
  );
}

export default App;
