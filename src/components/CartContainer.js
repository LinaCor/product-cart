import '../main.css';

export function CartContainer() {
  return (
    <div className="cart">
      <h2 className="bold">You Cart(0)</h2>
      {/*<div className="cart-empty">
        <img src={`${process.env.PUBLIC_URL}/images/illustration-empty-cart.svg`} alt="cake" />
        <p className="fs-14">You added items will appear here</p>
      </div>*/}

      <div className="cart-order">
        <ul className="order-list">
          <li>
            <div className="item-text">
              <p className="bold">Classic Tiramissu</p>
              <p className="cost semi-bold">1x <span>@$7.00</span> <span>7.00</span></p>
            </div>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" /></svg>
            </button>
          </li>
          <li>
            <div className="item-text">
              <p className="bold">Classic Tiramissu</p>
              <p className="cost semi-bold">1x <span>@$7.00</span> <span>7.00</span></p>
            </div>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" /></svg>
            </button>
          </li>
          <li>
            <div className="item-text">
              <p className="bold">Classic Tiramissu</p>
              <p className="cost semi-bold">1x <span>@$7.00</span> <span>7.00</span></p>
            </div>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" /></svg>
            </button>
          </li>
        </ul>
        <div className="order-total">
          <p>Order Total</p>
          <p className="bold">$46.50</p>
        </div>
        <div className="order-shield">
          <p className="fs-14">This is a <b>carbon-neutral</b> delivery</p>
        </div>
        <button className="order-btn">Confirm Order</button>
      </div>
    </div>
  )
};