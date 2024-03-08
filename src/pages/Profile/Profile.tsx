import { useState } from "react";

import styles from "./Profile.module.scss";

import profile from "../../assets/publications/profile_picture.png";
import { FaCheck } from "react-icons/fa";

import { Button } from "../../components/Button";
import { Publication } from "../../components/Publication";
import { Menu } from "../../components/Menu";
import { CommentPublication } from "../../components/CommentPublication";
import { useTheme } from "../../contexts/ThemeProvider/ThemeProvider";


export function Profile() {
    const [following, setFollowing] = useState(false);
    const [openPublication, setOpenPublication] = useState(false);
    const { darkTheme } = useTheme(); 

    function handleClickFollowing() {
        setFollowing(!following);
    }

    return (
        <div className={styles.container}>
            
            <Menu isHome={false} isPerfil={true} openPublication={openPublication} setOpenPublication={setOpenPublication}/>

            <div className={styles.asideMain}>
                <aside style = {{background: darkTheme ? "linear-gradient(to bottom, rgba(148, 49, 209, 0.7), rgba(103, 136, 205, 0.8))" : "linear-gradient(to bottom, #9431D1, #6788CD)"}}>
                    <div className={styles.foto}>
                        <img src={profile} alt="" />
                    </div>

                    <strong>Nome do usuário</strong>

                    <Button  name={`${following ? "Seguindo" : "Seguir"}`} click={handleClickFollowing} icon={following && <FaCheck />} label="Botão de seguir o usuário"/>

                    <div className={styles.data}>
                        <p>x seguidores</p>
                        <p>y seguindo</p>
                    </div>

                    <Button name="Editar dados" label="Botão de editar os dados do usuário" click={() => 0}/>
                </aside>

                <main>
                    {
                        openPublication && (
                            <CommentPublication />
                        )
                    }
                    <Publication text="O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
                    De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se também os processos de planejamento,construção e recepção do texto." />

                    <Publication text="O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
                    De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se também os processos de planejamento,construção e recepção do texto." />
                </main>
            </div>
        </div>
    );
}