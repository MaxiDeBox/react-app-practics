import React from "react";

export default (props) => (
  <div>
    <p>Car component</p>
    <p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>
  </div>
);
