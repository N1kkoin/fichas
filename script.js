
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

                // Atualize a descrição do alinhamento com base na escolha do arquivo JSON
                const alignmentSelect = document.getElementById('char-alignment');
                alignmentSelect.value = characterData.alignment; // Atualize a seleção

                // Manualmente disparar o evento 'change' no elemento select
                var event = new Event('change', { bubbles: true });
                alignmentSelect.dispatchEvent(event);

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

//DESCRIÇÃO ALINHAMENTO ------------------------------------------------------------------
const alignmentSelect = document.getElementById('char-alignment');
const descriptionDiv = document.getElementById('alignment-description');

alignmentSelect.addEventListener('change', function () {
    const selectedAlignment = alignmentSelect.value;
    let title = '';
    let description = '';

    switch (selectedAlignment) {
        case 'lawfulgoodaligment':
            title = 'Lawful Good';
            description = 'Ordeiro e Bom (Lawful Good) age conforme se espera ou é requerido de uma pessoa boa. Ele combina o compromisso de se opor ao mal com a disciplina de lutar incansavelmente. Ele diz a verdade, mantém sua palavra, ajuda aqueles que precisam e denuncia a injustiça. Um personagem de alinhamento "leal e bom" detesta ver os culpados escaparem impunes. </br></br><span class="positivo">Positivo:</span> é o melhor alinhamento que alguém pode ter porque combina honra e compaixão. </br></br><span class="negativo">Negativo:</span> pode ser um alinhamento perigoso quando restringe a liberdade e criminaliza o interesse próprio. </br></br> <a target="_blank" href="https://easydamus.com/lawfulgood.html">Mais informações</a>';
            break;
        case 'neutralgoodaligment':
            title = 'Neutral Good';
            description = 'Neutro e Bom (Neutral Good) faz o melhor que uma pessoa boa pode fazer. Ele é dedicado a ajudar os outros. Ele trabalha com reis e magistrados, mas não se sente obrigado a eles. </br></br><span class="positivo">Positivo:</span> é o melhor alinhamento que alguém pode ter, pois significa fazer o que é bom sem viés a favor ou contra a ordem. </br></br><span class="negativo">Negativo:</span> pode ser um alinhamento perigoso quando promove a mediocridade ao limitar as ações dos verdadeiramente capazes.</br></br><a target="_blank" href="https://easydamus.com/neutralgood.html">Mais informações</a>';
            break;
        case 'chaoticgoodaligment':
            title = 'Chaotic Good';
            description = 'Caótico e Bom (Chaotic Good) age conforme sua consciência o direciona, com pouca consideração pelo que os outros esperam dele. Ele traça seu próprio caminho, mas é amável e benevolente. Ele acredita na bondade e no que é correto, mas tem pouca consideração pelas leis e regulamentos. Ele detesta quando as pessoas tentam intimidar os outros e dizer-lhes o que fazer. Ele segue sua própria bússola moral, que, embora seja boa, pode não estar de acordo com a da sociedade. </br></br><span class="positivo">Positivo:</span> é o melhor alinhamento que alguém pode ter porque combina um coração bondoso com um espírito livre. </br></br><span class="negativo">Negativo:</span>  pode ser um alinhamento perigoso quando perturba a ordem da sociedade e pune aqueles que se saem bem por si mesmos.</br></br><a target="_blank" href="https://easydamus.com/chaoticgood.html">Mais informações</a>';
            break;
        case 'lawfulneutralaligment':
            title = 'Lawful Neutral';
            description = 'Ordeiro e Neutro (Lawful Neutral) age conforme a lei, a tradição ou um código pessoal a direciona. A ordem e a organização são de extrema importância para ele. Ele pode acreditar em uma ordem pessoal e viver de acordo com um código ou padrão, ou pode acreditar em uma ordem para todos e favorecer um governo forte e organizado. </br></br><span class="positivo">Positivo:</span>é o melhor alinhamento que alguém pode ter porque significa que você é confiável e honrado sem ser um fanático. </br></br><span class="negativo">Negativo:</span>  pode ser um alinhamento perigoso quando busca eliminar toda a liberdade, escolha e diversidade na sociedade.</br></br><a target="_blank" href="https://easydamus.com/lawfulneutral.html">Mais informações</a>';
            break;
        case 'trueneutralaligment':
            title = 'True Neutral';
            description = 'Neutro Verdadeiro (True Neutral) faz o que parece ser uma boa ideia. Ela não tem fortes inclinações quando se trata de bem contra mal ou ordem contra caos. A maioria dos personagens neutros exibe uma falta de convicção ou viés, em vez de um compromisso com a neutralidade. Um personagem assim considera o bem melhor do que o mal, afinal, ela preferiria ter vizinhos e governantes bons do que maus. Ainda assim, ela não está pessoalmente comprometida em defender o bem de forma abstrata ou universal.</br></br>Alguns personagens neutros, por outro lado, se comprometem filosoficamente com a neutralidade. Eles veem o bem, o mal, a lei e o caos como preconceitos e extremos perigosos. Eles advogam o caminho do meio da neutralidade como o melhor e mais equilibrado a longo prazo.</br></br><span class="positivo">Positivo:</span> é o melhor alinhamento que alguém pode ter porque significa agir naturalmente, sem preconceito ou compulsão. </br></br><span class="negativo">Negativo:</span> pode ser um alinhamento perigoso quando representa apatia, indiferença e falta de convicção.</br></br><a target="_blank" href="https://easydamus.com/trueneutral.html">Mais informações</a>';
            break;
        case 'chaoticneutralaligment':
            title = 'Chaotic Neutral';
            description = 'Caótico e Neutro (Chaotic Neutral) segue seus caprichos. Ele é um individualista em primeiro e último lugar. Valoriza sua própria liberdade, mas não se esforça para proteger a liberdade dos outros. Evita a autoridade, ressente as restrições e desafia tradições. Um personagem "caótico e neutro" não perturba intencionalmente organizações como parte de uma campanha de anarquia. Para fazer isso, ele teria que ser motivado pelo bem (e o desejo de libertar os outros) ou pelo mal (e o desejo de fazer aqueles diferentes dele sofrerem). Um personagem "caótico e neutro" pode ser imprevisível, mas seu comportamento não é totalmente aleatório. Ele não é tão propenso a pular de uma ponte como a atravessá-la. </br></br><span class="positivo">Positivo:</span> é o melhor alinhamento que alguém pode ter porque representa verdadeira liberdade das restrições da sociedade e do fanatismo de fazer o bem.</br></br><span class="negativo">Negativo:</span> pode ser um alinhamento perigoso quando busca eliminar toda autoridade, harmonia e ordem na sociedade.</br></br><a target="_blank" href="https://easydamus.com/chaoticneutral.html">Mais informações</a>';
            break;
        case 'lawfulevilaligment':
            title = 'Lawful Evil';
            description = 'Ordeiro e Mau (Lawful Evil) age metodicamente para obter o que deseja dentro dos limites de seu código de conduta, sem se importar com quem ele prejudica. Ele valoriza a tradição, lealdade e ordem, mas não se preocupa com liberdade, dignidade ou vida. Ele joga de acordo com as regras, mas sem misericórdia ou compaixão. Ele se sente à vontade em uma hierarquia e gostaria de governar, mas está disposto a servir. Ele condena os outros não de acordo com suas ações, mas sim de acordo com raça, religião, terra natal ou posição social. Ele reluta em quebrar leis ou promessas.</br></br>Essa relutância parte em parte de sua natureza e em parte porque ele depende da ordem para se proteger daqueles que se opõem a ele por motivos morais. Alguns vilões leais malignos têm tabus particulares, como não matar a sangue frio (mas fazendo com que subordinados o façam) ou não deixar que crianças sofram danos (se puder ser evitado). Eles imaginam que esses escrúpulos os elevam acima de vilões sem princípios.</br></br>Algumas pessoas e criaturas leais malignas se comprometem com o mal com o mesmo zelo que um cruzado se compromete com o bem. Além de estar dispostos a prejudicar os outros para alcançar seus objetivos, eles encontram prazer em espalhar o mal como um fim em si mesmo. Eles também podem ver fazer o mal como parte de um dever para um deus ou mestre maligno.</br></br><span class="positivo">Positivo:</span>Criaturas de alinhamento "leal e maligno" consideram seu alinhamento o melhor, porque combina honra com um interesse próprio dedicado.</br></br><span class="negativo">Negativo:</span>é o alinhamento mais perigoso, porque representa o mal metódico, intencional e frequentemente bem-sucedido.</br></br><a target="_blank" href="https://easydamus.com/lawfulevil.html">Mais informações</a>';
            break;
        case 'neutralevilaligment':
            title = 'Neutral Evil';
            description = 'Neutro e Maligno (Neutral Evil) faz o que puder para se safar. Ele está apenas interessado em si mesmo, simplesmente. Ele não derrama lágrimas por aqueles que mata, seja por lucro, diversão ou conveniência. Ele não tem amor pela ordem e não tem ilusão de que seguir leis, tradições ou códigos o tornaria melhor ou mais nobre. Por outro lado, ele não tem a natureza inquieta ou o amor pelo conflito que um vilão caótico e maligno (Chaotic Evil) tem. </br></br>Alguns vilões "neutros e malignos" defendem o mal como um ideal, cometendo o mal por seu próprio bem. Com mais frequência, esses vilões são devotos de deidades malignas ou sociedades secretas.</br></br><span class="positivo">Positivo:</span>Criaturas de alinhamento "neutro e maligno" considera seu alinhamento o melhor, porque podem avançar a si mesmos sem consideração pelos outros. </br></br><span class="negativo">Negativo:</span>é o alinhamento mais perigoso, porque representa o mal puro, sem honra e sem variação.</br></br><a target="_blank" href="https://easydamus.com/neutralevil.html">Mais informações</a>';
            break;
        case 'chaoticevilaligment':
            title = 'Chaotic Evil';
            description = 'Caótico e Maligno (Chaotic Evil) faz o que sua ganância, ódio e desejo de destruição o levam a fazer. Ele é de temperamento explosivo, cruel, arbitrariamente violento e imprevisível. Se ele está simplesmente atrás do que pode obter, ele é impiedoso e brutal. Se ele está comprometido com a disseminação do mal e do caos, é ainda pior. Felizmente, seus planos são caóticos, e qualquer grupo ao qual ele se junte ou forme é mal organizado. Normalmente, pessoas caóticas malignas só podem ser forçadas a trabalhar juntas, e seu líder dura apenas enquanto conseguir evitar tentativas de derrubá-lo ou assassiná-lo.</br></br><span class="positivo">Positivo:</span> Criaturas de alinhamento "caótico e maligno" acredita que seu alinhamento é o melhor, porque combina interesse próprio e liberdade pura. </br></br><span class="negativo">Negativo:</span> é o alinhamento mais perigoso, porque representa a destruição não apenas da beleza e da vida, mas também da ordem sobre a qual a beleza e a vida dependem.</br></br><a target="_blank" href="https://easydamus.com/chaoticevil.html">Mais informações</a>';
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
            raceTitle = 'Human';
            raceDescription = 'Humans are a versatile race known for their adaptability and ambition. They are found in various societies and environments, excelling in diverse fields.';
            break;
        case 'elf':
            raceTitle = 'Elf';
            raceDescription = 'Elves are an elegant and long-lived race with a deep connection to nature. They are known for their grace, keen senses, and proficiency in archery and magic.';
            break;
        // Adicione casos para outras raças conforme necessário

        default:
            raceTitle = 'Raça';
            raceDescription = 'Selecione uma raça para ver a descrição.';
    }

    raceDescriptionDiv.innerHTML = `<h2>${raceTitle}</h2><p>${raceDescription}</p>`;
});

// Disparar manualmente o evento "change" no carregamento da página
window.addEventListener('load', function () {
    const raceSelect = document.getElementById('char-race');
    raceSelect.dispatchEvent(new Event('change'));
});

// DESCRICAO CLASSE ---------------------------------------------------------------------------------------
const classSelect = document.getElementById('char-class');
const classDescriptionDiv = document.getElementById('class-description');

classSelect.addEventListener('change', function () {
    const selectedClass = classSelect.value;
    let classTitle = '';
    let classDescription = '';

    switch (selectedClass) {
        case 'artificer':
            classTitle = 'Artificer';
            classDescription = 'Artificers are skilled inventors and creators, blending magic and technology to achieve remarkable feats. They excel at crafting and infusing magic into everyday objects.';
            break;
        case 'barbarian':
            classTitle = 'Bárbaro';
            classDescription = 'Bárbaros, independente de quão diferentes sejam, são definidos por sua fúria: Inigualável, insuperável e invencível. Mais do que uma mera emoção, essa raiva é a ferocidade de um predador encurralado, a fúria inaplacável da tempestade, a ira infinita do mar. Para alguns sua fúria vem da comunhão com espíritos, para outros é uma reserva de ira contra um mundo repleto de dor. Para cada bárbaro a fúria é um poder que não apenas rega seu frenesi de batalha, mas também seus reflexos, resiliência e feitos de força.</br></br><b>BP (Bônus de Proficiência) Inicial:</b> <span class="positivo">+2</span> </br><b>Dado de Vida:</b> D12+ Modificador de Constituição</br><b>PV níveis posteriores:</b> 1d12 (ou 7) + Modificador de Constituição</br><b>Armas:</b> Simples, marciais.</br><b>Armaduras:</b> Leves, médias.</br><b>Testes de Resistência:</b> Força, Constituição.</br><b>Perícias:</b> Duas entre Adestramento, Atletismo, Intimidar, Natureza, Percepção, Sobrevivência.</br></br><a target="_blank" href="https://thesunderingtale.blogspot.com/2017/12/d-5e-barbaro.html">Mais informações</a>';
            break;
        case 'bard':
            classTitle = 'Bardo';
            classDescription = 'Bardo é um conjurador de magias inspirador, influenciador e manipulador. Muitos bardos são eruditos, outros tanto são patifes, alguns são espiões, mas o que os une é a forma como usam suas palavras e músicas para moldar as mentes dos ouvintes, inspirando ou desmoralizando, além de serem capazes de criar ilusões e, até mesmo, curar ferimentos.</br></br>Bardos são extremamente versáteis e podem usar suas habilidades e magias para combater a distância, combater corpo a corpo, ficar a distância fazendo com que seus aliados lutem de forma mais efetiva ou tornando seus adversários menos efetivos. Se causar dano não é seu forte normalmente, suas habilidades de ilusão e encantamento permitem que eles transitem entre o ataque e defesa com muita qualidade. Eles também são úteis em campanhas e investigação, de negociação e de infiltração.';
            break;
        case 'bloodhunter':
            classTitle = 'Blood Hunter';
            classDescription = 'Blood Hunters are hunters of the supernatural, specializing in tracking and eliminating creatures of darkness. They use forbidden knowledge and their own blood to gain power.';
            break;
        case 'cleric':
            classTitle = 'Clérigo';
            classDescription = 'Clérigos são conjuradores que recebem suas magias através de preces à divindade a qual veneram. Sua fé e devoção pela divindade são recompensados com poderes especiais e o clérigo não só segue os preceitos da divindade como a representam e espalham sua palavra no mundo. Clérigos tem uma relação íntima com a hierarquia religiosa, ainda que possam ser errantes e não desejar fazer “carreira” dentro da igreja. </br></br> Suas magias tendem a inspirar, curar e proteger seus aliados, e ele é capaz de usar armas e armaduras com alguma perícia, ainda que não seja o seu forte. Em geral, clérigos saem em aventuras por algum tipo de motivação divina mas, mesmo em aventura, os clérigos costumam manter alguma ligação com seu templo de origem e com outros templos da fé.</br></br>Dependendo do seu deus o clérigo pode ser um ser positivo ou negativo, um missionário ou sacerdote até um cultista ou necromante, existe varias áreas e opções, já que cada divindade possui dogmas e preceitos que trazem papéis completamente diferentes umas das outras.';
            break;
        case 'druid':
            classTitle = 'Druid';
            classDescription = 'Druids are nature-focused spellcasters and shape-shifters. They have a deep connection with the natural world, allowing them to change their form and command the elements.';
            break;
        case 'fighter':
            classTitle = 'Fighter';
            classDescription = 'Fighters are masters of combat, trained in a variety of weapons and tactics. They excel in physical combat and can specialize in various combat styles.';
            break;
        case 'monk':
            classTitle = 'Monk';
            classDescription = 'Monks are disciplined martial artists and spiritual practitioners. They use their bodies and minds in perfect harmony, making them fast, agile, and capable of incredible feats.';
            break;
        case 'paladin':
            classTitle = 'Paladin';
            classDescription = 'Paladins are holy knights, sworn to uphold justice and protect the innocent. They combine combat skills with divine magic, smiting evil and healing the wounded.';
            break;
        case 'ranger':
            classTitle = 'Ranger';
            classDescription = 'Rangers are skilled trackers and survivalists. They excel at ranged combat and are attuned to the natural world, making them exceptional hunters and scouts.';
            break;
        case 'rogue':
            classTitle = 'Rogue';
            classDescription = 'Rogues are agile and cunning adventurers. They excel in stealth, traps, and precision strikes. Their skills make them skilled thieves, spies, and assassins.';
            break;
        case 'sorcerer':
            classTitle = 'Sorcerer';
            classDescription = 'Sorcerers have innate magical abilities, drawing power from their bloodline. They can cast spells with raw magical energy and often have unique and unpredictable powers.';
            break;
        case 'warlock':
            classTitle = 'Warlock';
            classDescription = 'Warlocks make pacts with powerful otherworldly beings. They gain magical abilities in exchange for their service. Warlocks have a diverse range of magical options at their disposal.';
            break;
        case 'wizard':
            classTitle = 'Wizard';
            classDescription = 'Wizards are scholarly spellcasters who specialize in the arcane arts. They study and prepare spells, casting them with precision and control. Wizards are known for their vast spellbooks and magical knowledge.';
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
