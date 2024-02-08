import styles from "./Login.module.scss";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";

export function Login() {
    return(
        <div className={styles.container}>
            <Logo />

            <main className={styles.forms}>
                <form>
                    <div className={styles.inputs}>
                        <input type="email" placeholder="Email" id={styles.email}/>
                        <input type="password" placeholder="Senha" id={styles.password}/>
                    </div>

                    <div className={styles.buttonLink}>
                        <Button name="ENTRAR" type={true}/> 
                        <a href="#">Esqueci minha senha</a>
                    </div>
                </form>
                <p>Não tem uma conta? <a href="">Crie uma conta</a></p>
            </main>
        </div>
    );
}