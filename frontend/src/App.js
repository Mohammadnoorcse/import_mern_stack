
import './App.css';
import Footer from "./components/footer"
import {Container} from "react-bootstrap"
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

import { Routes, Route } from "react-router-dom";

import ProductDetails from './screens/ProductDetails';
import cartScreen from './screens/cartScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    < >
   
    <Header/>
      <main className='my-3'>
        <Container>
            <h1 className='text-center'>Ecommerce App</h1>
          <Routes>
            
            <Route path="/" element={ <HomeScreen/>} />
            <Route path="/login" element={ <LoginScreen/>} />
            <Route path="/product/:id" element={ <ProductDetails/>} />
            <Route path="/cart/:id?" element={ <cartScreen/>} />
            
            
            </Routes>
            

           
        </Container>
      </main>
      <Footer/>
      
     
    </>
  );
}

export default App;
