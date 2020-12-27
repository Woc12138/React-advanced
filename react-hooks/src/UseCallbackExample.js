import React, { useState, useCallback } from 'react';

const s = new Set();
// 每次调用完setCount整个函数组件都要执行一遍
export default () => {
  const [count, setCount] = useState(0);

  // 原来的写法：由于每次创建的都是新的，所以set的size自增
  // function add() {
  //   setCount(x => x + 1);
  // }

  // 用useCallback提升性能的写法：缓存了add函数，不需要每次都创建新的，set的size不变
  const add = useCallback(() => {
    setCount(x => x + 1);
  }, []);

  s.add(add); // Set 中的元素是唯一的，新创建的函数添加到 set 中，size会增加
  console.log(s.size);

  return (
    <div>
      {count}
      <button onClick={add}>+</button>
    </div>
  );
};
