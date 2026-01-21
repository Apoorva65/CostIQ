import React from "react";

function CategoryFilter({selectedCategory,changedCategory}){

    return(
        <div className="card">
            <label>Filter by category<span>{" "}</span></label>
            <select 
            value={selectedCategory}
            onChange={(e)=>changedCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Utilities">Utilities</option>
                <option value="Other">Other</option>
            </select>
        </div>
    )

}

export default CategoryFilter;