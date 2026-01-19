import React from "react";

function Summary({ expenses }) {
  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <div>
      <h3>Total Spent: ₹{total}</h3>
    </div>
  );
}

export default Summary;