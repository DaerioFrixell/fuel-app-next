"use client";

import { useState } from "react";
import { Arg, OptionType, Select } from "./Select";
const stringOptions: OptionType<string>[] = [
  {
    key: "1",
    value: "one",
  },
  {
    key: "2",
    value: "two",
  },
  {
    key: "3",
    value: "three",
  },
];

export default function Home() {
  const [stringOption, setStringOptions] = useState(stringOptions[0]);

  const onChangeString = ({ option }: Arg<string>) => {
    setStringOptions(option);
  };

  return (
    <div>
      <main>create with next</main>

      <Select
        options={stringOptions}
        option={stringOption}
        onChange={onChangeString}
      />
    </div>
  );
}
