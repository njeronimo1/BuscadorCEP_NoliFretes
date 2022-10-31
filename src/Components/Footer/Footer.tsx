import { ContainerFooter } from "./style.footer";

/*Import de imagens*/

import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';

export function Footer(){
    return(
        <ContainerFooter>
            <div className="container_footer">
                <div className="direitos_at">
                    <p>©NoliFretes</p>   
                </div>
                <div className="redes_sociais">
                    <p>SAC: (11) 4001-4008</p>
                    <div className="container_imgs">
                        <a target={"_blank"} href="https://www.facebook.com/nolifretesinteligentes">
                            <img src={facebook} alt="" />
                        </a>
                        
                        <a target={"_blank"} href="https://www.instagram.com/nolifretesinteligentes/">
                            <img src={instagram} alt="" />
                        </a>

                        <a target={"_blank"} href="https://www.linkedin.com/company/noli-solucoes-logisticas/">
                            <img src={linkedin} alt="" />
                        </a>
                        
                    </div>
                </div>
            </div>
        </ContainerFooter>
    )
}