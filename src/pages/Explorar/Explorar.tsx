import { useState } from "react";
import styles from "./Explorar.module.scss";
import { Menu } from "../../components/Menu";
import { Publication } from "../../components/Publication";
import { CommentPublication } from "../../components/CommentPublication";
import { useTheme } from "../../contexts/ThemeProvider"; 

export function Explorar() {
    const [numPublications, setNumPublications] = useState(2); 
    const [openPublication, setOpenPublication] = useState(false);
    const { darkTheme } = useTheme(); 

    const handleMorePublication = () => {
        setNumPublications(prevNumPublications => prevNumPublications + 2); 
    };

    return (
        <div className={styles.container} style={{ background: darkTheme ? "black" : "white", color: darkTheme ? "white" : "black" }}>
            <Menu isHome={false} isPerfil={false} openPublication={openPublication} setOpenPublication={setOpenPublication}/>
            <div className={styles.content}>
                <div className={styles.publicationsContainer}>
                    {
                        openPublication && (
                            <CommentPublication />
                        )
                    }

                    <Publication text="O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
                    De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se também os processos de planejamento,construção e recepção do texto.O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
                    De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se também os processos de planejamento,construção e recepção do texto.O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
                    De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se também os processos de planejamento,construção e recepção do texto.O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
                    De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se também os processos de planejamento,construção e recepção do texto.O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
                    De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se também os processos de planejamento,construção e recepção do texto.O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
                    De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se também os processos de planejamento,construção e recepção do texto."/>
                    <Publication text="Como consequência dessas reflexões, pode-se concluir que o texto é uma atividade comunicativa "/>
                    <Publication text="Como consequência dessas reflexões, pode-se concluir que o texto é uma atividade comunicativa na qual operam estratégias e procedimentos próprios da mente humana e que ele existe, de fato, na interação social. O texto é posto em ação no momento da interação.
                    Isso significa dizer que, toda construção, verbal ou não verbal, que se constitui como um ato comunicativo é um texto. O sentido do texto se completa no momento da interação, por meio das estratégias de criação do autor e interpretação do leitor.

                    Esse modo de olhar considera os sujeitos envolvidos na interação como socialmente atuantes, ou seja, sujeitos que conscientemente utilizam textos para alcançar objetivos práticos, sejam eles a transmissão de uma mensagem pessoal, desabafo ou expectativa, sejam ações burocráticas que só podem ser realizadas mediante textos.

                    Além disso, esse conceito de texto abrange todas as comunicações da vida humana, afinal, todas elas cumprem uma função na vida pessoal e/ou social das pessoas."/>

                    <Publication text="Como consequência dessas reflexões, pode-se concluir que o texto é uma atividade comunicativa na qual operam estratégias e procedimentos próprios da mente humana e que ele existe, de fato, na interação social. O texto é posto em ação no momento da interação.
                    Isso significa dizer que, toda construção, verbal ou não verbal, que se constitui como um ato comunicativo é um texto. O sentido do texto se completa no momento da interação, por meio das estratégias de criação do autor e interpretação do leitor.

                    Esse modo de olhar considera os sujeitos envolvidos na interação como socialmente atuantes, ou seja, sujeitos que conscientemente utilizam textos para alcançar objetivos práticos, sejam eles a transmissão de uma mensagem pessoal, desabafo ou expectativa, sejam ações burocráticas que só podem ser realizadas mediante textos.

                    Além disso, esse conceito de texto abrange todas as comunicações da vida humana, afinal, todas elas cumprem uma função na vida pessoal e/ou social das pessoas."/>
                    
                </div>
                <footer className={styles.footer}>
                    <p>
                        <span onClick={handleMorePublication}>More...</span>
                    </p>
                </footer>
            </div>
        </div>
    );
}
