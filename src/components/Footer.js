import React from "react";
import { useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();

  // Get the history object

  const goBack = () => {
    history.goBack();
  };

  const goForward = () => {
    history.goForward();
  };

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
