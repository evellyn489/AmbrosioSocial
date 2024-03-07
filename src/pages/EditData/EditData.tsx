import styles from "./EditData.module.scss";
import { Menu } from "../../components/Menu";
import profile_picture from "../../assets/publications/profile_picture.png";
import { useState } from "react";
import { DadosInput } from "../../components/DadosInput";
import { useTheme } from "../../contexts/ThemeProvider"; 


export function EditData() {
    const [isHoverImage, setIsHoverImage] = useState(false);
    const { darkTheme } = useTheme(); 

    const currentName = "Nome sobrenome";
    const currentEmail = "email123@gmail.com";
    const currentPassword = "Password@123";

    function editData() {
        console.log("Dado modificado");
    }

    const handlePublishClick = () => {
        const fileInput = document.getElementById('fileInput');
        fileInput?.click();
    }
    
    return (
        <div>
            <Menu isHome={true} isPerfil={false}/>
            
            <div className={styles.container} style={{ background: darkTheme ? "black" : "white", color: darkTheme ? "white" : "black" }}>
                <button 
                        className={styles.submitImage} 
                        onClick={handlePublishClick}
                        onMouseEnter={() => setIsHoverImage(true)}
                        onMouseLeave={() => setIsHoverImage(false)}
                    >
                        <img src={profile_picture} alt="foto de perfil do usuário" title="Atualizar foto de perfil"/>
                        {
                            isHoverImage && (
                                <span className={styles.photoAtualization}>Atualizar foto de perfil</span>
                            )
                        }
                </button>

                <DadosInput onSubmit={editData} defaultValues={{ user: currentName, email2: currentEmail, password2: currentPassword } } buttonName="SALVAR"/>
            </div>
        </div>
    );
}