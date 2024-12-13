import { Header } from "./components/Header"

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import './global.css'
import { Post } from "./Post"

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Carlos Alexandre" 
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptatibus nihil qui cupiditate illo facere quidem autem."
          />
          <Post 
            author="Carlos Alexandre" 
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptatibus nihil qui cupiditate illo facere quidem autem."
          />
        </main>
      </div>
    </>
  )
}

