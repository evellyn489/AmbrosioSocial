import styles from "./Cadastro.module.scss";

import logo from "../../assets/logos/gradient.png";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const minAno = 2013;

const createUserFormSchema = z.object({
    dia: z.number().min(1, "Número inválido para dia").max(31, "Número inválido para dia"),
    mes: z.number().min(1, "Número inválido para mês").max(12, "Número inválido para mês"),
    ano: z.number().min(1970).min(2024).refine((ano) => {
        return ano >= minAno;
    }, {
        message: `A idade mínima para ter acesso a rede social é de ${minAno} anos.`
    }),

    genero: z.string().refine((value => ["feminino", "masculino", "neutro"].includes(value))),

    visibilidade: z.string().refine((visibilidade => ["publica", "privada"].includes(visibilidade)))
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
            <div>
                <img src={logo} alt="Logo da rede social Ambrosio Social que contém as siglas A e S e o nome da rede social logo em baixo com um gradiente roxo com azul claro." />
            </div>

            <div className={styles.titleForm}>
                <h1>Finalizando o cadastro</h1>

                <form onSubmit={handleSubmit(createUser)}>
                    <div className={styles.dataNascimento}>
                        <label htmlFor="dataNascimento">Data de Nascimento</label>
                        <div className={styles.optionsD}>
                            <div>
                                <input type="number" {...register("dia")}/>
                                {errors.dia && <span>{errors.dia.message}</span>}
                            </div>
                            
                            <div>
                                <input type="number" {...register("mes")} />
                                {errors.mes && <span>{errors.mes.message}</span>}
                            </div>
                           
                           <div>
                                <input type="number" {...register("ano")}/>
                                {errors.ano && <span>{errors.ano.message}</span>}
                           </div>
                        </div>
                    </div>
                    
                    <div className={styles.genero}>
                        <label htmlFor="">Gênero</label>
                        <div className={styles.optionsG}>
                            <div>
                                <label htmlFor="">Feminino</label>
                                <input type="radio" {...register("genero")} value="feminino"/>
                            </div>
                            
                            <div>
                                <label htmlFor="">Masculino</label>
                                <input type="radio" {...register("genero")} value="masculino"/>
                            </div>
                            
                            <div>
                                <label htmlFor="">Neutro</label>
                                <input type="radio" {...register("genero")} value="neutro"/>
                            </div>
                        </div>
                        {errors.genero && <span>{errors.genero.message}</span>}
                    </div>

                    <div className={styles.visibilidade}>
                        <label htmlFor="">Visibilidade da conta</label>

                        <div className={styles.optionsV}>
                            <div>
                                <label htmlFor="">Pública</label>
                                <input type="radio" {...register("visibilidade")} value="publica"/>
                            </div>
                            
                            <div>
                                <label htmlFor="">Privada</label>
                                <input type="radio" {...register("visibilidade")} value="privada"/>
                            </div>
                        </div>
                    </div>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}