import React, { useState } from "react";
import './../styles/App.css';

const generateID = () => Date.now() + Math.random();

const App = () => {
  const [fields, setFields] = useState([
    {
      id: generateID(),
      name: '',
      age: ''
    },
  ]);

  const handleAddForm = () =>{
    setFields(prev => [...prev, {
      id: generateID(),
      name: '',
      age: ''
    },])
  }

  const handleNameChange = (id,value) =>{
    setFields(prev => prev.map((field)=>
      field.id === id ? { ...field, name: value } : field
    ));
  }

  const handleAgeChange = (id, value) =>{
    setFields(prev => prev.map((field)=>
      field.id === id ? {...field, age: value} : field
    ));
  }

  const handleRemoveForm = (id) =>{
    setFields(prev => prev.filter((field)=> field.id !== id ))
  }

  const handleFormSubmit =(e) =>{
    e.preventDefault();
    const output = fields.map(({ name, age }) => ({ name, age }))
    console.log(output)
  }

  return (
    <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          {
            fields.map(field=>(
              <div key={field.id}>
                <input
                  name="name"
                  type="text"
                  value={field.name}
                  placeholder="Name"
                  onChange={(e)=> handleNameChange(field.id, e.target.value)}
                />
                <input
                  name="age"
                  type="number"
                  value={field.age}
                  placeholder="Age"
                  onChange={(e)=> handleAgeChange(field.id, e.target.value)}
                />
                <button type="button" onClick={()=> handleRemoveForm(field.id)}>Remove</button>
              </div>
            ))
          }
          
            <button type="button" onClick={handleAddForm}>Add Form</button>
            <button type="submit">Submit</button>
        </form>

        <p>After clicking submit check console for data</p>
        
    </div>
  )
}

export default App
