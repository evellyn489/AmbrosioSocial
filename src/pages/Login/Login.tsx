import styles from "./Login.module.scss";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { EnvelopeSimple, LockSimple } from "phosphor-react";

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
//16

export function Login() {
    return(
        <div className={styles.container}>
            <Logo />

            <main className="datas">
                <form action="">
                    <input type="email" placeholder="Email"></input>
                    <EnvelopeSimple size={16}/>
                    <input type="password" placeholder="Senha"/>
                    <LockSimple size={16}/>

                    <Button name="ENTRAR"/> 
                </form>

                <div>
                    <a href="#">Esqueci minha senha</a> 
                    <p>Não tem uma conta? <a href="">Crie uma conta</a></p>
                </div>          
            </main>
        </div>
    );
}