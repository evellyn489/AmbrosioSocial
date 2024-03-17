import styles from "./UserProfile.module.scss";

import photo from '../../assets/publications/profile_picture.png'

interface UserProfileInterface {
    name: string;
    onclick: () => void;
}

export function UserProfile({ name, onclick }: UserProfileInterface) {
    return (
        <div className={styles.container} onClick={onclick}>
            <img src={photo} alt="Imagem de perfil do usuário" />
            <p>{name}</p>
        </div>
    );
}