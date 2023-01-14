import React, { useState } from "react";

import "../../styles/form.scss";

const Form = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameValue("");
    setEmailValue("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__title">Log in</h2>
      <div className="form__control">
        <input
          type="text"
          onChange={(event) => setNameValue(event.target.value)}
          value={nameValue}
          className="form__control-input"
          placeholder="Name"
        />
        <input
          type="text"
          value={emailValue}
          onChange={(event) => setEmailValue(event.target.value)}
          className="form__control-input"
          placeholder="Email"
        />
      </div>
      <button className="form__button" type="submit">
        Book a demo
      </button>
    </form>
  );
};

export default Form;
