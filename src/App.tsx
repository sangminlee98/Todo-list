import { useState } from 'react';
import styles from './App.module.css';
import Insert from './components/insert/insert';
import List from './components/item-list/list';
import Title from './components/title/title';

export interface Data {
  id: number,
  content: string,
  status: boolean,
}

const App = () => {

  const [item,setItem] = useState<Data[]>([]);

  const onAdd = (value: string) => {
      const newItem = [...item,{id: Date.now(), content: value, status: false}];
      setItem(newItem);
  }

  const checked = (id: number) => {
      const index = item!.findIndex((item) => {
        return item.id === id;
      })
      const newItem = [...item];
      newItem[index].status = !newItem[index].status;
      setItem(newItem);
  }

  const onDelete = (id: number) => {
      const newItem = item.filter((item) => item.id !== id);
      setItem(newItem);
  }
  return (
    <div className={styles.container}>
      <Title/>
      <Insert onAdd={onAdd}/>
      <List item={item} checked={checked} onDelete={onDelete}/>
    </div>
  );
}

export default App;
