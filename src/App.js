import React, { useState, useEffect  } from "react";
import './App.css';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Products from './components/Products';
import CartItems from './components/CartItems';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showMyCart, setShowMyCart] = useState(false);
  const [cardDataforCart,setCardDataForCart]= useState([]);
  const [butName, setBtnName] = useState('My Cart');

  const handleLogin = () => {
    // Set loggedIn to true when login is successful
    setLoggedIn(true);
    
  };

  const handleShowMyCart = () => {
    setShowMyCart(true);
    setBtnName('Go To Products');
  };

  const handleGoToProduct = () => {
    setShowMyCart(false);
    setBtnName('My Cart');
  };

  const handleCartData = (card) => {
    // console.log(card);
    setCardDataForCart((prevCardData) => {
      const updatedCardData = [...prevCardData, card];
      return updatedCardData;
    });
    // console.log(cardDataforCart);
  };

  return (
    <>
      <NavBar loggedIn={loggedIn} onShowMyCart={handleShowMyCart} onGoToProduct={handleGoToProduct} btnName= {butName}/>
      {loggedIn ? (
        showMyCart ? (
          <CartItems addedCartItems= {cardDataforCart} onGoToProduct={handleGoToProduct}/>
        ) : (
          <Products showMyCartHandler = {handleCartData} />
        )
      ) : (
        <LogIn onLogin={handleLogin} />
      )}

    </>
  );
}


export default App;
