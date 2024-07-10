import React, { useState } from 'react';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
import Register from './components/register/register';
import Login from './components/login/login';
import Catalog from './components/catalog/catalog';
import Cart from './components/cart/cart';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Main from './components/Main/Main';
function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };
  let router = createBrowserRouter([
  {path:'',element:<Main/>,children:[
  {path:'',element:<About/>},
  {path:'login',element:<Login/>},
  {path:'register',element: <Register/>},
  {path:'contact',element:<Contact/>},
  {path:'cart',element:<Cart removeFromCart={removeFromCart}/>},
  {path:'catalog',element:<Catalog addToCart={addToCart}/>},
  {path:'about',element:<About/>}
  ]
  }
  ])
  return (
  <div>
  <RouterProvider router={router}/>
  </div>
  );
  }
  export default App;
