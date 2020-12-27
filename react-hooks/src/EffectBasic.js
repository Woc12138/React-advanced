import React, { useEffect, useState } from 'react';

function useInterval(callback, time) {
  useEffect(() => {
    const I = setInterval(callback, time);
    return () => {
      // 取消定时器
      clearTimeout(I);
    };
  }, []);
  // 依赖项为空，不会改变。所以虽然每次创建组件函数都会生成一个useEffect，但是只会生效第一次的effect作用
}

export default function Example() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    // setCount(count + 1) // 这样写，只打印一次1
    setCount(count => count + 1); // 这样react会每次取count的最新值，任何时候尽量都在set里面写函数的形式
  }, 1000);

  // 读作：依赖[依赖项]变化的作用
  // 每次在render函数渲染时都会重新创建并执行一次回调函数
  useEffect(() => {
    console.log(`你点击了${count}次`);
  }, [count]); // 如果依赖项为[空]，就只在初渲染时执行一次

  return (
    <div>
      Your count: {count}
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
