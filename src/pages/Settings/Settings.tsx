import { useState, ChangeEvent } from "react"; 
import styles from "./Settings.module.scss";
import { Menu } from "../../components/Menu";
import { useTheme } from "../../contexts/ThemeProvider/ThemeProvider"; 
import { useNavigate } from "react-router-dom";

export function Settings() {
    const { darkTheme, toggleTheme } = useTheme(); 

    const navigate = useNavigate();

    const [opcoesVisiveisTamanho, setOpcoesVisiveisTamanho] = useState(false);
    const [opcoesVisiveisVisibilidade, setOpcoesVisiveisVisibilidade] = useState(false);

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

        navigate("/login");
    };

    const handleTamanhoChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("Tamanho selecionado:", event.target.value);
    }

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
        <div >
            <Menu isHome={true} isPerfil={false}/>
            <div className={styles.container}>
                <button className={styles.transitionButton} onClick={toggleOpcoesVisiveisTamanho} aria-label="Botão de alterar tamanho da letra">ALTERAR TAMANHO DA LETRA</button>
                {opcoesVisiveisTamanho && (
                    <div className={styles.options}>
                        <div>
                            <label htmlFor="Pequena">Pequena</label>
                            <input 
                                type="radio" 
                                name="Tamanho" 
                                value="Pequena" 
                                aria-label="Pequena"
                                onChange={handleTamanhoChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="Média">Média</label>
                            <input 
                                type="radio" 
                                name="Tamanho" 
                                value="Média" 
                                aria-label="Média"
                                onChange={handleTamanhoChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="Grande">Grande</label>
                            <input 
                                type="radio" 
                                name="Tamanho" 
                                value="Grande" 
                                aria-label="Grande"
                                onChange={handleTamanhoChange}
                            />
                        </div>
                    </div>
                )}

                <button className={styles.transitionButton} onClick={toggleTheme} aria-label="Botão de alterar tema do sistema">ALTERAR TEMA DO SISTEMA</button> 
                <button className={styles.transitionButton} onClick={toggleOpcoesVisiveisVisibilidade} aria-label="Botão de alterar visibilidade da conta">ALTERAR VISIBILIDADE DA CONTA</button>
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

                <button className={styles.transitionButton} onClick={handleLogout} aria-label="Botão de sair da conta">SAIR DA CONTA</button>
                
            </div>
        </div>
    );
}
