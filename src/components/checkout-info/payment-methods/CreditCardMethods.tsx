import { useMediaQuery } from '@uidotdev/usehooks';
import { useMemo } from 'react';

interface CreditCardMethodImg {
  method: string;
}

const CreditCardMethodImg = ({ method, ...props }: CreditCardMethodImg) => (
  <img
    {...props}
    src={`payment-methods/credit/${method}.jpg`}
    alt={`${method} method`}
    className="h-6 w-9"
  />
);

const availableCreditMethods = ['visa', 'mastercard', 'amex', 'diners_club'];

const CreditCardMethods = () => {
  const isSmallMobileScreen = useMediaQuery('only screen and (max-width : 400px)');

  const availableCreditCardMethods = useMemo(
    () => (isSmallMobileScreen ? availableCreditMethods.slice(0, 3) : availableCreditMethods),
    [isSmallMobileScreen],
  );

  return (
    <div className="flex gap-[3px]">
      {availableCreditCardMethods.map((method) => (
        <CreditCardMethodImg key={method} method={method} />
      ))}
      <CreditCardMethodImg method="plus_methods" />
    </div>
  );
};

export default CreditCardMethods;
