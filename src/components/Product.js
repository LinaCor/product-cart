import '../main.css';

export function Product({ title, desc, price, image }) {
  return (
    <div className="product-card">
      <img className="card-img" src={`${process.env.PUBLIC_URL}${image.desktop}`} alt={title} />
      <button className="card-button semi-bold">Add to Cart</button>
      {/*<div className="card-button__add semi-bold">
        <button className="add-incriment">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2" className="svg-icon"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
          </svg>
        </button>
        <p className="add-count">1</p>
        <button className="add-decrement">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10" className="svg-icon"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
          </svg>
        </button>
      </div>*/}
      <p className="card-title fs-14">{title}</p>
      <h3 className="card-desc semi-bold">{desc}</h3>
      <p className="card-price bold fs-18">${price}</p>
    </div>
  )
};