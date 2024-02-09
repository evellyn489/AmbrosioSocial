import styles from "./CadastroInicial.module.scss";

import logo from "../../assets/logos/white.png"

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function CadastroInicial() {
    return (
        <div className={styles.container}>
            <aside>
                <img src={logo} alt="Logo do Ambrosio social da cor branca com o símbolo AS dentro de um quadrado com bordas brancas e no fundo tem um gradiente com roxo e azul." />

                <div className={styles.texts}>
                    <strong>Seja bem-vindo ao Ambrosio Social!</strong>
                    <p>Acesse sua conta agora mesmo!</p>
                </div>

                <Button name="ENTRAR" type={3}/>
            </aside>

            <main>
                <div className={styles.titles}>
                    <h1>Crie sua conta</h1>
                    <p>Não tem uma conta? Crie uma agora:</p>
                </div>

                <form action="">
                    <div className={styles.inputs}>
                        <Input type="text" placeholder="Nome" id="user"/>
                        <Input type="email" placeholder="Email" id="email2"/>
                        <Input type="password" placeholder="Senha" id="password2"/>
                    </div>

                    <Button name="AVANÇAR" type={1}/>
                </form>
            </main>
        </div>
    );
}