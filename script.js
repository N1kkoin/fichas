
//SALVAR --------------------------------------------------------------------------------------------
document.getElementById('save-button').addEventListener('click', function () {
    const characterData = {
        name: document.getElementById('char-name').value,
        race: document.getElementById('char-race').value,
        class: document.getElementById('char-class').value,
        level: document.getElementById('char-level').value,
        classlevel: document.getElementById('class-level').value,

        exp: document.getElementById('char-exp').value,
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
        chargods: document.getElementById('char-gods').value,

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
                document.getElementById('class-level').value = characterData.classlevel;
                document.getElementById('char-exp').value = characterData.exp;

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
                document.getElementById('char-alignment').value = characterData.alignment; 
                document.getElementById('char-gods').value = characterData.chargods; 


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

                // Atualize a descrição com base na escolha do arquivo JSON
                const alignmentSelect = document.getElementById('char-alignment');
                const raceSelect = document.getElementById('char-race');
                const classSelect = document.getElementById('char-class');
                const godsSelect = document.getElementById('char-gods');

                alignmentSelect.value = characterData.alignment;
                raceSelect.value = characterData.race;
                classSelect.value = characterData.class;
                godsSelect.value = characterData.chargods;


                alignmentSelect.dispatchEvent(new Event('change', { bubbles: true }));
                raceSelect.dispatchEvent(new Event('change', { bubbles: true }));
                classSelect.dispatchEvent(new Event('change', { bubbles: true }));
                godsSelect.dispatchEvent(new Event('change', { bubbles: true }));


                // Atualize a descrição dos deuses
                updateGodsDescription(characterData.chargods);

                // Agora você pode adicionar lógica específica para atualizar as descrições com base na raça, classe e deuses selecionados
                updateRaceDescription(characterData.race);
                updateClassDescription(characterData.class);
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
            classlevel: document.getElementById('class-level').value,
            exp: document.getElementById('char-exp').value,
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
            alignment: document.getElementById('char-alignment').value, 
            chargods: document.getElementById('char-gods').value,

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

//DESCRIÇÃO ALINHAMENTO ------------------------------------------------------------------
const alignmentSelect = document.getElementById('char-alignment');
const descriptionDiv = document.getElementById('alignment-description');

alignmentSelect.addEventListener('change', function () {
    const selectedAlignment = alignmentSelect.value;
    let title = '';
    let description = '';

    switch (selectedAlignment) {
        case 'lawfulgoodaligment':
            title = 'Lawful Good (LG)';
            description = 'Ordeiro e Bom (Lawful Good) age conforme se espera ou é requerido de uma pessoa boa. Ele combina o compromisso de se opor ao mal com a disciplina de lutar incansavelmente. Ele diz a verdade, mantém sua palavra, ajuda aqueles que precisam e denuncia a injustiça. Um personagem de alinhamento "leal e bom" detesta ver os culpados escaparem impunes. </br></br><span class="positivo">Positivo:</span> é o melhor alinhamento que alguém pode ter porque combina honra e compaixão. </br></br><span class="negativo">Negativo:</span> pode ser um alinhamento perigoso quando restringe a liberdade e criminaliza o interesse próprio. </br></br> <a target="_blank" href="https://easydamus.com/lawfulgood.html">Mais informações</a>';
            break;
        case 'neutralgoodaligment':
            title = 'Neutral Good (NG)';
            description = 'Neutro e Bom (Neutral Good) faz o melhor que uma pessoa boa pode fazer. Ele é dedicado a ajudar os outros. Ele trabalha com reis e magistrados, mas não se sente obrigado a eles. </br></br><span class="positivo">Positivo:</span> é o melhor alinhamento que alguém pode ter, pois significa fazer o que é bom sem viés a favor ou contra a ordem. </br></br><span class="negativo">Negativo:</span> pode ser um alinhamento perigoso quando promove a mediocridade ao limitar as ações dos verdadeiramente capazes.</br></br><a target="_blank" href="https://easydamus.com/neutralgood.html">Mais informações</a>';
            break;
        case 'chaoticgoodaligment':
            title = 'Chaotic Good (CG)';
            description = 'Caótico e Bom (Chaotic Good) age conforme sua consciência o direciona, com pouca consideração pelo que os outros esperam dele. Ele traça seu próprio caminho, mas é amável e benevolente. Ele acredita na bondade e no que é correto, mas tem pouca consideração pelas leis e regulamentos. Ele detesta quando as pessoas tentam intimidar os outros e dizer-lhes o que fazer. Ele segue sua própria bússola moral, que, embora seja boa, pode não estar de acordo com a da sociedade. </br></br><span class="positivo">Positivo:</span> é o melhor alinhamento que alguém pode ter porque combina um coração bondoso com um espírito livre. </br></br><span class="negativo">Negativo:</span>  pode ser um alinhamento perigoso quando perturba a ordem da sociedade e pune aqueles que se saem bem por si mesmos.</br></br><a target="_blank" href="https://easydamus.com/chaoticgood.html">Mais informações</a>';
            break;
        case 'lawfulneutralaligment':
            title = 'Lawful Neutral (LN)';
            description = 'Ordeiro e Neutro (Lawful Neutral) age conforme a lei, a tradição ou um código pessoal a direciona. A ordem e a organização são de extrema importância para ele. Ele pode acreditar em uma ordem pessoal e viver de acordo com um código ou padrão, ou pode acreditar em uma ordem para todos e favorecer um governo forte e organizado. </br></br><span class="positivo">Positivo:</span> é o melhor alinhamento que alguém pode ter porque significa que você é confiável e honrado sem ser um fanático. </br></br><span class="negativo">Negativo:</span>  pode ser um alinhamento perigoso quando busca eliminar toda a liberdade, escolha e diversidade na sociedade.</br></br><a target="_blank" href="https://easydamus.com/lawfulneutral.html">Mais informações</a>';
            break;
        case 'trueneutralaligment':
            title = 'True Neutral (N)';
            description = 'Neutro Verdadeiro (True Neutral) faz o que parece ser uma boa ideia. Ela não tem fortes inclinações quando se trata de bem contra mal ou ordem contra caos. A maioria dos personagens neutros exibe uma falta de convicção ou viés, em vez de um compromisso com a neutralidade. Um personagem assim considera o bem melhor do que o mal, afinal, ela preferiria ter vizinhos e governantes bons do que maus. Ainda assim, ela não está pessoalmente comprometida em defender o bem de forma abstrata ou universal.</br></br>Alguns personagens neutros, por outro lado, se comprometem filosoficamente com a neutralidade. Eles veem o bem, o mal, a lei e o caos como preconceitos e extremos perigosos. Eles advogam o caminho do meio da neutralidade como o melhor e mais equilibrado a longo prazo.</br></br><span class="positivo">Positivo:</span> é o melhor alinhamento que alguém pode ter porque significa agir naturalmente, sem preconceito ou compulsão. </br></br><span class="negativo">Negativo:</span> pode ser um alinhamento perigoso quando representa apatia, indiferença e falta de convicção.</br></br><a target="_blank" href="https://easydamus.com/trueneutral.html">Mais informações</a>';
            break;
        case 'chaoticneutralaligment':
            title = 'Chaotic Neutral (CN)';
            description = 'Caótico e Neutro (Chaotic Neutral) segue seus caprichos. Ele é um individualista em primeiro e último lugar. Valoriza sua própria liberdade, mas não se esforça para proteger a liberdade dos outros. Evita a autoridade, ressente as restrições e desafia tradições. Um personagem "caótico e neutro" não perturba intencionalmente organizações como parte de uma campanha de anarquia. Para fazer isso, ele teria que ser motivado pelo bem (e o desejo de libertar os outros) ou pelo mal (e o desejo de fazer aqueles diferentes dele sofrerem). Um personagem "caótico e neutro" pode ser imprevisível, mas seu comportamento não é totalmente aleatório. Ele não é tão propenso a pular de uma ponte como a atravessá-la. </br></br><span class="positivo">Positivo:</span> é o melhor alinhamento que alguém pode ter porque representa verdadeira liberdade das restrições da sociedade e do fanatismo de fazer o bem.</br></br><span class="negativo">Negativo:</span> pode ser um alinhamento perigoso quando busca eliminar toda autoridade, harmonia e ordem na sociedade.</br></br><a target="_blank" href="https://easydamus.com/chaoticneutral.html">Mais informações</a>';
            break;
        case 'lawfulevilaligment':
            title = 'Lawful Evil (LE)';
            description = 'Ordeiro e Mau (Lawful Evil) age metodicamente para obter o que deseja dentro dos limites de seu código de conduta, sem se importar com quem ele prejudica. Ele valoriza a tradição, lealdade e ordem, mas não se preocupa com liberdade, dignidade ou vida. Ele joga de acordo com as regras, mas sem misericórdia ou compaixão. Ele se sente à vontade em uma hierarquia e gostaria de governar, mas está disposto a servir. Ele condena os outros não de acordo com suas ações, mas sim de acordo com raça, religião, terra natal ou posição social. Ele reluta em quebrar leis ou promessas.</br></br>Essa relutância parte em parte de sua natureza e em parte porque ele depende da ordem para se proteger daqueles que se opõem a ele por motivos morais. Alguns vilões leais malignos têm tabus particulares, como não matar a sangue frio (mas fazendo com que subordinados o façam) ou não deixar que crianças sofram danos (se puder ser evitado). Eles imaginam que esses escrúpulos os elevam acima de vilões sem princípios.</br></br>Algumas pessoas e criaturas leais malignas se comprometem com o mal com o mesmo zelo que um cruzado se compromete com o bem. Além de estar dispostos a prejudicar os outros para alcançar seus objetivos, eles encontram prazer em espalhar o mal como um fim em si mesmo. Eles também podem ver fazer o mal como parte de um dever para um deus ou mestre maligno.</br></br><span class="positivo">Positivo:</span> criaturas de alinhamento "leal e maligno" consideram seu alinhamento o melhor, porque combina honra com um interesse próprio dedicado.</br></br><span class="negativo">Negativo:</span> é o alinhamento mais perigoso, porque representa o mal metódico, intencional e frequentemente bem-sucedido.</br></br><a target="_blank" href="https://easydamus.com/lawfulevil.html">Mais informações</a>';
            break;
        case 'neutralevilaligment':
            title = 'Neutral Evil (NE)';
            description = 'Neutro e Maligno (Neutral Evil) faz o que puder para se safar. Ele está apenas interessado em si mesmo, simplesmente. Ele não derrama lágrimas por aqueles que mata, seja por lucro, diversão ou conveniência. Ele não tem amor pela ordem e não tem ilusão de que seguir leis, tradições ou códigos o tornaria melhor ou mais nobre. Por outro lado, ele não tem a natureza inquieta ou o amor pelo conflito que um vilão caótico e maligno (Chaotic Evil) tem. </br></br>Alguns vilões "neutros e malignos" defendem o mal como um ideal, cometendo o mal por seu próprio bem. Com mais frequência, esses vilões são devotos de deidades malignas ou sociedades secretas.</br></br><span class="positivo">Positivo:</span> criaturas de alinhamento "neutro e maligno" considera seu alinhamento o melhor, porque podem avançar a si mesmos sem consideração pelos outros. </br></br><span class="negativo">Negativo:</span> é o alinhamento mais perigoso, porque representa o mal puro, sem honra e sem variação.</br></br><a target="_blank" href="https://easydamus.com/neutralevil.html">Mais informações</a>';
            break;
        case 'chaoticevilaligment':
            title = 'Chaotic Evil (CE)';
            description = 'Caótico e Maligno (Chaotic Evil) faz o que sua ganância, ódio e desejo de destruição o levam a fazer. Ele é de temperamento explosivo, cruel, arbitrariamente violento e imprevisível. Se ele está simplesmente atrás do que pode obter, ele é impiedoso e brutal. Se ele está comprometido com a disseminação do mal e do caos, é ainda pior. Felizmente, seus planos são caóticos, e qualquer grupo ao qual ele se junte ou forme é mal organizado. Normalmente, pessoas caóticas malignas só podem ser forçadas a trabalhar juntas, e seu líder dura apenas enquanto conseguir evitar tentativas de derrubá-lo ou assassiná-lo.</br></br><span class="positivo">Positivo:</span> criaturas de alinhamento "caótico e maligno" acredita que seu alinhamento é o melhor, porque combina interesse próprio e liberdade pura. </br></br><span class="negativo">Negativo:</span> é o alinhamento mais perigoso, porque representa a destruição não apenas da beleza e da vida, mas também da ordem sobre a qual a beleza e a vida dependem.</br></br><a target="_blank" href="https://easydamus.com/chaoticevil.html">Mais informações</a>';
            break;

        default:
            title = 'Alinhamento';
            description = 'Selecione um alinhamento para ver a descrição.';
    }

    descriptionDiv.innerHTML = `<h2>${title}</h2><p>${description}</p>`;
});

// Disparar manualmente o evento "change" no carregamento da página
window.addEventListener('load', function () {
    const alignmentSelect = document.getElementById('char-alignment');
    alignmentSelect.dispatchEvent(new Event('change'));
});


//CONTA PARA ATRIBUTOS -------------------------------------------------------------
function calculateMod(attributeValue) {
    return Math.floor(attributeValue / 2) - 5;
}

// Adicione um evento "input" para cada campo de atributos

const attributes = [
    {
        inputId: "char-strength",
        modId: "char-strengthmod",
    },
    {
        inputId: "char-dexterity",
        modId: "char-dexteritymod",
    },
    {
        inputId: "char-constitution",
        modId: "char-constitutionmod",
    },
    {
        inputId: "char-intelligence",
        modId: "char-intelligencemod",
    },
    {
        inputId: "char-wisdom",
        modId: "char-wisdommod",
    },
    {
        inputId: "char-charisma",
        modId: "char-charismamod",
    },
];

attributes.forEach((attribute) => {
    const input = document.getElementById(attribute.inputId);
    const modInput = document.getElementById(attribute.modId);

    input.addEventListener("input", function () {
        const attributeValue = parseInt(input.value);
        const modValue = calculateMod(attributeValue);
        modInput.value = modValue;
    });
});

// DESCRICAO RAÇA ---------------------------------------------------------------------------------------
const raceSelect = document.getElementById('char-race');
const raceDescriptionDiv = document.getElementById('race-description');

raceSelect.addEventListener('change', function () {
    const selectedRace = raceSelect.value;
    let raceTitle = '';
    let raceDescription = '';

    switch (selectedRace) {
        case 'human':
            raceTitle = 'Humano';
            raceDescription = 'Humans are a versatile race known for their adaptability and ambition. They are found in various societies and environments, excelling in diverse fields.';
            break;
        case 'elf':
            raceTitle = 'Elfo';
            raceDescription = 'Elves are an elegant and long-lived race with a deep connection to nature. They are known for their grace, keen senses, and proficiency in archery and magic.';
            break;
        // Adicione outros casos para as outras raças aqui
        case 'aarakocra':
            raceTitle = 'Aarakocra';
            raceDescription = 'Aarakocra are bird-like humanoids with the ability to fly. They live in high mountainous regions and are skilled in aerial combat and scouting.';
            break;
        case 'aasimar':
            raceTitle = 'Aasimar';
            raceDescription = 'Aasimar are celestial descendants with divine traits. They are often noble and possess abilities related to their celestial ancestry.';
            break;
        case 'airgenasi':
            raceTitle = 'Air Genasi';
            raceDescription = 'Air Genasi are infused with the power of air elementals. They have air-related abilities and are known for their agility and connection to the sky.';
            break;
        case 'bugbear':
            raceTitle = 'Bugbear';
            raceDescription = 'Bugbears are large and strong goblinoids. They are known for their stealth and brutality, often making them skilled in ambushes.';
            break;
        case 'centaur':
            raceTitle = 'Centaur';
            raceDescription = 'Centaur are half-human, half-horse creatures. They are skilled in archery, hunting, and are often guardians of the wilderness.';
            break;
        case 'changeling':
            raceTitle = 'Changeling';
            raceDescription = 'Changelings are shapeshifters with the ability to change their appearance. They are skilled in subterfuge and disguise.';
            break;
        case 'deepgnome':
            raceTitle = 'Deep Gnome';
            raceDescription = 'Deep Gnomes, or Svirfneblin, are subterranean gnomes known for their stealth and connection to the Underdark.';
            break;
        case 'dragonborn':
            raceTitle = 'Dragonborn';
            raceDescription = 'Dragonborn are dragon-like humanoids with breath weapons and dragon ancestry. They often have strong personalities.';
            break;
        case 'duergar':
            raceTitle = 'Duergar';
            raceDescription = 'Duergar are dark dwarves who dwell underground. They are known for their resilience and innate magical abilities.';
            break;
        case 'dwarf':
            raceTitle = 'Dwarf';
            raceDescription = 'Dwarves are stout and tough humanoids with a deep connection to the earth. They excel in craftsmanship and combat.';
            break;
        case 'earthgenasi':
            raceTitle = 'Earth Genasi';
            raceDescription = 'Earth Genasi are infused with the power of earth elementals. They have earth-related abilities and are known for their endurance and stability.';
            break;
        case 'highelves':
            raceTitle = 'Alto Elfo';
            raceDescription = 'Os elfos altos são uma sub-raça dos elfos conhecida por sua afinidade com a magia, destreza e beleza.';
            break;
        case 'avariel':
            raceTitle = 'Elfos Alados (Avariel)';
            raceDescription = 'Os avariel são uma rara sub-raça de elfos que possuem asas e podem voar. Eles são ligados ao céu e ao vento.';
            break;
        case 'eladrin':
            raceTitle = 'Eladrin';
            raceDescription = 'Os eladrin são elfos que têm uma forte conexão com o plano das fadas e são conhecidos por sua graça e magia.';
            break;
        case 'woodelves':
            raceTitle = 'Elfo da Floresta';
            raceDescription = 'Os elfos da floresta são uma sub-raça de elfos que vivem em harmonia com a natureza e são excelentes arqueiros.';
            break;
        case 'seaelves':
            raceTitle = 'Elfo do Mar';
            raceDescription = 'Os elfos do mar são uma sub-raça de elfos que habitam as regiões costeiras e são hábeis nadadores e navegadores.';
            break;
        case 'wildelves':
            raceTitle = 'Elfos Selvagens';
            raceDescription = 'Os elfos selvagens são nômades e possuem uma profunda conexão com a vida selvagem e a natureza.';
            break;
        case 'darkelves':
            raceTitle = 'Elfo Negro (Drow)';
            raceDescription = 'Os elfos negros, ou drow, vivem nas profundezas subterrâneas e são conhecidos por sua magia e sociedade complexa.';
            break;
        case 'greyelves':
            raceTitle = 'Grey elves';
            raceDescription = 'Grey elves are a reclusive subrace of elves known for their intelligence and magic proficiency.';
            break;
        case 'fairy':
            raceTitle = 'Fairy';
            raceDescription = 'Fairies are small, magical beings known for their playful nature and connection to the natural world.';
            break;
        case 'gnome':
            raceTitle = 'Gnome';
            raceDescription = 'Gnomes are small, clever humanoids with a knack for inventing and an affinity for illusions.';
            break;
        case 'halfelf':
            raceTitle = 'Half-Elf';
            raceDescription = 'Half-Elves are a hybrid race with human and elven ancestry, often having the best qualities of both races.';
            break;
        case 'halfling':
            raceTitle = 'Halfling';
            raceDescription = 'Halflings are small and nimble folk known for their love of comfort, food, and a simple, happy life.';
            break;
        case 'halforc':
            raceTitle = 'Half-Orc';
            raceDescription = 'Half-Orcs are strong and robust, born of human and orc parentage, often possessing both races\' strengths.';
            break;
        case 'tiefling':
            raceTitle = 'Tiefling';
            raceDescription = 'Tieflings are descendants of fiends, with infernal traits and a struggle against their dark ancestry.';
            break;

        default:
            raceTitle = 'Ancestralidade';
            raceDescription = 'Selecione uma ancestralidade para ver a descrição.';
    }

    raceDescriptionDiv.innerHTML = `<h2>${raceTitle}</h2><p>${raceDescription}</p>`;
});

// Disparar manualmente o evento "change" no carregamento da página
window.addEventListener('load', function () {
    const raceSelect = document.getElementById('char-race');
    raceSelect.dispatchEvent(new Event('change'));
});

// DESCRICAO CLASSEs ---------------------------------------------------------------------------------------
const classSelect = document.getElementById('char-class');
const classDescriptionDiv = document.getElementById('class-description');

classSelect.addEventListener('change', function () {
    const selectedClass = classSelect.value;
    let classTitle = '';
    let classDescription = '';

    switch (selectedClass) {
        case 'artificer':
            classTitle = 'Artífice';
            classDescription = 'O Artífice é conhecido por ser um engenhoqueiro, construindo seus itens mágicos, manejando bombas e outros itens alquímicos enquanto utiliza armas de fogo ou varinhas de carga ilimitada.</br></br><span class="descriçãomenor"><b>Dado de Vida:</b> </br><b>PV níveis posteriores:</b></br><b>Armas:</b> </br><b>Armaduras:</b> </br><b>Ferramentas:</b> </b></br><b>Testes de Resistência:</b> </br><b>Perícias:</b> </br></br></span><a target="_blank" href="">Mais informações</a>';
            break;
        case 'barbarian':
            classTitle = 'Bárbaro';
            classDescription = 'Bárbaros, independente de quão diferentes sejam, são definidos por sua fúria: Inigualável, insuperável e invencível. Mais do que uma mera emoção, essa raiva é a ferocidade de um predador encurralado, a fúria inaplacável da tempestade, a ira infinita do mar. Para alguns sua fúria vem da comunhão com espíritos, para outros é uma reserva de ira contra um mundo repleto de dor. Para cada bárbaro a fúria é um poder que não apenas rega seu frenesi de batalha, mas também seus reflexos, resiliência e feitos de força</br></br><span class="descriçãomenor"><b>Dado de Vida:</b> D12+ Modificador de Constituição</br><b>PV níveis posteriores:</b> 1d12 (ou 7) + Modificador de Constituição</br><b>Armas:</b> Simples, marciais</br><b>Armaduras:</b> Leves, médias</br><b>Ferramentas:</b> Nenhuma</b></br><b>Testes de Resistência:</b> Força, Constituição</br><b>Perícias:</b> Duas entre Adestramento, Atletismo, Intimidar, Natureza, Percepção, Sobrevivência</br></br></span><a target="_blank" href="https://thesunderingtale.blogspot.com/2017/12/d-5e-barbaro.html">Mais informações</a>';
            break;
        case 'bard':
            classTitle = 'Bardo';
            classDescription = 'Bardo é um conjurador de magias inspirador, influenciador e manipulador. Muitos bardos são eruditos, outros tanto são patifes, alguns são espiões, mas o que os une é a forma como usam suas palavras e músicas para moldar as mentes dos ouvintes, inspirando ou desmoralizando, além de serem capazes de criar ilusões e, até mesmo, curar ferimentos.</br></br>Bardos são extremamente versáteis e podem usar suas habilidades e magias para combater a distância, combater corpo a corpo, ficar a distância fazendo com que seus aliados lutem de forma mais efetiva ou tornando seus adversários menos efetivos. Se causar dano não é seu forte normalmente, suas habilidades de ilusão e encantamento permitem que eles transitem entre o ataque e defesa com muita qualidade. Eles também são úteis em campanhas e investigação, de negociação e de infiltração.</br></br><span class="descriçãomenor"><b>Dado de Vida:</b> D8+ Modificador de Constituição</br><b>PV níveis posteriores:</b> 1d8 (ou 5) + Modificador de Constituição</br><b>Armas:</b> Simples, besta de mão, espada curta, espada longa, rapieira</br><b>Armaduras:</b> Leves</br><b>Ferramentas:</b> Escolha três instrumentos musicais</br><b>Testes de Resistência:</b> Destreza e Carisma</br><b>Perícias:</b> Escolha três que quiser</br><b>Habilidade de Conjuração:</b> Carisma</br></br></span><a target="_blank" href="https://thesunderingtale.blogspot.com/2017/12/d-5e-bardo.html">Mais informações</a>';
            break;
        case 'cleric':
            classTitle = 'Clérigo';
            classDescription = 'Clérigos são intermediários do divino e defensores ferrenhos da vontade de seus patronos entre os mortais. Abençoados com magia divina, Clérigos tem propósitos e tendencias tão vastas e variadas quanto as divindades que podem ser encontradas no multiverso. Um clérigo pode se aventurar entre os reinos intercedendo em benefício de outras pessoas, tentando usar seus poderes para ampliar a crença em sua divindade, ou incutindo-lhes seus valores e crenças através do terror, enquanto louva seu Deus no campo de batalha subjugando seus inimigos.</br></br>Dependendo do seu deus o clérigo pode ser um ser positivo ou negativo, um missionário ou sacerdote até um cultista ou necromante, existe varias áreas e opções, já que cada divindade possui dogmas e preceitos que trazem papéis completamente diferentes umas das outras.</br></br>Uma vez escolhida a divindade, considere qual o seu relacionamento com aquele deus. Você começou a servi-lo por vontade própria? Ou foi o deus que escolheu você,induzindo-o a servi-lo sem considerar sua vontade? Como os outros servos desse deus veem você: como um líder ou como um estorvo? Quais são seus objetivos maiores? A sua divindade tem algum plano especial para você? Ou você está tentando provar-se digno de uma causa maior?';
            break;
        case 'druid':
            classTitle = 'Druid';
            classDescription = 'Ainda não coloquei.';
            break;
        case 'fighter':
            classTitle = 'Fighter';
            classDescription = 'Ainda não coloquei.';
            break;
        case 'monk':
            classTitle = 'Monk';
            classDescription = 'Ainda não coloquei.';
            break;
        case 'paladin':
            classTitle = 'Paladin';
            classDescription = 'Ainda não coloquei.';
            break;
        case 'ranger':
            classTitle = 'Ranger';
            classDescription = 'Ainda não coloquei.';
            break;
        case 'rogue':
            classTitle = 'Rogue';
            classDescription = 'Ainda não coloquei.';
            break;
        case 'sorcerer':
            classTitle = 'Sorcerer';
            classDescription = 'Ainda não coloquei.';
            break;
        case 'warlock':
            classTitle = 'Warlock';
            classDescription = 'Ainda não coloquei.';
            break;
        case 'wizard':
            classTitle = 'Wizard';
            classDescription = 'Ainda não coloquei.';
            break;
        default:
            classTitle = 'Classe';
            classDescription = 'Selecione uma classe para ver a descrição.';
    }

    classDescriptionDiv.innerHTML = `<h2>${classTitle}</h2><p>${classDescription}</p>`;
});

// Disparar manualmente o evento "change" no carregamento da página
window.addEventListener('load', function () {
    const classSelect = document.getElementById('char-class');
    classSelect.dispatchEvent(new Event('change'));
});

//DESCRIÇÃO ALINHAMENTO ------------------------------------------------------------------
const godSelect = document.getElementById('char-gods');
const godsdescriptionDiv = document.getElementById('gods-description');

godSelect.addEventListener('change', function () {
    const selectedGod = godSelect.value;
    let godstitle = '';
    let godsdescription = '';

    switch (selectedGod) {
        case 'unaffiliated':
            godstitle = 'Não afiliado';
            godsdescription = 'Este personagem é um indivíduo que não segue os ensinamentos de nenhuma divindade específica. Eles podem ser céticos em relação às divindades ou simplesmente não ter interesse em se alinhar com nenhuma fé religiosa. Em vez disso, eles confiam em suas próprias habilidades, ética e moral para guiar suas ações.';
            break;
        case 'auril':
            godstitle = 'Auril, deusa do inverno';
            godsdescription = 'Auril é a deusa do inverno, conhecida por sua influência sobre o frio e o gelo. Ela é muitas vezes adorada por aqueles que enfrentam os desafios do inverno e por cultos que buscam poder através do domínio das temperaturas gélidas.';
            break;
        case 'azuth':
            godstitle = 'Azuth, deus dos magos';
            godsdescription = 'Azuth é o deus dos magos e feiticeiros, sendo venerado por todos aqueles que buscam o conhecimento e o domínio das artes mágicas. Ele é considerado o Senhor dos Feiticeiros e o guardião dos segredos arcanos.';
            break;
        case 'bane':
            godstitle = 'Bane, deus da tirania';
            godsdescription = 'Bane é o deus da tirania e do domínio. Ele é adorado por aqueles que buscam o poder absoluto e não têm escrúpulos em usar a opressão e a força para alcançar seus objetivos.';
            break;
        case 'beshaba':
            godstitle = 'Beshaba, deusa do infortúnio';
            godsdescription = 'Beshaba é a deusa da má sorte e do infortúnio. Ela é frequentemente adorada por aqueles que buscam causar caos e desgraça aos outros. Aqueles que têm azar costumam apelar para ela em busca de misericórdia ou para afastar sua influência negativa.';
            break;
        case 'bhaal':
            godstitle = 'Bhaal, deus do assassinato';
            godsdescription = 'Bhaal é o deus do assassinato e da morte violenta. Ele é adorado por assassinos e cultistas sanguinários que buscam derramamento de sangue e morte. Seu culto muitas vezes envolve rituais sombrios e sacrifícios humanos.';
            break;
        case 'chauntea':
            godstitle = 'Chauntea, deusa da agricultura';
            godsdescription = 'Chauntea é a deusa da agricultura e da natureza. Ela é adorada por fazendeiros, jardineiros e todos aqueles que dependem da terra para sustento. Sua influência está ligada ao crescimento das colheitas e à fertilidade da terra.';
            break;
        case 'cyric':
            godstitle = 'Cyric, deus das mentiras';
            godsdescription = 'Cyric é o deus das mentiras e da traição. Ele é adorado por aqueles que buscam enganar e manipular os outros para obter poder. Seu culto é muitas vezes envolto em segredos e conspirações.';
            break;
        case 'deneir':
            godstitle = 'Deneir, deus da escrita';
            godsdescription = 'Deneir é o deus da escrita e da literatura. Ele é venerado por escribas, historiadores e todos aqueles que valorizam o conhecimento registrado. Sua influência está ligada à preservação da história e do saber.';
            break;
        case 'eldath':
            godstitle = 'Eldath, deusa da paz';
            godsdescription = 'Eldath é a deusa da paz e da serenidade. Ela é adorada por aqueles que buscam a harmonia e a resolução pacífica de conflitos. Sua influência está ligada à tranquilidade e à proteção da natureza.';
            break;
        case 'gond':
            godstitle = 'Gond, deus da invenção';
            godsdescription = 'Gond é o deus da arte e da invenção. Ele é adorado por artesãos, engenheiros e inventores que buscam inspiração para criar novas obras. Sua influência está ligada à criatividade e à engenhosidade.';
            break;
        case 'helm':
            godstitle = 'Helm, deus da proteção';
            godsdescription = 'Helm é o deus da proteção e da guarda. Ele é venerado por guerreiros e guardiões que juram defender os outros. Sua influência está ligada à vigilância e à lealdade.';
            break;
        case 'ilmater':
            godstitle = 'Ilmater, deus da resistência';
            godsdescription = 'Ilmater é o deus da resistência e do sofrimento. Ele é adorado por aqueles que enfrentam adversidades e buscam força para suportar o tormento. Sua influência está ligada à compaixão e à capacidade de resistir à dor.';
            break;
        case 'kelemvor':
            godstitle = 'Kelemvor, deus dos mortos';
            godsdescription = 'Kelemvor é o deus dos mortos e do julgamento. Ele é venerado por aqueles que buscam a justiça após a morte e a passagem tranquila para o além. Sua influência está ligada ao destino dos espíritos após a vida.';
            break;
        case 'lathander':
            godstitle = 'Lathander, deus do nascimento e da renovação';
            godsdescription = 'Lathander é o deus do nascimento e da renovação. Ele é adorado por aqueles que celebram o início de novos ciclos e o renascimento da esperança. Sua influência está ligada à aurora e ao potencial de um novo dia.';
            break;
        case 'leira':
            godstitle = 'Leira, deusa da ilusão';
            godsdescription = 'Leira é a deusa da ilusão e do engano. Ela é venerada por ilusionistas e artistas que usam truques para confundir os sentidos. Sua influência está ligada à natureza ilusória da realidade.';
            break;
        case 'lliira':
            godstitle = 'Lliira, deusa da alegria';
            godsdescription = 'Lliira é a deusa da alegria e da celebração. Ela é adorada por aqueles que buscam a felicidade e a diversão na vida. Sua influência está ligada à festa e à exuberância.';
            break;
        case 'loviatar':
            godstitle = 'Loviatar, deusa do sofrimento';
            godsdescription = 'Loviatar é a deusa da dor e do sofrimento. Ela é venerada por masoquistas e torturadores que buscam prazer na crueldade. Sua influência está ligada à punição e à submissão à dor.';
            break;
        case 'malar':
            godstitle = 'Malar, deus da caça';
            godsdescription = 'Malar é o deus da caça e da fera. Ele é adorado por caçadores e cultistas que reverenciam a selvageria e a brutalidade da natureza. Sua influência está ligada à caça e à destruição.';
            break;
        case 'mask':
            godstitle = 'Mask, deus dos ladrões';
            godsdescription = 'Mask é o deus dos ladrões e dos enganos. Ele é venerado por aqueles que praticam furtos e trapaças. Sua influência está ligada à dissimulação e à astúcia.';
            break;
        case 'mielikki':
            godstitle = 'Mielikki, deusa das florestas';
            godsdescription = 'Mielikki é a deusa das florestas e da vida selvagem. Ela é adorada por druidas, rangers e todos aqueles que reverenciam a natureza intocada. Sua influência está ligada à preservação das florestas e ao equilíbrio ecológico.';
            break;
        case 'milil':
            godstitle = 'Milil, deus da poesia e da música';
            godsdescription = 'Milil é o deus da poesia e da música. Ele é venerado por bardos e artistas que buscam inspiração para suas obras. Sua influência está ligada à criatividade artística e à expressão através da música e da palavra.';
            break;
        case 'myrkul':
            godstitle = 'Myrkul, deus da morte';
            godsdescription = 'Myrkul é o deus da morte e do além. Ele é adorado por necromantes e cultistas da morte que buscam controlar o destino dos mortos. Sua influência está ligada ao reino dos mortos e à passagem para o além.';
            break;
        case 'mystra':
            godstitle = 'Mystra, deusa da magia';
            godsdescription = 'Mystra é a deusa da magia e dos arcanos. Ela é venerada por magos e feiticeiros que buscam aprofundar seu conhecimento mágico. Sua influência está ligada à essência da magia e ao equilíbrio das energias arcanas.';
            break;
        case 'oghma':
            godstitle = 'Oghma, deus do conhecimento';
            godsdescription = 'Oghma é o deus do conhecimento e da sabedoria. Ele é adorado por estudiosos e pesquisadores que buscam desvendar os segredos do universo. Sua influência está ligada à busca do conhecimento e à preservação das histórias.';
            break;
        case 'savras':
            godstitle = 'Savras, deus da adivinhação e do destino';
            godsdescription = 'Savras é o deus da adivinhação e do destino. Ele é venerado por adivinhos e oráculos que buscam desvendar os mistérios do futuro. Sua influência está ligada à previsão e à compreensão do destino.';
            break;
        case 'selune':
            godstitle = 'Selûne, deusa da lua';
            godsdescription = 'Selûne é a deusa da lua e da noite. Ela é adorada por aqueles que reverenciam a beleza e o mistério da lua. Sua influência está ligada à luz noturna e à proteção durante a escuridão.';
            break;
        case 'shar':
            godstitle = 'Shar, deusa das trevas e da perda';
            godsdescription = 'Shar é a deusa das trevas e da perda. Ela é venerada por cultistas que abraçam a escuridão e a destruição. Sua influência está ligada à escuridão da alma e à aceitação da perda e do sofrimento.';
            break;
        case 'silvanus':
            godstitle = 'Silvanus, deus da natureza selvagem';
            godsdescription = 'Silvanus é o deus da natureza selvagem e das florestas. Ele é adorado por druidas e protetores da natureza que buscam preservar os ecossistemas intocados. Sua influência está ligada à harmonia com a natureza e à proteção das áreas naturais.';
            break;
        case 'sune':
            godstitle = 'Sune, deusa do amor e da beleza';
            godsdescription = 'Sune é a deusa do amor e da beleza. Ela é adorada por todos aqueles que valorizam o amor, o romance e a estética. Sua influência está ligada à paixão e à busca da beleza em todas as coisas.';
            break;
        case 'talona':
            godstitle = 'Talona, deusa das doenças e dos venenos';
            godsdescription = 'Talona é a deusa das doenças e dos venenos. Ela é venerada por aqueles que desejam espalhar epidemias e morte. Sua influência está ligada à destruição causada por doenças e venenos.';
            break;
        case 'talos':
            godstitle = 'Talos, deus das tempestades';
            godsdescription = 'Talos é o deus das tempestades e da fúria natural. Ele é adorado por aqueles que reverenciam o poder destrutivo das tempestades. Sua influência está ligada à força da natureza e à ira dos elementos.';
            break;
        case 'tempus':
            godstitle = 'Tempus, deus da guerra';
            godsdescription = 'Tempus é o deus da guerra e do combate. Ele é adorado por guerreiros e soldados que buscam coragem em batalha. Sua influência está ligada à estratégia militar e ao caos do campo de batalha.';
            break;
        case 'torm':
            godstitle = 'Torm, deus da coragem e do sacrifício próprio';
            godsdescription = 'Torm é o deus da coragem e do sacrifício próprio. Ele é venerado por aqueles que valorizam a bravura e a proteção dos outros. Sua influência está ligada ao dever e à devoção à justiça.';
            break;
        case 'tymora':
            godstitle = 'Tymora, deusa da boa sorte';
            godsdescription = 'Tymora é a deusa da boa sorte e da fortuna. Ela é adorada por jogadores, aventureiros e todos aqueles que buscam a sorte em suas vidas. Sua influência está ligada à aleatoriedade dos eventos e à esperança de um futuro melhor.';
            break;
        case 'tyr':
            godstitle = 'Tyr, deus da justiça';
            godsdescription = 'Tyr é o deus da justiça e do dever. Ele é adorado por paladinos e juízes que buscam a aplicação imparcial da lei. Sua influência está ligada ao julgamento e à busca da verdade.';
            break;
        case 'umberlee':
            godstitle = 'Umberlee, deusa do mar';
            godsdescription = 'Umberlee é a deusa do mar e das tempestades. Ela é venerada por marinheiros e piratas que buscam proteção nas águas perigosas. Sua influência está ligada ao oceano selvagem e à imprevisibilidade das marés.';
            break;
        case 'waukeen':
            godstitle = 'Waukeen, deusa do comércio';
            godsdescription = 'Waukeen é a deusa do comércio e do lucro. Ela é adorada por mercadores e comerciantes que buscam prosperidade nos negócios. Sua influência está ligada à riqueza material e ao sucesso financeiro.';
            break;
        default:
            godstitle = 'Religião';
            godsdescription = 'Selecione uma religião para ver a descrição.';
    }

    godsdescriptionDiv.innerHTML = `<h2>${godstitle}</h2><p>${godsdescription}</p>`;
});

// Disparar manualmente o evento "change" no carregamento da página
window.addEventListener('load', function () {
    const godSelect = document.getElementById('char-gods');
    godSelect.dispatchEvent(new Event('change'));
});
