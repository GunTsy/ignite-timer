import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post 
        author="Carlos Alexandre" 
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptatibus nihil qui cupiditate illo facere quidem autem, blanditiis molestiae deserunt obcaecati quam ea molestias velit adipisci, quibusdam repudiandae ab placeat?"
      />
    </>
  )
}

