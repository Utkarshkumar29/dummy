import React from "react";
import image from '../../assets/d.jpg'
import { Image, ImageWrapper, Text } from "../../styles/homeIntro";

const HomeIntro=()=>{
    return(
            <ImageWrapper>
                <Image src={image} alt="error"/>
                <Text>Elevate your style, one click at a time. Discover fashion redefined.</Text>
            </ImageWrapper>
    )
}

export default HomeIntro