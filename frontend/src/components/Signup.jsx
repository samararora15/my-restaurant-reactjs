import React from 'react'

const Signup = () => {
  return (
    <div>
    <>
    <div className='bg-set'>
    <div className='container bg-img'>
      <form className='my-form'>

        <h1 className='text-center text-warning'>Saute Grill</h1>

        <label className='my-label'><b>Email</b></label>
        <input className='my-input' type="email" placeholder='Enter Email'/>

        <label className='my-label'><b>Mobile No.</b></label>
        <input className='my-input' type="tel" placeholder='Enter Mobile Number' />

        <label className='my-label'><b>Set Password</b></label>
        <input className='my-input' type="password" placeholder='Enter Password' />

        <button className='my-btn my-5 btn btn-warning'>Signup</button>

      </form>
      </div>
    </div>
    </>
    </div>
  )
}

export default Signup;