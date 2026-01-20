import React from "react";
import Expenseitem from "./Expenseitem";

function Expenselist({expenses,OndeleteExpense}){
    if(expenses.length===0){
        return(<p>No expenses added!</p>)
    }
    return(
            <ul>
                {expenses.map((exp)=>(
                    <Expenseitem key = {exp.id} expense={exp} OnDelete={OndeleteExpense}/>
                ))}
            </ul>
    )

}

export default Expenselist;