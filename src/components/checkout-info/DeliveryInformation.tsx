import Address from 'components/checkout-info/Address';
import InputField from 'components/helper/InputField';
import PaperCard from 'components/helper/PaperCard';

const DeliveryInformation = () => {
  return (
    <PaperCard title="Delivery">
      <div className="flex gap-3 lg:gap-4">
        <InputField name={'firstName'} label={'First Name'} placeholder={'First Name'} />
        <InputField name={'lastName'} label={'Last Name'} placeholder={'Last Name'} />
      </div>
      <Address />
    </PaperCard>
  );
};

export default DeliveryInformation;
