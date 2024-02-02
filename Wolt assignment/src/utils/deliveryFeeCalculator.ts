interface DeliveryFeeCalculatorParams {
    cartValue: number;
    distance: number;
    numberOfItems: number;
    isFridayRush: boolean;
  }
  
  export const calculateDeliveryFee = (params: DeliveryFeeCalculatorParams): number => {
    const { cartValue, distance, numberOfItems, isFridayRush } = params;
  
    // Small order surcharge
    let deliveryFee = cartValue < 10 ? 10 - cartValue : 0;
  
    // Base delivery fee for the first 1000 meters
    deliveryFee += 2;
  
    // Additional fee for every 500 meters
    const additionalDistanceFee = Math.ceil((distance - 1000) / 500);
    deliveryFee += Math.max(additionalDistanceFee, 1);
  
    // Surcharge for more than five items
    const itemSurcharge = numberOfItems > 5 ? 0.5 * (numberOfItems - 5) : 0;
  
    // Bulk fee for more than 12 items
    const bulkFee = numberOfItems > 12 ? 1.2 : 1;
  
    // Total delivery fee before Friday rush
    let totalFee = deliveryFee + itemSurcharge + bulkFee;
  
    // Apply Friday rush multiplier
    if (isFridayRush) {
      totalFee *= 1.2;
    }
  
    // Cap the total fee at 15€
    return Math.min(totalFee, 15);
  };
  