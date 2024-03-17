import { useContext, useEffect, useState } from "react";

import styles from "./Profile.module.scss";

import profile from "../../assets/publications/profile_picture.png";
import { FaCheck } from "react-icons/fa";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { Button } from "../../components/Button";
import { Publication } from "../../components/Publication";
import { Menu } from "../../components/Menu";
import { CommentPublication } from "../../components/CommentPublication";
import { useTheme } from "../../contexts/ThemeProvider/ThemeProvider";
import { UserContext } from "../../contexts/UserProvider/UserProvider";
import { api } from "../../services/axios";

interface PublicationProps {
    id: string;
    content: string;
    image: string;
}

export function Profile() {
    const [following, setFollowing] = useState(false);
    const [openPublication, setOpenPublication] = useState(false);
    const [publications, setPublications] = useState<PublicationProps[]>([]);
    const { darkTheme } = useTheme(); 

    const { userId } = useParams();


    useEffect(() => {
        const fetchPublications = async () => {
            try {
              const response = await api.get(`/user/${userId}/publications`);
              setPublications(response.data);
              
            } catch (error) {
              console.error('Error fetching publications:', error);
            }
        };

        fetchPublications();
    }, [publications])

    function handleClickFollowing() {
        setFollowing(!following);
    }

    const { userData } = useContext(UserContext)
    
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={styles.container}>
            
            <Menu isHome={false} isPerfil={true} openPublication={openPublication} setOpenPublication={setOpenPublication}/>

            <div className={styles.asideMain}>
                <aside style = {{background: darkTheme ? "#000" : "linear-gradient(to bottom, #9431D1, #6788CD)"}}>
                    <div className={styles.foto}>
                        <img src={profile} alt="Foto de perfil do usuário" />
                    </div>

                    <strong>{userId != localStorage.getItem('id') ? location.state.name : userData?.name}</strong>

                    <Button  name={`${following ? "Seguindo" : "Seguir"}`} click={handleClickFollowing} icon={following && <FaCheck />} label="Botão de seguir o usuário"/>

                    <div className={styles.data}>
                        <p>x seguidores</p>
                        <p>y seguindo</p>
                    </div>

                    {
                        localStorage.getItem('id') == userId && (
                            <Button name="Editar dados" label="Botão de editar os dados do usuário" click={() => navigate("/editdata")}/>
                        )
                    }
                </aside>

                <main>
                    {
                        openPublication && (
                            <CommentPublication setOpenPublication={setOpenPublication} />
                        )
                    }
                    
                    {
                        publications.length != 0 ? (
                        publications.map(publication => (
                            <Publication 
                                key={publication.id}
                                text={publication.content}
                                image={publication.image}
                            />
                        ))
                        ) : (
                            <p style={{color: darkTheme ? "#fff" : "#000", lineHeight: "70vh"}}>Nenhuma publicação. Faça sua primeira publicação</p>
                        )
                    }
                </main>
            </div>
        </div>
    );
}