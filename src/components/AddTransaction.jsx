export const AddTransaction = () => {
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label for="text">Task</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Enter the task"
          />
        </div>
        <div className="form-control">
          <label for="number">
            Amount <br />
            (negative : expense, positive : income)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount"
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </>
  );
};
