'use client';

import React from 'react';

export type Props = {
  placeholder: string;
  maxLength?: number;
  type: 'text' | 'password';
  value: string;
  onChange: (value: string) => void;
  onFocus: (event: React.FocusEvent) => void;
  onBlur: (value: React.FocusEvent) => void;
};

export default function Input(props: Props) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  const className = ['input'];

  if (props.value) {
    className.push('input_filled');
  }

  return (
    <label className={className.join(' ')}>
      <input
        type={props.type}
        placeholder=" "
        maxLength={props.maxLength}
        value={props.value}
        onChange={onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />

      <p className="input__placeholder">{props.placeholder}</p>

      <div className="input__icon-wrapper"/>
    </label>
  );
}
