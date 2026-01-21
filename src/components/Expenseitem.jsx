import React from "react";

function Expenseitem({expense,OnDelete,OnEdit,editing}){
    return(
            <li className="expense-item">
                <span>{expense.title}</span>{" "}
                <span>{expense.amount}</span>{" "}
                <span>{expense.category}</span>{" "}
                <span>{expense.date}</span>{" "}
                <div className="actions">
                    <button
                    onClick={()=>OnDelete(expense.id)}
                    disabled = {editing}
                    >Delete</button>
                    <button
                    onClick={()=>OnEdit(expense)}
                    >Edit</button>
                </div>
            </li>
    )

}

export default Expenseitem;