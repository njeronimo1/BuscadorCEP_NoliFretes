# BuscadorCEP_NoliFretes

Objetivo:

Fornecer o CEP ou informações de um endereço conforme os dados inseridos pelo usuário, com a meta de ter a identidade visual da @nolifretes também foi criado um layout da 
aplicação utilizando figma em um padrão de tipografia e paleta de cores.

 :pushpin: Confira o layout criado com Figma: https://www.figma.com/file/h1KrkbS9rMrDZiQfZzNJ2Q/Noli-Fretes?node-id=0%3A1

:book: APIs:

ViaCEP - https://viacep.com.br/
IBGE - https://servicodados.ibge.gov.br/api/docs/localidades

:warning: Informações técnicas:

Para busca utilizando CEP foi utilizada a Api ViaCEP, fornecendo somente o CEP e tendo como retorno um Json, na minha opnião o mais importante dessa etapa são as
validações utilizando Yup e react-hook-form para impedir o usuário de inserir letras ao invés de números no input.

Agora a busca utilizando o Endereço tem os pontos mais importantes do projeto, deve ser feita utilizando a Api do IBGE e em etapas, primeiramente consumir a Api para
trazer os dados de todos os estados, com a "Sigla" de um estado, deve consumir novamente a Api enviando-a e então receber uma lista de Municipios de acordo com o 
estado escolhido, então por fim deve ser feita uma validação em todos os campos para não deixar o usuário clicar em buscar com informações vazias.

:zap: Stacks:

- ReactJS  
- Typescript 

:mortar_board: Ferramentas:

- Axios
- Yup
- Styled-components
- react-router-dom v6
- react-modal
- react-hook-form

