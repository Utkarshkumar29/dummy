import React, { useContext, useState } from "react";
import { Card, CardDetails, CardImage, Like, PopUpContainer, SizeOptions } from "../../styles/homePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../../context/myContext";

const ProductsCard=({product})=>{
    const [selectedSize,setSelectedSize]=useState("Medium")
    const [clicked,setClicked]=useState(false)
    const {count,setCount,cartProduct,setCartProduct}=useContext(MyContext)

    const handleSizeClick = (size) => {
        setSelectedSize(size)
    }

    const handleClick=()=>{
        setClicked(!clicked)
        if(clicked===false)
        {
            setCount(count+1)
            setCartProduct([...cartProduct, product])
        }
        else
        {
            setCount(count-1)
            setCartProduct(cartProduct.filter((item) => item !== product))
        }
    }

    return(
        <>
        <Card>
                <CardImage><img src={product.thumbnail} alt={product.title} /></CardImage>
                <CardDetails>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <p>{product.discount}</p>
                    <SizeOptions>
                        <p onClick={() => handleSizeClick("Small")} className={selectedSize === "Small" ? "selected" : ""}>Small</p>
                        <p onClick={() => handleSizeClick("Medium")} className={selectedSize === "Medium" ? "selected" : ""}>Medium</p>
                        <p onClick={() => handleSizeClick("Large")} className={selectedSize === "Large" ? "selected" : ""}>Large</p>
                    </SizeOptions>
                    <Like><FontAwesomeIcon icon={faHeart} onClick={handleClick} style={{color:clicked ? "red":""}}/></Like>
                </CardDetails>
        </Card>
        </>                    
    )
}

export default ProductsCard