import { useEffect, useRef, useState } from "react";

const useSubscriptionForm = (onSubscribe) => {
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        inputRef.current.focus();
      }
    };

    const handleKeyDown = (event) => {
      if (
        event.key === "Escape" &&
        document.activeElement === inputRef.current
      ) {
        inputRef.current.blur();
        setIsError(false);
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleInputChange = (e) => {
    setIsError(false);
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = () => {
    if (email.trim() === "") {
      setIsError(true);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      onSubscribe(email);
    } else {
      setIsError(true);
    }
  };

  return {
    email,
    inputRef,
    isError,
    isValidEmail,
    handleBlur,
    handleInputChange,
    handleSubscribe,
  };
};

export default useSubscriptionForm;
