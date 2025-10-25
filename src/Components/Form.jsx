import React, { useState } from 'react'
import './Form.css'

const Form = () => {
    const[formdata, setformdata] = useState({
        
    })
    return (
        <div className='center'>
            <div className="first">
                <h2 className='form-title'>Registration Form</h2>
                <div className="login">
                    <label><b>Name</b></label>
                    <input type="text" placeholder='Enter your name' />
                </div>
                <div className="login">
                    <label><b>E-mail:</b></label>
                    <input type="email" placeholder='Enter your e-mail' />
                </div>
                <div className="login">
                    <label><b>Password:</b></label>
                    <input type="password" placeholder='Enter your password' />
                </div>
                <div className="login">
                    <label><b>Confirm Password:</b></label>
                    <input type="password" placeholder='Confirm Password' />
                </div>
                <div className="login">
                    <label><b>Mobile number</b></label>
                    <input type="tel" placeholder='Enter your number' />
                </div>
                <div className="login">
                    <label>Upload photo:</label>
                    <input type="file" accept='image' />
                </div>
                <div className="btn">
                    <button>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default Form
