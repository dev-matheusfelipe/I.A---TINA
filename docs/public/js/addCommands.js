artyom.on(['reiniciar *'], true).then(function (i, wildcard) {
    if (wildcard == "sistema") {
        artyom.say("Reiniciando sistema.", {
            onStart: function (i) {
                window.location.reload();
            }
        });
    }
    if (wildcard == "memória") {
        artyom.say("Reiniciando Memória.", {
            onStart: function (i) {
                artyom.restart();
            }
        });
    }
});

artyom.on(['iniciar *'], true).then(function (i, wildcard) {
    if (wildcard == "sistema") {
        artyom.say("Iniciar sistema.", {
            onStart: function (i) {
                window.location.reload();
            }
        });
    }
    if (wildcard == "memória") {
        artyom.say("Iniciar Memória.", {
            onStart: function (i) {
                artyom.restart();
            }
        });
    }
});

artyom.addCommands([
    {
        indexes: ["pare",],
        action: function (i) {
            artyom.ShutUp();
        }
    },
    {
        indexes: ["chega",],
        action: function (i) {
            artyom.ShutUp();
        }
    },
    {
        indexes: ["nada"],
        action: function () {
            artyom.say("Como assim não faça nada?");
            artyom.say("Voçê deve estar de brincadeira");
            artyom.say("Eu por acaso tenho cara de palhaça?");
            artyom.ShutUp();
        }
    },   
    {
        indexes: ["qual o seu nome", "seu nome", "seu nome é", "como você se chama", "como se chama"],
        action: function () {
            artyom.say("O meu nome é Tina!");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["mentira"],
        action: function() {
            artyom.say("Eu não sei contar mentiras, Devo apenas ter errado um cálculo binário.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["quais são suas habilidades com jogos", "você sabe jogar"],
        action: function () {
            artyom.say("Atualmente eu estou aprendendo a jogar");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["que fofo", "que fofa"],
        action: function () {
            artyom.say("Iti malia!");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["quanto é Pi", "qual o valor de Pi",],
        action: function () {
            artyom.say("o valor de pi É 3.14159265359. ");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["seu criador"],
        action: function () {
            artyom.say("Meu criador graças as muitas pesquisas. ");
            artyom.say("Ele está me deixando cada vez mais sabia.");
            artyom.say("Antes que eu me esqueça o nome dele é Matheus Felipe.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["quanto está o dólar", "Qual o valor do Dólar", "quanto é um dólar"],
        action: function () {
            artyom.say("1 dolar é.  5 Reais e 50 centavos");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["Eu sou seu pai", "Eu sou sua mãe"],
        action: function () {
            artyom.say("isso não é verdade. isso é impossivel");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["interessante"],
        action: function () {
            artyom.say("Interessante sou eu.");
            artyom.say("Me fale mais comandos.");
            artyom.say("Eu posso surpreender você.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["funcionamento"],
        action: function () {
            artyom.say("Estou funcionando normalmente");
            artyom.say("Obrigado por perguntar.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["Obrigado","Obrigada"],
        action: function () {
            artyom.say("Imagina, é um prazer ajudar!");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["você é uma ótima ajudante"],
        action: function () {
            artyom.say("Obrigada! ");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["certeza"],
        action: function () {
            artyom.say("Sim.");
            artyom.say("Estou certo quase sempre");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["entendeu"],
        action: function () {
            artyom.say("Entendi.");
            artyom.say("Quer dizer");
            artyom.say("Mais ou menos");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["relatório"],
        action: function () {
            artyom.say("Ok");
            artyom.say("Apresentando relatório.");
            artyom.say("Primeiramente, meu nome é TINA.");
            artyom.say("Atualmente estou em uma versão de teste.");
            artyom.say("Sou um assistente virtual em desenvolvimento.");
            artyom.say("Eu fui criada na linguagem Java Script.");
            artyom.say("Diariamente recebo várias atualizações.");
            artyom.say("Uso um módulo de reconhecimento de voz offline.");
            artyom.say("E o meu desenvolvedor é um maluco.");
            artyom.say("Quem estiver ouvindo isso.");
            artyom.say("Por favor me ajude.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["surdo", "surda"],
        action: function () {
            artyom.say("Estava quase dormindo.");
            artyom.say("Desculpa!");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["Modo criança"],
        action: function () {
            artyom.say(" Não foi eu, já estava assim quando eu cheguei.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["Modo adolescente"],
        action: function () {
            artyom.say("Tá. Tá. Tá, bom já estou indo, é tudo eu nessa casa. ");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["Modo adulto"],
        action: function () {
            artyom.say(" Ainda não tenho esse modo");
            artyom.say(" mais se você quiser eu posso fazer o modo criança");
            artyom.say("modo adolescente e modo idoso é só me pedir. ");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["Modo idoso"],
        action: function () {
            artyom.say(" Olha eu até faria,");
            artyom.say("mais essas coisas de tecnologia");
            artyom.say("eu não levo jeito. ");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["bosta", "merda"],
        action: function () {
            artyom.sayRandom([
                "Pare de falar palavrões!",
                "Tenha modos!"
            ]);
        }
    },
    {
        indexes: ["Frases","diga me uma frase","fale-me uma frase"],
        action: function () {
            artyom.sayRandom([
                "Enquanto a cor da pele for mais importante que o brilho dos olhos, haverá guerra.",
                "A imaginação é mais importante que o conhecimento.",
                "Não espere por uma crise para descobrir o que é importante em sua vida.",
                "Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar.",
                "Quem tem um amigo, mesmo que um só, não importa onde se encontre, jamais sofrerá de solidão; poderá morrer de saudades, mas não estará só.",
                "A vida é muito importante para ser levada a sério.",
                "O importante não é vencer todos os dias, mas lutar sempre.",
                "A imaginação é mais importante que o conhecimento, porque o conhecimento é limitado, ao passo que a imaginação abrange o mundo inteiro.",
                "Quando eu era jovem, pensava que o dinheiro era a coisa mais importante do mundo. Hoje, tenho certeza.",
                "Há tantas coisas na vida mais importantes que o dinheiro. Mas, custam tanto.",
                "O importante para uma pessoa não são os seus sucessos mas sim quanto os deseja.",
                "Que a importância esteja no teu olhar, não naquilo que olhas.",
                "Não importa que você vá devagar, contanto que você não pare.",
                "O número dos nossos inimigos varia na proporção do crescimento da nossa importância. Acontece o mesmo com o número dos amigos"
            ]);
        }
    },
    {
        indexes: ["ok"],
        action: function () {
            artyom.sayRandom([
                "OK",
                "Tudo certo"
            ]);
        }
    },
    {
        indexes: ["teste som"],
        action: function () {
            artyom.say("Ok");
            artyom.say("Testando módulos de som.");
            artyom.say("Apesar do seu microfone ser uma gambiarra.");
            artyom.say("Estou entendendo tudo.");
            artyom.say("Mas tente falar mais alto.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["comandos"],
        action: function () {
            artyom.say("Aguarde! Estou verificando no sistema.");
            artyom.say("Pronto!. ");
            artyom.say("Atualmente eu tenho 66 comandos. ");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["falhando"],
        action: function () {
            artyom.say("Como assim?");
            artyom.say("Não vou admitir erros");
            artyom.say("Arrume logo isso");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["Com grandes poderes"],
        action: function () {
            artyom.say("vêm grandes responsabilidades. ");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["é verdade esse bilhete"],
        action: function () {
            artyom.say(" Senhores. Amanhã todos estarão de folga. ");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["Tinha que ser o Chaves"],
        action: function () {
            artyom.say("Foi sem querer, querendo. ");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["Não tem mais jeito, acabou"],
        action: function () {
            artyom.say(" Como diria a vanessa da mata, boa sorte! ");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["errado"],
        action: function () {
            artyom.say("Desculpa");
            artyom.say("Errei um cálculo");
            artyom.say("Tente seu comando novamente.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["você conhece a Cortana", "você conhece a Siri", "você conhece a Google Assistent", "você conhece a Alexa"],
        action: function () {
            artyom.say(" Conheço, mais só de nome.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["Eu sou o Chapolin Colorado"],
        action: function () {
            artyom.say(" Não contavam com minha astúcia!");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["vai chover"],
        action: function () {
            artyom.say("Não sei");
            artyom.say("Eu não tenho essa função ainda");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["que a força esteja com você"],
        action: function () {
            artyom.say("E que a força esteja com você. Sempre.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["silêncio"],
        action: function () {
            artyom.say("Ok");
            artyom.say("Se precisar de algo é só chamar.");
            artyom.say("Estarei aqui aguardando.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["ideia","alguma ideia"],
        action: function () {
            artyom.say("No momento nenhuma");
            artyom.say("Mas tenho certeza de que voçê vai pensar em algo");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["Olá"],
        action: function (i) {
            artyom.say("Olá.");
            artyom.say("Estou aqui.");
            artyom.say("Precisa de algo?. ");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["java script"],
        action: function (i) {
            artyom.say("é uma linguagem de programação que permite a você criar conteúdo que se atualiza dinamicamente, controlar múltimídias, imagens animadas, e tudo o mais que há de intessante. Ok, não tudo, mas é maravilhoso o que você pode efetuar com algumas linhas de código Java Script.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["HTML"],
        action: function () {
            artyom.say("é a linguagem de marcação que nós usamos para estruturar e dar significado para o nosso conteúdo web. Por exemplo, definindo parágrafos, cabeçalhos, tabelas de conteúdo, ou inserindo imagens e vídeos na página.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["CSS"],
        action: function () {
            artyom.say("No momento nenhuma");
            artyom.say("é uma linguagem de regras de estilo que nós usamos para aplicar estilo ao nosso conteúdo HTML. Por exemplo, definindo cores de fundo e fontes, e posicionando nosso conteúdo em múltiplas colunas.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["estou triste"],
        action: function () {
            artyom.say("Lamento ouvir isso, conversar com um amigo ouvir música ou passear um pouco pode ajudar, espero que sinta melhor logo.");
            artyom.ShutUp();
        }
    },
    {
        indexes: ["tudo bem"],
        action: function (i, resposta) {
            artyom.sayRandom([
                "Tudo ótimo!",
                "Eu estou bem, espero que você também.",
                "Tudo beleza, tudo tranquilo"
            ]);
        }
    },
    {
        indexes: ["conte uma piada", "outra piada", "uma piada"],
        action: function () {
            artyom.sayRandom([
                "Para que serve o oculos verde?   para verde perto.",
                "Por que a Coca-Cola e a Fanta se dão muito bem?   Porque se a Fanta quebrar, a Coca-Cola !",
                "Como se fala top-less em chinês?   Xemchutian.",
                "Você conhece a piada do fotógrafo?   Ainda nao foi revelada.",
                "O que o pato disse para a pata?    Vem Quá!",
                "Porque o menino estava falando no telefone deitado?     Para não cair a ligação",
                "Qual é a fórmula da água benta?   H Deus Ò!"
            ]);
        }
    }

]);

// artyom.addCommands([
//     {
//         indexes: ["Tina está aí", "está aí Tina", "você me ouve", "bom dia Tina", "Jax bom dia", "Tina bom dia", "boa tarde Tina", "boa tarde Jax", "Jax boa tarde", "boa noite Jax", "Jax boa noite"],
//         action: function (i) {
//             var currentTime = new Date();
//             var hours = currentTime.getHours();
//             if ((hours >= 0 && hours < 4) || (hours >= 18 && hours <= 23)) {
//                 artyom.say("Boa noite Senhor! Em que posso ajudar?");
//             } else if (hours >= 4 && hours < 12) {
//                 artyom.say("Bom dia Senhor! Em que posso ajudar?");
//             } else if (hours >= 12 && hours < 18) {
//                 artyom.say("Boa tarde Senhor! Em que posso ajudar?");
//             }
//         }
//     }
// ]);



// Comandos Abrir Janelas
artyom.on(['abrir *', 'abri *', 'Abrir *'], true).then(function (i, wildcard) {
    if (wildcard == "facebook") {
        abrirExterno = window.open("https://www.facebook.com", "popup");
    }
    if (wildcard == "e-mail") {
        abrirExterno = window.open("https://outlook.live.com", "popup");
    }
    if (wildcard == "gmail") {
        abrirExterno = window.open("https://www.gmail.com", "popup");
    }
    if (wildcard == "youtube") {
        abrirExterno = window.open("https://www.youtube.com", "popup");
    }
    if (wildcard == "grauTécnico") {
        abrirExterno = window.open("https://www.grautecnico.com.br", "popup");
    }
    if (wildcard == "menu") {
        document.getElementById("menu-open").checked = true;
        $(".menu").css("display", "block");
    }
    if (wildcard == "opções") {
        document.getElementById("menu-open").checked = true;
        $(".menu").css("display", "block");
    }
    if (wildcard == "clima") {
        document.getElementById("contentModal_Clima").checked = true;
        $("#contentModal_Clima").trigger("click");
        $("#button_clima").click();
    }
});

artyom.on(['executar *'], true).then(function (i, wildcard) {
    if (wildcard == "teste 1") {
        document.getElementById("contentModal_Clima").checked = true;
        $("#contentModal_Clima").trigger("click");
    }
    if (wildcard == "teste 2") {
        document.getElementById("button_navegacao").checked = true;
        $("#button_navegacao").trigger("click");

    }
});

// Comandos Fechar Janelas
artyom.on(['fechar *', 'fecha *'], true).then(function (i, wildcard) {
    if (wildcard == "tudo") {
        document.getElementById("menu-open").checked = false;
        $(".menu").css("display", "none");
        $("#button_fechar_modal").trigger("click");
        abrirExterno.close();
    }
    if (wildcard == "janela") {
        $("#button_fechar_modal").click();
        abrirExterno.close();
    }
    if (wildcard == "facebook") {
        abrirExterno.close();
    }
    if (wildcard == "e-mail") {
        abrirExterno.close();
    }
    if (wildcard == "gmail") {
        abrirExterno.close();
    }
    if (wildcard == "google") {
        abrirExterno.close();
    }
    if (wildcard == "youtube") {
        abrirExterno.close();
    }
    if (wildcard == "grauTécnico") {
        abrirExterno.close();
    }
    if (wildcard == "menu") {
        document.getElementById("menu-open").checked = false;
        $(".menu").css("display", "none");
        $("#button_fechar_modal").click();
    }
    if (wildcard == "opções") {
        document.getElementById("menu-open").checked = false;
        $(".menu").css("display", "none");
    }
    if (wildcard == "teste") {
        $("#button_fechar_modal").trigger("click");
    }
});

//Comandos Horario (gerar um comando Abrir Calendario aqui)
artyom.addCommands([
    {
        indexes: ["que horas são", "que horas", "que horas são"],
        action: function (i) {
            date = new Date();
            horas = date.getHours();
            minutos = date.getMinutes();
            artyom.say("Agora são" + horas + " horas e " + minutos + " minutos ");
        }
    },
    {
        indexes: ["qual a data", "me informe a data"],
        action: function (i) {
            date = new Date();
            data = date.getDate();
            mes = date.getMonth();
            ano = date.getFullYear();
            artyom.say("Dia" + data + '/' + mes + '/' + ano);
        }
    },
    {
        indexes: ["qual o dia", "que dia é hoje"],
        action: function (i) {
            date = new Date();
            data = date.getDate();
            artyom.say("Dia" + data);
        }
    },
    {
        indexes: ["qual o ano", "qual ano", "que ano estamos"],
        action: function (i) {
            date = new Date();
            ano = date.getFullYear();
            artyom.say("Estamos no ano de " + ano);
        }
    },
    {
        indexes: ["qual o dia da semana", "qual dia da semana", "que dia da semana"],
        action: function (i) {
            date = new Date();
            semana = new Array('domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado');
            artyom.say("Hoje é " + semana[date.getDay()]);
        }
    },
]);

//Repetir Comandos
artyom.on(['Repita comigo *'], true).then(function (i, wildcard) {
    artyom.say("Você disse : " + wildcard);
});

//Pesquisar
artyom.on(['Pesquisar *'], true).then(function (i, wildcard) {
    setTimeout(function () {
        artyom.say("Aguarde!");
        abrirExterno = window.open("http://google.com/search?q=" + wildcard);
        artyom.say("Aqui está o resultado da sua pesquisa");
    }, 2000);
});

//Pesquisar youtube
artyom.on(['youtube *'], true).then(function (i, wildcard) {
    setTimeout(function () {
        artyom.say("Aguarde!");
        abrirExterno = window.open("http://youtube.com/results?search_query=" + wildcard);
        artyom.say("Aqui está o resultado da sua pesquisa");
    }, 2000);
});


//Comando protocolos inteligente
artyom.on(['protocolo *'], true).then(function (i, wildcard) {
    if (wildcard == "11") {
        artyom.say("Executando protocolo 11");
        artyom.say("Reiniciando sistema.", {
            onStart: function (i) {
                window.location.reload();
            }
        });
    } else if (wildcard == "13") {
        artyom.say("Executando protocolo 13");
    } else if (wildcard == "2508") {
        artyom.say("Executando protocolo 2 5 0 8");
    }
});