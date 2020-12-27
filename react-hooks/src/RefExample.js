import React, { useRef, useState } from 'react';

// 例1：refInput 引用 input dom
// 例2：prev.current 缓存了一个 previous 值

export default function UseRefExample() {
  const refInput = useRef(null);

  const [counter, setCounter] = useState(0);
  const prev = useRef(null);
  return (
    <div>
      <div id="example1">
        <input ref={refInput} />
        <button
          onClick={() => {
            refInput.current.focus();
          }}>
          Focus
        </button>
      </div>

      <div id="example2">
        <p>当前值：{counter}</p>
        <p>之前的值：{prev.current}</p>
        <button
          onClick={() => {
            prev.current = counter;
            setCounter(x => x + 1);
          }}>
          Click me to add
        </button>
        <button
          onClick={() => {
            prev.current = counter;
            setCounter(x => x - 1);
          }}>
          Click me to remove
        </button>
      </div>
    </div>
  );
}
