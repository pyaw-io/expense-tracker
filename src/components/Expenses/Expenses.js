import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";

import "./Expense.css";
import ExpensesFilter from "../UI/ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectedDateHandler = (selectedDate) => {
    setFilteredYear(selectedDate);
  };

  const filteredExpenses = props.items.filter((items) => {
    return items.date.getFullYear() == +filteredYear;
  });

  
  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={selectedDateHandler}
      />
      <Card className="expense">
        <ExpenseList items = {filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
