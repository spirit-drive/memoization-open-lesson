import React, { useCallback, useRef } from 'react';
import cn from 'clsx';
import { Input } from 'src/components/Input';
import s from './InputList.sass';

export type ExampleInputValueItem = {
  id: string;
  value: string;
};

export type ExampleInputValue = ExampleInputValueItem[];

export type InputListProps = {
  className?: string;
  value: ExampleInputValue;
  onChange: (value: ExampleInputValue) => void;
};

export const InputList = ({ className, value, onChange }: InputListProps) => {
  const valueCopy = useRef(value);
  valueCopy.current = value;

  const handleChange = useCallback(
    (v: string, id: string) => {
      onChange(valueCopy.current.map((i) => (i.id === id ? { id, value: v } : i)));
    },
    [onChange]
  );

  return (
    <div className={cn(s.root, className)}>
      {value.map((item) => (
        <Input key={item.id} value={item.value} id={item.id} onChange={handleChange} />
      ))}
    </div>
  );
};
