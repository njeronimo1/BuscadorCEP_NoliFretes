import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{

        --roxo: #4b19ad;
        --cinza-text:#F3F3F3;
        --cinza-fundo:#54595f;
        --preto-fundo:#1e1e1e;
        --preto-secundary:#313131;
        --white:#FFFF;


        --box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        transition: 0.3s all;
        background-color: var(--preto-fundo);
    }

    body, input, textarea, button, select{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }


    ////////STYLE MODAL///////////////

    .react-modal-overlay{
        background:rgba(0,0,0, 0.5);
        position:fixed;
        top:0;
        bottom:0;
        right:0;
        left:0;

        display:flex;
        align-items:center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 600px;
        background: rgba(49, 49, 49, 0.5);
        padding: 2rem;
        margin: 2%;
        position: relative;
        border-radius:0.25rem;
    }

    .react-modal-close{
        position:absolute;
        right:1.5rem;
        top: 1.5rem;
        border:0;
        background:transparent;

        transition:filter 0.2s;
        cursor: pointer;

        &:hover{
            filter:brightness(0.8);
        }
    }

    @media(max-width: 768px){
        .react-modal-overlay{
            background:rgba(0,0,0, 1);
            position:fixed;
            top:0;
            bottom:0;
            right:0;
            left:0;

            display:flex;
            align-items:center;
            justify-content: center;
        }
    }

`