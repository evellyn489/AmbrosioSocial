import styles from "./InitialRegister.module.scss";
import logo from "../../assets/logos/white.png";
import { Button } from "../../components/Button";

import { DadosInput } from "../../components/DadosInput";
import { useNavigate } from "react-router-dom";

import { ZodError } from "zod";

interface DadosFormData {
  user: string;
  email2: string;
  password2: string;
}

interface InitialRegisterProps {
  setProcessCompleted: (value: boolean) => void;
}

export function InitialRegister({ setProcessCompleted }: InitialRegisterProps) {
  const navigate = useNavigate();

  const onSubmit = (data: DadosFormData) => {
    try {
      setProcessCompleted(true);
      navigate('/register', { state: data });

    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Erro de validação do Zod:", error.errors);
      } else {
        console.error("Erro ao analisar os dados:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <aside>
        <img src={logo} alt="Logo do Ambrosio social da cor branca com o símbolo AS dentro de um quadrado com bordas brancas e no fundo tem um gradiente com roxo e azul." />
        <div className={styles.texts}>
          <strong>Seja bem-vindo ao AmbrosioSocial!</strong>
          <p>Acesse sua conta agora mesmo!</p>
        </div>
        <Button name="ENTRAR" label="Botão para fazer login" click={() => navigate("/login")} />
      </aside>
      <main>
        <div className={styles.titles}>
          <h1>Crie sua conta</h1>
          <p>Não tem uma conta? Crie uma agora:</p>
        </div>
        <DadosInput onSubmit={onSubmit} buttonName="AVANÇAR" />
      </main>
    </div>
  );
}