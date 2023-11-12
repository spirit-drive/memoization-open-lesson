import React, { useCallback, useMemo, useState } from 'react';
import { InputList } from 'src/components/InputList';
import { TargetComponent } from 'src/components/TargetComponent';
import s from './App.sass';

function App() {
  const [value, onChange] = useState(() =>
    Array(1000)
      .fill('')
      .map((_, i) => ({ id: i.toString(), value: '' }))
  );

  const [count, setCount] = useState(0);

  const action = () => setCount(0);

  const options = useMemo(() => ({ test: 'Любой объект' }), []);
  const array = useMemo(() => ['Любой массив'], []);
  const callback = useCallback(() => console.log('Любая функция'), []);

  console.log('rerender App');
  return (
    <div className={s.root}>
      <TargetComponent callback={callback} array={array} options={options} />
      <button type="button" onClick={() => setCount((v) => v + 1)}>
        Увеличить счетчик {count}
      </button>
      <button type="button" onClick={action}>
        Сбросить счетчик
      </button>
      <InputList value={value} onChange={onChange} />
    </div>
  );
}

export default App;
