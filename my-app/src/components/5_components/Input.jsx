import React, { useState } from "react";

const Input = ({ setName }) => {
  const [inputValue, SetinputValue] = useState('')

  const click = () => {
    console.log("Input value:", inputValue);
    setName(inputValue)
  }

  return <>
    <input onChange={(e) => { SetinputValue(e.target.value) }}></input>
    <button onClick={click}>button</button>
  </>;
};

export default Input;
