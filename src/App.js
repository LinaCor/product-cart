import './App.css';
import './main.css';
import { CartContainer } from './components/CartContainer';
import { ProductContainer } from './components/ProductContainer';
import { OrderPopup } from './components/OrderPopup';
import { useSelector } from 'react-redux';
import { isOrderOpen } from './store/order/order-selector';

function App() {
  const isOrder = useSelector(isOrderOpen);

  return (
    <div className="App">
      <div className="app-container">
        <ProductContainer />
        <CartContainer />
        {isOrder ? <OrderPopup /> : ''}
      </div>
    </div>
  );
}

export default App;
