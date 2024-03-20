import { useContext, useEffect, useState } from "react";

import styles from "./Profile.module.scss";

import profile from "../../assets/publications/profile_picture.png";
import { FaCheck } from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";

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
    image?: string;
    userId: string;
    userName: string;
}

interface UserProps {
    name: string;
}

export function Profile() {
    const [following, setFollowing] = useState(false);
    const [openPublication, setOpenPublication] = useState(false);
    const [publications, setPublications] = useState<PublicationProps[]>([]);
    const [followersCount, setFollowersCount] = useState(0);
    const [followingCount, setFollowingCount] = useState(0);
    const [user, setUser] = useState<UserProps | null>(null);

    const { darkTheme } = useTheme(); 
    const { fontSize } = useFontSize();
    const { userId } = useParams();

    const { userData } = useContext(UserContext)
    
    const navigate = useNavigate();

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

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await api.get(`/user/${userId}`);
            setUser(response.data);

          } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
          }
        };
    
        fetchUserData();
      }, [userId]);


    const followUser = async (id: string, followingId: string) => {
        try {
           const response = await api.post(`/follow/users/${id}/follow`, { followingId });
           return response.data;
        } catch (error) {
           console.error('Erro ao seguir usuário:', error);
           throw error;
        }
    };

    const unfollowUser = async (id: string, followingId: string) => {
        try {
           const response = await api.delete(`/follow/users/${id}/unfollow/${followingId}`);
           return response.data;
        } catch (error) {
           console.error('Erro ao parar de seguir usuário:', error);
           throw error;
        }
    };

    const getFollowersUsers = async (id: string) => {
        try {
           const response = await api.get(`/follow/users/${id}/followers`);
           return response.data;
        } catch (error) {
           console.error('Erro ao buscar seguidores do usuário:', error);
           throw new Error("Erro ao buscar seguidores do usuário");
        }
    };

    const getFollowingUsers = async (id: string) => {
        try {
           const response = await api.get(`/follow/users/${id}/following`);
           return response.data;

        } catch (error) {
           console.error('Erro ao buscar usuários seguidos:', error);
           throw error;
        }
    };

    const fetchFollowData = async () => {
        try {
            if (userId) {
                const followersResponse = await getFollowersUsers(userId);
                setFollowersCount(followersResponse.length);
                
                const followingResponse = await getFollowingUsers(userId);
                setFollowingCount(followingResponse.length);
            }
        } catch (error) {
          console.error('Erro ao buscar dados de seguidores e seguindo:', error);
        }
     };

    useEffect(() => {
        fetchFollowData();
        const isFollowing = localStorage.getItem('isFollowing');

        if (isFollowing) {
            setFollowing(JSON.parse(isFollowing));
        }
    }, [userId, userData]);
    
    const handleClickFollowing = async (followingId: string) => {
        if (userData?.id) {
            if (following) {
                await unfollowUser(userData.id, followingId);
            } else {
                await followUser(userData.id, followingId);
            }
        }

        setFollowing(!following);
    
        localStorage.setItem('isFollowing', JSON.stringify(!following));

        fetchFollowData();
    };

    return (
        <div className={styles.container}>
            
            <Menu isHome={false} isPerfil={true} openPublication={openPublication} setOpenPublication={setOpenPublication}/>

            <div className={`${styles.asideMain} ${fontSize === 'small' ? 'smallFont' : fontSize === 'medium' ? 'mediumFont' : 'largeFont'}`}>
            
                <aside style = {{background: darkTheme ? "#000" : "linear-gradient(to bottom, #9431D1, #6788CD)"}}>
                    <div className={styles.foto}>
                        <img src={profile} alt="Foto de perfil do usuário" />
                    </div>

                    <strong>{user?.name}</strong>

                    {
                        userId != userData?.id && (
                            
                        <Button
                        name={`${following ? "Seguindo" : "Seguir"}`}
                        click={() => {
                            if (userId) {
                                handleClickFollowing(userId);
                            }
                        }}
                        icon={following && <FaCheck />}
                        label="Botão de seguir o usuário"
                        useFontSizeClasses 
                    />
                        )
                    }
    
                    <div className={styles.data}>
                        <p>{followersCount} seguidores</p>
                        <p>{followingCount} seguindo</p>
                    </div>

                    {
                        localStorage.getItem('id') == userId && (
                            <Button name="Editar dados" label="Botão de editar os dados do usuário" click={() => navigate("/editdata")}/>
                        )
                    }
                </aside>
                
                <main className={`${styles.main} ${fontSize === 'small' ? styles.smallFont : fontSize === 'medium' ? styles.mediumFont : styles.largeFont}`}>
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
                                userId={publication.userId}
                                userName={user?.name}
                                publicationId={publication.id}
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