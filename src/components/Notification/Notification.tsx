import styles from "./Notification.module.scss";

import { FcLike, FcComments } from "react-icons/fc";
import { FaCheck } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

import profile_picture from "../../assets/publications/profile_picture.png";
import { useState } from "react";

interface NotificationProps {
    name: string;
    like?: boolean;
    comment?: boolean;
    follow?: boolean;
}

export function Notification(props: NotificationProps) {
    const [confirm, setConfirm] = useState(false);

    const handleClickConfirm = () => {
        setConfirm(!confirm);
    }

    return (
        <div className={styles.container}>
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
                                    <p> <span>{props.name}</span> começou a seguir você</p>
                                ):
                                (
                                    <>
                                        <p>{props.name}</p>

                                        <div className={styles.buttons}>
                                            <button 
                                                className={styles.confirm}
                                                onClick={handleClickConfirm}
                                            >
                                                <FaCheck size={20} />
                                            </button>
                                            <button className={styles.delete}>
                                                <FaRegCircleXmark size={20}/>
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