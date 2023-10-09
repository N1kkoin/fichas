document.getElementById('save-button').addEventListener('click', function () {
    const characterData = {
        name: document.getElementById('char-name').value,
        race: document.getElementById('char-race').value,
        class: document.getElementById('char-class').value,
        level: document.getElementById('char-level').value,
        strength: document.getElementById('char-strength').value,
        dexterity: document.getElementById('char-dexterity').value,
        constitution: document.getElementById('char-constitution').value,
        intelligence: document.getElementById('char-intelligence').value,
        wisdom: document.getElementById('char-wisdom').value,
        charisma: document.getElementById('char-charisma').value,
        portrait: document.getElementById('portrait-preview').src // URL da imagem
        // Adicione outros atributos aqui
    };
    

    // Converte os dados da ficha de personagem em formato JSON
    const characterJSON = JSON.stringify(characterData);

    // Cria um objeto Blob com o JSON
    const blob = new Blob([characterJSON], { type: 'application/json' });

    // Cria um link para download do arquivo JSON
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'ficha_personagem.json';

    // Simula um clique no link para iniciar o download
    a.click();

    // Limpa o objeto Blob da memória
    URL.revokeObjectURL(a.href);
});

document.getElementById('load-button').addEventListener('click', function () {
    // Crie um elemento de input de arquivo oculto
    const fileInput = document.getElementById('file-input');

    // Simule um clique no elemento de input de arquivo para abrir a janela de seleção de arquivo
    fileInput.click();

    // Quando o usuário selecionar um arquivo, leia-o e processe-o
    fileInput.addEventListener('change', function () {
        const selectedFile = fileInput.files[0];
        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = function (event) {
                const characterData = JSON.parse(event.target.result);

                // Preencha os campos de entrada com os dados carregados
                document.getElementById('char-name').value = characterData.name;
                document.getElementById('char-race').value = characterData.race;
                document.getElementById('char-class').value = characterData.class;
                document.getElementById('char-level').value = characterData.level;
                document.getElementById('char-strength').value = characterData.strength;
                document.getElementById('char-dexterity').value = characterData.dexterity;
                document.getElementById('char-constitution').value = characterData.constitution;
                document.getElementById('char-intelligence').value = characterData.intelligence;
                document.getElementById('char-wisdom').value = characterData.wisdom;
                document.getElementById('char-charisma').value = characterData.charisma;

                // Exiba a imagem do retrato
                document.getElementById('portrait-preview').src = characterData.portrait;
            };

            // Leia o conteúdo do arquivo selecionado como texto
            reader.readAsText(selectedFile);
        }
    });
});



document.getElementById('save-button').addEventListener('click', function () {
    const strength = parseInt(document.getElementById('char-strength').value);
    const dexterity = parseInt(document.getElementById('char-dexterity').value);
    const constitution = parseInt(document.getElementById('char-constitution').value);
    const intelligence = parseInt(document.getElementById('char-intelligence').value);
    const wisdom = parseInt(document.getElementById('char-wisdom').value);
    const charisma = parseInt(document.getElementById('char-charisma').value);

    // Verifique se os valores dos atributos estão dentro do intervalo de 0 a 20
    if (
        strength >= 0 && strength <= 20 &&
        dexterity >= 0 && dexterity <= 20 &&
        constitution >= 0 && constitution <= 20 &&
        intelligence >= 0 && intelligence <= 20 &&
        wisdom >= 0 && wisdom <= 20 &&
        charisma >= 0 && charisma <= 20
    ) {
        const characterData = {
            name: document.getElementById('char-name').value,
            race: document.getElementById('char-race').value,
            class: document.getElementById('char-class').value,
            level: document.getElementById('char-level').value,
            strength: strength,
            dexterity: dexterity,
            constitution: constitution,
            intelligence: intelligence,
            wisdom: wisdom,
            charisma: charisma,
            portrait: portraitPreview.src // Caminho da imagem do retrato
            // Adicione outros atributos aqui
        };
        

        // Converte os dados da ficha de personagem em formato JSON
        const characterJSON = JSON.stringify(characterData);

        // Cria um objeto Blob com o JSON
        const blob = new Blob([characterJSON], { type: 'application/json' });

        // Cria um link para download do arquivo JSON
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'ficha_personagem.json';

        // Simula um clique no link para iniciar o download
        a.click();

        // Limpa o objeto Blob da memória
        URL.revokeObjectURL(a.href);
    } else {
        alert("Os valores dos atributos devem estar no intervalo de 0 a 20.");
    }
});


//PORTRAIT

document.getElementById('char-portrait').addEventListener('change', function () {
    const portraitInput = document.getElementById('char-portrait');
    const portraitPreview = document.getElementById('portrait-preview');

    const selectedFile = portraitInput.files[0];

    if (selectedFile) {
        const reader = new FileReader();

        reader.onload = function (event) {
            // Exiba a imagem selecionada no elemento <img>
            portraitPreview.src = event.target.result;
        };

        // Leia o conteúdo do arquivo de imagem como URL de dados (data URL)
        reader.readAsDataURL(selectedFile);
    } else {
        // Se nenhum arquivo for selecionado, defina a imagem como vazia
        portraitPreview.src = "";
    }
});


//CLASSES DESCRIÇÕES 

// Obtém o elemento de descrição da classe
const classDescription = document.getElementById('class-description');

// Obtém o elemento de dropdown
const classDropdown = document.getElementById('char-class');

// Define os textos de descrição para cada classe
const classDescriptions = {
    guerreiro: "Guerreiro - Um combatente habilidoso em combate corpo a corpo.",
    mago: "Mago - Um conjurador de magia com poderes arcanos.",
    ladino: "Ladino - Um especialista em habilidades furtivas e enganosas."
    // Adicione outras descrições de classe aqui
};

// Adiciona um ouvinte de evento de mudança ao dropdown
classDropdown.addEventListener('change', function () {
    // Obtém a classe selecionada
    const selectedClass = classDropdown.value;

    // Exibe a descrição correspondente da classe
    classDescription.textContent = classDescriptions[selectedClass] || '';
});

//RAÇAS DESCRIÇÃO

// Obtém o elemento de descrição da raça
const raceDescription = document.getElementById('race-description');

// Obtém o elemento de dropdown
const raceDropdown = document.getElementById('char-race');

// Define os textos de descrição para cada raça
const raceDescriptions = {
    humano: "Humano - Uma raça versátil e adaptável com habilidades diversas.",
    elfo: "Elfo - Uma raça conhecida por sua agilidade e conexão com a natureza.",
    anão: "Anão - Uma raça resistente e habilidosa em trabalhos subterrâneos."
    // Adicione outras descrições de raça aqui
};

// Adiciona um ouvinte de evento de mudança ao dropdown
raceDropdown.addEventListener('change', function () {
    // Obtém a raça selecionada
    const selectedRace = raceDropdown.value;

    // Exibe a descrição correspondente da raça
    raceDescription.textContent = raceDescriptions[selectedRace] || '';
});


// Obtém todos os botões de "Escolher"
const chooseButtons = document.querySelectorAll('.choose-button');

// Adiciona um ouvinte de evento de clique a cada botão
chooseButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Obtém o valor da raça a partir do card
        const raceValue = button.parentElement.getAttribute('data-value');
        
        // Define o valor da raça no campo de seleção
        const charRaceSelect = document.getElementById('char-race');
        charRaceSelect.value = raceValue;
    });
});
