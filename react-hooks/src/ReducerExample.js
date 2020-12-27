import React, { useReducer } from 'react';

// 一个状态有两个行为，可以用reducer来封装它
function reducer(state, action) {
  console.log(state, action); // {count: 0}, {type: 'add'}
  switch (action.type) {
    case 'add':
      return {
        count: state.count + 1,
      };
    case 'sub':
      return {
        count: state.count - 1,
      };
    default:
      throw new Error('异常');
  }
}

export default function Counter() {
  const [counter, dispatch] = useReducer(reducer, { count: 0 }); // 参数是函数和其初始状态(可以是值也可以是一个对象)
  return (
    <div>
      Your counter is : {counter.count}
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'sub' })}>=</button>
    </div>
  );
}
