import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const defaultValues ={
    email: '',
    password: ''
}

const Login = () => {

    const [formValues, setFormValues] = useState(defaultValues);
    const { email, password } = formValues;
    const [error, setError] = useState(false)
    const [clickable, setClickable] = useState(true);

    const navigate = useNavigate()
    const { setCurrentUser, currentUser } = useState(defaultValues)

    useEffect(() => {
        document.title = "Sign In"
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            const emailCheck = test(value);

            if (value.length > 3) {
                if (emailCheck) {
                    setError(false);
                    setClickable(true);
                } else {
                    setError(true);
                    setClickable(false);
                }
            } else {
                setError(false);
                setClickable(true);
            }
        }
        setFormValues({ ...formValues, [name]: value });
    }


    const signInUser = (e) => {
        let payload = {
            email: formValues['email'].trim(),
            password: formValues['password'].trim(),
        }

        axios.post('http://localhost:5002/api/loginuser', payload)
        .then(res => {
            navigate("/home")
            setCurrentUser({ userId: res.data._id, username: res.data.username })
            console.log(res.data._id);
            sessionStorage.setItem("currentUser", res.data._id)
            sessionStorage.setItem("userName", res.data.username)
        })
        .catch(err => {
            console.log(err)
        })
}

    

    return (
    <>

    <div className="main-block">
        <h1>Sign In</h1>
        <h2>Welcome back to Collar City! Enjoy the luxury of shopping for your pets comfort.</h2>
       <form>
            <label>
                <input className="fill1" type="email"  label="Enter Name" placeholder="Email" value={email} onChange={handleChange} required={true} />
            </label>
            <label>
                <input className="fill2" type="password" label="Enter Name" placeholder="Password" value={password} onChange={handleChange} required={true} />
            </label>
        </form>
        <button className="login-button" onClick={signInUser}><a href="/Home">Sign In</a></button>
    </div>
    
    <div className="login-image"></div>

    </>
    )
};

export default Login;