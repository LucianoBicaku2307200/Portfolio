import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const useForm = (validate) => {
  //input values used for validation
  const [values, setValues] = useState({
    email: "",
    name: "",
    company: "",
    subject: "",
    message: "",
  });
  //errors inside form
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //data = input form used to send info to emailjs
  const [data, setData] = useState(null);

  const [sended, setSended] = useState(false);

  //dissable submit btn so it can stop spamming
  const [disabled, setDisabled] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    setData(event.target);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      emailjs
        .sendForm(
          "gmail",
          process.env.REACT_APP_TEMPLATE_ID,
          data,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setSended(true);
            setDisabled(true);
            data.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }, [errors, data, isSubmitting]);

  return {
    handleChange,
    handleSubmit,
    errors,
    sended,
    disabled,
  };
};

export default useForm;
