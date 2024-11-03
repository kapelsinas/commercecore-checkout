import PaperCard from 'components/helper/PaperCard';
import InputField from 'components/helper/InputField';

const ContactInformation = () => {
  return (
    <PaperCard className="lg:pt-0 pt-6" title="Contact">
      <InputField
        name="email"
        label="Email Address"
        placeholder="Email Address"
        type="email"
        validationRules={{
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email format. Please use a format like name@example.com',
          },
        }}
      />
    </PaperCard>
  );
};

export default ContactInformation;
