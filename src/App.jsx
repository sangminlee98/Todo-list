import { useState } from 'react';
import styles from './App.module.css';
import Insert from './components/insert/insert';
import List from './components/item-list/list';
import Title from './components/title/title';

function App() {
  const [item, setItem] = useState([
    {
      id: 1,
      content: 'Hello',
      status: false,
    },
    {
      id: 2,
      content: 'Hi',
      status: false,
    },
  ]);
  const onAdd = (value) => {
    const newItem = [...item,{id: Date.now(), content: value}];
    setItem(newItem);
  }

  const checked = (id) => {
    const index = item.findIndex((item) => {
      return item.id === id;
    })
    const newItem = [...item];
    newItem[index].status = !newItem[index].status;
    setItem(newItem);
  }

  return (
    <div className={styles.container}>
      <Title />
      <Insert onAdd={onAdd}/>
      <List item={item} checked={checked}/>
    </div>
  );
}

export default App;
