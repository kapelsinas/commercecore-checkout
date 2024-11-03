import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const Actions = () => {
  const { handleSubmit, getValues } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      const orderData = getValues();
      localStorage.setItem('orderData', JSON.stringify(orderData));
      setIsLoading(false);
      alert('Order information has been saved to localStorage');
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <button
        type="button"
        style={{ boxShadow: '0px 4px 10px 0px #4328103D' }}
        className="lg:text-[18px] text-poppins-lg text-[14px] font-poppins bg-[#009900] text-white py-3 md:py-4 rounded-[4px] w-full uppercase flex justify-center items-center"
        onClick={handleSubmit(onSubmit)}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="loader border-t-2 border-white rounded-full w-5 h-5 animate-spin"></div>
        ) : (
          'Complete Order'
        )}
      </button>
      <div className="flex gap-2 items-center justify-center">
        <img src="payment-methods/lock.svg" alt="Secure lock icon" className="size-[14px]" />
        <p className="text-small-body text-[#828282]">All transactions are secure and encrypted</p>
      </div>
    </div>
  );
};

export default Actions;
