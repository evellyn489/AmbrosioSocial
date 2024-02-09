import styles from "./Publication.module.scss";
import profile_picture from "../../assets/publications/profile_picture.png";
import rectangle_photo from "../../assets/publications/rectangle_photo.png"
import like from "../../assets/interaction/like.png"
import dislike from "../../assets/interaction/dislike.png"
import comment from "../../assets/interaction/comment.png"

export function Publication() {
    return (
        <div className={styles.container}>
            <div id="publication" className={styles.publication}>
                <img src={profile_picture} alt="foto de perfil do usuário" className={styles.foto_perfil}/>
                <h1>Nome do usuário</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum aliquet volutpat habitasse, montes porttitor netus erat eget vitae varius penatibus posuere.</p>
                <img src={rectangle_photo} alt="foto postada pelo usuário" className={styles.foto}/>
            </div>

            <div id="interation" className={styles.interation}>
                <img src={like} alt="botão de curtida"/>
                <img src={dislike} alt="botão de não curti"/>
                <img src={comment} alt="botão de comentar"/>
            </div>
        </div>

    );
}
