import styles from "./Notification.module.scss";

import { FcLike, FcComments } from "react-icons/fc";

import profile_picture from "../../assets/publications/profile_picture.png";
import { useState } from "react";
import { useFontSize } from "../../contexts/FontSizeContext/FontSizeContext";



interface NotificationProps {
    name: string;
    like?: boolean;
    comment?: boolean;
    follow?: boolean;
}

export function Notification(props: NotificationProps) {
    const { fontSize} = useFontSize();
    const [confirm, setConfirm] = useState(false);

    const handleClickConfirm = () => {
        setConfirm(!confirm);
    }

    return (
        <div className={`${styles.container} ${fontSize === 'small' ? 'smallFont' : fontSize === 'medium' ? 'mediumFont' : 'largeFont'}`}>
            {
                props.like && (
                    <>
                        <FcLike size={70} />

                        <div className={styles.content}>
                            <p><span>{props.name}</span> curtiu sua publicação</p>
                        </div>
                    </>
                )
            }

            {
                props.follow && (
                    <>
                        <img src={profile_picture} alt="Foto de perfil." />

                        <div className={styles.content}>
                            {
                                confirm ? (
                                    <p><span>{props.name}</span> começou a seguir você</p>
                                ):
                                (
                                    <>
                                        <p>{props.name}</p>

                                        <div className={styles.buttons}>
                                            <button 
                                                className={styles.confirm}
                                                onClick={handleClickConfirm}
                                                style={{ fontSize: fontSize === 'small' ? '0.8rem' : fontSize === 'medium' ? '1rem' : '1.2rem' }}
                                            >
                                                Confirmar
                                            </button>
                                            <button 
                                                className={styles.delete}
                                                style={{ fontSize: fontSize === 'small' ? '0.8rem' : fontSize === 'medium' ? '1rem' : '1.2rem' }}
                                            >
                                                Excluir
                                            </button>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </>
                )
            }

            {
                props.comment && (
                    <>
                        <FcComments size={70} />

                        <div className={styles.content}>
                            <p><span>{props.name}</span> comentou sua publicação</p>
                        </div>
                    </>
                )
            }
            
        </div>
    );
}