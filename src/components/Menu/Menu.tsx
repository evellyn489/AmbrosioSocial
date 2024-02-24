import React from "react";
import styles from "./Menu.module.scss";
import whiteLogo from "../../assets/logos/white.png";
import user from "../../assets/menu/white/user.png";
import search from "../../assets/menu/white/search.png";
import notification from "../../assets/menu/white/notification.png";
import publish from "../../assets/menu/white/publish.png";
import config from "../../assets/menu/white/config.png";
import home_screen from "../../assets/menu/white/home_screen.png";

interface MenuProps {
    isHome: boolean;
    isPerfil: boolean;
}

export function Menu({ isHome, isPerfil }: MenuProps) {
    const handlePublishClick = () => {
        const fileInput = document.getElementById("fileInput");
        fileInput?.click();
    };

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

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img
                    src={whiteLogo}
                    alt="Logo da rede social Ambrosio Social que contém as siglas A e S e um retângulo arredondado em volta das letras, tudo em branco"
                    className={styles.logo}
                    title="AmbrosioSocial"
                />
            </div>
            <div className={styles.icons}>
                {isPerfil ? (
                    <a href="/explorar">
                        <img
                            src={home_screen}
                            alt="ícone de tela inicial representado por uma casa branca"
                            title="Página Inicial"
                            className={styles.home_screen}
                        />
                    </a>
                ) : (
                    <a href="/perfil">
                        <img
                            src={user}
                            alt="ícone branco de usuário como pessoa"
                            className={styles.user}
                            title="Visualizar seu perfil"
                        />
                    </a>
                )}
                <a href="">
                    <img
                        src={search}
                        alt="ícone de busca representado por uma lupa branca"
                        className={styles.search}
                        title="Buscar perfil"
                    />
                </a>

                <a href="">
                    <img
                        src={notification}
                        alt="ícone de notificação representado por um sino branco"
                        title="Notificações"
                    />
                </a>

                <button
                    className={styles.submitImage}
                    onClick={handlePublishClick}
                >
                    <img
                        src={publish}
                        alt="ícone branco de publicação representado por uma seta para cima tocando uma barra"
                        title="Publicar"
                    />
                </button>

                {isHome ? (
                    <a href="/explorar">
                        <img
                            src={home_screen}
                            alt="ícone de tela inicial representado por uma casa branca"
                            title="Página Inicial"
                            className={styles.home_screen}
                        />
                    </a>
                ) : (
                    <a href="/configuracoes">
                        <img
                            src={config}
                            alt="ícone de configuração representado por uma engrenagem"
                            title="Configurações"
                        />
                    </a>
                )}
            </div>

            <input
                type="file"
                style={{ display: "none" }}
                id="fileInput"
                onChange={handleFileChange}
                accept="image/*"
            />
        </header>
    );
}
