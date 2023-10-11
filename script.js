
//SALVAR --------------------------------------------------------------------------------------------


document.getElementById('save-button').addEventListener('click', function () {
    const characterData = {
        name: document.getElementById('char-name').value,
        race: document.getElementById('char-race').value,
        class: document.getElementById('char-class').value,
        level: document.getElementById('char-level').value,
        strength: document.getElementById('char-strength').value,
        strengthmod: document.getElementById('char-strengthmod').value,
        dexterity: document.getElementById('char-dexterity').value,
        dexteritymod: document.getElementById('char-dexteritymod').value,
        constitution: document.getElementById('char-constitution').value,
        constitutionmod: document.getElementById('char-constitutionmod').value,
        intelligence: document.getElementById('char-intelligence').value,
        intelligencemod: document.getElementById('char-intelligencemod').value,
        wisdom: document.getElementById('char-wisdom').value,
        wisdommod: document.getElementById('char-wisdommod').value,
        charisma: document.getElementById('char-charisma').value,
        charismamod: document.getElementById('char-charismamod').value,
        alignment: document.getElementById('char-alignment').value, // Added alignment attribute
        portrait: document.getElementById('portrait-preview').src, // URL da imagem
        savingThrows: {
            strength: document.getElementById('char-strength-savingthrow').value,
            dexterity: document.getElementById('char-dexterity-savingthrow').value,
            constitution: document.getElementById('char-constitution-savingthrow').value,
            intelligence: document.getElementById('char-intelligence-savingthrow').value,
            wisdom: document.getElementById('char-wisdom-savingthrow').value,
            charisma: document.getElementById('char-charisma-savingthrow').value
        },
        skills: {
            acrobatics: document.getElementById('char-acrobatics').value,
            animalHandling: document.getElementById('char-animal').value,
            arcana: document.getElementById('char-arcana').value,
            athletics: document.getElementById('char-athletics').value,
            deception: document.getElementById('char-deception').value,
            history: document.getElementById('char-history').value,
            insight: document.getElementById('char-insight').value,
            intimidation: document.getElementById('char-intimidation').value,
            investigation: document.getElementById('char-investigation').value,
            medicine: document.getElementById('char-medicine').value,
            nature: document.getElementById('char-nature').value,
            perception: document.getElementById('char-perception').value,
            performance: document.getElementById('char-performance').value,
            persuasion: document.getElementById('char-persuasion').value,
            religion: document.getElementById('char-religion').value,
            sleightOfHand: document.getElementById('char-sleightofhand').value,
            stealth: document.getElementById('char-stealth').value,
            survival: document.getElementById('char-survival').value
        }
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

//CARREGAR -----------------------------------------------------------------

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

                /// Preencha os campos de entrada com os dados carregados
                document.getElementById('char-name').value = characterData.name;
                document.getElementById('char-race').value = characterData.race;
                document.getElementById('char-class').value = characterData.class;
                document.getElementById('char-level').value = characterData.level;
                document.getElementById('char-strength').value = characterData.strength;
                document.getElementById('char-strengthmod').value = characterData.strengthmod;
                document.getElementById('char-dexterity').value = characterData.dexterity;
                document.getElementById('char-dexteritymod').value = characterData.dexteritymod;
                document.getElementById('char-constitution').value = characterData.constitution;
                document.getElementById('char-constitutionmod').value = characterData.constitutionmod;
                document.getElementById('char-intelligence').value = characterData.intelligence;
                document.getElementById('char-intelligencemod').value = characterData.intelligencemod;
                document.getElementById('char-wisdom').value = characterData.wisdom;
                document.getElementById('char-wisdommod').value = characterData.wisdommod;
                document.getElementById('char-charisma').value = characterData.charisma;
                document.getElementById('char-charismamod').value = characterData.charismamod;
                document.getElementById('char-alignment').value = characterData.alignment; // Set alignment value

                // Set saving throw values
                document.getElementById('char-strength-savingthrow').value = characterData.savingThrows.strength;
                document.getElementById('char-dexterity-savingthrow').value = characterData.savingThrows.dexterity;
                document.getElementById('char-constitution-savingthrow').value = characterData.savingThrows.constitution;
                document.getElementById('char-intelligence-savingthrow').value = characterData.savingThrows.intelligence;
                document.getElementById('char-wisdom-savingthrow').value = characterData.savingThrows.wisdom;
                document.getElementById('char-charisma-savingthrow').value = characterData.savingThrows.charisma;

                // Set skill values
                document.getElementById('char-acrobatics').value = characterData.skills.acrobatics;
                document.getElementById('char-animal').value = characterData.skills.animalHandling;
                document.getElementById('char-arcana').value = characterData.skills.arcana;
                document.getElementById('char-athletics').value = characterData.skills.athletics;
                document.getElementById('char-deception').value = characterData.skills.deception;
                document.getElementById('char-history').value = characterData.skills.history;
                document.getElementById('char-insight').value = characterData.skills.insight;
                document.getElementById('char-intimidation').value = characterData.skills.intimidation;
                document.getElementById('char-investigation').value = characterData.skills.investigation;
                document.getElementById('char-medicine').value = characterData.skills.medicine;
                document.getElementById('char-nature').value = characterData.skills.nature;
                document.getElementById('char-perception').value = characterData.skills.perception;
                document.getElementById('char-performance').value = characterData.skills.performance;
                document.getElementById('char-persuasion').value = characterData.skills.persuasion;
                document.getElementById('char-religion').value = characterData.skills.religion;
                document.getElementById('char-sleightofhand').value = characterData.skills.sleightOfHand;
                document.getElementById('char-stealth').value = characterData.skills.stealth;
                document.getElementById('char-survival').value = characterData.skills.survival;


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
            strengthmod: document.getElementById('char-strengthmod').value,
            dexterity: dexterity,
            dexteritymod: document.getElementById('char-dexteritymod').value,
            constitution: constitution,
            constitutionmod: document.getElementById('char-constitutionmod').value,
            intelligence: intelligence,
            intelligencemod: document.getElementById('char-intelligencemod').value,
            wisdom: wisdom,
            wisdommod: document.getElementById('char-wisdommod').value,
            charisma: charisma,
            charismamod: document.getElementById('char-charismamod').value,
            alignment: document.getElementById('char-alignment').value, // Added alignment attribute
            portrait: portraitPreview.src, // Caminho da imagem do retrato
            savingThrows: {
                strength: document.getElementById('char-strength-savingthrow').value,
                dexterity: document.getElementById('char-dexterity-savingthrow').value,
                constitution: document.getElementById('char-constitution-savingthrow').value,
                intelligence: document.getElementById('char-intelligence-savingthrow').value,
                wisdom: document.getElementById('char-wisdom-savingthrow').value,
                charisma: document.getElementById('char-charisma-savingthrow').value
            },
            skills: {
                acrobatics: document.getElementById('char-acrobatics').value,
                animalHandling: document.getElementById('char-animal').value,
                arcana: document.getElementById('char-arcana').value,
                athletics: document.getElementById('char-athletics').value,
                deception: document.getElementById('char-deception').value,
                history: document.getElementById('char-history').value,
                insight: document.getElementById('char-insight').value,
                intimidation: document.getElementById('char-intimidation').value,
                investigation: document.getElementById('char-investigation').value,
                medicine: document.getElementById('char-medicine').value,
                nature: document.getElementById('char-nature').value,
                perception: document.getElementById('char-perception').value,
                performance: document.getElementById('char-performance').value,
                persuasion: document.getElementById('char-persuasion').value,
                religion: document.getElementById('char-religion').value,
                sleightOfHand: document.getElementById('char-sleightofhand').value,
                stealth: document.getElementById('char-stealth').value,
                survival: document.getElementById('char-survival').value
            }
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


//PORTRAIT -------------------------------------------------------------------------------------------

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

