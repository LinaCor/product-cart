import './App.css';
import './main.css';
import { CartContainer } from './components/CartContainer';
import { ProductContainer } from './components/ProductContainer';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <ProductContainer />
        <CartContainer />
      </div>
    </div>
  );
}

export default App;
