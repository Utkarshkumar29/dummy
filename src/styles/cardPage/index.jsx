import styled from "styled-components";

export const CartPageContainer=styled.div`
    background: linear-gradient(to bottom, #c2d4d0, #d5d6ce);
    max-width: 2600px;
    width: 100%;
    min-height: 729px;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
`

export const CartWrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CartProductsWrapper=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
    padding-top: 30px;
    flex-wrap: wrap;
    align-items: center;
`

export const MyCart=styled.p`
    font-size: 2.5em;
    color: #333;
    text-align: center;
    border-bottom: 2px solid aqua;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    margin-top: 30px;
`
