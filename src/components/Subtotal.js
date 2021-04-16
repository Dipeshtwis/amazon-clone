import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../assets/stylesheet/Subtotal.css';
import { getBasketTotal } from '../Reducer/reducer';
import { useStateValue } from '../Reducer/StateProvider';

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order
              contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
