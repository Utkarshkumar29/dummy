import styled from "styled-components";

export const HeaderContainer=styled.div`
    max-width: 2600px;
    width: 100%;
    min-height: 50px;
    height: 100%;
    background-color: #ff97ae;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

export const HeaderWrapper=styled.div`
    display: flex;
    align-items: center;
    padding: 10px;  
    gap: 50px;

    p:hover{
        color: white;
    }

    p:nth-child(4){
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        max-width: 500px;
        width: 100%;
    }
`

export const Search=styled.input`
    display: flex;
    border: none;
    outline: none;
    border-bottom: 0.2em solid #00ADB5;
    background: rgba(#E91E63, 0.2);
    border-radius: 0.2em 0.2em 0 0;
    color: rgb(50, 50, 50);
    padding: 5px;
    width: 100%;
    animation: slide 0.5s ease-in-out forwards;

    @keyframes slide {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }
`

export const Suggestions=styled.div`
    position: absolute;
    top: 40px;
    left: 325px;
    width: 100%;
    max-width: 500px;
    width: 100%;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-top: none;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;

    p:hover{
        color: black;
    }
`

export const DropDown=styled.div`
    display: flex;
    gap: 20px;
    padding: 10px;
    border-bottom: 0.2em solid #00ADB5;
`

export const Image=styled.img`
    width: 80px;
    height: 40px;
    object-fit: cover;
    border-radius: 4px;
`