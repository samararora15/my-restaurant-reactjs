import React from 'react'
import logo from '../images/myimgmain-removebg-preview.png'
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Home = () => {

  const navigate = useNavigate();

  // initialize formik

  const signupForm = useFormik({
    initialValues : {
      name : '',
      email: '',
      mobile: '',
      password: '',
      confirm: ''
    },
    onSubmit: async (values) => {
      console.table(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Signup Success',
          text : 'Now Login to Continue'
        })

        navigate('/login');

      }else{
        Swal.fire({
          icon : 'error',
          title : 'something went wrong',
          text : 'try again'
        })
      }

    },
    validationSchema : SignupSchema
  });

  return (
    <div className='home-section'>
      <div className='home-section-img'>
        <img className='home-section-my-img' src={logo} alt="Italian" />
      </div>
      <div className='home-section-form'>
        <form onSubmit={signupForm.handleSubmit}>
          <h2 className='home-section-form-head text-center mb-4 text-warning'>Saute Grill</h2>

          <label className='my-home-label'>Username</label>
          <input id="name" onChange={signupForm.handleChange} value={signupForm.values.name} className='my-home-input' type="text" placeholder='Enter Username'/>

          <label className='my-home-label'>Email</label>
          <input id="email" onChange={signupForm.handleChange} value={signupForm.values.email} className='my-home-input' type="email" placeholder='Enter Email'/>

          <label className='my-home-label'>Mobile Number</label>
          <input id="mobile" onChange={signupForm.handleChange} value={signupForm.values.mobile} className='my-home-input' type="tel" placeholder='Enter Mobile Number'/>

          <label className='my-home-label'>Password</label>
          <input id="password" onChange={signupForm.handleChange} value={signupForm.values.password} className='my-home-input' type="password" placeholder='Enter Password'/>

          <label className='my-home-label'>Confirm Password</label>
          <input id="confirm" onChange={signupForm.handleChange} value={signupForm.values.password} className='my-home-input' type="password" placeholder='Enter Password'/>

          <h6 className='home-section-info'>Already registered?Login here</h6>

          <button className='my-home-sign-up'>Sign Up</button>

        </form>
      </div>
    </div>
  )
}
export default Home