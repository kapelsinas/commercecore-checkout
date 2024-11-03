import * as React from 'react';
import { Check } from 'lucide-react';
import { useFormContext, Controller } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface DropdownProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  className?: string;
  onChange?: (value: string) => void;
}

export function Dropdown({ name, label, options, className, onChange }: DropdownProps) {
  const {
    control,
    formState: { errors },
    setError,
    clearErrors,
  } = useFormContext();
  const [open, setOpen] = React.useState(false);

  return (
    <label className={cn('w-full block', className)}>
      <Controller
        name={name}
        control={control}
        rules={{
          required: `${label} field is required`,
        }}
        render={({ field }) => {
          const { value, onChange: handleChange } = field;

          const handleSelect = (currentValue: string) => {
            const newValue = currentValue === value ? '' : currentValue;
            if (!newValue) {
              setError(name, { type: 'required', message: `${label} field is required` });
            } else {
              clearErrors(name);
            }

            handleChange(newValue);
            if (onChange) {
              onChange(newValue);
            }
            setOpen(false);
          };

          const handleCustomInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value;
            handleChange(newValue);
            clearErrors(name);
            if (onChange) {
              onChange(newValue);
            }
          };

          return (
            <div>
              {options.length === 0 ? (
                <input
                  type="text"
                  placeholder={label}
                  value={value}
                  onChange={handleCustomInputChange}
                  className={`rounded-md placeholder-[#828282] h-[52px] p-4 border ${
                    errors[name] ? 'border-red-500' : 'border-[#E0E0E0]'
                  } w-full text-small-body`}
                />
              ) : (
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between px-4 py-2 h-[52px]"
                    >
                      <div className="flex flex-col items-start">
                        <p className="text-[#828282] text-xs-body">{label}</p>
                        <p className="text-small-body">
                          {value ? options.find((option) => option.value === value)?.label : ''}
                        </p>
                      </div>
                      <img src="cart/arrow.svg" className="ml-2 h-3 w-3 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command
                      filter={(option, query) =>
                        options
                          .find((o) => o.value === option)
                          ?.label.toLowerCase()
                          .startsWith(query.toLowerCase())
                          ? 1
                          : 0
                      }
                    >
                      <CommandInput placeholder={`Search ${label.toLowerCase()}...`} />
                      <CommandList>
                        <CommandEmpty>No options found.</CommandEmpty>
                        <CommandGroup>
                          {options.map((option) => (
                            <CommandItem
                              key={option.value}
                              value={option.value}
                              onSelect={handleSelect}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  value === option.value ? 'opacity-100' : 'opacity-0',
                                )}
                              />
                              {option.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              )}
              {errors[name] && (
                <span className="text-red-500 text-xs">{errors[name]?.message as string}</span>
              )}
            </div>
          );
        }}
      />
    </label>
  );
}

export default Dropdown;
