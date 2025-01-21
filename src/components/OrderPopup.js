import '../main.css';

export function OrderPopup() {
  return (
    <div className="container-popup">
      <div className="popup">
        <img src={`${process.env.PUBLIC_URL}/images/icon-order-confirmed.svg`} alt="check order" />
        <h2 className="bold">Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
        <ul className="popup-list">
          <li className="popup-list__item">
            <img className="item-img" alt="cake" src={`${process.env.PUBLIC_URL}/images/image-waffle-thumbnail.jpg`} />
            <div className="item-text">
              <p className="bold">Classic Tiramissu</p>
              <p className="cost semi-bold">1x <span>@$7.00</span></p>
            </div>
            <p className="item-price bold">
              $7.00
            </p>
          </li>
          <li className="popup-list__item">
            <img className="item-img" alt="cake" src={`${process.env.PUBLIC_URL}/images/image-waffle-thumbnail.jpg`} />
            <div className="item-text">
              <p className="bold">Classic Tiramissu</p>
              <p className="cost semi-bold">1x <span>@$7.00</span></p>
            </div>
            <p className="item-price bold">
              $7.00
            </p>
          </li>
          <li className="popup-list__item">
            <img className="item-img" alt="cake" src={`${process.env.PUBLIC_URL}/images/image-waffle-thumbnail.jpg`} />
            <div className="item-text">
              <p className="bold">Classic Tiramissu</p>
              <p className="cost semi-bold">1x <span>@$7.00</span></p>
            </div>
            <p className="item-price bold">
              $7.00
            </p>
          </li>
          <li className="popup-list__item">
            <img className="item-img" alt="cake" src={`${process.env.PUBLIC_URL}/images/image-waffle-thumbnail.jpg`} />
            <div className="item-text">
              <p className="bold">Classic Tiramissu</p>
              <p className="cost semi-bold">1x <span>@$7.00</span></p>
            </div>
            <p className="item-price bold">
              $7.00
            </p>
          </li>
          <li className="popup-list__item">
            <img className="item-img" alt="cake" src={`${process.env.PUBLIC_URL}/images/image-waffle-thumbnail.jpg`} />
            <div className="item-text">
              <p className="bold">Classic Tiramissu</p>
              <p className="cost semi-bold">1x <span>@$7.00</span></p>
            </div>
            <p className="item-price bold">
              $7.00
            </p>
          </li>
          <li className="popup-list__item">
            <img className="item-img" alt="cake" src={`${process.env.PUBLIC_URL}/images/image-waffle-thumbnail.jpg`} />
            <div className="item-text">
              <p className="bold">Classic Tiramissu</p>
              <p className="cost semi-bold">1x <span>@$7.00</span></p>
            </div>
            <p className="item-price bold">
              $7.00
            </p>
          </li>
        </ul>
        <div className="order-total">
          <p>Order Total</p>
          <p className="bold">$46.50</p>
        </div>
        <button className="order-btn">Start New Order</button>
      </div>
    </div>
  )
}