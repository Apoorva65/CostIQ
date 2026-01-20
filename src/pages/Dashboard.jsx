import React, { useState,useEffect} from "react";
import Expenseform from "../components/Expenseform";
import Expenselist from "../components/Expenselist";
import Summary from "../components/Summary";

function Dashboard(){

    const [expenses,setExpenses] = useState(()=>{
        const storedExpenses = localStorage.getItem("expenses");
        return storedExpenses?JSON.parse(storedExpenses):[];
    }); //LAZY INITIALIZER

    useEffect(()=>{
        localStorage.setItem("expenses",JSON.stringify(expenses))
    },[expenses])

    const addExpense = (expense) => {
        setExpenses((prevexpenses)=>([expense,...prevexpenses])); 
    }

    const deleteExpense = (id) => {
        setExpenses((prevexpenses)=>prevexpenses.filter((exp)=>exp.id!==id));
    }

    return(
        <div>
            <h1>CostIQ Dashboard</h1>
            <Expenseform onAddexpense={addExpense}/>
            <Summary expenses={expenses} />
            <Expenselist expenses={expenses} OndeleteExpense={deleteExpense}/>
        </div>
    )

}

export default Dashboard;