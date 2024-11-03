import { useState } from 'react';
import { useMobileMediaQuery } from '@/utils/mediaQueries';
import CartItems from 'components/order-summary/cart/CartItems';
import CartSum from 'components/order-summary/cart/CartSum';

const Cart = () => {
  const isMobileScreen = useMobileMediaQuery();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);

  return (
    <div className="flex flex-col gap-4 p-4 lg:p-0">
      {isMobileScreen && (
        <button onClick={toggleAccordion} className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <p className="text-small-body text-[#333333]">Order Overview</p>
            <img src="cart/arrow.svg" className={isAccordionOpen ? 'rotate-180' : ''} />
          </div>
          <p className="text-small-body text-[#333333] font-[500]">$299.97</p>
        </button>
      )}
      {(isAccordionOpen || !isMobileScreen) && (
        <div className="flex flex-col gap-4">
          <CartItems />
          <CartSum />
        </div>
      )}
    </div>
  );
};

export default Cart;
