import './App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from './components/homepage';
import Products from './components/products';
import About from './components/about';
import NavigationBar from './components/navBar';
import {useState} from 'react';

function App() {
  // shared state between products.js and totalPrice.js
  const [totalPrice, setTotalPrice] = useState(0);


  return (
    <div className="App">
      {/* Rendering NavBar */}
      <NavigationBar totalPrice={totalPrice} />

      {/* Initialising routs for the web page */}
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/products' element={<Products setTotalPrice={setTotalPrice}/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
