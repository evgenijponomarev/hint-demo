'use client';

import React from 'react';

export type Props = {
  placeholder: string;
  maxLength: number;
  type: 'text' | 'password';
};

export default function Input(props: Props) {
  const [value, setValue] = React.useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const className = ['input'];

  if (value) {
    className.push('input_filled');
  }

  return (
    <label className={className.join(' ')}>
      <input
        type={props.type}
        placeholder=" "
        maxLength={props.maxLength}
        value={value}
        onChange={onChange}
      />

      <p className="input__placeholder">{props.placeholder}</p>

      <div className="input__icon-wrapper"/>
    </label>
  );
}
