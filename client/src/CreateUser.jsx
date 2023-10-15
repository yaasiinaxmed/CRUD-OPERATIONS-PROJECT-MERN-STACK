import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CreateUser() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3002/createUser", {name, email, age}).then((result) => {
      console.log(result)
      navigate('/')
    }).catch((error) => console.log(error))
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
            <h2>Add User</h2>
            <div class="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div><div class="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div><div class="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Create User</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
