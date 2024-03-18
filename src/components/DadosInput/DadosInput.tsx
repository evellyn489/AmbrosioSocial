import { useForm } from "react-hook-form";
import styles from "./DadosInput.module.scss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { Button } from "../Button"

const dadosSchema = z.object({
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
        const hasNumber = /[0-9]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasUpperCase = /[A-Z]/.test(value);
        const hasSymbol = /[$*&@#]/.test(value);
        return hasNumber && hasLowerCase && hasUpperCase && hasSymbol && value.length >= 8;
    }, {
        message: "A senha deve conter no mínimo 1 letra maiúscula, número e símbolo."
    })
    
}) 

type DadosFormData = z.infer<typeof dadosSchema>;

interface DadosInputProps {
    onSubmit: (data: DadosFormData) => void;
    defaultValues?: Partial<DadosFormData>;
    errorColor?: string;
    textcolor?: string;
    buttonName: string;
}

export function DadosInput({ onSubmit, defaultValues, errorColor = 'red', buttonName }: DadosInputProps) {
    const { handleSubmit, register, formState: { errors }, getValues } = useForm<DadosFormData>({
        resolver: zodResolver(dadosSchema),
        defaultValues
    });

    const onSubmitHandler = () => {
        const data: DadosFormData = {
            user: getValues("user"),
            email2: getValues("email2"),
            password2: getValues("password2")
        };
        try {
            onSubmit(data);
        } catch (validationError) {
            console.error('Erro de validação:', validationError);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className={styles.inputs}>
                <Input type="text" placeholder="Nome - Ex: Ana Silva" id="user" label="Modificar nome" error="errorNome" register={register} textColor="black"/>
                {errors.user && <span className={`${styles.errorMessage} ${styles[errorColor]}`} id="errorNome">{errors.user.message}</span>}

                <Input type="text" placeholder="Email" id="email2" label="Modificar email" error="errorEmail" register={register} textColor="black"/>
                {errors.email2 && <span className={`${styles.errorMessage} ${styles[errorColor]}`} id="errorEmail">{errors.email2.message}</span>}

                <Input type="password" placeholder="Senha" id="password2" label="Modificar senha" error="errorSenha" register={register} textColor="black"/>
                {errors.password2 && <span className={`${styles.errorMessage} ${styles[errorColor]}`} id="errorSenha">{errors.password2.message}</span>}
            </div>

            <Button name={buttonName} label="Botão de prosseguir" />
        </form>
    );
}