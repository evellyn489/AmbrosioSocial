import styles from "./Comment.module.scss";
import profile_picture from "../../assets/publications/profile_picture.png";
import { ReadMore } from '../ReadMore';

interface ComentarioProps {
    nomeUsuario: string;
    texto: string;
}

export function Comment({ nomeUsuario, texto }: ComentarioProps) {
    return (
        <div className={styles.containerUser}>
            <img src={profile_picture} alt="Foto do usuário" className={styles.photoUserComment} />

            <div className={styles.commentDetails}>
                <p className={styles.nameUserComment}>{nomeUsuario}</p>

                <p className={styles.contentComment}>
                    <ReadMore text={texto} maxLength={100} />
                </p>
            </div>
        </div>
    );
}