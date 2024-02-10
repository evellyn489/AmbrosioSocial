import React, { useState } from 'react';
import styles from "./Publication.module.scss";
import profile_picture from "../../assets/publications/profile_picture.png";
import rectangle_photo from "../../assets/publications/rectangle_photo.png"
import like from "../../assets/interaction/like.png"
import dislike from "../../assets/interaction/dislike.png"
import comment from "../../assets/interaction/comment.png"

export function Publication() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [commentVisible, setCommentVisible] = useState(false);
    const [commentText, setCommentText] = useState('');

    const toggleComentVisibility = () => {
        setCommentVisible(!commentVisible); 
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentText(event.target.value); 
    };


    const handleLikeClick = () => {
        setLikes(likes + 1);
    };

    const handleDislikeClick = () => {
        setDislikes(dislikes + 1);
    };

    const handleCommentClick = () => {
        setComments(comments + 1);
        setCommentText("")
    };

    return (
        <div className={styles.container}>

            <div className={styles.id}>
                <img src={profile_picture} alt="foto de perfil do usuário" title="Foto de perfil" className={styles.profile_picture}/>
                <h1>Nome do usuário</h1>
            </div>

            <div className={styles.information}>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum aliquet volutpat habitasse, montes porttitor netus erat eget vitae varius penatibus posuere.</p>
                <img src={rectangle_photo} alt="foto postada pelo usuário" title="" className={styles.photo}/>
            </div>

            <div className={styles.interation}>

               <div className={styles.iconContainer}>  
                    <div className={styles.like}>
                        <img src={like} alt="botão de curtida" onClick={handleLikeClick} title='Curti'/>
                        <span>{likes}</span>
                    </div>

                    <div className={styles.dislike}>
                        <img src={dislike} alt="botão de não curtida" onClick={handleDislikeClick} title='Não curti'/>
                        <span>{dislikes}</span>
                    </div>
                    
                    <div className={styles.comment}>
                        <img src={comment} alt="botão de comentar" onClick={toggleComentVisibility} title='Comentar'/>
                        <span>{comments}</span>
                    </div>
            
                </div>

                <div className={`${styles.commentSpace} ${commentVisible ? styles.visible : ''}`}>
                        <textarea
                            value={commentText}
                            onChange={handleCommentChange}
                            placeholder="Digite seu comentário..."
                            className={styles.commentInput}
                        />
                        <button onClick={(handleCommentClick)}>Enviar</button>
                </div>
                </div>
            </div>
    );
}

/*<div className={styles.container}>
            <div className={styles.publication}>
                <img src={profile_picture} alt="foto de perfil do usuário" className={styles.foto_perfil}/>
                <h1>Nome do usuário</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum aliquet volutpat habitasse, montes porttitor netus erat eget vitae varius penatibus posuere.</p>
                <img src={rectangle_photo} alt="foto postada pelo usuário" className={styles.foto}/>
            </div>

            <div className={styles.interation}>

               <div className={styles.iconContainer}>  
                   <img src={like} alt="botão de curtida" onClick={handleLikeClick} title='Curti'/>
                   <span>{likes}</span>

                    <img src={dislike} alt="botão de não curtida" onClick={handleDislikeClick} title='Não curti'/>
                    <span>{dislikes}</span>

                    <img src={comment} alt="botão de comentar" onClick={toggleComentVisibility} title='Comentar'/>
                    <span>{comments}</span>
                </div>

                <div className={`${styles.commentSpace} ${commentVisible ? styles.visible : ''}`}>
                        <textarea
                            value={commentText}
                            onChange={handleCommentChange}
                            placeholder="Digite seu comentário..."
                            className={styles.commentInput}
                        />
                        <button onClick={(handleCommentClick)}>Enviar</button>
                </div>
                </div>
            </div>*/