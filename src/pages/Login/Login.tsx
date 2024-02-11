import styles from "./Login.module.scss";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const loginSchema = z.object({
    email: z.string().email("Insira um email válido").transform(value => value.trim()).refine(value => {
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
        return regex.test(value);
    },{
        message: "Email inválido"
    }),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres").transform(value => value.trim())
})

type loginFormData = z.infer<typeof loginSchema>;

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<loginFormData>({
        resolver: zodResolver(loginSchema)
    })
    console.log(errors)
    function login() {
        console.log("Login feito.")
    }

    return(
        <div className={styles.container}>
            <Logo />

            <main className={styles.forms}>
                <form onSubmit={handleSubmit(login)}>
                    <div className={styles.inputs}>
                        <Input type="email" placeholder="Email" id="email" register={register}/>
                        {errors.email && <span>{errors.email.message}</span>}
                        <Input type="password" placeholder="Senha" id="password" register={register}/>
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>

                    <div className={styles.buttonLink}>
                        <Button name="ENTRAR"/> 
                        <a href="#">Esqueci minha senha</a>
                    </div>
                </form>
                <p>Não tem uma conta? <a href="">Crie uma conta</a></p>
            </main>
        </div>
    );
}