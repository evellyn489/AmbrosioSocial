import styles from "./ForgotPassword.module.scss";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";

const esqueceuSenhaSchema = z.object({
    password3: z.string().min(8, "A senha deve ter no mínimo 8 caracteres").transform(value => value.trim()).refine(value => {
        const regex = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g
        return regex.test(value);
    }, {
        message: "A senha deve conter no mínimo 1 letra maiúscula, número e símbolo."
    })
})

type EsqueceuSenhaFormData = z.infer<typeof esqueceuSenhaSchema>;

export function ForgotPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm<EsqueceuSenhaFormData>({
        resolver: zodResolver(esqueceuSenhaSchema)
    })

    function esqueceuSenha() {
        console.log("Senha cadastrada.")
    }

    return (
        <div className={styles.container}>
            <Logo />

            <main>
                <h1>Digite sua nova senha</h1>

                <form onSubmit={handleSubmit(esqueceuSenha)}>
                    <div className={styles.inputData}>
                        <Input type="password" placeholder="Nova senha" label="Digitar nova senha" id="password3" register={register} error="passwordError"/>
                        {errors.password3 && <span id="passwordError">{errors.password3.message}</span>}
                    </div>

                    <Button name="ENVIAR" label="Botão de enviar nova senha" click={() => 0}/>
                </form>
            </main>
        </div>
    );
}