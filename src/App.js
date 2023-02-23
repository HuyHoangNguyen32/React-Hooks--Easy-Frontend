import { ColorBox } from './components/ColorBox';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.paddingPage}>
      <h1>Welcome to React Hooks</h1>
      <ColorBox/>
    </div>
  );
}

export default App;
