import { useDispatch, useSelector } from 'react-redux';
import { isCakeInBasket } from '../store/add-cake/add-cake-selector';
import { orderClose, orderReset } from '../store/order/order-action';
import '../main.css';

export function OrderPopup() {
  const isCake = useSelector(isCakeInBasket);
  const dispatch = useDispatch();

  const handleClose = (evt) => {
    if (evt.target.className === 'container-popup') {
      dispatch(orderClose);
    }
    return;
  }


  return (
    <div className="container-popup" onClick={handleClose}>
      <div className="popup">
        <img src={`${process.env.PUBLIC_URL}/images/icon-order-confirmed.svg`} alt="check order" />
        <h2 className="bold">Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
        <ul className="popup-list">
          {isCake.map(el =>
            <li className="popup-list__item" key={el.id}>
              <img className="item-img" alt="cake" src={`${process.env.PUBLIC_URL}${el.image}`} />
              <div className="item-text">
                <p className="bold">{el.desc}</p>
                <p className="cost semi-bold">1x <span>@${el.price}</span></p>
              </div>
              <p className="item-price bold">
                ${el.price * el.quantity}
              </p>
            </li>)}
        </ul>
        <div className="order-total">
          <p>Order Total</p>
          <p className="bold">$46.50</p>
        </div>
        <button
          className="order-btn"
          onClick={() => dispatch(orderReset)}
        >Start New Order</button>
      </div>
    </div>
  )
}