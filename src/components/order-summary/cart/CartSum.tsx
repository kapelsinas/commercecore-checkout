import Divider from 'components/helper/Divider';
import { useMobileMediaQuery } from 'src/utils/mediaQueries';

const CartSum = () => {
  const isMobileScreen = useMobileMediaQuery();
  return (
    <div className="flex flex-col gap-4 text-[#333333]">
      <div className="flex justify-between items-center">
        <p className="text-small-body">Subtotal</p>
        <p className="text-small-body">$299.97</p>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <p className="text-medium-title font-bold">Total</p>
        <p className="text-medium-title font-bold">$299.97</p>
      </div>
      {isMobileScreen && <Divider />}
    </div>
  );
};

export default CartSum;
