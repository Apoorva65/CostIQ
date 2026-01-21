import React from "react";
import Expenseitem from "./Expenseitem";

function Expenselist({expenses,OndeleteExpense,OnEditExpense}){
    if(expenses.length===0){
        return(<p>No expenses added!</p>)
    }
    return(
            <ul className="card list">
                {expenses.map((exp)=>(
                    <Expenseitem key = {exp.id} expense={exp} OnDelete={OndeleteExpense} OnEdit={OnEditExpense}/>
                ))}
            </ul>
    )

}

export default Expenselist;