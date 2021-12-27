import { useState } from 'react';
import styles from './App.module.css';
import Insert from './components/insert/insert';
import List from './components/item-list/list';
import Title from './components/title/title';

function App() {
  const [item, setItem] = useState([]);
  
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

  const onDelete = (id) => {
    const newItem = item.filter((item) => item.id !== id);
    setItem(newItem);
  }

  return (
    <div className={styles.container}>
      <Title />
      <Insert onAdd={onAdd}/>
      <List item={item} checked={checked} onDelete={onDelete}/>
    </div>
  );
}

export default App;
