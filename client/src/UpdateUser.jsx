import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateUser() {
  const {id} = useParams();

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3002/getUser/${id}`)
    .then(result => {
      console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err => console.log(err))
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault()

    axios.put(`http://localhost:3002/updateUser/${id}`, {name, email, age})
    .then(result => {
      console.log(result)
      navigate("/")
    }).catch(err => console.log(err))
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
      <form onSubmit={handleUpdate}>
          <h2>Add User</h2>
          <div class="mb-2">
          <label htmlFor="">Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div><div class="mb-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div><div class="mb-2">
          <label htmlFor="">Age</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <button className="btn btn-success">Update User</button>
      </form>
    </div>
  </div>
  )
}

export default UpdateUser