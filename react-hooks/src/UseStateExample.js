import React, { useState } from 'react';

function useCount() {
  const [count, setCount] = useState(0);
  return [count, () => setCount(count + 1)];
}

export default () => {
  const [count, addCount] = useCount(0);

  return (
    <div>
      Your count: {count}
      <button onClick={() => addCount()}>Add</button>
    </div>
  );
};
