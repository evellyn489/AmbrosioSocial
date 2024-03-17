import { useState } from "react";
import styles from "./CommentPublication.module.scss";

import { api } from "../../services/axios";

interface PublicationProps {
    content: string;
    image?: string;
    userId: String | null;
}

interface CommentProps {
    setOpenPublication: (value: boolean) => void;
}

export function CommentPublication({ setOpenPublication }: CommentProps) {
    const [commentPublication, setCommentPublication] = useState("");
    const [imageLink, setImageLink] = useState("");

    const createPublication = async (data: PublicationProps) => {
        try {
            const response = await api.post('/publication', data);

            if (response.status == 200) {
                setOpenPublication(false);
                alert('Publicação criada')
            }

        } catch(error) {
            console.error(error)
        }
    }

    const handlePublication = () => {
        const content = commentPublication;
        const image = imageLink;
        const userId = localStorage.getItem('id');

        const combinedData = {
            content,
            image,
            userId
        }

        createPublication(combinedData);
    }

    return (
        <div className={styles.container}>
            <textarea 
                value={commentPublication}  
                onChange={(event) => setCommentPublication(event.target.value)}  
                placeholder="Digite algo..."
                className={styles.textareaPublication}
                aria-label="Caixa de texto para digitar algo na publicação"
            />

            <input
                type="text"
                placeholder="Link da imagem"
                id="inputLink"
                aria-label="Adicionar imagem"
                className={styles.link}
                onChange={(event) => setImageLink(event.target.value)}
            />

            <button type="button" aria-label="Publicar" onClick={handlePublication}>Publicar</button>
        </div>
    );
}