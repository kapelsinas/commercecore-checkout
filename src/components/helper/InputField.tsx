import { useFormContext, RegisterOptions } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { cn } from 'src/lib/utils';

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  validationRules?: RegisterOptions;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  mask?: string;
}

const InputField = ({
  name,
  label,
  placeholder,
  type = 'text',
  className,
  validationRules = {},
  inputMode = 'text',
  mask,
}: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const combinedValidationRules: RegisterOptions = {
    required: `${label} field is required`,
    ...validationRules,
  };

  const inputProps = {
    ...register(name, combinedValidationRules),
    type,
    placeholder,
    inputMode,
    className: `rounded-md placeholder-[#828282] h-[52px] p-4 border w-full ${
      errors[name] ? 'border-red-500' : 'border-[#E0E0E0]'
    } w-full text-small-body`,
  };

  return (
    <label className={cn('block w-full', className)}>
      <span className="sr-only">{label}</span>
      {mask ? <InputMask mask={mask} {...inputProps} /> : <input {...inputProps} />}
      {errors[name] && (
        <span className="text-red-500 text-xs">{errors[name]?.message as string}</span>
      )}
    </label>
  );
};

export default InputField;
