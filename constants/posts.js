export const posts = [
  // educacional
  {
    id: "pipos",
    titulo: "Por que castrar seu bichinho?",
    nome: "pipos",
    tags: [
                "educacional",
                "saúde",
                "castração"
            ],
    caminho_imagem: "../img/animal2.png",
    alt_imagem: "Vários animais em um fundo branco: Labrador Retriever Amarelo, Papagaio cinza, Gato malhado, Porquinho da Índia marrom e branco, Porco marrom escuro, Coelho preto e Jabuti Marrom.",
    texto: "A castração é essencial para a saúde e bem-estar dos pets, ajudando a prevenir doenças graves, como câncer de mama, útero e próstata. Além disso, o procedimento reduz comportamentos indesejados, como agressividade e marcação de território, promovendo uma convivência mais tranquila. Animais castrados também têm menor tendência a fugir, já que perdem o instinto de buscar parceiros. Castrar seu bichinho contribui para o controle populacional e ajuda a diminuir o abandono e a superlotação de abrigos. É um ato de cuidado e responsabilidade, beneficiando tanto o animal quanto a sociedade."
    },
    {
        titulo: "Locais para levar seu cachorro para socializar!",
        id: "gatinho",
        nome: "gatinho",
        tags: [
                "educacional",
                "saúde",
                "lazer"
            ],
        caminho_imagem: "../img/animal1.jpg",
        alt_imagem: "4 cachorrinhos pequenos e sorridentes correndo em um pasto verde.",
        texto: "Essas são praças especiais para levar seu cachorrinho para passear e encontrar outros dogs! A socialização ajuda seu cachorro a ser mais amigável, confiante e menos ansioso em novas situações, promovendo um comportamento equilibrado em diferentes ambientes e com outros animais.<br/>- Praça Mauro Duarte (Botafogo);<br/>- Praça General Leandro (Botafogo);<br/>- Praça Radial Sul (Botafogo);<br/>- Parque Eduardo Guinle (Laranjeiras)"
    }, 
    {
        titulo: "Como adestrar seu gato!",
        id: "catiorro",
        nome: "catiorro",
        tags: [
                "educacional",
                "lazer"
            ],
        caminho_imagem: "../img/gato_sentado.jpg",
        alt_imagem: "Gato sentado recebendo carinho de uma mão.",
        texto: "Ensinar seu gato a sentar é possível com paciência e reforço positivo. Aqui vai um passo a passo simples:<br/>1. Escolha um Petisco: Use um petisco que seu gato adore. Isso será fundamental para motivá-lo.<br/>2. Segure o Petisco: Com o gato em pé, segure o petisco perto do nariz dele para chamar sua atenção.<br/>3. Levante o Petisco: Devagar, mova o petisco em direção ao topo da cabeça do gato. Isso o incentivará a olhar para cima e, naturalmente, a sentar-se para alcançar o petisco.<br/>4. Diga “Senta”: Quando ele começar a sentar, diga “Senta” de forma calma. Assim, ele começa a associar o comando com o movimento.<br/>5. Recompense Imediatamente: Assim que ele sentar completamente, ofereça o petisco e elogie-o. A recompensa deve vir no mesmo instante, para reforçar o comportamento.<br/>6. Repita e Pratique: Faça isso em sessões curtas e repetidas ao longo dos dias. Gatos aprendem com tempo e paciência, então mantenha as sessões leves e divertidas para ele.<br/>7. Com o tempo, seu gato entenderá o comando e poderá até sentar sem a necessidade do petisco."
    },
    // eventos
    {
      titulo: "Feira de adoção na Praça do Mêtro Botafogo",
      id: "feirinha",
      nome: "feirinha",
      endereco: "Rua Túlio Moreira 34",
      tags: [
                  "eventos",
                  "adoção"
              ],
      caminho_imagem: "../img/cat1.jpg",
      alt_imagem: "",
      texto: "A Protetores de Rua promove a Vacinação Animal em comunidades carentes de São Paulo. Durante o evento, cães e gatos recebem vacina antirrábica, vermífugos e alimentação. O evento ocorre por 2 dias e tem como objetivo aumentar a saúde e o bem-estar dos animais em áreas de risco. A ação também oferece informações sobre cuidados básicos com os pets e conscientiza sobre a importância da vacinação. Vacine, cuide, proteja!"
      },
      {
          titulo: "Feira de adoção no Largo do Machado",
          id: "adocaozinha",
          nome: "adocaozinha",
          endereco: "Rua Vitória Vasconcellos 56",
          tags: [
                  "eventos",
                  "adoção",
                  "doação"
              ],
          caminho_imagem: "../img/cat2.jpg",
          alt_imagem: "",
          texto: "O Projeto Adote com Amor realiza eventos de adoção e castração gratuita para animais de rua em diversas regiões do Rio de Janeiro. Durante o evento, cães e gatos recebem alimentação, vacinas e castração, além de estarem disponíveis para adoção. O evento acontece ao longo de 3 dias, sempre em áreas públicas da cidade. O objetivo é reduzir o número de animais abandonados e conscientizar sobre a importância da castração. Adote com amor, castrate com responsabilidade."
      }, 
      {
          titulo: "",
          id: "nonoca",
          nome: "nonoca",
          endereco: "Rua Rafael Godeiro 86",
          tags: [
                  "eventos",
                  "lazer"
              ],
          caminho_imagem: "../img/cat3.jpg",
          alt_imagem: "",
          texto: "A Feira de Adoção de Animais organizada pela Ampara Animal acontece todos os meses, oferecendo uma oportunidade para cães e gatos em situação de abandono encontrarem um lar. Durante o evento, os animais recebem cuidados, como vacina e vermifugação. Além disso, os participantes podem aprender sobre adoção responsável e cuidados com os pets. O evento ocorre na sede da ONG, em São Paulo. Adote um amigo, mude uma vida!"
      },
      {
        id: "nhanha",
        titulo: "Evento de vacinação para seu amiguinho!",
        nome: "nhanha",
        tags: [
                    "vacinação",
                    "saúde",
                    "eventos"
                ],
        caminho_imagem: "../img/vacina.jpg",
        alt_imagem: "Vários animais em um fundo branco: Labrador Retriever Amarelo, Papagaio cinza, Gato malhado, Porquinho da Índia marrom e branco, Porco marrom escuro, Coelho preto e Jabuti Marrom.",
        texto: "A vacinação é essencial para a saúde do seu pet, protegendo-o contra doenças graves e contagiosas. Filhotes começam o ciclo de vacinas e, após isso, é importante manter as vacinas anuais em dia. Vacinas como V8/V10 para cães e as vacinas contra raiva e doenças respiratórias para gatos ajudam a evitar problemas sérios, garantindo mais saúde e bem-estar ao seu animal. Lembre-se: vacinar seu pet é um ato de cuidado e proteção!"
        },
      //ongs
      {
        titulo: "Feira de adoção na Praça do Mêtro Botafogo",
        id: "focinhos",
        nome: "focinhos de luz",
        endereco: "Rua Rosalinda Cascavel 55",
        tags: [
                    "eventos",
                    "adoção"
                ],
        caminho_imagem: "../img/ong1.png",
        alt_imagem: "",
        texto: "Há 8 anos, o Instituto Luisa Mell realiza resgates, reabilitação e adoção de animais em situação de abandono e maus-tratos. A ONG também promove campanhas de conscientização sobre os direitos dos animais e a importância da adoção responsável. Nosso objetivo é transformar vidas e lutar contra a violência animal. Por um mundo sem maus-tratos."
        },
        {
            titulo: "Feira de adoção no Largo do Machado",
            id: "auauau",
            nome: "auauau",
            endereco: "Rua do Limoreiro 1322",
            tags: [
                    "eventos",
                    "adoção",
                    "doação"
                ],
            caminho_imagem: "../img/ong2.jpg",
            alt_imagem: "",
            texto: "Com 7 anos de atuação, a Protetores de Rua é uma ONG dedicada ao resgate e acolhimento de animais abandonados nas ruas. Oferecemos cuidados médicos, abrigo temporário e trabalhamos na busca por adoção responsável. Nossa missão é garantir dignidade e amor aos animais em situação de vulnerabilidade. A luta contra o abandono começa com um gesto de amor."
        }, 
        {
            titulo: "Evento de doação de ração para os gatos da PUC-Rio (2022)",
            id: "dogslife",
            nome: "dogslife",
            endereco: "Rua Castelinho 8234",
            tags: [
                    "eventos",
                    "lazer"
                ],
            caminho_imagem: "../img/ong3.png",
            alt_imagem: "",
            texto: "A Ampara Animal, com mais de 10 anos de trabalho, foca no resgate e tratamento de animais vítimas de maus-tratos e abandono. Além de promover campanhas de adoção e conscientização, a ONG realiza resgates emergenciais e oferece apoio veterinário para os animais em situação crítica. A vida começa com um resgate."
        },
        // petshops
        {
          titulo: "Au Au Au Pet",
          nome: "pets",
          id: "pets",
          endereco: "Rua Principe Albuquerque 1108",
          tags: [
                      "eventos",
                      "adoção"
                  ],
          caminho_imagem: "../img/petshop1.png",
          alt_imagem: "",
          texto: "Com 10 anos de experiência, a Amigo Fiel oferece produtos e serviços de qualidade para o bem-estar do seu pet. Atuamos com atendimento personalizado, garantindo saúde, conforto e diversão para cães, gatos e outros animais. Trabalhamos com alimentação, acessórios, higiene e cuidados veterinários. Seu pet, nossa prioridade!"
          },
          {
              titulo: "Anjos de Pata",
              nome: "hipet",
              id: "hipet",
              endereco: "Rua Aopires Toledo 93",
              tags: [
                      "eventos",
                      "adoção",
                      "doação"
                  ],
              caminho_imagem: "../img/petshop2.jpg",
              alt_imagem: "",
              texto: "Há 8 anos no mercado, a Mundo Pet é especializada em oferecer uma ampla linha de produtos e serviços para cães e gatos. Com compromisso e carinho, cuidamos da saúde e diversão do seu animal com alimentos de qualidade, brinquedos, acessórios e serviços de tosa e banho. Tudo para o seu pet, com amor e cuidado."
          }, 
          {
              titulo: "Casa de Ração Hércules",
              nome: "ninoca",
              id: "ninoca",
              endereco: "Rua Expertofeto 706",
              tags: [
                      "eventos",
                      "lazer"
                  ],
              caminho_imagem: "../img/petshop3.jpg",
              alt_imagem: "",
              texto: "Com 12 anos de tradição, a PetCare é uma petshop dedicada ao bem-estar do seu animal. Oferecemos uma variedade de produtos e serviços de alta qualidade, como alimentação, brinquedos, banho e tosa, além de atendimento veterinário. Nosso compromisso é com a saúde e felicidade do seu pet."
          },
          // // tags
          // { id: 1,
          //   nome: "Item de Doação", 
          //   categoria: "doação"
          // },
          // { id: 2, 
          //   nome: "Item de Castração", 
          //   categoria: "castração" 
          // },
          // { id: 3, 
          //   nome: "Item de Adoção", 
          //   categoria: "adoção" 
          // },
          // { id: 4, 
          //   nome: "Item de Vacinação", 
          //   categoria: "vacinação" 
          // },
          // { id: 5, 
          //   nome: "Item de Lazer", 
          //   categoria: "lazer" 
          // },
          // { id: 6, 
          //   nome: "Item de Saúde", 
          //   categoria: "saúde" 
          // },
          // { id: 7, 
          //   nome: "Evento", 
          //   categoria: "eventos" 
          // },
          // { id: 8, 
          //   nome: "educacional", 
          //   categoria: "educacional" 
          // }
  ////////
//   {
//     id: "pipos",
//     titulo: "Por que castrar seu bichinho?",
//     nome: "pipos",
//     tags: ["educacional", "saúde", "castração"],
//     caminho_imagem: "../img/animais_diversos.jpg",
//     alt_imagem:
//       "Vários animais em um fundo branco: Labrador Retriever Amarelo, Papagaio cinza, Gato malhado, Porquinho da Índia marrom e branco, Porco marrom escuro, Coelho preto e Jabuti Marrom.",
//     texto:
//       "A castração é essencial para a saúde e bem-estar dos pets, ajudando a prevenir doenças graves, como câncer de mama, útero e próstata...",
//   },
//   {
//     id: "feirinha",
//     titulo: "Feira de adoção na Praça do Mêtro Botafogo",
//     endereco: "Praça Nelson Mandela",
//     nome: "feirinha",
//     tags: ["eventos", "adoção"],
//     caminho_imagem: "../img/feira_adocao.jpg",
//     alt_imagem: "Evento de adoção de animais na praça.",
//     texto: "Venha conhecer e adotar um amigo!",
//   },
//   {
//     id: "focinhos",
//     titulo: "Feira de adoção na Praça do Mêtro Botafogo",
//     endereco: "Rua Farani, 22",
//     nome: "focinhos",
//     tags: ["eventos", "adoção"],
//     caminho_imagem: "../img/feira_adocao.jpg",
//     alt_imagem: "Evento de adoção de animais.",
//     texto: "Aproveite a chance de adotar um animal carente!",
//   },
//   {
//     id: "pets",
//     titulo: "Evento de adoção na petshop da felicidade",
//     nome: "pets",
//     endereco: "Rua Silva Freitas, 43",
//     tags: ["eventos", "adoção"],
//     caminho_imagem: "../img/petshop_evento.jpg",
//     alt_imagem: "Petshop com evento de adoção de animais.",
//     texto: "Não perca este evento de adoção!",
//   },
//   {
//     id: "amigos-felizes",
//     titulo: "Cuidados essenciais com seu cão",
//     nome: "amigos-felizes",
//     tags: ["educacional", "saúde"],
//     caminho_imagem: "../img/cao_cuidados.jpg",
//     alt_imagem: "Cachorro feliz correndo na grama.",
//     texto: "Dicas de cuidados para manter seu cão saudável e feliz.",
//   },
//   {
//     id: "animais-fantasticos",
//     titulo: "Conheça os animais que vivem em nosso abrigo",
//     nome: "animais-fantasticos",
//     tags: ["educacional", "abrigo"],
//     caminho_imagem: "../img/abrigo_animais.jpg",
//     alt_imagem: "Animais diversos no abrigo.",
//     texto: "Venha conhecer os animais que estão esperando um novo lar!",
//   },
//   {
//     id: "gatinhos-fofos",
//     titulo: "Os benefícios de adotar um gato",
//     nome: "gatinhos-fofos",
//     tags: ["educacional", "adoção", "gatos"],
//     caminho_imagem: "../img/gatos.jpg",
//     alt_imagem: "Gato deitado em uma cama.",
//     texto: "Conheça as vantagens de ter um gato como animal de estimação.",
//   },
//   {
//     id: "amigos-peludos",
//     titulo: "Dicas de cuidados com a pelagem do seu pet",
//     nome: "amigos-peludos",
//     tags: ["educacional", "cuidados"],
//     caminho_imagem: "../img/pelagem_pet.jpg",
//     alt_imagem: "Cachorro sendo escovado.",
//     texto: "Dicas para manter a pelagem do seu pet saudável.",
//   },
//   {
//     id: "adesao-evento",
//     titulo: "Participe da feira de adoção na praça central",
//     nome: "adesao-evento",
//     tags: ["eventos", "adoção"],
//     caminho_imagem: "../img/feira_evento.jpg",
//     alt_imagem: "Pessoas na feira de adoção.",
//     texto: "Traga sua família e encontre um novo amigo!",
//   },
//   {
//     id: "vacinas",
//     titulo: "Vacinas essenciais para o seu pet",
//     nome: "vacinas",
//     tags: ["educacional", "saúde", "vacinação"],
//     caminho_imagem: "../img/vacinacao.jpg",
//     alt_imagem: "Veterinário aplicando vacina em um cachorro.",
//     texto: "A importância de manter a vacinação do seu pet em dia.",
//   },
//   {
//     id: "cuidados-gatos",
//     titulo: "Cuidados com gatos idosos",
//     nome: "cuidados-gatos",
//     tags: ["educacional", "saúde", "gatos"],
//     caminho_imagem: "../img/gato_idoso.jpg",
//     alt_imagem: "Gato idoso descansando.",
//     texto: "Dicas para cuidar bem dos gatos mais velhos.",
//   },
//   {
//     id: "brincadeiras",
//     titulo: "Brincadeiras para o seu cão",
//     nome: "brincadeiras",
//     tags: ["educacional", "diversão", "cães"],
//     caminho_imagem: "../img/brincadeiras.jpg",
//     alt_imagem: "Cachorro brincando com uma bola.",
//     texto: "Atividades divertidas para manter seu cão ativo.",
//   },
//   {
//     id: "alimentacao",
//     titulo: "Como alimentar seu pet corretamente",
//     nome: "alimentacao",
//     tags: ["educacional", "alimentação", "saúde"],
//     caminho_imagem: "../img/alimentacao_pet.jpg",
//     alt_imagem: "Comida saudável para pets.",
//     texto: "A importância de uma alimentação equilibrada.",
//   },
//   {
//     id: "exercicio-gatos",
//     titulo: "Exercícios para gatos domésticos",
//     nome: "exercicio-gatos",
//     tags: ["educacional", "exercício", "gatos"],
//     caminho_imagem: "../img/gato_exercicio.jpg",
//     alt_imagem: "Gato brincando com uma corda.",
//     texto: "Como manter seu gato ativo e saudável.",
//   },
//   {
//     id: "treinamento",
//     titulo: "Dicas de treinamento para cachorros",
//     nome: "treinamento",
//     tags: ["educacional", "cães", "treinamento"],
//     caminho_imagem: "../img/treinamento_cachorro.jpg",
//     alt_imagem: "Cachorro sendo treinado.",
//     texto: "Dicas para treinar e educar seu cão.",
//   },
//   {
//     id: "lar-perfeito",
//     titulo: "Preparando sua casa para um novo pet",
//     nome: "lar-perfeito",
//     tags: ["educacional", "adoção"],
//     caminho_imagem: "../img/lar_pet.jpg",
//     alt_imagem: "Casa preparada para receber um pet.",
//     texto: "Dicas para preparar o lar para receber seu pet.",
//   },
//   {
//     id: "adocao",
//     titulo: "Feira de adoção: encontre um novo amigo",
//     nome: "adocao",
//     tags: ["eventos", "adoção"],
//     caminho_imagem: "../img/feira_adocao_novo.jpg",
//     alt_imagem: "Animais para adoção.",
//     texto: "Adote um amigo e transforme sua vida!",
//   },
//   {
//     id: "felicidade",
//     titulo: "Como os pets trazem felicidade ao lar",
//     nome: "felicidade",
//     tags: ["educacional", "bem-estar", "pets"],
//     caminho_imagem: "../img/felicidade_pet.jpg",
//     alt_imagem: "Cachorro e gato juntos em casa.",
//     texto: "Descubra os benefícios de ter um pet em casa.",
//   },
//   {
//     id: "abrigo",
//     titulo: "Visite nosso abrigo e conheça os animais",
//     nome: "abrigo",
//     tags: ["abrigo", "adoção"],
//     caminho_imagem: "../img/abrigo.jpg",
//     alt_imagem: "Animais esperando por adoção no abrigo.",
//     texto: "Conheça nossos animais à espera de um lar.",
//   },
//   {
//     id: "saude-mental",
//     titulo: "Como os pets ajudam na saúde mental",
//     nome: "saude-mental",
//     tags: ["educacional", "bem-estar", "saúde mental"],
//     caminho_imagem: "../img/pets_saude_mental.jpg",
//     alt_imagem: "Pessoa interagindo com um cachorro.",
//     texto: "Entenda os benefícios dos pets para a saúde mental.",
//   },
];
