import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Form.css';

const Form = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: '',
        photo: null
    });

    const [errors, setErrors] = useState({});

    // handle input changes
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    // check if all fields are filled and passwords match
    const isFormValid = () => {
        const { name, email, password, confirmPassword, mobile, photo } = formData;
        return (
            name.trim() !== '' &&
            email.trim() !== '' &&
            password.trim() !== '' &&
            confirmPassword.trim() !== '' &&
            mobile.trim() !== '' &&
            photo !== null &&
            password === confirmPassword
        );
    };

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!isFormValid()) {
            newErrors.general = '⚠️ Please fill all required fields correctly.';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match!';
        }

        setErrors(newErrors);

        // Only submit if there are no errors
       if (Object.keys(newErrors).length === 0) {
      // Prepare a small object to pass to success page (avoid passing full File objects)
      const passableData = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        photoName: formData.photo ? formData.photo.name : null
      };

      console.log('Form submitted:', formData);
      // navigate to /success and pass data via state
      navigate('/success', { state: { formData: passableData } });
    }
    };

    return (
        <div className='center'>
            <div className="first">
                <h2 className='form-title'>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="login">
                        <label><b>Name</b></label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.general && formData.name.trim() === '' ? 'input-error' : ''}
                        />
                    </div>

                    <div className="login">
                        <label><b>E-mail:</b></label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your e-mail"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.general && formData.email.trim() === '' ? 'input-error' : ''}
                        />
                    </div>

                    <div className="login">
                        <label><b>Password:</b></label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.general && formData.password.trim() === '' ? 'input-error' : ''}
                        />
                    </div>

                    <div className="login">
                        <label><b>Confirm Password:</b></label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={
                                errors.confirmPassword || 
                                (errors.general && formData.confirmPassword.trim() === '') 
                                ? 'input-error' 
                                : ''
                            }
                        />
                        {errors.confirmPassword && (
                            <p className="error">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <div className="login">
                        <label><b>Mobile number</b></label>
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Enter your number"
                            value={formData.mobile}
                            onChange={handleChange}
                            className={errors.general && formData.mobile.trim() === '' ? 'input-error' : ''}
                        />
                    </div>

                    <div className="login">
                        <label>Upload photo:</label>
                        <input
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={handleChange}
                            className={errors.general && formData.photo === null ? 'input-error' : ''}
                        />
                    </div>

                    {errors.general && <p className="error">{errors.general}</p>}

                    <div className="btn">
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;