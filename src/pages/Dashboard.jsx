import React, { useState} from "react";
import Expenseform from "../components/Expenseform";
import Expenselist from "../components/Expenselist";
import Summary from "../components/Summary";

function Dashboard(){

    const [expenses,setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses((prevexpenses)=>([expense,...prevexpenses])); 
    }

    return(
        <div>
            <h1>CostIQ Dashboard</h1>
            <Expenseform onAddexpense={addExpense}/>
            <Summary expenses={expenses} />
            <Expenselist expenses={expenses} />
        </div>
    )

}

export default Dashboard;