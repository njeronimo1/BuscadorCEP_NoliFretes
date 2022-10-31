import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    position: fixed;
    bottom: 0px;
    color: white;

    width: 100%;
    
    background-color: var(--roxo);
    padding: 1rem 0rem;
    margin: 0 auto;
    display: flex;
    justify-content:center;

    .container_footer{
        display: flex;
        width: 100%;
        max-width: 1170px;
        align-items: center;
        justify-content: space-between;
        font-weight:600;
        font-size: 1rem;
     
        .redes_sociais{
            display: flex;
            align-items: center;
            p{
                margin-right: 4rem;
            } 

            .container_imgs{
                display: flex;
                gap: 1.5rem;
                a, img{
                    width: 24px;
                    height: 24px;
                    color: white;
                    text-decoration: none;
                    
                }

            }
        }
    }

    @media(max-width: 768px){
        padding: 0.5rem 0.5rem;

        .container_footer{
            font-size: 0.7rem;

            .redes_sociais{
            display: flex;
            align-items: center;
            p{
                margin-right: 0.5rem;
            } 

            .container_imgs{
                    display: flex;
                    gap: 0.2rem;
                    a, img{
                        width: 18px;
                        height: 18px;
                        color: white;
                        text-decoration: none;
                        
                    }

                }
            }
        }

        
    }

    
`