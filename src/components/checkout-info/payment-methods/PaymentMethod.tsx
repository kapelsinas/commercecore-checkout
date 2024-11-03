import { useFormContext } from 'react-hook-form';
import InputField from 'components/helper/InputField';
import CreditCardMethods from './CreditCardMethods';

interface PaymentMethod {
  type?: 'credit';
  label?: string;
}

const PaymentMethod = ({ type = 'credit', label = 'Credit Card' }: PaymentMethod) => {
  const { register } = useFormContext();

  return (
    <div className="w-full flex flex-col bg-[#F0F5FF] rounded-sm">
      <div className="flex items-center justify-between gap-4 p-4 border-[#3362AB] border-[1px] rounded-t-sm">
        <div className="flex gap-4 items-center">
          <label htmlFor={`payment-method-${type}`} className="text-sm">
            <input
              {...register('paymentMethod')}
              type="radio"
              value="credit"
              name="paymentMethod"
              id={`payment-method-${type}`}
              className="hidden"
            />
            <div className="flex gap-4 items-center">
              <img src="payment-methods/radio.svg" alt="Credit Card" className="w-5 h-5" />
              {label}
            </div>
          </label>
        </div>
        <CreditCardMethods />
      </div>
      <div className="w-full flex flex-col border-[#E0E0E0] border-[1px] p-3 gap-3 bg-[#FBFAFB] rounded-b-sm">
        <InputField
          name="cardNumber"
          label="Card Number"
          placeholder="Card Number"
          mask="9999 9999 9999 9999"
          inputMode="numeric"
          validationRules={{
            pattern: {
              value: /^\d{4} \d{4} \d{4} \d{4}$/,
              message: 'Card number must be in the format 1234 5678 9012 3456',
            },
          }}
        />
        <div className="flex gap-3">
          <InputField
            name="expirationDate"
            label="Expiration (MM/YY)"
            placeholder="Expiration (MM/YY)"
            mask="99/99"
            inputMode="numeric"
            validationRules={{
              pattern: {
                value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                message: 'Expiration date must be in MM/YY format',
              },
            }}
          />
          <InputField
            name="cvv"
            label="Security Code"
            placeholder="Security code"
            mask="999"
            inputMode="numeric"
            validationRules={{
              pattern: {
                value: /^\d{3}$/,
                message: 'CVV must be 3 digits',
              },
            }}
          />
        </div>
        <InputField name="cardHolder" label="Name on card" placeholder="Name on card" />
      </div>
    </div>
  );
};

export default PaymentMethod;
