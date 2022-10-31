import styled from "styled-components";

export const ContainerBuscarEndereco = styled.div`

width: 100%;
    max-width: 1366px;
    margin: 0 auto;
    /* padding: 1rem; */
    display: flex;
    /* justify-content: space-around; */

    .container_cep{
        width: 50%;
        padding-top: 3rem;
        h3{
            margin-top: 1rem;
            color: var(--white);
            font-weight: 600;
            font-size: 1.25rem;
        }

        select, input{
            border: 1px solid var(--roxo);
            background-color: var(--preto-secundary);
            height: 1.875rem;
            border-radius: 3px;
            margin-top: 1rem;
            font-size: 0.875rem;
            padding: 0.4rem;
            color: var(--white);
            margin-bottom: 1.3rem;
            width: 40%;

            &:focus{
                outline: var(--roxo);
            }
        }

        .buttons{
            display: flex;
            gap: 1rem;
            button{
                background-color: var(--roxo);
                border-radius: 0.375rem;
                padding: 0.5rem 1.5rem;
                color: var(--white);
                border: none;
                cursor: pointer;
                transition: 0.15s all;

                &:focus{
                    outline: none;
                }

                &:hover{
                    opacity: 0.8;
                }
            }
        }
    }

    @media(max-width:768px){
        padding: 1rem;

        .container_cep{
            width: 100%;

            input, select{
                width: 100%;
            }

            .buttons{
                width: 100%;

                button{
                    width: 100%;
                }
            }
            
        }
    }

`