import { useState } from "react";
import styles from "./CommentPublication.module.scss";

import { api } from "../../services/axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spin } from "../Spin";

import { useFontSize } from "../../contexts/FontSizeContext/FontSizeContext";

interface PublicationProps {
    content: string;
    image?: string;
    userId: String | null;
}

interface CommentProps {
    setOpenPublication: (value: boolean) => void;
}

export function CommentPublication({ setOpenPublication }: CommentProps) {
    const { fontSize } = useFontSize();
    const [commentPublication, setCommentPublication] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [loading, setLoading] = useState(false);

    const createPublication = async (data: PublicationProps) => {
        setLoading(true);

        try {
            const response = await api.post('/publication', data);

            if (response.status == 200) {
                toast.success("Publicação criada com sucesso.");
                setLoading(false);

                setTimeout(() => {
                    setOpenPublication(false);
                }, 2000);
            }

        } catch(error) {
            toast.error("Erro ao criar publicação.");
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
            <ToastContainer />
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

        <button 
            type="button" 
            disabled={loading} 
            aria-label="Publicar" 
            onClick={handlePublication}
            style={{ fontSize: fontSize === 'small' ? '0.8rem' : fontSize === 'medium' ? '1rem' : '1.2rem' }}
        >
            {loading ? <Spin /> : "Publicar"}
        </button>
        </div>
    );
}