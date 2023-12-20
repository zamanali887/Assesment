import { message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'



const initialState = { fullName: "", email: "", role: "" }

export default function AddUser() {


  const [state, setState] = useState(initialState)

  const handleChange = (e) => {

    setState(s => ({ ...s, [e.target.name]: e.target.value }))

  }

  const URL = "http://localhost:8000";

  const handleSubmit = () => {

    const { fullName, email, role } = state

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      return message.error("Please enter a valid Email")
    }
    const data = {
      email, role, fullName
    }

    axios.post(`${URL}/adduser`, data)
      .then((res) => {
        message.success("user Added Successfully")
        console.log('res', res)
      })
      .catch((err) => {
        console.log('err', err)
      })
    console.log('data', data)
  }
  return (
    <div className="container">
      <div className="row ">
        <div className="col d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
          <div className="row userBox">
            <div className="col py-3 d-flex justify-content-between flex-column">
              <h3 className='text-center mb-3'>Add New User</h3>
              <div>
                <div className="row mb-3">
                  <div className="col">
                    <input type="text" className='form-control' name='fullName' placeholder='Enter your Full Name' onChange={handleChange} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input type="text" className='form-control' name='email' placeholder='Enter your E-mail' onChange={handleChange} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <select className="form-select" name='role' onChange={handleChange}>
                      <option>Select your role</option>
                      <option value="superAdmin">Super Admin</option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className='btn btn-danger' onClick={handleSubmit}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
