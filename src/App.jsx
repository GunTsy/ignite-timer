import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/guntsy.png',
      name: 'Carlos Alexandre',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 ' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: '<a href="#">jane.design/doctorcare</a>' 
      },        
    ],
    publishedAt: new Date('2024-12-10 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/DAVI-RESENDE.png',
      name: 'Davi',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 ' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: '<a href="#">jane.design/doctorcare</a>' 
      },        
    ],
    publishedAt: new Date('2024-12-20 22:00:00')
  },
]


export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {post.map(post => {
          return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
      </div>
    </>
  )
}

