import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function GetUser() {

  const [getUsers, setGetUsers] = useState([])

  const URL = "http://localhost:8000";
    useEffect(() => {

        axios.get(`${URL}/readuser`)
            .then((res) => {
                const { data } = res
                setGetUsers(data)
                console.log('data', data)
            })
            .catch((err) => {
                console.log('err', err)
            })
    }, [])


    const handleDelete = (user) => {

      axios.post(`${URL}/deleteuser`, user)

          .then((res) => {
              let userAfterDelete = getUsers.filter(doc => doc._id !== user._id)
              setGetUsers(userAfterDelete)
              message.success("user Deleted Successfully")
              console.log('res', res)
          })
          .catch((err) => {
              console.log('err', err)
          })
  }
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>E-mail</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  getUsers.map((user,i) =>{
                    return(
                      <tr key={i}>
                      <th>{i+1}</th>
                      <td>{user.fullName}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <button className='btn btn-danger' onClick={()=>handleDelete(user)}>Delete</button>
                      </td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
