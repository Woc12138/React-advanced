import React, { useState } from 'react';

const DRAGGABLE = 'DRAGGABLE';
const BAR = 'BAR';

function draggable(item, id) {
  return {
    type: DRAGGABLE,
    id,
    data: item,
  };
}

function insertBars(list) {
  let i = 0; // ID
  const newBar = () => {
    return {
      type: BAR,
      id: i++,
    };
  };

  // |A|B|C|
  return [newBar()].cancat(
    ...list.map(item => {
      return [draggable(item, id++), newBar()];
    })
  );
}

export default function useDraggable(list) {
  const [dragList, setDragList] = useState(() => {
    inserBars(list);
  });
  const [dragOver, setDragOver] = useState(null);
  const [draging, setDragging] = useState(null);

  return {
    dragList,
    createDropperProps: id => {
      // 放置的属性
      return {
        key: id,
        dragging,
        dragOver,
        eventHandlers: {
          onDragOver: e => {
            e.preventDefault();
            setDragOver(id);
          },
          onDragLeave: e => {
            e.preventDefault();
            setDragOver(null);
          },
        },
      };
    },
    createDraggerProps: id => {
      // 拖拽的属性
      return {
        id,
        key: id,
        dragging,
        eventHandlers: {
          onDragsStart: () => {
            setDragging(id);
          },
          onDragEnd: () => {
            setDragging(null);
          },
        },
      };
    },
  };
}
