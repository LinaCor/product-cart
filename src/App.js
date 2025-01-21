import './App.css';
import './main.css';
import { CartContainer } from './components/CartContainer';
import { ProductContainer } from './components/ProductContainer';
import { OrderPopup } from './components/OrderPopup';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <ProductContainer />
        <CartContainer />
        <OrderPopup />
      </div>
    </div>
  );
}

export default App;
