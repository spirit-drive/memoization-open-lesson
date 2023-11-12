import React, { useState } from 'react';
import { InputList } from 'src/components/InputList';
import s from './App.sass';

function App() {
  const [value, onChange] = useState(() =>
    Array(1000)
      .fill('')
      .map((_, i) => ({ id: i.toString(), value: '' }))
  );
  return (
    <div className={s.root}>
      <h1>Мемоизация в react приложении</h1>
      <InputList onChange={onChange} value={value} />
    </div>
  );
}

export default App;
