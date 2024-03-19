import { useState } from "react";
import styles from "./Search.module.scss";

import { Input } from "../Input";
import { UserProfile } from "../UserProfile/UserProfile";
import { Button } from "../Button";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SearchProps {
    id: string;
    name: string;
}

interface SearchUserProps {
    setClickSearch: (value: boolean) => void
}

export function Search({ setClickSearch }: SearchUserProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<SearchProps[]>([]);
    
    const navigate = useNavigate();

    const handleUserProfile = async (userId: string) => {
        try {
            const userProfile = await api.get(`/user/${userId}`);
            
            setClickSearch(false);
            navigate(`/profile/${userId}`, { state: userProfile.data })

        } catch (error) {
            toast.error("Erro ao buscar o usuário pesquisado. Verifique se o termo pesquisado foi inserido corretamente.");
        }
    }

    const handleSearch = async () => {
        try {
            const response = await api.get(`/user/search?searchTerm=${searchTerm}`);
            setSearchResults(response.data)

        } catch(error) {
            toast.error("Erro ao pesquisar. Verifique se o termo pesquisado foi inserido corretamente.");
        }
    }

    return (
        <div className={styles.container}>
            <ToastContainer />

            <div className={styles.input}>
                <Input 
                    type="text" 
                    id="users" 
                    onchange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Pesquisar" 
                    aria-label="Pesquisar"
                    label="Pesquisar usuários" 
                    error="search" 
                />

                <Button name="Pesquisar" click={handleSearch} label="Pesquisar"/>
            </div>

            <div className={styles.results}>
                <div className={styles.userProfile}>
                    {
                        searchResults.map(result => (
                            <UserProfile
                                key={result.id}
                                name={result.name}
                                onclick = {() => handleUserProfile(result.id)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}