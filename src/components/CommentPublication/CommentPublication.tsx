import React, { useState } from "react";
import styles from "./CommentPublication.module.scss";

export function CommentPublication() {
    const [commentPublication, setCommentPublication] = useState<string>("");
    const [commentPublicationError, setCommentPublicationError] = useState<string | null>(null);
    const [comments, setComments] = useState<string[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const maxSize = 300 * 1024; 

        if (file && file.size <= maxSize) {
            console.log("Arquivo selecionado:", file);
            // Realiza ação com o arquivo
        } else {
            alert("Por favor, selecione uma imagem menor ou igual a 300 KB.");
            // Limpa o input de arquivo
            event.target.value = "";
        }
    };

    const handleCommentClick = () => {
        if (commentPublication.trim() === '') {
            setCommentPublication('Por favor, digite um comentário antes de enviar.');
            return;
        }

        setCommentPublicationError(null);

        setComments([...comments, commentPublication]);
        setCommentPublication(""); 
        
    };


    return (
        <div className={styles.container}>
            <textarea 
                value={commentPublication}  
                onChange={(event) => setCommentPublication(event.target.value)}  
                placeholder="Digite algo..."
                className={styles.textareaPublication}
                aria-label="Caixa de texto para digitar algo na publicação"
            />
            {commentPublicationError && <span className={styles.error}>{commentPublicationError}</span>}

            <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                accept="image/*"
                aria-label="Adicionar imagem"
            />

            <button type="button" aria-label="Publicar" onClick={handleCommentClick}>Publicar</button>
        </div>
    );
}