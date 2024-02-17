import styles from "./CadastroInicial.module.scss";

import logo from "../../assets/logos/white.png"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";


const cadastroInicialSchema = z.object({
    user: z.string().transform(value => value.trim()).refine(value => {
        const regex = /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
        return regex.test(value)

    },{
        message: "Nome inválido"
    }).refine(value => value !== "",{
        message: "Insira um nome válido"
    }),
    email2: z.string().email("Insira um email válido").transform(value => value.trim()).refine(value => {
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
        return regex.test(value);
    },{
        message: "Email inválido"
    }),
    password2: z.string().min(8, "A senha deve ter no mínimo 8 caracteres").transform(value => value.trim()).refine(value => {
        const regex = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g
        return regex.test(value);
    }, {
        message: "A senha deve conter no mínimo 1 letra maiúscula, número e símbolo."
    })
}) 

type CadastroInicialFormData = z.infer<typeof cadastroInicialSchema>;

export function CadastroInicial() {
    const { register, handleSubmit, formState: { errors } } = useForm<CadastroInicialFormData>({
        resolver: zodResolver(cadastroInicialSchema)
    })

    function cadastroInicial() {
        console.log("Cadastro feito.")
    }

    return (
        <div className={styles.container}>
            <aside>
                <img src={logo} alt="Logo do Ambrosio social da cor branca com o símbolo AS dentro de um quadrado com bordas brancas e no fundo tem um gradiente com roxo e azul." />

                <div className={styles.texts}>
                    <strong>Seja bem-vindo ao AmbrosioSocial!</strong>
                    <p>Acesse sua conta agora mesmo!</p>
                </div>

                <Button name="ENTRAR"/>
            </aside>

            <main>
                <div className={styles.titles}>
                    <h1>Crie sua conta</h1>
                    <p>Não tem uma conta? Crie uma agora:</p>
                </div>

                <form onSubmit={handleSubmit(cadastroInicial)}>
                    <div className={styles.inputs}>
                        <Input type="text" placeholder="Nome" id="user" label="Adicionar o seu nome" register={register}/>
                        {errors.user && <span>{errors.user.message}</span>}
                        <Input type="email" placeholder="Email" id="email2" label="Adicionar o email" register={register}/>
                        {errors.email2 && <span>{errors.email2.message}</span>}
                        <Input type="password" placeholder="Senha" id="password2" label="Adicionar a senha" register={register}/>
                        {errors.password2 && <span>{errors.password2.message}</span>}
                    </div>

                    <Button name="AVANÇAR" />
                </form>
            </main>
        </div>
    );
}