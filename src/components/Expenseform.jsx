import React,{useState} from "react";

function Expenseform(){

    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState();
    const [categoty,setCategory] = useState("Food");
    const [date,setDate] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <h2>Add expense</h2>
                <label>Title: </label>
                <input 
                type="text"
                placeholder="Enter the title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />

                <label>Amount: </label>
                <input 
                type="number"
                placeholder="Enter the amount"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                />

                <label>Category: </label>
                <select
                value={categoty}
                onChange={(e)=>setCategory(e.target.value)}
                >
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Other">Other</option>
                </select>

                <label>Date: </label>
                <input 
                type="Date"
                placeholder="Enter the Date"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                />

                <button type="submit">Add expense</button>
            </form>
        </div>
    )

}

export default Expenseform;