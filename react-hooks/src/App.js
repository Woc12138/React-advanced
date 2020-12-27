import 'styles.css';
// import UseStateExample from './UseStateExample'
// import EffectBasic from './EffectBasic'
// import UseContextExample from './UseContextExample';
// import ReducerExample from './ReducerExample';
// import RefExample from './RefExample';
// import MemoExample from './MemoExample';
// import UseCallbackExample from './UseCallbackExample';
// import Sync from './Sync';
// import UseMyHooks from './UseMyHooks';

// function App() {
//   return <div className="App">{<UseMyHooks />}</div>;
// }
// 示例
import useDraggable from './useDraggable';

const list = [
  {
    src: 'http://cdn.woc12138.com/profile2.jpg',
    title: '1',
  },
  {
    src: 'http://cdn.woc12138.com/profile4.jpg',
    title: '2',
  },
  {
    src: 'http://cdn.woc12138.com/write.gif',
    title: '3',
  },
];

function cls(def, conditions) {
  const list = [def];
  conditions.forEach(cond => {
    if (cond[0]) {
      list.push(cond[1]);
    }
  });
  console.log(list);
  return list.join(' ');
}

function App() {
  return (
    <div className="App">
      <DraggableList list={list} />
    </div>
  );
}

function DraggableList({ list }) {
  const { dragList, createDraggerProps, createDropperProps } = useDraggable(
    list
  );
  console.log(dragList);
  return dragList.map((item, i) => {
    if (item.type === 'BAR') {
      return <Bar id={i} {...createDropperProps(i)} key={item.id} />;
    } else {
      return (
        <Draggable {...createDraggerProps(i)}>
          <Card {...item.data} />
        </Draggable>
      );
    }
  });
}

function Bar() {
  return <div className="draggable-bar"></div>;
}

function Draggable({ children, eventHandlers, dragging, id }) {
  console.log(dragging, id);
  return (
    <div
      {...eventHandlers}
      draggable={true}
      className={cls('draggable', [dragging === id, 'dragging'])}>
      {children}
    </div>
  );
}

function Card({ src, title }) {
  return (
    <div className="card">
      <img src={src} />
      <span>{title}</span>
    </div>
  );
}

export default App;
