Fala pessoal, tudo certo? Espero que sim.

Esse é um projeto com foco em treinar minhas habilidades com o DIPLAY-FLEX. Esse projeto sofrerá uma nova atualização com algumas animações em JavaScript, através do botão.

Projeto do site:  https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db 

COMO FOI FEITO:

Primeiro passo foi criar um HTML na forma mais semântica possível, nele foi adicionado uma MAIN, para o conteúdo principal, duas divs uma para abrigar o conselho mais o ADVICE e outra para o botão, além disso, foi adicionado uma tag PICTURE para adicionar uma imagem. Foi usada essa tag pois possui uma imagem para dispositivos mobile e outra para desktops.

Chegando no CSS, ele foi dividido em três partes. Um RESET para retirar qualquer estilo padrão do navegador. O STYLE que é o estilo geral do site e por último o RESPONSIVO para dispositivos móveis.

No Style foi centralizado a caixa principal através do BODY, feito a estilização da caixa que envolve o conteúdo através da CAIXA-PRINCIPAL, nela também foi adicionado o display flex, com o intuito que centralizar e organizar os itens em colunas.  Feito toda a edição dos textos da página cor, fonte, tamanho da fonte entre outros através das class, TEXTOS, ADVICE, NUMERO-CONSELHO e CONSELHOS. E por último a estilização e posicionamento do botão com mais um display flex e suas propriedades. Além disso foi feita uma animação do botão utilizando o HOVER. 

-----    ATUALIZAÇÃO 10/01/2023 -----

Nesta versão foi melhorado o CSS nos seguintes pontos:

- Criação de um arquivo contendo todas as cores do projeto;
- Refeita a centralização da caixa principal, onde contém os conselhos;
- Refeita a responsividade, agora todos os tamanhos de telas são compatíveis com o projeto; 
- Revisado o código CSS por completo;


-- JavaScript --

Na versão atual conta com o consumo de API que gera conselhos automáticos, para gerar novos conselhos basta clicar no botão verde;

Para adicionar os elementos na tela foi usado os eventos do DOM.


Site da API: https://api.adviceslip.com/ 