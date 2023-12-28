import styled from 'styled-components'

export const LoginContainer=styled.div`
    max-width: 2600px;
    width: 100%;
    height: 100vh;
    background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);
`

export const LoginWrapper=styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    padding: 20px;
`

export const LoginCard=styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 350px;
    font-family: 'Poppins', sans-serif;
`

export const LoginTitle=styled.p`
    font-size: 35px;
    font-weight: 600;
    text-align: center;
`

export const InputWrapper=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Label=styled.label`
    
`

export const Input=styled.input`
    height: 40px;
`

export const LoginButton=styled.button`
    border: none;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    padding: 10px;
    background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);
`

export const RegisterLink=styled.div`
    display: flex;
    padding-left: 50px;
    align-items: center;
`
