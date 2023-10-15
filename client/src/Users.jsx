import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002")
      .then((result) => setUsers(result.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3002/deleteUser/${id}`)
    .then(() => {
      alert("User deleted Successfully")
      window.location.reload()
    })
    .catch((error) => console.log(error));
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          + Add User
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td className="d-flex gap-2">
                  <Link to={`/update/${user._id}`}>
                    <button className="btn btn-primary">Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(user._id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
