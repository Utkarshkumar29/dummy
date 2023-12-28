import React, { useContext, useEffect, useState } from "react";
import HomeIntro from "../../views/homeIntro";
import Header from "../../components/header";
import { HomePageContainer, HomePageWrapper, HomeIntroWrapper, FilterContainer, FilterLabel, FilterInput, FilterButton, ProductContainer, CartContainer, Count} from "../../styles/homePage";
import ProductsCard from "../../components/productsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarTunnel, faShop } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../../context/myContext";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [products,setProducts]=useState([]);
    const [maxPrice,setMaxPrice]=useState(1000);
    const {count,setCount}=useContext(MyContext)
    console.log(count)
    

    const fetchAll=async()=>{
        const response=await fetch("https://dummyjson.com/products");
        const data=await response.json()
        setProducts(data.products)
    }

    useEffect(()=>{
        fetchAll();
    },[])

    const handleFilter = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json()
        const filteredProducts = data.products.filter(
            (product) => parseFloat(product.price) <= parseFloat(maxPrice)
        )
        console.log(filteredProducts)
        setProducts(filteredProducts)
    }

  return (
    <HomePageContainer>
        <HomePageWrapper>
            
            <Header />

            <HomeIntroWrapper>
                <HomeIntro />
            </HomeIntroWrapper>

            <FilterContainer>
                <FilterLabel>Max Price</FilterLabel>
                <FilterInput type="text" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}/>
                <FilterButton onClick={handleFilter}>Filter</FilterButton>
            </FilterContainer>

            <ProductContainer>
                {products.map((product,index) => (
                    <ProductsCard product={product} key={index}/>
                ))}
            </ProductContainer>

            <CartContainer>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShop}/>
                    <Count>{count}</Count>
                </Link>
            </CartContainer>

        </HomePageWrapper>
    </HomePageContainer>
  );
};

export default HomePage;
