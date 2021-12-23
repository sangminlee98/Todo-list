import { useState } from 'react';
import styles from './App.module.css';
import Insert from './components/insert/insert';
import Title from './components/title/title';

function App() {
  const [item, setItem] = useState([
    {
      id: 1,
      title: 'Title',
      content: 'Hello'
    }
  ]);
  return (
    <div className={styles.container}>
      <Title />
      <Insert />
    </div>
  );
}

export default App;
