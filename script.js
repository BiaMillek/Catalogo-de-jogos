const gameGrid = document.getElementById("gameGrid");
const statusMessage = document.getElementById("statusMessage");
const genreSelect = document.getElementById("genreSelect");

const games = [
    {
        id: 1,
        title: "Resident Evil Requiem",
        genre: "Survival horror",
        year: 2026,
        duration: "12 horas",
        rating: "Nota metacritic:9.2",
        cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsYs90ANW8YLh_4Idx4Sa5WgGiYXEByLc2kuhqyoncQcPSd4HS1OVr4W1ApdyinodIkdDk83J-DWX-h8rtJp-aMnD0oTUR_yRld0gdFs2bHFyWP2ZrDA1RACvNJMs8qi6hw8s6Sw_IY9s0JXZlomHA9-I9Fi39skDWAp9NOB31HzsO_nLc7lh-KDNFs9g/w640-h360/resident-evil-requiem-pre-venda-desconto-pc-ps5.png",
        description:" Um jogo de survival horror que marca uma nova fase da franquia, trazendo a agente do FBI Grace Ashcroft como protagonista ao lado de Leon S. Kennedy. A narrativa se passa após os eventos de Raccoon City, misturando investigação,terror psicológico e ação intensa. A gameplay alterna entre momentos de sobrevivência mais tensos e limitados em recursos,e sequências mais focadas em combate, criando um equilíbrioentre horror clássico e ação moderna, com forte atmosfera e narrativa envolvente."
    },
    {
        id: 2,
        title: "Cyberpunk 2077: Phantom Liberty",
        genre: "RPG",
        year: 2020,
        duration: "26 horas",
        rating: "Nota metacritic:8.6",
        cover: "https://t.ctcdn.com.br/ILL69AH84MuklQSbs4Bj6zNDN3Q=/640x360/smart/i568317.jpeg",
        description:"Um RPG de ação em mundo aberto ambientado em Night City, uma metrópole futurista dominada por tecnologia avançada, megacorporações e implantes cibernéticos. O jogador assume o papel de V, um mercenário em busca de ascensão, dinheiro e sobrevivência, enquanto lida com uma ameaça que pode mudar sua própria mente. A gameplay mistura combate armado, hacking, furtividade e exploração livre, com decisões que impactam a narrativa e múltiplos finais.",
    },
    {
        id: 3,
        title: "The Last of Us Part II Remastered",
        genre: "Survival horror",
        year: 2024,
        duration: "25 horas",
        rating: "Nota metacritic:9.0",
        cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_90bo2cQLbmIGnvCSx_EiHnvf0amQipYWQF1mWVmykElOhLvnlZnXqQKAwc0d3ysP5aXUv1VFdvGNSgC6pww5emYfWMEnsE0zHy9Jioad4u5F0tE9TFLgbSw_L7oWOB3y8WMElHjA1C8k1_6ptsRACYS1sB6EC9E9DuJAxfurLHmG1Iuv-lJm3kCdjGja/w640-h360/The%20Last%20of%20Us%20Parte%20II%20remastered.png",
        description:"Um jogo de ação e aventura com forte foco narrativo, que acompanha Ellie em uma jornada intensa de vingança em um mundo pós-apocalíptico dominado por infectados e facções hostis. A gameplay mistura exploração, furtividade e combates brutais, enquanto a história se aprofunda em temas como perda, moralidade e consequências das escolhas, oferecendo personagens complexos e momentos emocionais marcantes ao longo da campanha."
    },
    {
        id: 4,
        title: "Life is Strange",
        genre: "Aventura narrativa / Escolhas",
        year: 2015,
        duration: "15 horas",
        rating: "Nota metacritic:8.8",
        cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK63f_Ne3KJamRZSpanK5wGuzLJlyIysC0btRQ8zuUDmlWHwvfNrP_UfUBSlt3mtdsLd0B-I9HRghgdGDafSBZZDLxNTpkHuW9-0xl6RSeTEDjaBvyEyY1dYJs7fOlukk4vX9ZQaFCtYlBrZ5ryIZrIviQP39pQy8PmU62xq6Jr646lY_P6JbPYznCCg/w640-h360/life-is-strange-arcadia-bay-collection.jpg",
        description: "Um jogo de aventura episódico focado em narrativa, que acompanha Max Caulfield, uma estudante de fotografia que descobre a habilidade de voltar no tempo. Ao lado de sua amiga Chloe, ela investiga o desaparecimento de uma colega enquanto tenta lidar com as consequências de alterar eventos passados. A gameplay é baseada em escolhas e diálogos que afetam diretamente o rumo da história, explorando temas como amizade, destino e responsabilidade, com uma atmosfera emocional marcante e trilha sonora envolvente."

    },
    {
        id: 5,
        title: "Detroit: Become Human",
        genre: "Aventura narrativa / Escolhas",
        year: 2018,
        duration: "12 horas",
        rating: "Nota metacritic:7.8",
        cover:"https://cdn1.epicgames.com/columbine/offer/DETROIT_1-2560x1440-4fd6608a56880dc5d8e9d968517113c3.jpg",
        description:"Um jogo focado em narrativa interativa ambientado em um futuro onde androides convivem com humanos, acompanhando três personagens com histórias interligadas que exploram temas como consciência, liberdade e preconceito. O jogador toma decisões constantes que afetam profundamente o rumo da trama, levando a múltiplos caminhos e finais diferentes. A gameplay é baseada em escolhas, exploração e eventos de ação rápida, criando uma experiência cinematográfica com forte impacto emocional.",
    },
    {
        id: 6,
        title: "Resident Evil 2 Remake",
        genre: "Survival horror",
        year: 2019,
        duration: "8 horas",
        rating: "Nota metacritic:9.1",
        cover:"https://cdn-ext.fanatical.com/production/product/1280x720/ee2b504a-6f82-49ed-a3f5-3539b9b85fb9.jpeg",
        description:"Um remake moderno do clássico de survival horror, que acompanha Leon S. Kennedy e Claire Redfield durante o surto zumbi em Raccoon City. O jogo combina exploração tensa, gerenciamento de recursos limitados e resolução de puzzles, enquanto o jogador enfrenta criaturas aterrorizantes em ambientes claustrofóbicos. Com câmera sobre o ombro e gráficos atualizados, a experiência reforça o clima de suspense constante, oferecendo uma narrativa envolvente e momentos de grande tensão ao longo da campanha.",
    },
    {
        id: 7,
        title: "Lost Records: Bloom & Rage",
        genre: "Aventura narrativa / Escolhas",
        year: 2025,
        duration: "12 horas",
        rating: "Nota metacritic:7.4",
        cover:"https://cdn1.epicgames.com/spt-assets/1dbe1908183242849c2aac9bb3f50541/lost-records-bloom-and-rage-fgi6c.jpg",
        description:"Um jogo de aventura narrativa focado em escolhas, desenvolvido pela DON'T NOD, que acompanha um grupo de quatro amigas durante um verão marcante nos anos 90 e suas consequências décadas depois. A história alterna entre 1995 e o presente, explorando segredos, memórias e um evento misterioso que mudou suas vidas para sempre. A gameplay envolve exploração, diálogos e decisões que impactam relações e desfechos, com forte carga emocional, foco no desenvolvimento dos personagens e uma atmosfera nostálgica marcada por elementos sobrenaturais e cinematográficos.",
    },
    {
        id: 8,
        title: "Life is Strange: Reunion",
        genre: "Aventura narrativa / Drama interativor",
        year: 2026,
        duration: "12 horas",
        rating: "Nota metacritic:7.4",
        cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2624870/df22658da4ac9d886986cd3d9bd1d5aeee03c915/capsule_616x353.jpg?t=1774610978",
        description:"Um jogo de aventura narrativa que marca o retorno de Max Caulfield e Chloe Price, servindo como continuação direta de Life is Strange: Double Exposure. A história se passa na Universidade de Caledon, onde um incêndio catastrófico ameaça destruir tudo em poucos dias, levando Max a usar novamente seu poder de voltar no tempo para tentar evitar a tragédia. A gameplay alterna entre os dois personagens, combinando manipulação temporal, diálogos e escolhas que influenciam o desenrolar da trama, enquanto explora temas como consequências, memória e destino em uma narrativa emocional e cinematográfica.",

    },
    {
        id: 9,
        title:"Hogwarts Legacy",
        genre: "RPG de mundo aberto",
        year: 2023,
        duration: "60 horas",
        rating: "Nota metacritic:8.5",
        cover:"https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-aa80981dd7c9b3f26b12606974a76dba_2560x1440-aa80981dd7c9b3f26b12606974a76dba",
        description:"Um RPG de ação em mundo aberto ambientado no universo de Harry Potter, que se passa cerca de um século antes dos eventos dos livros. O jogador assume o papel de um estudante de Hogwarts com a habilidade rara de manipular magia antiga, explorando a escola, Hogsmeade e regiões ao redor enquanto aprende feitiços, enfrenta criaturas e descobre segredos ocultos. A gameplay combina exploração livre, combate mágico dinâmico e missões variadas, além de permitir personalização do personagem e escolhas ao longo da jornada, criando uma experiência imersiva e fiel ao universo bruxo.",
    },
];

function popularGenres(gameList){
    const genres = [...new Set(gameList.map((game) => game.genre))].sort();
    for (const genre of genres) {
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre;
        genreSelect.appendChild(option);
    }
}
function renderGames(gameList){
    gameGrid.innerHTML = "";
    for(const game of gameList){
        const article = document.createElement("article");
        article.className = "game-card";
        article.innerHTML = `
        <img src="${game.cover}" alt="Capa jogo ${game.title}"/>
        <div class="game-card-content">
        <span class="tag">${game.genre}</span>
        <h3>${game.title}</h3>
        <div class="game-meta">
        <span>${game.year}</span>
        <span>${game.duration}</span>
        <span>${game.rating}</span>
        </div>
    <p class = "game-description">${game.description}</p>
    <button class="button primary" type="button">Ver Detalhes</button>
    </div>
        `;
        gameGrid.appendChild(article);
    }
}
popularGenres(games);
renderGames(games);
statusMessage.textContent = `${games.length} game(s) carregado(s).`;