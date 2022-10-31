import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { apiLocalidades } from "../../Axios/useApi";
import { apiCep } from "../../Axios/useApiCep";
import { ModalResultado } from "../../Components/ModalResultado/ModalResultado";
import { ContainerBuscarEndereco } from "./style.buscarEndereco";

interface Estados{
    id: number;
    sigla: string;
    nome: string;
}

interface Municipios{
    id: number;
    sigla: string;
    nome: string;
}

export interface resultadoPesquisa{
    bairro:string,
    cep:string,
    localidade:string,
    logradouro:string,
    uf:string
}

export function BuscarEndereco(){
    const[modalIsOpen, setModalIsOpen] = useState(false);
    const[estados, setEstados] = useState<Estados[]>([]);
    const[municipios, setMunicipios] = useState<Municipios[]>([]);
    const[selectEstado, setSelectEstado] = useState<string>('');
    const[selectMunicipio, setSelectMunicipio] = useState<string>('');
    const[rua, setRua] = useState('');
    const[resultadoPesquisa, setResultadoPesquisa] = useState<resultadoPesquisa[]>([]);

    function modalOpen(){
        setModalIsOpen(true);
    }

    function modalClose(){
        setModalIsOpen(false);
    }
    
    useEffect(()=>{
        apiLocalidades.get('/estados').then((res)=> setEstados(res.data));
    }, []);

    function onChangeEstado(valueEstado:string){
        setSelectEstado(valueEstado);

        const estadosFilter = estados.filter(estado => estado.sigla.toString() === valueEstado);

        apiLocalidades.get(`/estados/${estadosFilter[0].sigla}/municipios`)
        .then((res)=> setMunicipios(res.data));
    }

    function onChangeMunicipio(valueMunicipio:string){
        setSelectMunicipio(valueMunicipio);
    }

    function ruaFunction(valueRua:string){
        setRua(valueRua);
    }

    function buscar(){
        
        apiCep.get(`${selectEstado}/${selectMunicipio}/${rua}/json`)
        .then((res) => {
            if(res.data != ""){
                setResultadoPesquisa(res.data);
                modalOpen();
            }else{
                toast.error('Não foi possível encontrar este endereço.');        
            }
        });
    }


    return(
        <ContainerBuscarEndereco>
            <div className="container_cep">
                <h3>Estado:</h3>
                <select placeholder="Estados" 
                value={selectEstado}
                onChange={(e) => onChangeEstado(e.target.value)}>
                    {estados.map(estado => {
                        return(
                            <option key={estado.id} value={estado.sigla}>{estado.sigla} / {estado.nome}</option>
                        )
                    })}
                </select>

                <h3>Municipio:</h3>
                <select 
                value={selectMunicipio}
                onChange={(e) => onChangeMunicipio(e.target.value)}
                >
                    {municipios.map(municipio => {
                        return(
                            <option value={municipio.nome}>{municipio.nome}</option>
                        )
                    })}

                </select>

                <h3>Logradouro:</h3>
                <input type="text" 
                placeholder="Logradouro"
                onChange={(e)=>{ruaFunction(e.target.value)}} />

                <div className="buttons">
                    <button 
                    type="button" 
                    onClick={buscar}
                    style={rua && selectEstado && selectMunicipio ? {} : { opacity:0.5, cursor: 'not-allowed' }}
                    disabled={rua && selectEstado && selectMunicipio ? false : true}
                    >
                        Buscar
                    </button>

                    <Link to={'/'} style={{width:'100%'}}>
                        <button type="button">Voltar</button>  
                    </Link>
                </div>
            </div>

            {modalIsOpen && 
            <ModalResultado 
            isOpen={modalIsOpen}
            onRequestClose={modalClose}
            event={2}
            resultadoPesquisa={resultadoPesquisa} />}

        </ContainerBuscarEndereco>
    )
}