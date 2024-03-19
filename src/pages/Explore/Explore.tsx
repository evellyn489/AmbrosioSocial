import { useEffect, useState } from "react";
import styles from "./Explore.module.scss";
import { Menu } from "../../components/Menu";
import { Publication } from "../../components/Publication";
import { CommentPublication } from "../../components/CommentPublication";
import { useTheme } from "../../contexts/ThemeProvider/ThemeProvider"; 
import { api } from "../../services/axios";


interface User {
    id: number;
    name: string;
}

interface PublicationsProps {
    id: string;
    content: string;
    image?: string;
    userId: string;
    userName: string;
    user: User;
}
export function Explore() {
    const [numPublications, setNumPublications] = useState(2); 
    const [openPublication, setOpenPublication] = useState(false);
    const [publications, setPublications] = useState<PublicationsProps[]>([]);
    const { darkTheme } = useTheme(); 

    const handleMorePublication = () => {
        setNumPublications(prevNumPublications => prevNumPublications + 2); 
    };

    useEffect(() => {
        const fetchFollowingPosts = async () => {
            try {
                const response = await api.get('/follow/explore/posts');
                setPublications(response.data);

            } catch (error) {
                console.error('Erro ao obter postagens dos usuários seguidos:', error);
            }
        };

        fetchFollowingPosts();
    }, []);
    console.log(publications)

    return (
        <div className={styles.container}>
            <Menu isHome={false} isPerfil={false} openPublication={openPublication} setOpenPublication={setOpenPublication} />
            <div className={styles.content}>

                <div className={styles.publicationsContainer}>
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
                                    publicationId={publication.id}
                                    image={publication.image}
                                    userId={publication.userId}
                                    userName={publication.user.name}
                                />
                            ))
                        ) : (
                            <p style={{ color: darkTheme ? "white" : "black", lineHeight: "60vh"}}>Não há publicações</p>
                        )
                    }

                    
                </div>
                <footer className={styles.footer} style={{ background: darkTheme ? "#121212" : "white", color: darkTheme ? "white" : "black" }}>
                    <p>
                        <span onClick={handleMorePublication}>More...</span>
                    </p>
                </footer>
            </div>
        </div>
    );
}
