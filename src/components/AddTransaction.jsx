import { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      text,
      amount: +amount,
      id: Math.floor(Math.random() * 99999999),
    };
    addTransaction(transaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Task</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter the task"
          />
        </div>
        <div className="form-control">
          <label htmlFor="number">
            Amount <br />
            (negative : expense, positive : income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <button type="submit" className="btn">
          Add Transaction
        </button>
      </form>
    </>
  );
};
