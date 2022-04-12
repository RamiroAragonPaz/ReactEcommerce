import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ListProducts/ItemListContainer'
import ItemList from './components/ListProducts/ItemList';
import ItemDetailContainer from './components/ListProducts/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/:category" element={<ItemListContainer />}/>
        <Route path="/:category/:id" element={<ItemDetailContainer />}/>
        <Route path="/contacto" element={<h1> Formulario de Contacto</h1>}/>
        <Route path="/cart" element={<h1>Cart</h1>}/>
        <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
