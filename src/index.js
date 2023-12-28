import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MyContext } from './context/myContext';

const RootComponent = () => {
  const [count,setCount]=useState(0)
  const [cartProduct,setCartProduct]=useState([])
  
  return (
    <React.StrictMode>
      <MyContext.Provider value={{count,setCount,cartProduct,setCartProduct}}>
        <App/>
      </MyContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<RootComponent />);
