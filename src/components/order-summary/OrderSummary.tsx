import { useMobileMediaQuery } from '@/utils/mediaQueries';
import Benefits from 'components/order-summary/Benefits';
import Cart from 'components/order-summary/cart/Cart';

const OrderSummary = () => {
  const isMobileScreen = useMobileMediaQuery();
  return (
    <div className="flex flex-col gap-6 lg:mr-4 xl:mr-0">
      <Cart />
      {!isMobileScreen && <Benefits />}
    </div>
  );
};

export default OrderSummary;
