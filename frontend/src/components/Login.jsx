import React from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import logo  from '../images/myimgmain-removebg-preview.png'
import useAppContext from '../AppContext';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

const Login = () => {

  const { setloggedin } = useAppContext();

  // initialize formik

  const loginForm = useFormik({
    initialValues : {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      console.table(values);

      const res = await fetch('http://localhost:5000/user/authenticate',{

      method: 'POST',
      body: JSON.stringify(values),
      headers:{
        'Content-Type' : 'application/json'
      }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Login Success'
        })
        setloggedin(true);

        const data = await res.json();
        sessionStorage.setItem( 'user', JSON.stringify(data) );

      }else if(res.status === 400)
      {
        Swal.fire({
          icon : 'error',
          title : 'Login Failed',
          text: 'Invalid email or password'
        })
      }

    }
  });

  return (
    <div className='home-section'>
      <div className='home-section-img'>
        <img className='home-section-my-img' src={logo} alt="Italian" />
      </div>
      <div className='home-section-form-login'>
        <form onSubmit={loginForm.handleSubmit}>
          <h2 className='home-section-form-head text-center mb-4 text-warning'>Log In</h2>

          <label className='my-home-label'>Email</label>
          <input id="email" onChange={loginForm.handleChange} value={loginForm.values.email} className='my-home-input' type="email" placeholder='Enter Email'/>

          <label className='my-home-label'>Password</label>
          <input id="password" onChange={loginForm.handleChange} value={loginForm.values.password} className='my-home-input' type="password" placeholder='Enter Password'/>

          <h6 className='home-section-info'>Register with new account?Click here</h6>

          <button className='my-home-sign-up'>Sign In</button>

        </form>
      </div>
    </div>
  )
}

export default Login