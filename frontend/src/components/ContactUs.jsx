import React from 'react'
import logo from '../images/myimgmain-removebg-preview.png'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
// import { Navigate } from 'react-router-dom';

const ContactSchema = Yup.object().shape({
  message: Yup.string()
    .min(5, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const ContactUs = () => {

  const contactForm = useFormik({
    initialValues : {
      email: '',
      message: ''
    },
    onSubmit: async (values) => {
      console.table(values);


       Swal.fire({
        icon : 'success',
        title : 'Message Success',
        text : 'Thanks for Contacting'
        })

        // Navigate('/login');
    },
    validationSchema : ContactSchema
  });

  return (
    <div className='home-section'>
      <div className='home-section-img'>
        <img className='home-section-my-img' src={logo} alt="Italian" />
      </div>
      <div className='home-section-form-contact'>
        <form onSubmit={contactForm.handleSubmit}>
          <h2 className='home-section-form-head text-center mb-4 text-warning'>Contact Us</h2>

          <label className='my-home-label'>First Name</label>
          <input id='fname' onChange={contactForm.handleChange} className='my-home-input' type="text" placeholder='First Name'/>

          {/* <label className='my-home-label'>Mobile Number</label>
          <input className='my-home-input' type="tel" placeholder='Enter Mobile Number'/> */}

          <label className='my-home-label'>Last Name</label>
          <input id='lname' onChange={contactForm.handleChange} className='my-home-input' type="text" placeholder='Last Name'/>

          <label className='my-home-label'>Email</label>
          <input id='email' onChange={contactForm.handleChange} value={contactForm.values.email} className='my-home-input' type="email" placeholder='Enter Email'/>

          <label className='my-home-label'>Message*</label>
          {/* <input className='my-home-input' type="textarea" placeholder='Your Query'/> */}
          <textarea id='message' onChange={contactForm.handleChange} value={contactForm.values.message} className='my-home-input rez' rows="4" cols="40" placeholder='Enter Your Message'/>

          <button className='my-home-sign-up'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default ContactUs