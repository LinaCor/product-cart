import '../main.css';
import { Product } from './Product';
import { cakes } from '../data';

export function ProductContainer() {
  return (
    <div className="product">
      <h1 className="product-title bold">Desserts</h1>
      <div className="product-container">
        {cakes.map(el => <Product key={el.id} {...el} />)}
      </div>
    </div>
  )
};