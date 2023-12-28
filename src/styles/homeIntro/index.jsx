import styled from 'styled-components'

export const ImageContainer=styled.div`
    max-width: 2600px;
    width: 100%;
    max-height: 300px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    
`

export const ImageWrapper=styled.div`
    width: 1300px;
    height: 500px;
`

export const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Text=styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: white;
    font-size: 40px;
    text-align: center;
`