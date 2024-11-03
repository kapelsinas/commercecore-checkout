import { FormProvider, useForm } from 'react-hook-form';
import ContactInformation from 'components/checkout-info/ContactInformation';
import DeliveryInformation from 'components/checkout-info/DeliveryInformation';
import PaymentMethods from 'components/checkout-info/payment-methods/PaymentMethods';
import CheckoutForm from 'src/types/CheckoutForm';
import { DevTool } from '@hookform/devtools';

const CheckoutInfo = () => {
  const form = useForm<CheckoutForm>({
    mode: 'onBlur',
    defaultValues: {
      email: 'test@test.lt',
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
      country: 'US',
      paymentMethod: 'credit',
      cardHolder: 'John Doe',
      cardNumber: '4242 4242 2424 2424',
      expirationDate: '01/23',
      cvv: '123',
    },
  });
  return (
    <div className="lg:max-w-[559px] flex flex-col gap-4 md:gap-8 lg:ml-4 xl:ml-0">
      <FormProvider {...form}>
        <DevTool control={form.control} />
        <ContactInformation />
        <DeliveryInformation />
        <PaymentMethods />
      </FormProvider>
    </div>
  );
};

export default CheckoutInfo;
