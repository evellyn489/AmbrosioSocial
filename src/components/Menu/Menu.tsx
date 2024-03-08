import React, { useState, useEffect, useRef } from "react";
import styles from "./Menu.module.scss";
import whiteLogo from "../../assets/logos/white.png";
import user from "../../assets/menu/white/user.png";
import search from "../../assets/menu/white/search.png";
import notification from "../../assets/menu/white/notification.png";
import publish from "../../assets/menu/white/publish.png";
import config from "../../assets/menu/white/config.png";
import home_screen from "../../assets/menu/white/home_screen.png";
import { ModalNotification } from "../ModalNotification";
import { Search } from "../Search";
import { useTheme } from "../../contexts/ThemeProvider/ThemeProvider"; 

interface MenuProps {
    isHome: boolean;
    isPerfil: boolean;
    openPublication?: boolean;
    setOpenPublication?: (value: boolean) => void;
}

export function Menu({ isHome, isPerfil, openPublication, setOpenPublication }: MenuProps) {
    const { darkTheme } = useTheme(); 
    const [openModal, setOpenModal] = useState(false);
    const [clickSearch, setClickSearch] = useState(false);

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick= (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setOpenModal(false);
            }
        };

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);


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

    const handleClickModal = () => {
        setOpenModal(!openModal);
    }

    const handleClickPublication = () => {
        if (setOpenPublication){
            setOpenPublication(!openPublication);
        }
    }

    const handleClickSearch = () => {
        setClickSearch(!clickSearch);
    }

    return (
        <header className={styles.header} style={{background: darkTheme ? "linear-gradient(to bottom, #7439AB, #586CA8)" : "linear-gradient(to bottom, #9431D1, #6788CD)"}}> 
            {
                openModal && (
                    <ModalNotification ref={modalRef} />
                )
            }

            {
                clickSearch && (
                    <Search />
                )
            }
            
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
                    <a href="/explore" aria-label="Página Inicial">
                        <img
                            src={home_screen}
                            alt="ícone de tela inicial representado por uma casa branca"
                            title="Página Inicial"
                        />
                    </a>
                ) : (
                    <a href="/profile" aria-label="Acessar perfil">
                        <img
                            src={user}
                            alt="ícone branco de usuário como pessoa"
                            title="Visualizar seu perfil"
                        />
                    </a>
                )}
                <a href="#" onClick={(event) => {
                    event.preventDefault();
                    handleClickSearch();
                }} aria-label="Procurar usuários">
                    <img
                        src={search}
                        alt="ícone de busca representado por uma lupa branca"
                        title="Buscar perfil"
                    />
                </a>

                <a href="#" aria-label="Acessar notificações" onClick={(event) => {
                    event.preventDefault();
                    handleClickModal();
                }}>
                    <img
                        src={notification}
                        alt="ícone de notificação representado por um sino branco"
                        title="Notificações"
                    />
                </a>

                <button aria-label="Publicar"
                    className={styles.submitImage}
                    onClick={handleClickPublication}
                >
                    <img
                        src={publish}
                        alt="ícone branco de publicação representado por uma seta para cima tocando uma barra"
                        title="Publicar"
                    />
                </button>

                {isHome ? (
                    <a href="/explore" aria-label="Página Inicial">
                        <img
                            src={home_screen}
                            alt="ícone de tela inicial representado por uma casa branca"
                            title="Página Inicial"
                        />
                    </a>
                ) : (
                    <a href="/settings" aria-label="Configurações">
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