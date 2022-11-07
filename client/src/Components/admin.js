import React from 'react';
import { useState } from 'react';
import Axios from 'axios';



function Admin() {

let defaultFormVals = ["name", "last", "email", "username"];

const [formValues, setFormValues] = useState(defaultFormVals);

const getValues = (e) =>{
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
}

const addUser = (e) => {
    e.preventDefault();

    let payload = {
        first: formValues['name'],
        last: formValues['last'],
        email: formValues['email'],
        username: formValues['username']
  }

  console.log(payload);
  

  Axios.post('http://localhost:5000/api/newUser', payload)
  .then((res)=> {
    if(res){
      console.log("User Added"); 
    }
  })
  .catch(function (error) {
    console.log(error);
  });

 }

  return (
    <div className="App">
        <h1>Add A New User</h1>
        <form onSubmit={addUser}>
            
            <TextField required name="name" label="First Name" fullWidth margin="dense" onChange={getValues} />
            <TextField required name="last" label="Last Name" fullWidth margin="dense" onChange={getValues}/>
            <TextField required name="email" label="Email" fullWidth margin="dense" onChange={getValues}/>
            <TextField required name="username" label="Username" fullWidth margin="dense" onChange={getValues} />
            <Button type="submit" style={{marginTop: "8px", height: "55px"}} fullWidth variant="contained">Add New User</Button>
        </form>
        </div>
  );
}

export default Admin;
