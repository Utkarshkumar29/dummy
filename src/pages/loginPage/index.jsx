import React, { useState } from "react";
import { Input, InputWrapper, Label, LoginButton, LoginCard, LoginContainer, LoginTitle, LoginWrapper, RegisterLink } from "../../styles/loginPage";
import { Link, Navigate } from "react-router-dom";

const LoginPage=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [redirect,setRedirect]=useState(false)

    const handleChange=async(e)=>{
        console.log("try")
        e.preventDefault();
        try {
            const response=await fetch('https://dummyjson.com/auth/login', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    username: username,
                                    password: password,
                                })
                            })
            const data = await response.json();
            setRedirect(true)
            console.log(data);
        } catch (error) {
            console.log("Error fetching the data",error)
        }   
    }

    if(redirect)
    {
        return (<Navigate to='/home'/>)
    }

    return(
        <LoginContainer>
            <LoginWrapper>
                <LoginCard onSubmit={handleChange}>
                    <LoginTitle>Login Form</LoginTitle>
                    <InputWrapper>
                        <Label>Username</Label>
                        <Input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Password</Label>
                        <Input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </InputWrapper>
                    <LoginButton type="submit">Login</LoginButton>
                    <RegisterLink>
                        <div>Don't have a account?</div>
                        <Link to="/register">Register Here</Link>
                    </RegisterLink>
                </LoginCard>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default LoginPage