import React, {useState} from 'react';
import './Signin.css';
import {Link, useHistory } from "react-router-dom";

const loginData = [
    {
        id: 1,
        username: 'dosen',
        password: 'dosen'
    },
    {
        id: 2,
        username: 'ulfah',
        password: 'dosen'
    }
]

const Signin = () => {
    let history = useHistory();
    const[username,setUsername]= useState('');
    const[password,setPassword]= useState('');

    const onChangeUsername = (e) => {
        const value =e.target.value
         setUsername(value)
    }
    const onChangePassword = (e) => {
        const value =e.target.value
        setPassword(value)
    }

    const handleSignIn = () => {
        let isCorrect = [];
        isCorrect = loginData.filter(data => {
            return data.username === username && data.password === password;
        })
        if (isCorrect.length > 0) {
            if (isCorrect[0].username === 'dosen') {
                
                history.push('/Dashboard')
            } else {
                
                history.push('/DashboardMhs')
            }
        } else {
            alert('password / username salah')
        }
    }
    return (
            <div className="form-container-login">  
                <div className="form-login-right"> 
                    <img className="login-img" src="images/login.svg" alt="spaceship"/>
                </div>
                <div className="form-login-left">
                    <h3 className="title">SIGN IN</h3>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="username"  placeholder="Enter Username" value={username} onChange={onChangeUsername}/>
                    </div>

                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password"  placeholder="Enter password" value={password} onChange={onChangePassword}/>
                    </div>
                    <button onClick={() => handleSignIn()} type="submit" className="form-input-btn"> Sign In </button>{' '}
                    <span className= "form-input">
                        <h4>Dont have an account? <Link to="/Signup"> <a href ="#">Here</a> </Link> </h4>
                    </span>
                </div>
            </div> 
       
          
    )
}

export default Signin