import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) =>{
    const [editForm,setEditForm ] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) =>{
       const expenseData =  {
            ...enteredExpenseData,
            id: Math.random().toString()
            
        }
        
        props.onAddExpense(expenseData)
    }

    const editFormHandler = () =>{
        setEditForm(true)
    }
    const cancelFormHandler = () =>{
        setEditForm(false)
    }
    
    return(
        


        
        <div className="new-expense">
            {!editForm &&   <button type="button" onClick ={editFormHandler} >Add Expense</button>}

           {editForm && <ExpenseForm onCancel={cancelFormHandler} onsaveExpense = {saveExpenseDataHandler}/>}

        </div>
    )
}

export default NewExpense