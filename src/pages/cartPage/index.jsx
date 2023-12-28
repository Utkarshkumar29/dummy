import React, { useContext } from "react";
import { CartPageContainer, CartProductsWrapper, CartWrapper, MyCart } from "../../styles/cardPage";
import Header from "../../components/header";
import { MyContext } from "../../context/myContext";
import ProductsCard from "../../components/productsCard";
import { ProductContainer } from "../../styles/homePage";

const CartPage=()=>{
    const {count,setCount,cartProduct,setCartProduct}=useContext(MyContext)

    return(
        <CartPageContainer>
            <CartWrapper>
                <Header/>


                <MyCart>My Cart</MyCart>
                <CartProductsWrapper>
                {cartProduct.map((product,index) => (
                    <ProductsCard product={product} key={index}/>
                ))}
                </CartProductsWrapper>

            </CartWrapper>
        </CartPageContainer>
    )
}

export default CartPage