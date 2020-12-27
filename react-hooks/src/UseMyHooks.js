import React, { useState, useEffect } from 'react';

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function getPerson() {
  await sleep(200);
  return ['a', 'b', 'c'];
}

function usePerson() {
  const [list, setList] = useState(null);

  async function request() {
    const list = await getPerson();
    setList(list);
  }

  useEffect(request, []);
  return list;
}

export default () => {
  const list = usePerson();
  if (list === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {list.map((name, i) => {
        return <li key={i}>{name}</li>;
      })}
    </div>
  );
};
