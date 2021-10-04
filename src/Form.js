import React from 'react'
import FormSignup from './FormSignup'
import { useState } from 'react'
import FormSuccess from './FormSuccess'
import './Form.css'


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    
    function submitForm() {
        setIsSubmitted(true);
    }
    
    return (
        <>
        <div className='form-container'>
            <div className='form-content-left'>
                <img src="img/img-2.png" alt="Form-img" className="form-img"/>
            </div>
            {!isSubmitted ? ( <FormSignup submitForm={submitForm} /> ) : ( <FormSuccess/>)}
        </div>
        
        </>
    )
}

export default Form
