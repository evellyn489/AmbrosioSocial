import React, { useState, ChangeEvent } from "react"; 
import styles from "./Configuracoes.module.scss";
import { Menu } from "../../components/Menu";
import { useTheme } from "../../contexts/ThemeProvider"; 

export function Configuracoes() {
    const { darkTheme, toggleTheme } = useTheme(); 

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
        const confirmLogout = window.confirm("Tem certeza que deseja sair?");
        if (confirmLogout) {
            //Redirecionar para a tela inicial
        }
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
        <div style={{ background: darkTheme ? "black" : "white", color: darkTheme ? "white" : "black" }}>
            <Menu isHome={true} isPerfil={false}/>
            <div className={styles.container}>
                <button className={styles.transitionButton} onClick={toggleOpcoesVisiveisTamanho}>ALTERAR TAMANHO DA LETRA</button>
                {opcoesVisiveisTamanho && (
                    <div className={styles.options}>
                        <div>
                            <label htmlFor="Pequena">Pequena</label>
                            <input 
                                type="radio" 
                                name="Tamanho" 
                                value="Pequena" 
                                onChange={handleTamanhoChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="Média">Média</label>
                            <input 
                                type="radio" 
                                name="Tamanho" 
                                value="Média" 
                                onChange={handleTamanhoChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="Grande">Grande</label>
                            <input 
                                type="radio" 
                                name="Tamanho" 
                                value="Grande" 
                                onChange={handleTamanhoChange}
                            />
                        </div>
                    </div>
                )}

                <button className={styles.transitionButton} onClick={toggleTheme}>ALTERAR TEMA DO SISTEMA</button> 
                <button className={styles.transitionButton} onClick={toggleOpcoesVisiveisVisibilidade}>ALTERAR VISIBILIDADE DA CONTA</button>
                {opcoesVisiveisVisibilidade && (
                    <div className={styles.options}>
                        <div>
                            <label htmlFor="Pública">Pública</label>
                            <input 
                                type="radio" 
                                name="Visibilidade" 
                                value="Pública" 
                                onChange={handleVisibilidadeChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="Privada">Privada</label>
                            <input 
                                type="radio" 
                                name="Visibilidade" 
                                value="Privada" 
                                onChange={handleVisibilidadeChange}
                            />
                        </div>
                    </div>
                )}

                <button className={styles.transitionButton} onClick={handleLogout}>SAIR DA CONTA</button>
                
            </div>
        </div>
    );
}
