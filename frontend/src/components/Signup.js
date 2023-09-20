import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name:"", email: "", password: "", cpassword:"" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password } = credentials;
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });

        const json = await response.json();
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate("/");
            props.showAlert("Signin successfully", "success")
        }
        else {
            props.showAlert("This email is already in use", "danger")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            name='name'
                            id="name"
                            className="form-control"
                            onChange={onChange}

                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            name='email'
                            id="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                            onChange={onChange}

                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            id="password"
                            className="form-control"
                            onChange={onChange}
                            minLength={5}

                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name='cpassword'
                            id="cpassword"
                            className="form-control"
                            onChange={onChange}
                            minLength={5}

                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>

        </>
    )
}
export default Signup