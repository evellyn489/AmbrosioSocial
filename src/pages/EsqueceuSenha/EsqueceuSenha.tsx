import styles from "./EsqueceuSenha.module.scss";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";

const esqueceuSenhaSchema = z.object({
    password3: z.string().min(8, "A senha deve ter no mínimo 8 caracteres").transform(value => value.trim()).refine(value => {
        const regex = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g
        return regex.test(value);
    }, {
        message: "A senha deve conter no mínimo 1 letra maiúscula, número e símbolo."
    })
})

type EsqueceuSenhaFormData = z.infer<typeof esqueceuSenhaSchema>;


export function EsqueceuSenha() {
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
                    <Input type="password" placeholder="Nova senha" id="password3" register={register}/>
                </form>
            </main>
        </div>
    );
}