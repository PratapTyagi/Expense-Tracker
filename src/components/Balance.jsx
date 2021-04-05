import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h3>Your Balance:</h3>
      <h1 id="balance">
        {total < 0 ? "-" : ""}
        {Math.abs(total)}
      </h1>
    </>
  );
};
