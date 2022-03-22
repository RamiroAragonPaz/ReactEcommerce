import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ListProducts/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
