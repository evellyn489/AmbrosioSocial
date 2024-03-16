import { useState } from "react";
import styles from "./Register.module.scss";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";

import { useLocation, useNavigate } from "react-router-dom";
import { FaSpinner } from 'react-icons/fa';

import { api } from "../../services/axios";

const minAno = 2011;

const createUserFormSchema = z.object({
    dia: z.string()
    .refine((dia) => {
        const numberDia = parseInt(dia);
        return numberDia >= 1 && numberDia <= 31;
    }, {
        message: "Insira valores entre 1 e 31"
    }),

    mes: z.string()
    .refine((mes) => {
        const numberMes = parseInt(mes);
        return numberMes >= 1 && numberMes <= 12;
    }, {
        message: "Insira valores entre 1 e 12"
    }),

    ano: z.string()
    .refine((ano) => {
        const numberAno = parseInt(ano);

        return numberAno >= 1970 && numberAno <= 2024
    }, {
        message: "Insira o ano de 1970 até 2024."
    })
    .refine((ano) => {
        const numberAno = parseInt(ano);

        return numberAno <= minAno
    }, {
        message: "Idade mínima de 13 anos."
    }),

    genero: z.string().nullable()
    .refine(value => value !== null, {
        message: "Insira uma opção de gênero."
      }),

    visibilidade: z.string().nullable()
    .refine(value => value !== null, {
        message: "Insira uma opção de visibilidade."
      })
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

interface FormData {
    name: string;
    email: string;
    password: string;
    birthDate: string;
    gender: string;
    visibility: string;
}

interface FormDataFromLocation {
    user: string;
    email2: string;
    password2: string;
}

export function Register() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErroMessage] = useState("");

    const { register, handleSubmit, getValues, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    });

    const navigate = useNavigate();

    const location = useLocation();

    const createUser = async (data: FormData) => {
        setLoading(true);
        setErroMessage("");

        try {
            const response = await api.post('/user', data);

            if(response.status === 200) {
                alert("Conta criada com sucesso!");
                setLoading(false);
                navigate("/login");
            }
        } catch (error) {
            console.error(error)
            setErroMessage("Erro ao criar o usuário. Verifique se todos os campos foram preenchidos corretamente.");
            setLoading(false);
        }
    }

    const onSubmit = () => {
        const locationStateData: FormDataFromLocation = location.state;
    
        const formValues = getValues();

        const name = locationStateData.user;
        const email = locationStateData.email2;
        const password = locationStateData.password2;
        const birthDate = `${formValues.dia}/${formValues.mes}/${formValues.ano}`;
        const visibility = formValues.visibilidade;
        const gender = formValues.genero;
        
        const combinedData = {
            name,
            email,
            password,
            birthDate,
            gender: gender || "Feminino",
            visibility: visibility || "Público"
        };
        
        createUser(combinedData);
      }
    
    return (
        <div className={styles.container}>
            <Logo />

            <main className={styles.titleForm}>
                <div className={styles.titleH}>
                    <h1>Finalize o cadastro</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.dataNascimento}>
                        <label htmlFor="dataNascimento" className={styles.title}>Data de Nascimento</label>
                        <div className={styles.optionsD}>
                            <div>
                                <input 
                                    type="number" 
                                    aria-label="Dia do seu nascimento" 
                                    aria-describedby="errorDia"
                                    {...register("dia")} 
                                    placeholder="Dia" 
                                    aria-required
                                />
                                {errors.dia && <span id="errorDia">{errors.dia.message}</span>}
                            </div>
                            
                            <div>
                                <input 
                                    type="number" 
                                    aria-label="Mês do seu nascimento" 
                                    aria-describedby="errorMes"
                                    {...register("mes")} 
                                    placeholder="Mês"
                                     aria-required
                                />
                                {errors.mes && <span id="errorMes">{errors.mes.message}</span>}
                            </div>
                           
                           <div>
                                <input 
                                    type="number" 
                                    aria-label="Ano do seu nascimento"
                                    aria-describedby="errorAno" 
                                    {...register("ano")} 
                                    placeholder="Ano" 
                                    aria-required
                                />
                                {errors.ano && <span id="errorAno">{errors.ano.message}</span>}
                           </div>
                        </div>
                    </div>
                    
                    <div className={styles.genero}>
                        <label htmlFor="genero" className={styles.title}>Gênero</label>
                        <div className={styles.optionsG} aria-describedby="errorGenero">
                            <div>
                                <label htmlFor="genero">Feminino</label>
                                <input 
                                    type="radio" 
                                    aria-label="Gênero Feminino" 
                                    {...register("genero")} 
                                    value="feminino" 
                                    aria-required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="genero">Masculino</label>
                                <input 
                                    type="radio" 
                                    aria-label="Gênero Masculino" 
                                    {...register("genero")} 
                                    value="masculino" 
                                    aria-required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="genero">Não binário</label>
                                <input 
                                    type="radio" 
                                    aria-label="Gênero Não binário" 
                                    {...register("genero")} 
                                    value="não binário" 
                                    aria-required
                                />
                            </div>

                            <div>
                                <label htmlFor="genero" className={styles.preferencia}>Prefiro não dizer</label>
                                <input 
                                    type="radio" 
                                    aria-label="Prefiro não dizer" 
                                    {...register("genero")} 
                                    value="prefiro não dizer" 
                                    aria-required
                                />
                            </div>
                        </div>
                        {errors.genero && <span id="errorGenero">{errors.genero.message}</span>}
                    </div>

                    <div className={styles.visibilidade}>
                        <label htmlFor="visibilidade" className={styles.title}>Visibilidade da conta</label>

                        <div className={styles.optionsV} aria-describedby="errorVisibilidade">
                            <div>
                                <label htmlFor="visibilidade">Pública</label>
                                <input 
                                    type="radio" 
                                    aria-label="Visibilidade pública" 
                                    {...register("visibilidade")} 
                                    value="publica" 
                                    aria-required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="visibilidade">Privada</label>
                                <input 
                                    type="radio" 
                                    aria-label="Visibilidade privada" 
                                    {...register("visibilidade")} 
                                    value="privada" 
                                    aria-required
                                />
                            </div>
                        </div>
                        {errors.visibilidade && <span id="errorVisibilidade">{errors.visibilidade.message}</span>}
                    </div>

                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

                    <Button 
                        name={loading ? <FaSpinner className={styles.spin} />  : "CADASTRAR"}
                        label="Botão para enviar os dados de cadastro"
                        disabled={loading} 
                        
                    />
                </form>
            </main>
        </div>
    );
}