import React, {useState} from 'react';
import styles from "./EditarDados.module.scss";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import profile_picture from "../../assets/publications/profile_picture.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


import { Menu } from "../../components/Menu";

const editarDadosSchema = z.object({
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

type EditarDadosFormData = z.infer<typeof editarDadosSchema>;

export function EditarDados(){

    const { register, handleSubmit, formState: { errors } } = useForm<EditarDadosFormData>({
        resolver: zodResolver(editarDadosSchema)
    })

    function editarDados() {
        console.log("Dados modificados")
    }

    const handlePublishClick = () => {
        const fileInput = document.getElementById('fileInput');
        fileInput?.click(); 
    }
    
  
    return (

        <div>
           <Menu isHome={true} isPerfil={false}/>

           <div className={styles.container}>
                <button className={styles.submitImage} onClick={handlePublishClick}><img src={profile_picture} alt="foto de perfil do usuário" title="Atualizar foto de perfil"/></button>

                <form onSubmit = {handleSubmit(editarDados)}>
                    
                        <div className={styles.inputs}>
                            <Input type="text" placeholder="Nome" id="user" label="Modificar nome" error="errorNome" register={register}/>
                            {errors.user && <span id="errorNome">{errors.user.message}</span>}
                            <Input type="text" placeholder="Email" id="email2" label="Modificar email" error="errorEmail" register={register}/>
                            {errors.email2 && <span id="errorEmail">{errors.email2.message}</span>}
                            <Input type="password" placeholder="Senha" id="password2" label="Modificar senha" error="errorSenha" register={register}/>
                            {errors.password2 && <span id="errorSenha">{errors.password2.message}</span>}
                        </div>
                        <Button name="SALVAR" label = "Botão de salvar" click={()=>0}/>
                </form>
           </div>
        </div>
    )
}