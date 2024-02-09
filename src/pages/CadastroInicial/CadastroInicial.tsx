import styles from "./CadastroInicial.module.scss";

import logo from "../../assets/logos/white.png"
import { Button } from "../../components/Button";

export function CadastroInicial() {
    return (
        <div className={styles.container}>
            <aside>
                <img src={logo} alt="Logo do Ambrosio social da cor branca com o símbolo AS dentro de um quadrado com bordas brancas e no fundo tem um gradiente com roxo e azul." />

                <strong>Seja bem-vindo ao Ambrosio Social!</strong>

                <p>Acesse sua conta agora mesmo!</p>

                <Button name="ENTRAR" type={3}/>
            </aside>

            <main>
                <div className={styles.titles}>
                    <h1>Crie sua conta</h1>
                    <p>Não tem uma conta? Crie uma agora:</p>
                </div>

                <form action="">
                    
                </form>

            </main>
        </div>
    );
}