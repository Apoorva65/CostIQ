import React, { useState,useEffect, use} from "react";
import Expenseform from "../components/Expenseform";
import Expenselist from "../components/Expenselist";
import Summary from "../components/Summary";

function Dashboard(){

    const [editingExpense,setEditingExpense] = useState(null);

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

    const startEditExpense = (expense) =>{
        setEditingExpense(expense);
    }

    const updateExpense = (updateExpense) => {
        setExpenses((prevexpenses)=>(
            prevexpenses.map((exp)=>exp.id===updateExpense.id?updateExpense:exp)
        ));
        setEditingExpense(null);
    }

    return(
        <div className="app-container">
            <h1>CostIQ Dashboard</h1>
            <Expenseform onAddexpense={addExpense} editingExpense={editingExpense} updateExpense={updateExpense}/>
            <Summary expenses={expenses} />
            <Expenselist expenses={expenses} OndeleteExpense={deleteExpense} OnEditExpense={startEditExpense}/>
        </div>
    )

}

export default Dashboard;