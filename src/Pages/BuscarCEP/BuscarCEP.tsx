import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { apiCep } from "../../Axios/useApiCep";
import { ModalResultado } from "../../Components/ModalResultado/ModalResultado";
import { ContainerBuscarCep } from "./style.buscarCep";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

type Cep = {
    cep: string;
}

interface resultadoPesquisa{
    bairro:string,
    cep:string,
    localidade:string,
    logradouro:string,
    uf:string
}

const cepSchema = yup.object().shape({
    cep: yup
    .number()
    .min(8, 'Digite ao menos 8 digitos')
    .typeError('Digite somente números')
});

export function BuscarCEP(){

    const[modalIsOpen, setModalIsOpen] = useState(false);
    const[resultadoPesquisa, setResultadoPesquisa] = useState<resultadoPesquisa[]>([]);
    const[cep, setCep] = useState('');

    const{ register , handleSubmit, formState: {errors} } = useForm<Cep>({
        resolver: yupResolver(cepSchema)
    })

    function modalOpen(){
        setModalIsOpen(true);
    }

    function modalClose(){
        setModalIsOpen(false);
    }

    const cepCreate: SubmitHandler<Cep> = async (value) =>{
        apiCep.get(`/${cep}/json/`)
        .then((res) => {
            if(res.data != ""){
                setResultadoPesquisa([res.data]);
                modalOpen();
            }
        }).catch((error) => {
            toast.error('Não foi possível encontrar este endereço.');        
        });
    }

    return(
        <ContainerBuscarCep>
            <form className="container_cep" onSubmit={handleSubmit(cepCreate)}>
                <h3>Digite o CEP:</h3>
                <input 
                type="text" 
                placeholder="CEP"
                {...register('cep')}
                name="cep"
                
                onChange={(e)=> setCep(e.target.value)}
                />
                
                {errors.cep && <p>{errors.cep.message}</p>}

                <br />
                <button type="submit" 
                style={cep == "" ? {opacity:'0.5', cursor:'not-allowed', marginRight:'1rem'} : {marginRight:'1rem'}}
                
                >Buscar</button>

                    <Link to={'/'}>
                        <button type="button">Voltar</button>  
                    </Link>
            </form>

            {modalIsOpen && 
            <ModalResultado 
            isOpen={modalIsOpen}
            onRequestClose={modalClose}
            event={1} 
            resultadoPesquisa={resultadoPesquisa}/>}
            
        </ContainerBuscarCep>
    )
}