import React, { useState } from "react";
import Table from "../table/table";

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    password: "",
    email:""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({...formData,[name]: value});
  };

  const onSubmit = (event) => {
    event.preventDefault(); 
    setsubmitedata([...submitteddata,formData])
    console.log( formData);
  };
  const[submitteddata,setsubmitedata]=useState([])

  return (
    <div className="container mt-3">
      <h2>ENTER YOUR DETAILS</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="firstname">Username:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={onChangeHandler}
          />
</div>
         <div className="mb-3">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="password"
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
        />

        </div>
       
        <div className="mb-3">
          <label htmlFor="email">Enter Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter mail id"
            id="password"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
        />

        </div>


        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <Table rowData={submitteddata}/>



      </form>
    </div>        
  );
};

export default Form;
