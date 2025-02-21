import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';



export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post author='Sabrina Menegassi' content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste inventore perspiciatis ut sint sed earum? Unde recusandae consequuntur error similique suscipit aspernatur rerum veritatis minima beatae. Aut, voluptatum quaerat.'/>
        <Post author='Melquisedec Felipe' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque dolor veritatis maiores quo odit cumque ex ducimus labore! Quam alias accusantium fugiat earum, non vero tempore facere minima similique.'/>
        </main>
      </div>
    </div>
  )
}


