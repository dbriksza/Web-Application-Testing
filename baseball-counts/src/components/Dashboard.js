import React from "react";
import { useState } from "react";

import Display from "./Display";

const DashBoard = () => {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const ball = () => {
    if (balls < 3) {
      setBalls(balls + 1);
    } else if (balls === 3) {
      setBalls(0);
      setStrikes(0);
    }
  };
  const strike = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    } else if (strikes === 2) {
      setBalls(0);
      setStrikes(0);
    }
  };
  const foul = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    }
  };
  const hit = () => {
    setStrikes(0);
    setBalls(0);
  };

  return (
    <>
      <Display strikes={strikes} balls={balls} />
      <button onClick={() => ball()}>Ball!</button>
      <button onClick={() => strike()}>Strike!</button>
      <button onClick={() => foul()}>Foul!</button>
      <button onClick={() => hit()}>Hit!</button>
    </>
  );
};

export default DashBoard;
