import React, { useState } from 'react'
import Axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

const AddUser = () => {

  let navigate = useNavigate();

  const [user,setUser] = useState({
    name:"",
    username:"",
    email:""
  });

  const {name,username,email} = user

  const onInputChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  };

  const onSubmit=async (e)=>{
    e.preventDefault();
    await Axios.post("http://localhost:8080/user",user);
    navigate("/");
  };

  return (
    <div className='container'>
        <div className='row'>
          <div className='col-md-5 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h3>Register User</h3>
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label mt-3'>
                Name
              </label>
              <input 
              type={'text'}
              className='form-control'
              placeholder='Enter Name'
              name='name'
              value={name}
              onChange={(e)=>onInputChange(e)}
              ></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='Username' className='form-label mt-3'>
                Username
              </label>
              <input 
              type={'text'}
              className='form-control'
              placeholder='Enter Username'
              name='username'
              value={username}
              onChange={(e)=>onInputChange(e)}
              ></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='Email' className='form-label mt-3'>
                Email
              </label>
              <input 
              type={'email'}
              className='form-control'
              placeholder='Enter Email'
              name='email'
              value={email}
              onChange={(e)=>onInputChange(e)}
              ></input>
            </div>
            <button className='btn btn-outline-primary mt-2'>
              Submit
            </button>
            <Link className='btn btn-outline-danger mx-2 mt-2' to="/">
              Cancel
            </Link>
            </form>
          </div>
        </div>
    </div>
  )
}

export default AddUser
