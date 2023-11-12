import React, { memo } from 'react';
import cn from 'clsx';
import s from './Input.sass';

export type InputProps = {
  className?: string;
  id: string;
  value: string;
  onChange: (value: string, id: string) => void;
};

export const Input = memo(({ className, value, id, onChange }: InputProps) => {
  console.log('rerender Input', id);
  return <input className={cn(s.root, className)} value={value} onChange={(e) => onChange(e.target.value, id)} />;
});
