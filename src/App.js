import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ListProducts/ItemListContainer'
import ItemList from './components/ListProducts/ItemList';
import ItemDetailContainer from './components/ListProducts/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Pages/Cart'
//Context
import { CartProvider } from './components/Context/CartContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
            <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/:category" element={<ItemListContainer />}/>
            <Route path="/:category/:id" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<h1>Error 404</h1>} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
