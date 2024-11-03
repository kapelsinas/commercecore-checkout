import CheckoutInfo from 'components/checkout-info/CheckoutInfo';
import Benefits from 'components/order-summary/Benefits';
import OrderSummary from 'components/order-summary/OrderSummary';
import { useMobileMediaQuery } from '@/utils/mediaQueries';

const containerWidth = 1040;
export const marginBetweenSections = 38;
const checkoutInfoWidth = 559;
const orderSummaryWidth = 405;

const CheckoutPage = () => {
  const isMobileScreen = useMobileMediaQuery();
  return (
    <div
      style={{
        backgroundImage: !isMobileScreen
          ? `linear-gradient(to right, #FFFFFF calc((100% - ${containerWidth}px) / 2 + ${checkoutInfoWidth}px + ${marginBetweenSections}px), #F5F5F5 calc((100% - ${containerWidth}px) / 2 + ${orderSummaryWidth}px + ${marginBetweenSections}px))`
          : 'none',
      }}
      className="bg-[#F5F5F5] min-h-screen"
    >
      <div className="flex flex-col lg:flex-row md:max-w-[668px] lg:max-w-[1040px] w-full mx-auto pb-6">
        <div
          className={`lg:max-w-[559px] w-full lg:pt-[40px] order-2 lg:order-1`}
          style={{
            marginRight: isMobileScreen ? '0' : `${marginBetweenSections}px`,
          }}
        >
          <CheckoutInfo />
          {isMobileScreen && <Benefits />}
        </div>
        <div
          style={{
            marginLeft: isMobileScreen ? '0' : `${marginBetweenSections}px`,
          }}
          className={`lg:max-w-[405px] w-full lg:pt-[40px] lg:ml-[${marginBetweenSections}px] order-1 lg:order-2`}
        >
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
