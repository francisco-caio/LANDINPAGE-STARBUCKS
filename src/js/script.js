const mobileBtn = document.querySelector('.btn-mobile');
const navlinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i');

mobileBtn.addEventListener('click', () => {
  navlinks.classList.toggle('show');
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
});



// API REST LOCAL - TRENDING CARDS


const API_URL = './products.json';

// Dados fallback caso API esteja offline (json-server não rodando)
const FALLBACK_DATA = [
  {
    "id": 1,
    "image": "src/images/trending/card1.png",
    "alt": "Starbucks Drink",
    "rating": 5,
    "title": "Great Coffee",
    "flavor": "Avelã"
  },
  {
    "id": 2,
    "image": "src/images/trending/card2.png",
    "alt": "Starbucks Drink",
    "rating": 5,
    "title": "Great Coffee",
    "flavor": "Pistache"
  },
  {
    "id": 3,
    "image": "src/images/trending/card3.png",
    "alt": "Starbucks Drink",
    "rating": 5,
    "title": "Great Coffee",
    "flavor": "Morango"
  }
];

async function loadTrendingCards() {
  const container = document.getElementById('trendingContainer');

  //  verifica se elemento existe no HTML
  if (!container) {
    console.error('Elemento #trendingContainer não encontrado no HTML');
    return;
  }

  try {
    //  BUSCA OS DADOS NA API
    const resposta = await fetch(API_URL);

    // Verifica se a resposta 
    if (!resposta.ok) {
      throw new Error(`HTTP ${resposta.status}`);
    }
    //  CONVERTE JSON PARA OBJETO JAVASCRIPT
   const dados = await resposta.json();
    renderCards(dados.trending, container);
  } catch (erro) {
    // Se der erro (API offline), usa dados locais como fallback
    console.warn('API offline, carregando dados locais:', erro.message);
    renderCards(FALLBACK_DATA, container);
  }
}

// Função que renderiza os cards (performance otimizada)
function renderCards(dados, container) {
  // Performance: cria array de strings e junta tudo de uma vez
  // Evita recriar o DOM a cada iteração (innerHTML += é lento)
  const cardsHTML = dados.map(item => createCardHTML(item)).join('');
  container.innerHTML = cardsHTML;
}

// Função que cria o HTML de UM card
function createCardHTML(item) {
  return `
    <div class="trending-card" data-id="${item.id}">
      <img src="${item.image}" alt="${item.alt}" loading="lazy" />

      <div class="trending-rate">
        <p>${item.rating} <i class="fa-solid fa-star"></i></p>
      </div>

      <p class="trending-card-description">
        ${item.title}
        <span>${item.flavor}</span>
      </p>
    </div>
  `;
}

// Executa quando a página terminar de carregar
document.addEventListener('DOMContentLoaded', loadTrendingCards);


// HEADER SCROLL EFFECT 


window.addEventListener('scroll', () => {
  const header = document.getElementById('header');

  if (!header) return;


  if (window.scrollY > 0) {
    header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});