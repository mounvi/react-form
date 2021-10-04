//import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css'

const FormSignup = ({submitForm}) => {
    const {handleSubmit, handleChange, values, errors} = useForm(submitForm,validate)



    return (
        <div className= " form-content-right">
            <form className="form" onSubmit = {handleSubmit}>
                <h1> Get Started with us today</h1>
                <div className = "form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                     </label>
                     <input 
                     id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your email' 
                        value = {values.email}
                        onChange = {handleChange}/>
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div className = "form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                     </label>
                     <input 
                     id='password'
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter your password' 
                        value = {values.password}
                        onChange = {handleChange}/>
                        {errors.password && <p>{errors.password}</p>}
                </div>
                <div className = "form-inputs">
                    <label htmlFor="description" className="form-label">
                        Description
                     </label>
                     <textarea 
                     id='description'
                        type='textarea'
                        name='description'
                        minrows='40'
                        className='form-input form-input-text'
                        placeholder='Enter your text here' 
                        value = {values.description}
                        onChange = {handleChange}
                        />
                        {errors.description && <p>{errors.description}</p>}
                </div>
                <button className='form-input-btn' 
                    type='submit'>
                        Sign up
                </button>
                {/* <span className='form-input-login'>
                    Already have an account? Login <a href="#">Here</a>
                </span> */}
            </form>
        </div>
    

    )
}

export default FormSignup
