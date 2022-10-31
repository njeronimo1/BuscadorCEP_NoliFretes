
import Modal from 'react-modal';
Modal.setAppElement('#root');

/*Import de imagens*/

import close from '../../assets/close.png';
import { resultadoPesquisa } from '../../Pages/BuscarEndereco/BuscarEndereco';
import { ContainerModalResultado } from './style.modalresultado';


interface modalResultadoProps{
    isOpen: boolean;
    onRequestClose: () => void;
    event: number,
    resultadoPesquisa: resultadoPesquisa[]
}

export function ModalResultado({isOpen, onRequestClose, event, resultadoPesquisa} : modalResultadoProps){
    
    console.log(resultadoPesquisa);

    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button onClick={onRequestClose} 
            className="react-modal-close">
                <img src={close} alt="" width={30}/>
            </button>
            
            <ContainerModalResultado>
                <header>
                    <h3>Resultado</h3>
                </header>
                {event == 1? 
                
                <main>
                    <div className='container_input'>
                        <label htmlFor="">Logradouro</label>
                        <input type="text" readOnly={true}
                        value={resultadoPesquisa[0].logradouro}/>
                    </div>

                    <div className='container_input'>
                        <label htmlFor="">Municipio</label>
                        <input type="text" readOnly={true}
                        value={resultadoPesquisa[0].localidade}/>
                    </div>

                    <div className='container_input'>
                        <label htmlFor="">Bairro</label>
                        <input type="text" readOnly={true}
                        value={resultadoPesquisa[0].bairro}/>
                    </div>

                    <div className='container_input'>
                        <label htmlFor="">CEP</label>
                        <input type="text" readOnly={true}
                        value={resultadoPesquisa[0].cep}/>
                    </div>
                </main>

                :
                
                <main>
                    <div className='container_input'>
                        <label htmlFor="">CEP</label>
                        <input type="text" 
                        readOnly={true}
                        value={resultadoPesquisa[0].cep}/>
                    </div>

                    <div className='container_input'>
                        <label htmlFor="">Bairro</label>
                        <input type="text" 
                        readOnly={true}
                        value={resultadoPesquisa[0].bairro}
                        />
                    </div>

                    <div className='container_input'>
                        <label htmlFor="">Municipio</label>
                        <input type="text" readOnly={true}
                        value={resultadoPesquisa[0].localidade}/>
                    </div>

                    <div className='container_input'>
                        <label htmlFor="">Logradouro</label>
                        <input type="text" readOnly={true}
                        value={resultadoPesquisa[0].logradouro}/>
                    </div>
                </main>
                }
                
            </ContainerModalResultado>
        </Modal>
    )
}