import React, { useState } from "react";

interface IuseTextInput {
  [key: string]: string;
}

export default function useTextInput(initialState: IuseTextInput) {
  const [values, setValues] = useState(initialState);
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onReset = () => setValues(initialState);

  return { values, onReset, onChange };
}
