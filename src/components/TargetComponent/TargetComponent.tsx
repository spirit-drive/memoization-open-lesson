import React, { memo } from 'react';
import cn from 'clsx';
import s from './TargetComponent.sass';

export type TargetComponentProps = {
  className?: string;
  count?: number;
  options?: object;
  array?: unknown[];
  callback?: () => void;
};

export const TargetComponent = memo<TargetComponentProps>(({ className }) => {
  console.log('rerender TargetComponent');
  return <div className={cn(s.root, className)}>TargetComponent</div>;
});
