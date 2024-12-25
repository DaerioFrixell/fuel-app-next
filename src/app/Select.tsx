import { MouseEvent, useState } from "react";

export type OptionType<Key extends string | number> = {
  key: Key;
  value: string;
};

export type Arg<Key extends string | number> = {
  event: MouseEvent<HTMLDivElement>;
  option: OptionType<Key>;
};

export type SelectProps<Key extends string | number> = {
  options: OptionType<Key>[];
  option: OptionType<Key>;
  onChange: (args: Arg<Key>) => void;
};

export const Select = <Key extends string | number>({
  option,
  options,
  onChange,
}: SelectProps<Key>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick =
    (option: OptionType<Key>) => (event: MouseEvent<HTMLDivElement>) => {
      onChange({ option, event });
      setIsOpen(false);
    };

  return (
    <div>
      <button onClick={handleSelect}>{option.value}</button>
      {isOpen && (
        <div>
          {options.map((option) => (
            <div key={option.key} onClick={handleOptionClick(option)}>
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
