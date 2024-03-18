import { useState, ChangeEvent, useEffect } from "react"; 
import styles from "./Settings.module.scss";
import { Menu } from "../../components/Menu";
import { useTheme } from "../../contexts/ThemeProvider/ThemeProvider"; 
import { useFontSize } from "../../contexts/FontSizeContext/FontSizeContext";
import { useNavigate } from "react-router-dom";

export function Settings() {
    const { darkTheme, toggleTheme } = useTheme(); 
    const { fontSize, setFontSizeToSmall, setFontSizeToMedium, setFontSizeToLarge } = useFontSize();

    const fontSizeClass = fontSize === 'small' ? styles.smallFont : fontSize === 'medium' ? styles.mediumFont : styles.largeFont;


    const navigate = useNavigate();

    const [opcoesVisiveisTamanho, setOpcoesVisiveisTamanho] = useState(false);
    const [opcoesVisiveisVisibilidade, setOpcoesVisiveisVisibilidade] = useState(false);

    // Função para definir o tamanho da fonte com base no valor armazenado no localStorage
    const setFontSizeFromLocalStorage = () => {
        const storedFontSize = localStorage.getItem('fontSize');
        if (storedFontSize) {
            switch (storedFontSize) {
                case 'small':
                    setFontSizeToSmall();
                    break;
                case 'medium':
                    setFontSizeToMedium();
                    break;
                case 'large':
                    setFontSizeToLarge();
                    break;
            }
        } else {
            setFontSizeToMedium(); // Definição padrão para "Média"
        }
    };

    // Efeito para recuperar a preferência de tamanho de fonte ao montar o componente
    useEffect(() => {
        setFontSizeFromLocalStorage();
    }, []);

    // Funções modificadas para armazenar a preferência de tamanho de fonte no localStorage
    const handleFontSizeChange = (size: 'small' | 'medium' | 'large') => {
        localStorage.setItem('fontSize', size);
        switch (size) {
            case 'small':
                setFontSizeToSmall();
                break;
            case 'medium':
                setFontSizeToMedium();
                break;
            case 'large':
                setFontSizeToLarge();
                break;
        }
    };

    // Restante do código...
    const toggleOpcoesVisiveisTamanho = () => {
        setOpcoesVisiveisTamanho(!opcoesVisiveisTamanho);
        
        if (opcoesVisiveisVisibilidade) {
            setOpcoesVisiveisVisibilidade(false);
        }
    };

    const toggleOpcoesVisiveisVisibilidade = () => {
        setOpcoesVisiveisVisibilidade(!opcoesVisiveisVisibilidade);
        
        if (opcoesVisiveisTamanho) {
            setOpcoesVisiveisTamanho(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('id');
        localStorage.removeItem('isFollowing');

        navigate("/login");
    };

    const publicAccount = () => {
        //Funcionalidades da conta pública
        console.log("Conta pública selecionada");
    }

    const privateAccount = () => {
        //Funcionalidades da conta privada
        console.log("Conta privada selecionada");
    }

    const handleVisibilidadeChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === "Pública") {
            publicAccount();
        } else if (event.target.value === "Privada") {
            privateAccount();
        }
    }

    return (
        <div>
            <Menu isHome={true} isPerfil={false}/>
                <div className={`${styles.container} ${fontSize === 'small' ? 'smallFont' : fontSize === 'medium' ? 'mediumFont' : 'largeFont'}`}>

                    <button className={`${styles.transitionButton} ${fontSizeClass}`} onClick={toggleOpcoesVisiveisTamanho} aria-label="Botão de alterar tamanho da letra">ALTERAR TAMANHO DA LETRA</button>
                    {opcoesVisiveisTamanho && (
                    <div className={styles.options}>
                        <div>
                            <label htmlFor="Pequena">Pequena</label>
                            <input 
                                type="radio" 
                                name="Tamanho" 
                                value="Pequena" 
                                aria-label="Pequena"
                                checked={fontSize === 'small'}
                                onChange={() => handleFontSizeChange('small')}
                            />
                        </div>
                        <div>
                            <label htmlFor="Média">Média</label>
                            <input 
                                type="radio" 
                                name="Tamanho" 
                                value="Média" 
                                aria-label="Média"
                                checked={fontSize === 'medium'}
                                onChange={() => handleFontSizeChange('medium')}
                            />
                        </div>
                        <div>
                            <label htmlFor="Grande">Grande</label>
                            <input 
                                type="radio" 
                                name="Tamanho" 
                                value="Grande" 
                                aria-label="Grande"
                                checked={fontSize === 'large'}
                                onChange={() => handleFontSizeChange('large')}
                            />
                        </div>
                    </div>
                )}
                <button className={`${styles.transitionButton} ${fontSizeClass}`} onClick={toggleTheme} aria-label="Botão de alterar tema do sistema">ALTERAR TEMA DO SISTEMA</button> 
                <button className={`${styles.transitionButton} ${fontSizeClass}`} onClick={toggleOpcoesVisiveisVisibilidade} aria-label="Botão de alterar visibilidade da conta">ALTERAR VISIBILIDADE DA CONTA</button>
                {opcoesVisiveisVisibilidade && (
                    <div className={styles.options}>
                        <div>
                            <label htmlFor="Pública">Pública</label>
                            <input 
                                type="radio" 
                                name="Visibilidade" 
                                value="Pública" 
                                aria-label="Pública"
                                onChange={handleVisibilidadeChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="Privada">Privada</label>
                            <input 
                                type="radio" 
                                name="Visibilidade" 
                                value="Privada" 
                                aria-label="Privada"
                                onChange={handleVisibilidadeChange}
                            />
                        </div>
                    </div>
                )}

                <button className={`${styles.transitionButton} ${fontSizeClass}`} onClick={handleLogout} aria-label="Botão de sair da conta">SAIR DA CONTA</button>
                
            </div>
        </div>
    );
}