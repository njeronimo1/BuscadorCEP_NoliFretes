import styled from 'styled-components';
import imgCEP from '../../assets/img_cep.jpg';
import imgEndereco from '../../assets/img_endereco.jpg';

export const ContainerHome = styled.div`
    
    width: 100%;
    max-width: 1366px;
    display: flex;
    /* height: 90vh; */
    flex-direction: column;
    padding: 0rem 2%;
    margin: 0 auto;
    margin-bottom: 5rem;

    header{
        width: 100%;
        text-align: center;
        margin-top: 2.5rem;
        

        h2{
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--white);
        }

        .descricao{
            text-align: left;

            p{
                margin-top: 1.8rem;
                font-size: 1.2rem;
                font-weight: 600;
                color: var(--white);
            }
        }
    }

    main{
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;

        .buscarCep, .buscarEndereco{
            width: 40%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 20rem;
            font-weight: 700;
            color: var(--white);
            background-color: var(--roxo);

            overflow: hidden;
            box-shadow: var(--box-shadow);
        }

        .buscarCep_{
            background-image: url(${imgCEP});
        }
        .buscarEndereco_{
            background-image: url(${imgEndereco});
        }
        .buscarCep_, .buscarEndereco_{
            
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            transition: 0.3s all;
            cursor: pointer;
            height: 100%;
            width: 100%;
            display: flex;
            align-items:center;
            justify-content: center;

            &:hover{
                transition: 0.3s all;
                transform: scale(1.1);
            }
        }

    }

    @media(max-width: 768px){
        margin-bottom: 5rem;
        header{
            .descricao{
                padding: 1rem;
                p{
                    font-size: 0.9rem;
                }
            }
        }

        main{
            margin-top: 1rem;
            flex-direction: column;
            padding: 1rem;

            .buscarCep, .buscarEndereco{
                width: 100%;
                margin-bottom: 1rem;
            }
        }
        
    }

`