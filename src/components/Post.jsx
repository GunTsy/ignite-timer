import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({author, publishedAt, content}) {

  const [comment, setComment] = useState([
    'Post muito bacana, hein!?'
  ])
  const [commentText, setCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleNewCommment() {
    event.preventDefault()
    
    setComment([...comment, commentText])
    setCommentText('');
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  function handleNewCommmentChange() {
    event.target.setCustomValidity('')
    setCommentText(event.target.value)
  }


  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteComment = comment.filter(comment => {
      return comment !== commentToDelete
    })

    setComment(commentsWithoutDeleteComment)
  }

  const isNewCommentEmpty = commentText.length === 0

 return (
  <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar src={author.avatarUrl} />
        <div className={styles.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
      </div>

      <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >
        {publishedDateRelativeToNow}
      </time>
    </header>

    <div className={styles.content}>
       {content.map(line => {
        if(line.type === 'paragraph') {
          return <p key={line.content}>{line.content}</p>
        } else if (line.type === 'link') {
          return <p key={line.content}><a href="#">{line.content}</a></p>
        }
       })}  
    </div>

    <form onSubmit={handleNewCommment} className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea 
        value={commentText}
        name='comment'
        required
        onInvalid={handleNewCommentInvalid}
        placeholder='Deixe um comentário'
        onChange={handleNewCommmentChange}
      />

      <footer>
        <button type='submit' disabled={isNewCommentEmpty}>
          Publicar
        </button>
      </footer>
    </form>

    <div className={styles.commnetList}>
      {comment.map(comment => {
        return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
      })}
    </div>
  </article>
 )
}