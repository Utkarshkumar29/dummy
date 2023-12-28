import React, { useEffect, useState } from "react";
import { DropDown, HeaderContainer, HeaderWrapper, Image, Search, Suggestions } from "../../styles/header";

const Header=()=>{
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleSearch = async (e) => {
        try {
            if (search.trim() !== "") {
                const response = await fetch(`https://dummyjson.com/products/search?q=${search}`);
                const data = await response.json();
                setSuggestions(data.products);
                setShowSuggestions(true);
            } else {
                setSuggestions([]);
                setShowSuggestions(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        handleSearch();
    }, [search]);   

    return( 
        <HeaderContainer>
            <HeaderWrapper>

                <p>Home</p>
                <p>About</p>
                <p>Contact US</p>
                <p>
                    <Search type="text" placeholder="Search" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                </p>

                <div>
                    {showSuggestions && suggestions.length > 0 && (
                        <Suggestions>
                            {suggestions.map((product) => (
                                <DropDown key={product.id}>
                                    <Image src={product.thumbnail} alt="error"/>
                                    <div>
                                        <p>{product.title}</p>
                                        <p>{product.price}</p>
                                    </div>
                                </DropDown>
                            ))}
                        </Suggestions>
                    )}
                </div>  

            </HeaderWrapper>
        </HeaderContainer>
    )   
}

export default Header