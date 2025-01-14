import '../main.css';

export function CartContainer() {
  return (
    <div className="cart">
      <h2 className="bold">You Cart(0)</h2>
      <div className="cart-empty">
        <img src={`${process.env.PUBLIC_URL}/images/illustration-empty-cart.svg`} alt="cake" />
        <p className="fs-14">You added items will appear here</p>
      </div>
    </div>
  )
};