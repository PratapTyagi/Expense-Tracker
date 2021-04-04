export const IncomeExpense = () => {
  return (
    <div className="incomeExpenseContainer">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money-plus">
          $0.0
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money-minus">
          $0.0
        </p>
      </div>
    </div>
  );
};
