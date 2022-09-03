
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import './global.css'
import style from './App.module.css'

// author: { avatarUrl: '', name: "", role:""}
// publishedAt: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: 'Janet Smith',
      role: 'Developer'
    },
    content: [
            {type: 'paragraph', content:"Fala galeraa 👋"},

            {type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
            {type: 'link', content:"jane.design/doctorcare"}
    ],
    publishedAt: new Date('2022-08-25 21:00:56')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: 'João Felipe',
      role: 'Analista de dados'
    },
    content: [
            {type: 'paragraph', content:"Eai turma, tudo tranquilo? 👋"},

            {type: 'paragraph', content: "Acabei de fazer mais uma analise de mercado para alguns clientes e foi sensacional 🚀"},
            {type: 'link', content:"analist.data/analytics"}
    ],
    publishedAt: new Date('2022-08-25 22:00:56')
  },
]

function App() {

  return (
    <>
    <Header />
    <div className={style.wrapper}>
      <Sidebar />
      <main>
      {posts.map(post => {
        return(
          <Post 
            key={post.id}
            author={post.author}
            content={post.content}
          /> 
        )
      })}
      
      </main>
    </div>
    </>
  )
}

export default App
