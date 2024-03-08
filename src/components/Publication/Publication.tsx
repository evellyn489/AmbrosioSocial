import React, { useState } from 'react';
import styles from "./Publication.module.scss";
import profile_picture from "../../assets/publications/profile_picture.png";
import rectangle_photo from "../../assets/publications/rectangle_photo.png"
import like from "../../assets/interaction/like.png"
import like_darkTheme from "../../assets/interaction/like_darkTheme.png"
import like_clicked from "../../assets/interaction/like_clicked.png"
import like_clickedDark from "../../assets/interaction/like_clickedDark.png"
import comment from "../../assets/interaction/comment.png"
import comment_darkTheme from "../..//assets/interaction/comment_darkTheme.png"
import { Comment } from "../Comment"
import { ReadMore } from '../ReadMore';
import { useTheme } from '../../contexts/ThemeProvider/ThemeProvider';

export function Publication({text}: { text: string}) {
    const { darkTheme } = useTheme();
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState<string[]>([]);
    const [commentVisible, setCommentVisible] = useState(false);
    const [commentText, setCommentText] = useState<string>('');
    const [likeClicked, setLikeClicked] = useState(false);
    const [likeIcon, setLikeIcon] = useState(like);
    const [likeNumColor, setLikeNumColor] = useState<string>(styles.defaultNumColor);
    const [commentError, setCommentError] = useState<string | null>(null);

    const toggleCommentVisibility = () => {
        setCommentVisible(!commentVisible); 
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentText(event.target.value); 
    };

    const handleLikeClick = () => {
        
        if (!likeClicked) {
            setLikes(likes + 1);
            setLikeClicked(true);

            if (!darkTheme){
                setLikeIcon(like_clicked);
                setLikeNumColor(styles.likeNumColor);
            }

            else {
                setLikeIcon(like_clickedDark);
            }
    
        } else {
            setLikes(likes - 1);
            setLikeClicked(false);
            setLikeIcon(like);
            setLikeNumColor(styles.defaultNumColor);
        }
        
        const likeButton = document.getElementById("likeButton");
        if (likeButton) {
            likeButton.classList.add(styles.clicked);
            setTimeout(() => {
                likeButton.classList.remove(styles.clicked);
            }, 200);
        }
    };


    const handleCommentClick = () => {
        if (commentText.trim() === '') {
            setCommentError('Por favor, digite um comentário antes de enviar.');
            return;
        }

        setCommentError(null);

        setComments([...comments, commentText]);
        setCommentText(""); 
    };
    
    return (
        <div className={styles.container}>
            <img src={profile_picture} alt="foto de perfil do usuário" title="Foto de perfil" className={styles.profile_picture}/>  
                
            <div className={styles.content}>
                <div className={styles.information}>
                    <h1>Nome do usuário</h1>
                    
                    <p className={styles.p}>
                        <ReadMore text={text} maxLength={200} />
                    </p>
                    <img src={rectangle_photo} alt="foto postada pelo usuário" className={styles.photo}/>
                </div>

                <div className={styles.interation}>
                    <button 
                         className={`${styles.like} ${darkTheme ? styles['likeDark'] : ''} ${likeClicked ? styles['likeClicked'] : ''}`}

                        onClick={handleLikeClick}
                        aria-label={likeClicked ? 'Descurtir' : 'Curtir'}
                    >
                        <img src={darkTheme ? (likeClicked ? like_clickedDark : like_darkTheme) : (likeClicked ? like_clicked : likeIcon)} alt="botão de curtida" title={likeClicked ? 'Descurtir' : 'Curtir'}/>

                        <span className={likeNumColor}>{likes}</span>
                    </button>

                    <button 
                        className={`${styles.comment} ${darkTheme ? styles['commentDark']: ''}`} 

                        onClick={toggleCommentVisibility}
                        aria-label='Comentar'
                    >
                        <img src={darkTheme ? comment_darkTheme : comment} alt="Comentar" />
                        <span>{comments.length}</span>
                    </button>
                </div>

                <div className={`${styles.commentSpace} ${commentVisible && styles.visible}`}>
                    {comments.map((comment, index) => (
                        <Comment key={index} nomeUsuario="Nome do usuário" texto={comment} />
                    ))}
                    
                    <div className={styles.reply}>
                        <textarea
                            value={commentText}
                            onChange={handleCommentChange}
                            placeholder="Digite seu comentário..."
                            className={styles.commentInput}
                        />
                        {commentError && <span className={styles.error}>{commentError}</span>}
                        <button onClick={handleCommentClick} className={styles.button}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}