import { useState } from "react";
import styles from "./Login.module.scss";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/axios";
import { useNavigate } from "react-router-dom";
import { Spin } from "../../components/Spin";

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

interface formData {
    email: string;
    password: string;
}

export function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, getValues, formState: { errors } } = useForm<loginFormData>({
        resolver: zodResolver(loginSchema)
    })

    const navigate = useNavigate();


    const makeLogin = async (data: formData) => {
        setLoading(true)
        setErrorMessage("");

        try {
            const response = await api.post('/auth/login', data)

            if (response.status == 200) {
                const { authToken, user } = response.data;
                localStorage.setItem('authToken', authToken);
                localStorage.setItem('id', user.id);

                alert('Usúrio logado!');
                setLoading(false);

                navigate('/explore', { state: user });
            }

        } catch(error) {
            console.error(error);
            setErrorMessage("Erro ao fazer login. Verifique se o email e senha foram inseridos corretamente.");
            setLoading(false);
        }
    }
    const onSubmit = () => {
        const formValues = getValues();

        const email = formValues.email;
        const password = formValues.password;

        const combinedData = {
            email,
            password
        }

        makeLogin(combinedData);
    }

    return(
        <div className={styles.container}>
            <Logo />

            <main className={styles.forms}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputs}>
                        <Input type="email" placeholder="Email" id="email" label="Adicionar email" error="errorEmail2" register={register}/>
                        {errors.email && <span id="errorEmail2">{errors.email.message}</span>}

                        <Input type="password" placeholder="Senha" id="password" label="Adicionar senha" error="errorSenha2" register={register}/>
                        {errors.password && <span id="errorSenha2">{errors.password.message}</span>}
                    </div>

                    {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}

                    <div className={styles.buttonLink}>
                        <Button 
                            name={loading ? <Spin/>: "ENTRAR"}
                            label="Botão para logar na rede social" 
                            disabled={loading}
                        /> 
                        <a href="/forgotpassword" aria-label="Link que direciona para a tela de esqueci minha senha">Esqueci minha senha</a>
                    </div>
                </form>
                <p>Não tem uma conta? <a href="/" aria-label="Linka que direciona para a tela de cadastro">Crie uma conta</a></p>
            </main>
        </div>
    );
}