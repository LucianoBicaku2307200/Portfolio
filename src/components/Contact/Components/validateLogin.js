export default function validateLogin(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.subject) {
    errors.subject = "Subject is required";
  }
  if (!values.company) {
    errors.company = "Please enter your company name";
  }
  if (!values.message) {
    errors.message = "Please enter a message";
  } else if (values.message.length < 10) {
    errors.message = "Message needs to be more than 10 characters";
  }
  return errors;
}
