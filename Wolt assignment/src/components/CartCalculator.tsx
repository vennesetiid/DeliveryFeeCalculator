import React, { useState } from 'react';
import { calculateDeliveryFee } from '../utils/deliveryFeeCalculator';

const CartCalculator: React.FC = () => {
  const [cartValue, setCartValue] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);
  const [numberOfItems, setNumberOfItems] = useState<number>(0);
  const [isFridayRush, setIsFridayRush] = useState<boolean>(false);
  const [deliveryFee, setDeliveryFee] = useState<number | null>(null);

  const handleCalculate = () => {
    const calculatedDeliveryFee = calculateDeliveryFee({
      cartValue,
      distance,
      numberOfItems,
      isFridayRush,
    });

    setDeliveryFee(calculatedDeliveryFee);
  };

  return (
    <div>
      <label>
        Cart Value: <input type="number" className="form" value={cartValue} onChange={(e) => setCartValue(Number(e.target.value))} />
      </label>
      <br />
      <label>
        Delivery Distance (in meters):{' '}
        <input type="number" className="form" value={distance} onChange={(e) => setDistance(Number(e.target.value))} />
      </label>
      <br />
      <label>
        Number of Items: <input type="number" className="form" value={numberOfItems} onChange={(e) => setNumberOfItems(Number(e.target.value))} />
      </label>
      <br />
      <label>
        Friday Rush: <input type="checkbox" checked={isFridayRush} onChange={() => setIsFridayRush(!isFridayRush)} />
      </label>
      <br />
      <button className="button" onClick={handleCalculate}>Calculate Delivery Fee</button>
      <br />
        {deliveryFee !== null && (
        <p>Total Delivery Fee: {deliveryFee}€</p>
      )}
    </div>
  );
};

export default CartCalculator;
