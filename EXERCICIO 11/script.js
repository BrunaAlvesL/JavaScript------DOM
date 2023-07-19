/* # 8 - Exercício 11

### Escalação do Time

Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value.
*/


function addPlayer() {
    const positionInput = document.getElementById("position");
    const playerNameInput = document.getElementById("playerName");
    const jerseyNumberInput = document.getElementById("jerseyNumber");
    const playerList = document.getElementById("playerList");

    const position = positionInput.value;
    const playerName = playerNameInput.value;
    const jerseyNumber = jerseyNumberInput.value;

    if (position && playerName && jerseyNumber) {
        const confirmation = confirm("Deseja confirmar a escalação desse jogador?");
        if (confirmation) {
            const listItem = document.createElement("li");
            listItem.textContent = `Posição: ${position}, Nome: ${playerName}, Número da camisa: ${jerseyNumber}`;
            playerList.appendChild(listItem);

            // Limpar os campos de texto após a escalação
            positionInput.value = "";
            playerNameInput.value = "";
            jerseyNumberInput.value = "";
        }
    }
}

function removePlayer() {
    const removeJerseyNumberInput = document.getElementById("removeJerseyNumber");
    const playerList = document.getElementById("playerList");

    const removeJerseyNumber = removeJerseyNumberInput.value;
    if (removeJerseyNumber) {
        const confirmation = confirm("Deseja confirmar a remoção desse jogador?");
        if (confirmation) {
            const listItemToRemove = Array.from(playerList.children).find(
                (item) => item.textContent.includes(`Número da camisa: ${removeJerseyNumber}`)
            );

            if (listItemToRemove) {
                playerList.removeChild(listItemToRemove);

                // Limpar o campo de texto após a remoção
                removeJerseyNumberInput.value = "";
            }
        }
    }
}
