
import React, { useState } from 'react'
import valida from './valida'

const Signup = () => {

const [ values,setValues] =useState(
{
    fullname:'',
    email:'',
    password:''
})

const [errors ,setErrors]= useState({})

const handleChange =(e)=>{
    setValues({
        ...values,[e.target.name]:e.target.value,
    })
}

const handleFormSubmit=(e)=>{
    e.preventDefault();
    setErrors(valida(values))
}


  return (
    <div className='contanier'>
        <div className='app-wapper'>
            <div>
                <h2 className='title'> Create Account</h2>
            </div>
        </div>
        <form className='form-wrapper'>
            <div className='name'>
            <label className='label'> Full Name</label>
            <input className='input'
             type='text'
              name='fullname'
              value={values.fullname}
              onChange={handleChange}
              />
              {errors.fullname && <p className='error'>{errors.fullname}</p>}
            </div>
            <div className='email'>
            <label className='label'> Email</label>
            <input className='input' type='email' name='email' value={values.email} onChange={handleChange} />
            {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className='password'>
            <label className='label'> Password</label>
            <input className='input' type='password' name='password' value={values.password} onChange={handleChange}/>
            {errors.password && <p className='error'>{errors.password}</p>}
            </div>
            <div>
            <button className='submit' onClick={handleFormSubmit}>SIGNUP</button>
            </div>
        </form>

      





    </div>
  )
}

export default Signup