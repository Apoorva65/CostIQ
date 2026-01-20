import React from "react";

function Expenseitem({expense,OnDelete}){
    return(
            <li>
                <span>{expense.title}</span>{" "}
                <span>{expense.amount}</span>{" "}
                <span>{expense.category}</span>{" "}
                <span>{expense.date}</span>{" "}
                <button
                onClick={()=>OnDelete(expense.id)}
                >Delete</button>
            </li>
    )

}

export default Expenseitem;