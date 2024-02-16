import React, { useState, ChangeEvent } from "react"; 
import styles from "./Configuracoes.module.scss";
import { Menu } from "../../components/Menu";
import { useTheme } from "../../contexts/ThemeProvider"; 

export function Configuracoes() {
    const { darkTheme, toggleTheme } = useTheme(); 

    const [contaVisivel, setContaVisivel] = useState(true);
    const [opcoesVisiveis, setOpcoesVisiveis] = useState(false);

    const toggleVisibilidadeConta = () => {
        setContaVisivel(!contaVisivel);
    };

    const toggleOpcoesVisiveis = () => {
        setOpcoesVisiveis(!opcoesVisiveis);
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
                <button className={styles.transitionButton}>ALTERAR TAMANHO DA LETRA</button>

                <button className={styles.transitionButton} onClick={toggleTheme}>ALTERAR TEMA DO SISTEMA</button> 
                <button className={styles.transitionButton} onClick={toggleOpcoesVisiveis}>ALTERAR VISIBILIDADE DA CONTA</button>
                {opcoesVisiveis && (
                    <div >
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
                    </div>
                )}

                <button className={styles.transitionButton} onClick={handleLogout}>SAIR DA CONTA</button>
                
            </div>
        </div>
    );
}
