import React, { useState } from 'react';
import styles from "./Publication.module.scss";
import profile_picture from "../../assets/publications/profile_picture.png";
import rectangle_photo from "../../assets/publications/rectangle_photo.png"
import like from "../../assets/interaction/like.png"
import dislike from "../../assets/interaction/dislike.png"
import comment from "../../assets/interaction/comment.png"
import like_clicked from "../../assets/interaction/like_clicked.png"
import dislike_clicked from "../../assets/interaction/dislike_clicked.png"
import { Comment } from "../Comment"

export function Publication() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [comments, setComments] = useState<string[]>([]);
    const [commentVisible, setCommentVisible] = useState(false);
    const [commentText, setCommentText] = useState<string>('');
    const [likeClicked, setLikeClicked] = useState(false);
    const [dislikeClicked, setDislikeClicked] = useState(false);
    const [likeIcon, setLikeIcon] = useState(like);
    const [dislikeIcon, setDislikeIcon] = useState(dislike);
    const [likeNumColor, setLikeNumColor] = useState<string>(styles.defaultNumColor);
    const [dislikeNumColor, setDislikeNumColor] = useState<string>(styles.defaultNumColor);

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
            setLikeIcon(like_clicked);
            setLikeNumColor(styles.likeNumColor);
            if (dislikeClicked) {
                setDislikes(dislikes - 1);
                setDislikeClicked(false);
                setDislikeIcon(dislike);
                setDislikeNumColor(styles.defaultNumColor);
            }
        } else {
            setLikes(likes - 1);
            setLikeClicked(false);
            setLikeIcon(like);
            setLikeNumColor(styles.defaultNumColor);
        }
        setDislikeClicked(false);

        
        const likeButton = document.getElementById("likeButton");
        if (likeButton) {
            likeButton.classList.add(styles.clicked);
            setTimeout(() => {
                likeButton.classList.remove(styles.clicked);
            }, 200);
        }
    };

    const handleDislikeClick = () => {
        if (!dislikeClicked) {
            setDislikes(dislikes + 1);
            setDislikeClicked(true);
            setDislikeIcon(dislike_clicked);
            setDislikeNumColor(styles.dislikeNumColor);
            if (likeClicked) {
                setLikes(likes - 1);
                setLikeClicked(false);
                setLikeIcon(like);
                setLikeNumColor(styles.defaultNumColor);
            }
        } else {
            setDislikes(dislikes - 1);
            setDislikeClicked(false);
            setDislikeIcon(dislike);
            setDislikeNumColor(styles.defaultNumColor);
        }
        setLikeClicked(false);

        const dislikeButton = document.getElementById("dislikeButton");
        if (dislikeButton) {
            dislikeButton.classList.add(styles.clicked);
            setTimeout(() => {
                dislikeButton.classList.remove(styles.clicked);
            }, 200);
        }
    };

    const handleCommentClick = () => {
        setComments([...comments, commentText]);
        setCommentText(""); 
    };


    return (
        <div className={styles.container}>

            <div className={styles.id}>
                <img src={profile_picture} alt="foto de perfil do usuário" title="Foto de perfil" className={styles.profile_picture}/>  
            </div>

            <div className={styles.information}>
                <h1>Nome do usuário</h1>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum aliquet volutpat habitasse, montes porttitor netus erat eget vitae varius penatibus posuere.</p>
                <img src={rectangle_photo} alt="foto postada pelo usuário" title="" className={styles.photo}/>
            </div>

            <div className={styles.interation}>

                <div className={styles.iconContainer}>  
                    <button 
                        className={`${styles.like} ${likeClicked ? styles.clicked : ''}`}
                        onClick={handleLikeClick}
                        aria-label={likeClicked ? 'Descurtir' : 'Curtir'}
                        ><img src={likeIcon} alt="botão de curtida" title={likeClicked ? 'Descurtir' : 'Curtir'}/>
                        <span className={likeNumColor}>{likes}</span>
                    </button>

                    <button 
                        className={`${styles.dislike} ${dislikeClicked ? styles.clicked : ''}`} 
                        onClick={handleDislikeClick}
                        aria-label='Não curti'>
                        <img src={dislikeIcon} alt="Não gostei" />
                        <span className={dislikeNumColor}>{dislikes}</span>
                    </button>

                    <button 
                        className={styles.commentButton} 
                        onClick={toggleCommentVisibility}
                        aria-label='Comentar'>
                        <img src={comment} alt="Comentar" />
                        <span>{comments.length}</span>
                    </button>
                </div>

                <div className={`${styles.commentSpace} ${commentVisible ? styles.visible : ''}`}>
                    {comments.map((comment, index) => (
                        <Comment key={index} nomeUsuario="Nome do usuário" texto={comment} />
                    ))}

                    <textarea
                        value={commentText}
                        onChange={handleCommentChange}
                        placeholder="Digite seu comentário..."
                        className={styles.commentInput}
                    />
                    <button onClick={handleCommentClick} className={styles.button}>Enviar</button>
                </div>
            </div>
        </div>
    );
}