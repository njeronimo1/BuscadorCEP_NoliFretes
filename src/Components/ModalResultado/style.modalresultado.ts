import styled from "styled-components";

export const ContainerModalResultado = styled.div`

    header{
        /* margin-bottom   : 1.875rem; */

        h3{
            font-size: 1.625rem;
            text-align: center;
            color: var(--cinza-text);
        }
    }

    main{
        .container_input{
            display: flex;
            flex-direction: column;

            label{
                font-size: 1.25rem;
                font-weight: 600;
                margin-bottom: 0rem;
                margin-top: 1.875rem;;
                color: var(--cinza-text);
            }
        }

    }

        input[type="text"]{
            border: 1px solid var(--roxo);
            background-color: var(--preto-secundary);
            height: 1.875rem;
            border-radius: 3px;
            margin-top: 1rem;
            padding: 0.4rem;
            color: var(--white);
            margin-bottom: 1.3rem;
            width: 100%;
            cursor: default;

            &:focus{
                outline: var(--roxo);
            }
        }



`