import React from "react";

const useForm = (initialValues, callback) => {
  const [inputs, setInputs] = React.useState({ initialValues });

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback(inputs);
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useForm;
