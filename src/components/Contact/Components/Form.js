import React from "react";
import useForm from "./useForm";
import validate from "./validateLogin";

export default function Form() {
  const { handleChange, handleSubmit, errors, sended, disabled } = useForm(
    validate
  );

  const inputs = [
    { placeholder: "Name", name: "name", error: errors.name },
    { placeholder: "Email", name: "email", error: errors.email },
    { placeholder: "Company", name: "company", error: errors.company },
    { placeholder: "Subject", name: "subject", error: errors.subject },
  ];

  return (
    <div className="w-full md:w-7/12 ">
      <h4 className="font-bold text-4xl">Contact Me</h4>
      <p className="font-light my-4">Feel free to contact me anytime.</p>

      <form onSubmit={handleSubmit} className="w-full md:w-11/12 mb-10">
        {inputs.map((el, index) => {
          return (
            <div className="relative" key={index}>
              <input
                className={`w-full border-b pl-1 pb-1 border-${
                  el.error ? "red-500" : "black"
                }
              text-black focus:outline-none placeholder-black my-6`}
                placeholder={el.placeholder}
                name={el.name}
                onChange={handleChange}
              />
              <p
                className={`absolute bottom-0 left-0 text-sm text-red-500 font-light ml-1 transition duration-500 ${
                  el.error ? "opacity-100" : "opacity-0"
                }`}
              >
                {el.error}
              </p>
            </div>
          );
        })}
        <div className="relative">
          <textarea
            className={`w-full border-b pl-1 pb-1  border-${
              errors.message ? "red-500" : "black"
            } text-black focus:outline-none placeholder-black my-6`}
            placeholder="Message"
            name="message"
            onChange={handleChange}
          />

          <p
            className={`absolute bottom-0 left-0 text-sm text-red-500 font-light ml-1 transition duration-500 ${
              errors.message ? "opacity-100" : "opacity-0"
            }`}
          >
            {errors.message}
          </p>
        </div>
        <p
          className={`font-light text-green-400 my-4 ${
            sended ? "opacity-100" : "opacity-0"
          }`}
        >
          Your email was send.
        </p>
        <button
          type="submit"
          disabled={disabled}
          className="bg-black text-white uppercase tracking-widest text-xl w-full py-3 my-6 border border-black duration-500 ease-in-out hover:text-black hover:bg-transparent"
        >
          Send Email
        </button>
      </form>
    </div>
  );
}
