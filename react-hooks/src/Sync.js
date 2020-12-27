import React, { useState, useEffect } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const I = setInterval(() => {
      console.log(count); // 如果要让console的count也实时更新，就要填入依赖项，让useEffect意识到它的改变
      setCount(x => x + 1); // 一定要写成函数形式，否则用的一直是改变前的count即0
    }, 1000);
    return () => clearInterval(I);
  }, [count]);
  // 有依赖项，导致每次count改变都会重新创建setInterval，会产生副作用
  // 所以一定要记得在return中回收每次产生的新的interval

  return <div>{count}</div>;
};
