import { useContext, useState } from "react";

import styles from "./Profile.module.scss";

import profile from "../../assets/publications/profile_picture.png";
import { FaCheck } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Publication } from "../../components/Publication";
import { Menu } from "../../components/Menu";
import { CommentPublication } from "../../components/CommentPublication";
import { useTheme } from "../../contexts/ThemeProvider/ThemeProvider";
import { UserContext } from "../../contexts/UserProvider/UserProvider";


export function Profile() {
    const [following, setFollowing] = useState(false);
    const [openPublication, setOpenPublication] = useState(false);
    const { darkTheme } = useTheme(); 

    function handleClickFollowing() {
        setFollowing(!following);
    }

    const navigate = useNavigate();
    const { userData } = useContext(UserContext)

    return (
        <div className={styles.container}>
            
            <Menu isHome={false} isPerfil={true} openPublication={openPublication} setOpenPublication={setOpenPublication}/>

            <div className={styles.asideMain}>
                <aside style = {{background: darkTheme ? "#000" : "linear-gradient(to bottom, #9431D1, #6788CD)"}}>
                    <div className={styles.foto}>
                        <img src={profile} alt="" />
                    </div>

                    <strong>{userData?.name}</strong>

                    <Button  name={`${following ? "Seguindo" : "Seguir"}`} click={handleClickFollowing} icon={following && <FaCheck />} label="Botão de seguir o usuário"/>

                    <div className={styles.data}>
                        <p>x seguidores</p>
                        <p>y seguindo</p>
                    </div>

                    <Button name="Editar dados" label="Botão de editar os dados do usuário" click={() => navigate("/editdata")}/>
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