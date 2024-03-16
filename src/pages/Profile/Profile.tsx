import { useContext, useEffect, useState } from "react";

import styles from "./Profile.module.scss";

import profile from "../../assets/publications/profile_picture.png";
import { FaCheck } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Publication } from "../../components/Publication";
import { Menu } from "../../components/Menu";
import { CommentPublication } from "../../components/CommentPublication";
import { useTheme } from "../../contexts/ThemeProvider/ThemeProvider";
import { useFontSize } from "../../contexts/FontSizeContext/FontSizeContext";
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
    const { fontSize } = useFontSize();


    useEffect(() => {
        const fetchPublications = async () => {
            try {
              const response = await api.get('/publication');
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

    const navigate = useNavigate();
    const { userData } = useContext(UserContext)

    return (
        <div className={styles.container}>
            
            <Menu isHome={false} isPerfil={true} openPublication={openPublication} setOpenPublication={setOpenPublication}/>

            <div className={`${styles.asideMain} ${fontSize === 'small' ? 'smallFont' : fontSize === 'medium' ? 'mediumFont' : 'largeFont'}`}>
            
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
                
                <main className={`${styles.main} ${fontSize === 'small' ? styles.smallFont : fontSize === 'medium' ? styles.mediumFont : styles.largeFont}`}>
                    {
                        openPublication && (
                            <CommentPublication setOpenPublication={setOpenPublication} />
                        )
                    }
                    
                    {
                        publications &&
                        publications.map(publication => (
                            <Publication 
                                key={publication.id}
                                text={publication.content}
                                image={publication.image}
                            />
                        ))
                    }
                </main>
            </div>
        </div>
    );
}