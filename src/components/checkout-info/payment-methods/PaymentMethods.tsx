import PaperCard from 'components/helper/PaperCard';
import Actions from 'components/checkout-info/Actions';
import PaymentMethod from 'components/checkout-info/payment-methods/PaymentMethod';

const PaymentMethods = () => {
  return (
    <PaperCard title="Payment" subtitle="All transactions are secure and encrypted">
      <PaymentMethod type="credit" />
      <Actions />
    </PaperCard>
  );
};

export default PaymentMethods;
