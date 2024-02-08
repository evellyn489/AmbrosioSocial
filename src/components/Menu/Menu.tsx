import styles from "./Menu.module.scss";
import whiteLogo from "../../assets/logos/white.png";
import user from "../../assets/menu/white/user.png";
import search from "../../assets/menu/white/search.png";
import notification from "../../assets/menu/white/notification.png";
import publish from "../../assets/menu/white/publish.png";
import config from "../../assets/menu/white/config.png";

export function MenuComponent() {
    return (
        <header className={styles.header}>
            <div id="icons" className={styles.icons}>
                <img src={whiteLogo} alt="Logo da rede social Ambrosio Social que contém as siglas A e S e um retângulo arredondado em volta das letras, tudo em branco" className={styles.logo} title="AmbrosioSocial" />
                <a href=""><img src={user} alt="ícone branco de usuário como pessoa" className={styles.user} title="Visualizar seu perfil"/></a>
                <a href=""><img src={search} alt="ícone de busca representado por uma lupa branca" className={styles.search} title="Buscar perfil"/></a>
                <a href=""><img src={notification} alt="ícone de notificação representado por um sino branco" title="Notificações"/></a>
                <a href=""><img src={publish} alt="ícone branco de publicação representado por uma seta para cima tocando uma barra" title="Publicar"/></a>
                <a href=""><img src={config} alt="ícone de configuração representado por uma engrenagem" title="Configurações"/></a>
            </div>
        </header>
    );
}