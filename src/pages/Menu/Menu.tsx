import styles from "./Menu.module.scss";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { EnvelopeSimple, LockSimple } from "phosphor-react";

import { MenuComponent } from "../../components/Menu";

export function Menu() {
    return(
        <div className={styles.container}>
            <MenuComponent />
        </div>
    );
}