import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ListProducts/ItemListContainer'
import ItemDetailContainer from './components/ListProducts/ItemDetail/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
