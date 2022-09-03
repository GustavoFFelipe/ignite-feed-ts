import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './Post.module.css'


const comments = [
    1,
    2,
    
];

interface Content{
    type: 'paragraph' | 'link';
    content: string;

}
interface Author {
    name: String;
    role: string;
    avatarUrl: string;
}

interface PostProps {
    author: Author;
    content: Content[];
}


export function Post({author, content}: PostProps){

    const [comments, setComments] = useState([
        'Post muito bacana'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewCommnt(event: FormEvent){
        event.preventDefault();
        
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event:ChangeEvent <HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }
    function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeleteOne = comments.filter(comment => {
                return comment !== commentToDelete
        })
        setComments(commentsWithoutDeleteOne)
    }
    const isNewCommentEmpty =newCommentText.length === 0;

    return(
        
        <article className={style.post}>
            <header>
            <div className={style.author}>
                <Avatar src={author.avatarUrl}/>
                <div className={style.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>


            </header>

            <div className={style.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }
                    else if(line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>


            <form onSubmit={handleCreateNewCommnt} className={style.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea 
                onChange={handleNewCommentChange}
                required
                onInvalid={handleNewCommentInvalid}
                value={newCommentText}
                name='comment'
                placeholder="Deixe seu comentário"
                />
                <footer>
                <button type='submit' disabled={isNewCommentEmpty}>
                    Publicar
                </button>

                </footer>

            </form>

            <div className={style.commentList}>
                {comments.map(comment => {
                    return (<Comment
                            key={comment} 
                            content={comment}
                            onDeleteComment={deleteComment} 
                        />)
                })}
            </div>
        </article>
    )
}