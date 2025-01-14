import '../main.css';

export function Product({ title, desc, price, image }) {
  return (
    <div className="product-card">
      <img className="card-img" src={`${process.env.PUBLIC_URL}${image.desktop}`} alt={title} />
      <button className="card-button semi-bold">Add to Cart</button>
      <p className="card-title fs-14">{title}</p>
      <h3 className="card-desc semi-bold">{desc}</h3>
      <p className="card-price bold fs-18">${price}</p>
    </div>
  )
};