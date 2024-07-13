import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formValues, setFormValues] = useState({ user: '', pass: '' });
    const [errors, setErrors] = useState({ user: '', pass: '' });

    useEffect(() => {
        const sections = document.querySelectorAll('.slide-in-bottom');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        // Cleanup function to unobserve elements when component unmounts
        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = () => {
        let isValid = true;
        let errors = {};

        if (!formValues.user) {
            errors.user = "Please fill the username field";
            isValid = false;
        } else if (formValues.user.length <= 2 || formValues.user.length > 20) {
            errors.user = "Username length must be between 2 and 20";
            isValid = false;
        } else if (!isNaN(formValues.user)) {
            errors.user = "Only characters are allowed";
            isValid = false;
        }

        if (!formValues.pass) {
            errors.pass = "Please fill the password field";
            isValid = false;
        } else if (formValues.pass.length < 5 || formValues.pass.length > 20) {
            errors.pass = "Passwords length must be between 5 and 20";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            // Submit form or perform your action here
            alert('Form is valid and ready to be submitted');
        }
    };

    const handleReset = () => {
        setFormValues({ user: '', pass: '' });
        setErrors({ user: '', pass: '' });
    };

    return (
        <div>
            <div className='fade-in'>
                <img src="/images/login.png" className='ban bnew' alt="main-banner" />
            </div>
            <div className='jk'>
                <br />
                <div className='col-lg-5 m-auto d-block class'>
                    <form onSubmit={handleSubmit} className="container slide-in-bottom">
                        <div className="form-group">
                            <label htmlFor="user" className="font-weight-regular"> Username </label>
                            <input
                                type="text"
                                name="user"
                                className="form-control"
                                id="user"
                                value={formValues.user}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            <span id="username" className="text-danger font-weight-regular">
                                {errors.user}
                            </span>
                        </div>
                        <div className="form-group">
                            <label className="font-weight-regular"> Password </label>
                            <input
                                type="password"
                                name="pass"
                                className="form-control"
                                id="pass"
                                value={formValues.pass}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            <span id="passwords" className="text-danger font-weight-regular">
                                {errors.pass}
                            </span>
                        </div>
                        <div className="d-flex justify-content-center gap-2">
                            <input
                                type="submit"
                                name="submit"
                                value="Submit"
                                className="btn btn-primary"
                                autoComplete="off"
                            />
                            <input
                                type="reset"
                                name="reset"
                                value="Reset"
                                className="btn btn-primary"
                                autoComplete="off"
                                onClick={handleReset}
                            />
                        </div>
                        <br />
                        <br />
                        &emsp;&emsp;&emsp;&emsp;Did not have an account?
                        <Link to="/Signup">SignUp</Link>
                    </form>
                    <br /><br />
                </div>
            </div>
        </div>
    );
};

export default Login;
