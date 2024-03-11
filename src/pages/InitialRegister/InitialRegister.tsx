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

export function InitialRegister() {
  const navigate = useNavigate();

  const onSubmit = (data: DadosFormData) => {
    try {
      navigate('/register', { state: data });

    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Erro de validação do Zod:", error.errors);
        alert('Houve um erro de validação. Por favor, verifique os dados e tente novamente.');
      } else {
        console.error("Erro ao analisar os dados:", error);
        alert('Houve um erro ao processar os dados. Por favor, tente novamente.');
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
        <Button name="ENTRAR" label="Botão para fazer login" />
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