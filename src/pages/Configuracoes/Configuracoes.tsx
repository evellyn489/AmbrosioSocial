import React, { useState, ChangeEvent } from "react"; 
import styles from "./Configuracoes.module.scss";
import { Menu } from "../../components/Menu";
import { useTheme } from "../../contexts/ThemeProvider"; 

export function Configuracoes() {
    const { darkTheme, toggleTheme } = useTheme(); 

    const [visibleSizeOptions, setVisibleSizeOptions] = useState(false);
    const [visibleOptionsVisibility, setVisibleOptionsVisibility] = useState(false);

    const toggleOpcoesVisiveisTamanho = () => {
        setVisibleSizeOptions(!visibleSizeOptions);
       
        if (visibleOptionsVisibility) {
            setVisibleOptionsVisibility(false);
        }
    };

    const toggleOpcoesVisiveisVisibilidade = () => {
        setVisibleOptionsVisibility(!visibleOptionsVisibility);

        if (visibleSizeOptions) {
            setVisibleSizeOptions(false);
        }
    };

    const handleLogout = () => {
        const confirmLogout = window.confirm("Tem certeza que deseja sair?");
        if (confirmLogout) {
            //Redirecionar para a tela inicial
        }
    };

    const publicAccount = () => {
        //Funcionalidades da conta pública
        console.log("Conta pública selecionada");
    }

    const privateAccount = () => {
        //Funcionalidades da conta privada
        console.log("Conta privada selecionada");
    }

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === "Pequena" || event.target.value === "Média" || event.target.value === "Grande") {
            // Funcionalidade para alterar o tamanho da fonte
        } else if (event.target.value === "Pública") {
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
                {visibleSizeOptions && (
                    <div className={styles.options}>
                        <div>
                            <label htmlFor="TamanhoLetra">Pequena</label>
                            <input 
                                type="radio" 
                                name="Tamanho" 
                                value="Pequena" 
                                onChange={handleRadioChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="TamanhoLetra">Média</label>
                            <input 
                                type="radio" 
                                name="Tamanho" 
                                value="Média" 
                                onChange={handleRadioChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="TamanhoLetra">Grande</label>
                            <input 
                                type="radio" 
                                name="Tamanho" 
                                value="Grande" 
                                onChange={handleRadioChange}
                            />
                        </div>
                    </div>
                )}

                <button className={styles.transitionButton} onClick={toggleTheme}>ALTERAR TEMA DO SISTEMA</button> 
                <button className={styles.transitionButton} onClick={toggleOpcoesVisiveisVisibilidade}>ALTERAR VISIBILIDADE DA CONTA</button>
                {visibleOptionsVisibility && (
                    <div className={styles.options}>
                        <div>
                            <label htmlFor="visibilidade">Pública</label>
                            <input 
                                type="radio" 
                                name="visibilidade" 
                                value="Pública" 
                                onChange={handleRadioChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="visibilidade">Privada</label>
                            <input 
                                type="radio" 
                                name="visibilidade" 
                                value="Privada" 
                                onChange={handleRadioChange}
                            />
                        </div>
                    </div>
                )}

                <button className={styles.transitionButton} onClick={handleLogout}>SAIR DA CONTA</button>
                
            </div>
        </div>
    );
}
