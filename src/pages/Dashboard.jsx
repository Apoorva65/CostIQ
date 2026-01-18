import React, { useState} from "react";
import Expenseform from "../components/Expenseform";
import Expenselist from "../components/Expenselist";

function Dashboard(){

    const [expenses,setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses((prevexpenses)=>([expense,...prevexpenses])); 
    }

    return(
        <div>
            <h1>CostIQ Dashboard</h1>
            <Expenseform onAddexpense={addExpense}/>
            <Expenselist expenses={expenses} />
        </div>
    )

}

export default Dashboard;