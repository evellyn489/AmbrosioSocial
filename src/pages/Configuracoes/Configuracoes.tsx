import React, { useState } from "react";
import styles from "./Configuracoes.module.scss";
import { Menu } from "../../components/Menu";

export function Configuracoes() {
    const [darkTheme, setDarkTheme] = useState(false);
    const [contaVisivel, setContaVisivel] = useState(true);
    const [opcoesVisiveis, setOpcoesVisiveis] = useState(false); // Estado para controlar a visibilidade das opções
  
    const handleThemeChange = () => {
        setDarkTheme(!darkTheme);
    };

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
    
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === "Pública") {
            publicAccount();
        } else if (event.target.value === "Privada") {
            privateAccount();
        }
    }

    return (
        <div style={{ background: darkTheme ? "black" : "white", color: darkTheme ? "white" : "black" }}>
            <Menu isHome={true}/>
            <div className={styles.container}>
                <button>ALTERAR TAMANHO DA LETRA</button>

                <button onClick={handleThemeChange}>ALTERAR TEMA DO SISTEMA</button>

                <button onClick={toggleOpcoesVisiveis}>ALTERAR VISIBILIDADE DA CONTA</button>
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

                <button onClick={handleLogout}>SAIR DA CONTA</button>
                
            </div>
        </div>
    );
}
