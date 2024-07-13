import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        user: '',
        pass: '',
        confirmpass: '',
        mobileNumber: '',
        emails: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        user: '',
        pass: '',
        confirmpass: '',
        mobileNumber: '',
        emails: ''
    });

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

        if (!formValues.name) {
            errors.name = "Please fill the Name field";
            isValid = false;
        }

        if (!formValues.emails) {
            errors.emails = "Please fill the email id field";
            isValid = false;
        } else if (formValues.emails.indexOf("@") <= 0) {
            errors.emails = "Invalid Email";
            isValid = false;
        } else if (
            formValues.emails.charAt(formValues.emails.length - 4) !== "." &&
            formValues.emails.charAt(formValues.emails.length - 3) !== "."
        ) {
            errors.emails = "Invalid Email";
            isValid = false;
        }

        if (!formValues.user) {
            errors.user = "Please fill the username field";
            isValid = false;
        } else if (formValues.user.length <= 3 || formValues.user.length > 20) {
            errors.user = "Username length must be between 3 and 20";
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

        if (!formValues.confirmpass) {
            errors.confirmpass = "Please fill the confirm password field";
            isValid = false;
        } else if (formValues.pass !== formValues.confirmpass) {
            errors.confirmpass = "Password Mismatch";
            isValid = false;
        }

        if (!formValues.mobileNumber) {
            errors.mobileNumber = "Please fill the mobile Number field";
            isValid = false;
        } else if (isNaN(formValues.mobileNumber)) {
            errors.mobileNumber = "User must write digits only not characters";
            isValid = false;
        } else if (formValues.mobileNumber.length !== 10) {
            errors.mobileNumber = "Mobile Number must be 10 digits only";
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
        setFormValues({
            name: '',
            user: '',
            pass: '',
            confirmpass: '',
            mobileNumber: '',
            emails: ''
        });
        setErrors({
            name: '',
            user: '',
            pass: '',
            confirmpass: '',
            mobileNumber: '',
            emails: ''
        });
    };

    return (
        <div>
            <div className='fade-in'>
                <img src="/images/signup.png" className='ban bnew' alt="main-banner" />
            </div>
            <div className='jk'>
                <br />
                <div className='col-lg-5 m-auto d-block class'>
                    <form onSubmit={handleSubmit} className="container slide-in-bottom">
                        <div className="form-group">
                            <label htmlFor="name" className="font-weight-regular"> Name </label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                value={formValues.name}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            <span id="Name" className="text-danger font-weight-regular">
                                {errors.name}
                            </span>
                        </div>
                        <div className="form-group">
                            <label className="font-weight-regular"> Email </label>
                            <input
                                type="text"
                                name="emails"
                                className="form-control"
                                id="emails"
                                value={formValues.emails}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            <span id="emailids" className="text-danger font-weight-regular">
                                {errors.emails}
                            </span>
                        </div>
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
                        <div className="form-group">
                            <label className="font-weight-regular"> Confirm Password </label>
                            <input
                                type="password"
                                name="confirmpass"
                                className="form-control"
                                id="confirmpass"
                                value={formValues.confirmpass}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            <span id="confrmpass" className="text-danger font-weight-regular">
                                {errors.confirmpass}
                            </span>
                        </div>
                        <div className="form-group">
                            <label className="font-weight-regular"> Mobile Number </label>
                            <input
                                type="text"
                                name="mobileNumber"
                                className="form-control"
                                id="mobileNumber"
                                value={formValues.mobileNumber}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            <span id="mobileno" className="text-danger font-weight-regular">
                                {errors.mobileNumber}
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
                        &emsp;&emsp;&emsp;Already have an account?
                        <Link to="/Login">Login</Link>
                    </form>
                    <br /><br />
                </div>
            </div>
        </div>
    );
};

export default Signup;
