import React, { useState } from "react";
import "./App.scss";
import { CgProfile } from "react-icons/cg";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const _handleChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      alert("Please fill in the input field.");
    }
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert(" please fill because Todo cannot be empty.");
      return;
    }
    setTodos([...todos, { text: inputValue, isChecked: false }]);
    setInputValue("");
  };

  // const _handleDelete = (index) => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   alert("delet successfully ");
  //   setTodos(newTodos);
  // };
  const _handleDelete = () => {
    const newTodos = todos.filter((todo) => !todo.isChecked);
    if (newTodos.length === todos.length) {
      alert("No todos selected for delet.");
      return;
    }
    alert(" Your Selected todos deleted successfully.");
    setTodos(newTodos);
  }

  const _delet_chek_ = (index) => {
    const updatedTodos = todos.map((todo, indx) =>
      indx === index ? { ...todo, isChecked: !todo.isChecked } : todo
    );
    setTodos(updatedTodos);
  };
;

  return (
    <div className=" main d-flex w-50 mx-auto mt-5 "  > 
   
      <div
        className="p-3 rounded text-center mx-auto my-3 col-6"
        style={{
          width: "50%",

          borderRadius: "10px",
          textAlign: "center",
          maxWidth: "400px",
          margin: "20px auto",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div className="" style={{alignItems:"center"}}>
        <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}>
        <CgProfile style={{fontSize:"34px", color:"blue"}}/> My faverate list item
        </h1>
        </div>
        
        <form onSubmit={_handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={_handleChange}
            placeholder="Add a new todo..."
          />
          <button className="mt-2"
            type="submit"
            style={{
            
              padding: "10px 15px",
              border: "none",
              backgroundColor: "#007BFF",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Add Todo
          </button>
        </form>
      </div>
      <div>
      <i className=" pi pi-arrow-right-arrow-left col-1 " style={{ fontSize: '1.5rem', marginTop:"85px", }}></i>
      </div>


        
      <div 
        className="p-3 rounded text-center mx-auto my-3 col-5"
        style={{
          width: "50%",

          borderRadius: "10px",
          textAlign: "center",
          maxWidth: "400px",
          margin: "20px auto",
          backgroundColor: "#f9f9f9",
        }}
      >
     
        <ul
          style={{
            listStyle: "none",
            padding: "0",
            marginTop: "20px",
            textAlign: "left",
          }}
        >
          {todos.map((todo, index) => (
            <li
              className="d-flex justify-content-between align-items-center bg-white p-2 mb-2 border rounded"
              key={index}
              style={{
                backgroundColor: "#fff",

                borderRadius: "5px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  color: "#333",
                  textDecoration: todo.isChecked ? "line-through" : "none",
                }}
              >
                <input
                  type="checkbox"
                  style={{ marginRight: "10px" }}
                  checked={todo.isChecked}
                  onChange={() => _delet_chek_(index)}
                />
                {todo.text}
              </span>
              <button
                onClick={() => _handleDelete(index)}
                 className="btn btn-danger px-3 py-1 text-white rounded"
                style={{
                  padding: "5px 10px",
                  border: "none",
                  backgroundColor: "#DC3545",
            
              
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
       
      </div>
    
  
     
    </div>
  );
}

export default TodoList;
