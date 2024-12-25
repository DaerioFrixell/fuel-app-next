"use client";

import { MouseEvent, useState } from "react";

type OptionKeyType = string | number;

export type OptionType<Key extends OptionKeyType> = {
  key: Key;
  value: string;
};

export type Arg = {
  event: MouseEvent<HTMLDivElement>;
  option: OptionType<string | number>;
};

type SelectType<Key extends OptionKeyType> = {
  options: OptionType<Key>[];
  option: OptionType<Key>;
  onChange: ({ option, event }: Arg) => void;
};

export const Select = <Key extends OptionKeyType>({
  option,
  options,
  onChange,
}: SelectType<Key>) => {
  const [isOpenInner, setIsOpenInner] = useState(false);

  const handleSelect = () => {
    setIsOpenInner((prev) => !prev);
  };

  const onClick =
    (selectedOption: OptionType<Key>) =>
    (event: MouseEvent<HTMLDivElement>) => {
      onChange({
        event,
        option: selectedOption,
      });
    };

  return (
    <div>
      <button onClick={handleSelect}>{option.value}</button>

      {isOpenInner && (
        <div>
          {options.length &&
            options.map((option) => (
              <div key={option.key} onClick={onClick(option)}>
                {option.value}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
