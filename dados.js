let dados = [
    {
        titulo : "Star Wars: A Ameaça Fantasma - Episódio I (1999)",
        sinopse : "Em uma galáxia distante, o Mestre Jedi Qui-Gon Jinn e seu aprendiz Obi-Wan Kenobi são enviados para negociar a paz entre a Federação de Comércio e o planeta Naboo. Durante a missão, eles encontram Anakin Skywalker, um jovem escravo com um grande potencial na Força. Juntos, enfrentam a ameaça Sith e a invasão de Naboo, iniciando uma nova era na saga Star Wars.",
        link : "https://pt.wikipedia.org/wiki/Star_Wars:_Epis%C3%B3dio_I_%E2%80%93_A_Amea%C3%A7a_Fantasma "
        
    },
    {
        titulo : "Star Wars: Ataque dos Clones - Episódio II (2002)",
        sinopse : "Dez anos após a invasão de Naboo, a República Galáctica está ameaçada por um movimento separatista. Obi-Wan Kenobi e Anakin Skywalker são designados para proteger a Senadora Padmé Amidala, que se tornou alvo de um atentado. Enquanto investigam, descobrem um exército secreto de clones e a ascensão do Sith Darth Sidious, desencadeando as Guerras Clônicas.",
        link : "https://pt.wikipedia.org/wiki/Star_Wars:_Epis%C3%B3dio_II_%E2%80%93_Ataque_dos_Clones "
    },
    {
        titulo : "The Clone Wars (2008-2020)",
        sinopse : "Entre os eventos de Ataque dos Clones e A Vingança dos Sith, a série animada The Clone Wars mostra a República Galáctica e a Confederação dos Sistemas Independentes em um conflito épico. Jedi como Obi-Wan Kenobi e Anakin Skywalker, com sua nova Padawan Ahsoka Tano, lideram as forças republicanas, enquanto o Conde Dooku comanda os Separatistas. A série explora em profundidade as batalhas, as intrigas políticas e o desenvolvimento dos personagens, preparando o terreno para a ascensão do Império Galáctico.",
        link : "https://pt.wikipedia.org/wiki/Star_Wars:_The_Clone_Wars "
    },
    {
        titulo : "Star Wars: A Vingança Dos Sith - Episódio III (2005)",
        sinopse : "As Guerras Clônicas chegam ao fim de forma trágica. Seduzido pelo Lado Negro da Força e pelas promessas de poder do Chanceler Palpatine, Anakin Skywalker se torna o temível Darth Vader. Em uma noite fatídica, ele executa a Ordem 66, eliminando quase todos os Jedi, e auxilia Palpatine a instaurar o Império Galáctico. A República cai, dando início a uma nova era de tirania sob o comando de Darth Sidious e Darth Vader.",
        link : "https://pt.wikipedia.org/wiki/Star_Wars:_Epis%C3%B3dio_III_%E2%80%93_A_Vingan%C3%A7a_dos_Sith "
    },
    {
        titulo : "The Bad Batch (2021-2024)",
        sinopse : "Em um universo Star Wars pós-Ordem 66, conhecemos o Esquadrão Bad Batch, um grupo de clones geneticamente modificados com habilidades únicas. Após a queda da República e a ascensão do Império, eles se tornam foragidos, navegando em uma galáxia em constante mudança. A série acompanha as aventuras deste esquadrão enquanto eles lutam para sobreviver e encontrar seu lugar em um novo regime, questionando a lealdade e a moralidade em um tempo de grande conflito.",
        link : "https://pt.wikipedia.org/wiki/Star_Wars:_The_Bad_Batch "
    },
    {
        titulo : "Han Solo: Uma História Star Wars (2018)",
        sinopse : "Antes de se tornar o capitão da Millennium Falcon e se juntar à Aliança Rebelde, Han Solo era um jovem aventureiro em busca de fortuna. Neste filme, acompanhamos suas primeiras aventuras ao lado de seu fiel companheiro Chewbacca e do habilidoso piloto Lando Calrissian. Juntos, eles se envolvem em perigosas missões em um submundo criminoso, moldando o contrabandista audacioso e sarcástico que conhecemos.",
        link : "https://pt.wikipedia.org/wiki/Solo:_A_Star_Wars_Story "
    },
    {
        titulo : "Obi-Wan Kenobi (2022)",
        sinopse : "Dez anos após a trágica Ordem 66 e a ascensão do Império Galáctico, Obi-Wan Kenobi vive escondido em Tatooine, protegendo o jovem Luke Skywalker. A série acompanha o Mestre Jedi enquanto ele luta para lidar com a perda de seu antigo aprendiz, Anakin Skywalker, que se tornou o temível Darth Vader. A paz de Obi-Wan é abalada quando ele é forçado a sair de seu exílio e se envolver em uma nova aventura, colocando em risco tanto sua vida quanto a de aqueles que ele protege.",
        link : "https://pt.wikipedia.org/wiki/Obi-Wan_Kenobi_(s%C3%A9rie_de_televis%C3%A3o) "
    },
    {
        titulo : "Star Wars Rebels (2014-2017)",
        sinopse : "Ambientada entre os Episódios III e IV, Star Wars Rebels acompanha um grupo de rebeldes que desafiam o Império Galáctico. Liderados pelo jovem e sensível à Força, Ezra Bridger, e pela piloto Hera Syndulla, eles utilizam a nave Ghost para realizar missões perigosas e inspirar esperança em uma galáxia dominada pelo medo. A série explora o surgimento da Aliança Rebelde, mostrando como a esperança pode florescer mesmo nos tempos mais sombrios.",
        link : "https://pt.wikipedia.org/wiki/Star_Wars_Rebels "
    },
    {
        titulo : "Andor (2022-atualmente)",
        sinopse : " Ambientada cinco anos antes dos eventos de Rogue One, Andor acompanha a jornada de Cassian Andor, um homem comum que se transforma em um agente da rebelião. A série explora as origens da Aliança Rebelde, mostrando como a opressão do Império Galáctico molda a vida de seus cidadãos e os leva a se rebelar. Com um tom mais sombrio e realista, Andor aprofunda a mitologia de Star Wars, revelando as nuances da luta contra o Império.",
        link : "https://pt.wikipedia.org/wiki/Andor_(s%C3%A9rie_de_televis%C3%A3o) "
    },
    {
        titulo : "Rogue One: Uma História Star Wars(2016)",
        sinopse : "Em um período turbulento entre as prequels e a trilogia original, um grupo de rebeldes improváveis se une para roubar os planos da Estrela da Morte, a arma definitiva do Império Galáctico. Liderados por Jyn Erso, eles embarcam em uma missão suicida contra um inimigo poderoso, sabendo que o destino da galáxia está em suas mãos. A história de Rogue One explora o sacrifício e a esperança, mostrando como a luta contra a tirania pode unir pessoas de diferentes origens.",
        link : "https://pt.wikipedia.org/wiki/Rogue_One:_A_Star_Wars_Story "
    },
    {
        titulo : "Star Wars: Uma Nova Esperança - Episódio IV (1977)",
        sinopse : "Em uma galáxia dominada pelo Império Galáctico, o jovem fazendeiro Luke Skywalker descobre um mundo maior do que sua pacata vida em Tatooine. Após encontrar um droide contendo uma mensagem secreta da Princesa Leia, Luke embarca em uma jornada épica ao lado do contrabandista Han Solo e do robô C-3PO. Juntos, eles se unem à Aliança Rebelde para destruir a Estrela da Morte, a arma definitiva do Império, e restaurar a liberdade na galáxia.",
        link : "https://pt.wikipedia.org/wiki/Star_Wars:_Epis%C3%B3dio_IV_%E2%80%93_Uma_Nova_Esperan%C3%A7a "
    },
    {
        titulo : "Star Wars: O Império Contra-ataca - Episódio V (1980)",
        sinopse : "Após a destruição da Estrela da Morte, a Aliança Rebelde luta para sobreviver contra o avanço implacável do Império. Luke Skywalker, em busca de se tornar um Jedi, viaja para um planeta remoto para treinar com o Mestre Yoda. Enquanto isso, Han Solo e a Princesa Leia são capturados por Darth Vader, que revela uma verdade chocante sobre o passado de Luke. A amizade é testada, e a esperança da Aliança é posta à prova em uma batalha épica contra as forças do mal.",
        link : "https://pt.wikipedia.org/wiki/Star_Wars:_Epis%C3%B3dio_V_%E2%80%93_O_Imp%C3%A9rio_Contra-Ataca "
    },
    {
        titulo : "Star Wars: O Retorno Jedi - Episódio VI (1983)",
        sinopse : "Um ano após os eventos de O Império Contra-Ataca, a Aliança Rebelde se prepara para a batalha final contra o Império Galáctico. Luke Skywalker, agora um Jedi mais experiente, busca confrontar Darth Vader e o Imperador Palpatine. Enquanto isso, Han Solo e a Princesa Leia são resgatados das garras de Jabba the Hutt. A saga culmina em uma épica batalha na segunda Estrela da Morte, onde o destino da galáxia é decidido e um segredo chocante sobre a família Skywalker é revelado.",
        link : "https://pt.wikipedia.org/wiki/Star_Wars:_Episode_VI_%E2%80%93_Return_of_the_Jedi "
    },
    {
        titulo : "The Mandalorian (2019-atualmente)",
        sinopse : "Ambientada após a queda do Império Galáctico, a série acompanha Din Djarin, um guerreiro mandaloriano que trabalha como caçador de recompensas. Sua vida muda drasticamente quando ele recebe a missão de capturar um pequeno e misterioso alienígena conhecido como A Criança. Juntos, eles embarcam em uma jornada épica pelos confins da galáxia, enfrentando perigos e formando um forte vínculo. A série explora temas como paternidade, lealdade e a luta pela sobrevivência em um universo pós-guerra.",
        link : "https://pt.wikipedia.org/wiki/The_Mandalorian "
    },
    {
        titulo : "O Livro de Boba Fett (2021)",
        sinopse : "Após sobreviver à Cova de Sarlacc, Boba Fett retorna a Tatooine e reivindica o antigo território de Jabba the Hutt. Ao lado de Fennec Shand, ele enfrenta desafios e tenta construir um novo império criminal. A série explora o passado de Boba Fett, revelando sua jornada após os eventos de O Retorno de Jedi, e o legado que ele busca construir. Paralelamente, a série apresenta novos personagens e expande o universo de Star Wars, conectando-se com outras séries como The Mandalorian.",
        link : "https://pt.wikipedia.org/wiki/O_Livro_de_Boba_Fett"
    },
    {
        titulo : "Ahsoka (2023-atualmente)",
        sinopse : "Após os eventos de Star Wars Rebels, a ex-Padawan de Anakin Skywalker, Ahsoka Tano, embarca em uma nova jornada. Agora, como uma Jedi autoexilada, ela busca localizar o Grande Almirante Thrawn e o desaparecido Ezra Bridger, que desapareceram nas Regiões Desconhecidas após a queda do Império. Ahsoka, acompanhada por novos e antigos aliados, enfrenta perigos e desafios enquanto investiga uma crescente ameaça à galáxia, explorando os mistérios da Força e seu passado.",
        link : "https://pt.wikipedia.org/wiki/Ahsoka_(s%C3%A9rie_de_televis%C3%A3o) "
    },
    {
        titulo : "Star Wars: A Resistência (2018-2019)",
        sinopse : "Ambientada pouco antes dos eventos de O Despertar da Força, a série acompanha Kazuda Xiono, um jovem piloto recrutado pela Resistência para espionar a Primeira Ordem. A bordo da Colossus, uma estação espacial disfarçada de cassino, Kaz se infiltra nas operações da Primeira Ordem, enfrentando perigos e desafios enquanto luta para proteger a galáxia da crescente ameaça do império. A série explora a ascensão da Primeira Ordem e as aventuras de Kaz e seus amigos na Resistência.",
        link : "https://pt.wikipedia.org/wiki/Star_Wars_Resistance "
    },
    {
        titulo : "Star Wars: O Despertar da Força - Episódio VII (2015)",
        sinopse : "Décadas após a queda do Império, uma nova ameaça surge: a Primeira Ordem. A Resistência, liderada pela General Leia Organa, luta para detê-los. Uma jovem catadora, Rey, encontra um droide contendo um mapa para encontrar Luke Skywalker, a última esperança dos Jedi. Enquanto isso, um stormtrooper desertor, Finn, une forças com Rey em uma jornada épica para enfrentar a Primeira Ordem e o misterioso Kylo Ren.",
        link : "https://pt.wikipedia.org/wiki/Star_Wars:_Episode_VII_%E2%80%94_The_Force_Awakens "
    },
    {
        titulo : "Star Wars: Os Últimos Jedi - Episódio VIII (2017)",
        sinopse : " Após encontrar Luke Skywalker, a última esperança dos Jedi, Rey busca treinar e entender a Força. Paralelamente, a Resistência, liderada por Leia Organa, é perseguida pela Primeira Ordem. Kylo Ren, sedento por poder, busca completar sua transformação para o lado negro da Força. O filme explora temas como a identidade, o legado e o futuro da Ordem Jedi, enquanto os personagens enfrentam escolhas difíceis e revelações chocantes que desafiam tudo o que acreditavam.",
        link : "https://pt.wikipedia.org/wiki/Star_Wars:_The_Last_Jedi "
    },
    {
        titulo : "Star Wars: A Ascensão Skywalker - Episódio IX (2019)",
        sinopse : "Em um confronto épico entre o bem e o mal, Rey e Kylo Ren travam uma batalha final pela alma da galáxia. O retorno do Imperador Palpatine traz à tona segredos do passado e força os personagens a fazerem escolhas que definirão o futuro da Ordem Jedi e da Primeira Ordem. A busca por respostas sobre a origem de Rey e a luta pela liberdade da galáxia culminam em um confronto épico que encerra a saga Skywalker.",
        link : "https://pt.wikipedia.org/wiki/Star_Wars:_The_Rise_of_Skywalker "
    },
]