import styles from "./Cadastro.module.scss";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";

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

export function Cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    });

    function createUser() {
        console.log("usuário adicionado")
    }

    return (
        <div className={styles.container}>
            <Logo />

            <main className={styles.titleForm}>
                <h1>Finalize o cadastro</h1>

                <form onSubmit={handleSubmit(createUser)}>
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
                                <label htmlFor="genero">Neutro</label>
                                <input 
                                    type="radio" 
                                    aria-label="Gênero neutro" 
                                    {...register("genero")} 
                                    value="neutro" 
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

                    <Button name="CADASTRAR" label="Botão para enviar os dados de cadastro"/>
                </form>
            </main>
        </div>
    );
}