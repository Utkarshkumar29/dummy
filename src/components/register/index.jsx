import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Input, InputWrapper, Label, LoginButton, LoginCard, LoginContainer, LoginTitle, LoginWrapper, RegisterLink } from "../../styles/loginPage";

const Register=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [email, setEmail] = useState('');
    const [redirect,setRedirect]=useState(false)

    const handleChange=async(e)=>{
        e.preventDefault()
        try{
            const response=await fetch('https://dummyjson.com/users/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name:username,
                    password:password,
                    email:email
                })
              })
            const data=await response.json()
            setRedirect(true)
            console.log(data)
        }catch(error){
            console.log("Error fetching the data",error)
        }
    }

    if(redirect)
    {
        return(
            <Navigate to='/home'/>
        )
    }

    return(
        <LoginContainer>
            <LoginWrapper>
                <LoginCard onSubmit={handleChange}>
                    <LoginTitle>Register Form</LoginTitle>
                    <InputWrapper>
                        <Label>Username</Label>
                        <Input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Password</Label>
                        <Input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Email</Label>
                        <Input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </InputWrapper>
                    <LoginButton type="submit">Register</LoginButton>
                    <RegisterLink>
                        <div>Already have an account?</div>
                        <Link to="/register">Login Here</Link>
                    </RegisterLink>
                </LoginCard>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default Register