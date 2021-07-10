import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/shared/buttons/Button";

const Error404 = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <section className="error404">
      <div className="container">
        <h1 className="error404__title">404</h1>
        <p>Oh dear, it looks like you're lost...</p>
        <Button cn="large primary" text="Go back" fn={goBack} />
      </div>
    </section>
  );
};

export default Error404;
