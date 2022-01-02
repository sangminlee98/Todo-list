import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './App.module.css';
import Insert from './components/insert/insert';
import List from './components/item-list/list';
import Title from './components/title/title';

export interface Data {
  id: number,
  content: string,
  status: boolean,
}

const App = ({authService}: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const historyState: any = location?.state;
  const [item,setItem] = useState<Data[]>([]);
  const [userId, setUserId] = useState<string>(historyState && historyState.id);
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

  const onLogout = useCallback(() => {
    authService.logout();
  },[authService]);

  useEffect(() => {
    const unsubscribe = authService.onAuthChange((user: any) => {
      if(user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
    return unsubscribe;
  },[authService,userId,navigate]);
  return (
    <div className={styles.container}>
      <Title onLogout={onLogout}/>
      <Insert onAdd={onAdd}/>
      <List item={item} checked={checked} onDelete={onDelete}/>
    </div>
  );
}

export default App;
