import { Link } from "react-router-dom";
import { ContainerHome } from "./style.home";


export function Home(){
    return(
        <ContainerHome>
            <header>
                <h2>Buscador de CEP</h2>

                <div className="descricao">
                    <p>Seja muito bem vindo 😀, o buscador de CEP da Noli te oferece um 
                        serviço completo realizando a busca de um endereço por número de 
                        cep, ou a busca de um cep por endereço fornecido...</p>

                    <p>Vamos começar? Qual serviço você deseja:</p>
                </div>
            </header>
            <main>
                <div className="buscarCep">
                    <Link to={'/buscarCEP'} style={{width:'100%', height:'100%', 
                textDecoration:'none', color:'white'}}>
                    <div className="buscarCep_">
                        <h2>Buscar por CEP</h2>
                    </div>
                    </Link>
                </div>
                <div className="buscarEndereco">
                    <Link to={'/buscarEndereco'} style={{width:'100%', height:'100%', 
                textDecoration:'none', color:'white'}}>
                    <div className="buscarEndereco_">
                        <h2>Buscar por Endereço</h2>
                    </div>
                    </Link>
                </div>
            </main>
        </ContainerHome>
    )
}