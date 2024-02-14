import styles from "./Configuracoes.module.scss";
import { Menu } from "../../components/Menu";

export function Configuracoes() {
  return (
    <div>
        <Menu />
            <div className={styles.container}>
                <button>ALTERAR TAMANHO DA LETRA</button>
                <button>ALTERAR TEMA DO SISTEMA</button>
                <button>ALTERAR VISIBILIDADE DA CONTA</button>
                <button>SAIR DA CONTA</button>
            </div>
    </div>
  );
}
