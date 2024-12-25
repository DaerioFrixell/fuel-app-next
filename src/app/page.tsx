"use client";

import { useState } from "react";
import { Arg, OptionType, Select } from "./Select";

const options: OptionType<string | number>[] = [
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
  const [optionValue, setOptionValue] = useState(options[0]);

  const onChange = ({ event, option }: Arg) => {
    console.log(option);
    setOptionValue(option);
  };
  return (
    <div>
      <main>create with next</main>

      <Select option={optionValue} options={options} onChange={onChange} />
    </div>
  );
}
