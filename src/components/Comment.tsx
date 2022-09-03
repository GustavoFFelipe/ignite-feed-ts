import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import style from './Comment.module.css'


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}


export function Comment({ content, onDeleteComment }: CommentProps){

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }
    function handleLikeComment(){
        setLikeCount((state) =>{
            return likeCount + 1
        })

    }

    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/66434155?v=4" alt="Foto de perfil"/>
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                    <div className={style.authorAndTime}>
                        <strong>Gustavo Felipe</strong>
                        <time title='23 de agosto ás 08:00:10'dateTime="2022-08-23 08:00:10">Publicado há 1h</time>
                    </div>

                    <button onClick={handleDeleteComment}
                            title='Deletar comentário'>
                        <Trash size={24}  />
                    </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}
                            title="Gostei">
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}