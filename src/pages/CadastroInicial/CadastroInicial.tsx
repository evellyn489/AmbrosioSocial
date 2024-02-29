import styles from "./CadastroInicial.module.scss";
import logo from "../../assets/logos/white.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/Button";
import { DadosInput } from "../../components/DadosInput";

// Definindo a interface DadosFormData
interface DadosFormData {
  user: string;
  email2: string;
  password2: string;
}

const initialValues: DadosFormData = {
  user: "",
  email2: "",
  password2: ""
};

export function CadastroInicial() {
  
  function cadastroInicial(data: DadosFormData) {
    console.log("Cadastro feito.", data);
  }

  return (
    <div className={styles.container}>
      <aside>
        <img src={logo} alt="Logo do Ambrosio social da cor branca com o símbolo AS dentro de um quadrado com bordas brancas e no fundo tem um gradiente com roxo e azul." />
        <div className={styles.texts}>
          <strong>Seja bem-vindo ao AmbrosioSocial!</strong>
          <p>Acesse sua conta agora mesmo!</p>
        </div>
        <Button name="ENTRAR" label="Botão para fazer login" click={() => 0}/>
      </aside>
      <main>
        <div className={styles.titles}>
          <h1>Crie sua conta</h1>
          <p>Não tem uma conta? Crie uma agora:</p>
        </div>
        <DadosInput onSubmit={cadastroInicial} defaultValues={initialValues} buttonName="AVANÇAR" />
      </main>
    </div>
  );
}
