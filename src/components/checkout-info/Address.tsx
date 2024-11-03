import { useState, useMemo } from 'react';
import InputField from 'components/helper/InputField';
import Dropdown from 'components/helper/Dropdown';
import { Country, State } from 'country-state-city';
import { useFormContext } from 'react-hook-form';

const getCountries = () =>
  Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

const getStates = (countryCode: string) =>
  State.getStatesOfCountry(countryCode).map((state) => ({
    value: state.isoCode,
    label: state.name,
  }));

const Address = () => {
  const { getValues, setValue } = useFormContext();
  const [states, setStates] = useState<{ value: string; label: string }[]>(
    getStates(getValues('country')),
  );
  const countries = useMemo(() => getCountries(), []);

  const handleCountryChange = (countryCode: string) => {
    const stateList = State.getStatesOfCountry(countryCode).map((state) => ({
      value: state.isoCode,
      label: state.name,
    }));
    setStates(stateList);
    setValue('state', '');
  };

  return (
    <>
      <InputField name="address" label="Address" placeholder="Address" />
      <div className="flex flex-row flex-wrap gap-3 lg:w-full">
        <InputField
          name="city"
          label="City"
          placeholder="City"
          className="min-w-32 w-full md:flex-1"
        />
        <Dropdown
          name="state"
          label="State / Province"
          options={states}
          className="min-w-32 w-full flex-1"
        />
        <InputField
          name="zip"
          label="Zip / Postal Code"
          placeholder="Zip / Postal Code"
          className="min-w-32 w-full flex-1"
        />
      </div>
      <Dropdown
        name="country"
        label="Country"
        options={countries}
        className="w-full lg:w-auto"
        onChange={(e) => handleCountryChange(e)}
      />
    </>
  );
};

export default Address;
