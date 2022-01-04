import React, { useContext, useState, useEffect } from 'react';

export const userContext = React.createContext();

function FormContext({ children }) {
  // user data
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  // object with or without errors
  const [allErrors, setAllErrors] = useState({});
  // object length functionality support
  const [allow, setAllow] = useState(false);
  // display either form or tick
  const [success, setSuccess] = useState(false);

  const handleForm = (e) => {
    // prevent refresh
    e.preventDefault();
    //   set state with or without errors
    setAllErrors(submitValidator(signUpData));
    setAllow(true);
  };

  // check object length
  useEffect(() => {
    if (Object.keys(allErrors).length === 0 && allow) {
      setSuccess(true);
    }
  }, [allErrors]);

  // fill input fields with user's data
  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  // validation

  let errors = {};

  const submitValidator = () => {
    // empty username check
    if (!signUpData.username) {
      errors.username = true;
    }
    // empty email check
    if (!signUpData.email) {
      errors.email = true;
    }
    // empty password check, short password check
    if (!signUpData.password) {
      errors.password = true;
    } else if (signUpData.password.length < 8) {
      errors.shortPassword = true;
    }
    // passwords match check
    if (signUpData.confirmpassword !== signUpData.password) {
      errors.confirmPassword = true;
    }

    return errors;
  };

  submitValidator();

  return (
    <userContext.Provider
      value={{
        handleForm,
        handleChange,
        signUpData,
        errors,
        allErrors,
        success,
      }}>
      {children}
    </userContext.Provider>
  );
}

// custom userContext hook
export const useGloballyUserContext = () => {
  return useContext(userContext);
};

export { FormContext };
