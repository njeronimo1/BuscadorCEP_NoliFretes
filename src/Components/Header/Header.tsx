import { ContainerHeader } from "./style.header";

import logoNoli from '../../assets/noli_roxo.jpg';
import { Link } from "react-router-dom";

export function Header(){
    return(
        <ContainerHeader>
            <Link to={'/'} style={{width: '59px', height: '59px'}}>
                <img src={logoNoli} alt="Logo" />
            </Link>
        </ContainerHeader>
    )
}