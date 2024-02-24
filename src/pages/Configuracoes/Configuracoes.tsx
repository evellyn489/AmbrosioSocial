import { useState, ChangeEvent } from "react"; 
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
                                aria-required
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
                                aria-required
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
                                aria-required
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
                                aria-required
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
