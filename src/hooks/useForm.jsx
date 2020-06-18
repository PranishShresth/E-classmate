import React from "react";
import axios from "axios";

const useForm = (initialValues, callback) => {
  const [inputs, setInputs] = React.useState({ initialValues });

  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useForm;
