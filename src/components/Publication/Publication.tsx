import React, { useContext, useEffect, useState } from 'react';
import styles from "./Publication.module.scss";
import profile_picture from "../../assets/publications/profile_picture.png";
import like from "../../assets/interaction/like.png"
import like_darkTheme from "../../assets/interaction/like_darkTheme.png"
import like_clicked from "../../assets/interaction/like_clicked.png"
import like_clickedDark from "../../assets/interaction/like_clickedDark.png"
import comment from "../../assets/interaction/comment.png"
import comment_darkTheme from "../..//assets/interaction/comment_darkTheme.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Comment } from "../Comment"
import { ReadMore } from '../ReadMore';
import { useTheme } from '../../contexts/ThemeProvider/ThemeProvider';
import { useFontSize } from "../../contexts/FontSizeContext/FontSizeContext";
import { UserContext } from '../../contexts/UserProvider/UserProvider';

interface PublicationProps {
    text: string;
    image?: string;
    userId: string;
    userName?: string;
    publicationId: string;
}

export function Publication({ text, image, userId, userName, publicationId }: PublicationProps) {
    const { darkTheme } = useTheme();
    const { fontSize} = useFontSize();

    const likesKey = `likes_${publicationId}`;
    const commentsKey = `comments_${publicationId}`;

    const [likes, setLikes] = useState<number>(() => {
        const storedLikes = localStorage.getItem(likesKey);
        return storedLikes ? parseInt(storedLikes) : 0;
    });

    const [comments, setComments] = useState<string[]>(() => {
        const storedComments = localStorage.getItem(commentsKey);
        return storedComments ? JSON.parse(storedComments) : [];
    });

    const [commentVisible, setCommentVisible] = useState(false);
    const [commentText, setCommentText] = useState<string>('');
    const [likeClicked, setLikeClicked] = useState<boolean>(() => {
        return localStorage.getItem(`likeClicked_${publicationId}`) === 'true';
    });
    const [likeIcon, setLikeIcon] = useState(like);
    const [likeNumColor, setLikeNumColor] = useState<string>(styles.defaultNumColor);
    const [commentError, setCommentError] = useState<string | null>(null);

    const toggleCommentVisibility = () => {
        setCommentVisible(!commentVisible); 
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentText(event.target.value); 
    };

    useEffect(() => {
        localStorage.setItem(`likes_${publicationId}`, likes.toString());
        localStorage.setItem(`likeClicked_${publicationId}`, likeClicked.toString());
    }, [likes, likeClicked, publicationId]);

    useEffect(() => {
        localStorage.setItem(`comments_${publicationId}`, JSON.stringify(comments));
    }, [comments, userId]);

    const handleLikeClick = () => {
        if (userId === userData?.id) {
                toast.info("Você não pode curtir sua própria publicação.");
    
        } else {
            if (!likeClicked) {
                setLikes(likes + 1);
                setLikeClicked(true);
                localStorage.setItem(likesKey, '1');
    
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
                localStorage.removeItem(likesKey);
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
        }
        
        
    };

    const { userData } = useContext(UserContext);

    const handleCommentClick = () => {
        if (commentText.trim() === '') {
            setCommentError('Por favor, digite um comentário antes de enviar.');
            return;
        }
    

        setCommentError(null);
        const newCommentText = { text: commentText, authorName: userData?.name };
        setComments(prevComments => [...prevComments, newCommentText.text]); 
        localStorage.setItem(`comments_${publicationId}`, JSON.stringify([...comments, newCommentText]));
        setCommentText("");
    };
    
    
    return (
        <div className={`${styles.container} ${fontSize === 'small' ? 'smallFont' : fontSize === 'medium' ? 'mediumFont' : 'largeFont'}`}>
            <ToastContainer />
            <img src={profile_picture} alt="foto de perfil do usuário" title="Foto de perfil" className={styles.profile_picture}/>  
                
            <div className={styles.content}>
                <div className={styles.information}>
                    <h1>{userId != userData?.id ? userName: userData?.name}</h1>
                    
                    <p className={styles.p}>
                        <ReadMore text={text} maxLength={200} />
                    </p>
                    {image && 
                        (
                            <img src={`${image}`} alt="foto postada pelo usuário" className={styles.photo}/>
                        )
                    }
                </div>

                <div className={styles.interation}>
                    <button 
                        className={`${styles.like} ${darkTheme ? styles['likeDark'] : ''} ${likes > 0 ? styles['likeClicked'] : ''}`}

                        onClick={handleLikeClick}
                        aria-label={likes > 0 ? 'Descurtir' : 'Curtir'}
                    >
                        <img src={darkTheme ? (likes > 0 ? like_clickedDark : like_darkTheme) : (likes > 0 ? like_clicked : like)} alt="botão de curtida" title={likes > 0 ? 'Descurtir' : 'Curtir'}/>
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
                        <Comment key={index} nomeUsuario={userId != userData?.id ? userData?.name : userName} texto={comment} />
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