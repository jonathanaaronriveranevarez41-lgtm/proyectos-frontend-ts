import './styles/style.css';
import type { Gif } from './models/gif.interface';

const MEDIA_URL = 'https://media.giphy.com/media';

const gifs: Gif[] = [
  {
    id: 'cat-01',
    title: 'Gato programando',
    url: `${MEDIA_URL}/JIX9t2j0ZTN9S/giphy.gif`,
    username: 'gifinder',
    description: 'Un divertido gato tecleando en la laptop',
    tags: ['gato', 'programación', 'computadora'],
    rating: 'g',
  },
  {
    id: 'celebration-01',
    title: 'Celebración del equipo',
    url: `${MEDIA_URL}/g9582DNuQppxC/giphy.gif`,
    tags: ['equipo', 'éxito', 'celebración'],
    rating: 'g',
  },
  {
    id: 'coding-01',
    title: 'Código en progreso',
    url: `${MEDIA_URL}/13HgwGsXF0aiGY/giphy.gif`,
    username: 'developer',
    description: 'Pantalla con líneas de código fluyendo',
    tags: ['código', 'desarrollo', 'teclado'],
    rating: 'pg',
  },
  {
    id: 'idea-01',
    title: 'Nueva idea',
    url: `${MEDIA_URL}/10HIRnAWXxn0MhKLK/giphy.gif`,
    tags: ['idea', 'creatividad', 'solución'],
    rating: 'g',
  },
  {
    id: 'coffee-01',
    title: 'Café matutino',
    url: `${MEDIA_URL}/3o7TKoWXm3okO1VV28/giphy.gif`,
    username: 'coffeelover',
    description: 'Taza de café humeante para iniciar el desarrollo',
    tags: ['café', 'mañana', 'energía'],
    rating: 'g',
  },
  {
    id: 'error-404',
    title: 'Buscando el bug',
    url: `${MEDIA_URL}/l22ysLe5486IzD22A/giphy.gif`,
    username: 'tester',
    description: 'Lupa analizando código en busca de errores',
    tags: ['bug', 'error', 'debug'],
    rating: 'g',
  },
];

// 1. Inyectar HTML en el elemento #app
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
<main class="app-shell">
  <header class="hero">
    <p class="eyebrow">EC1 - Fundamentos de TypeScript</p>
    <h1>GIFinder</h1>
    <p>Explora una colección local de GIFs.</p>
  </header>

  <form id="search-form" class="search-form">
    <label for="search-input">
      Buscar por título, autor, etiqueta o descripción
    </label>
    <div class="search-row">
      <input id="search-input" name="query" type="search" placeholder="Ejemplo: gato" autocomplete="off" />
      <button type="submit">Buscar</button>
    </div>
  </form>

  <p id="search-status" class="status" aria-live="polite"></p>

  <section id="gif-gallery" class="gallery" aria-label="Resultados"></section>
</main>
`;

// 2. Seleccionar elementos del DOM con Non-Null Assertion (!)
const form = document.querySelector<HTMLFormElement>('#search-form')!;
const input = document.querySelector<HTMLInputElement>('#search-input')!;
const gallery = document.querySelector<HTMLElement>('#gif-gallery')!;
const status = document.querySelector<HTMLParagraphElement>('#search-status')!;

// 3. Funciones auxiliares
function normalizeText(value: string): string {
  return value.trim().toLocaleLowerCase('es-MX');
}

function matchesQuery(gif: Gif, query: string): boolean {
  const searchableText = [
    gif.title,
    gif.username ?? '',
    gif.description ?? '',
    ...gif.tags,
  ].join(' ');

  return normalizeText(searchableText).includes(query);
}

function searchGifs(collection: Gif[], value: string): Gif[] {
  const query = normalizeText(value);
  if (!query) return [...collection];
  return collection.filter((gif) => matchesQuery(gif, query));
}

function createGifCard(gif: Gif): string {
  const {
    title,
    url,
    username = 'Autor no disponible',
    description = 'Sin descripción',
    tags,
    rating,
  } = gif;

  return `
  <article class="gif-card">
    <img src="${url}" alt="${title}" loading="lazy" />
    <div class="gif-card_content">
      <h2>${title}</h2>
      <p>${username} - Clasificación ${rating.toUpperCase()}</p>
      <p class="description">${description}</p>
      <p class="tags">${tags.map((tag) => `#${tag}`).join(' ')}</p>
    </div>
  </article>
  `;
}

// 4. Renderizado
function renderGifs(collection: Gif[]): void {
  const total = collection.length;
  const label = total === 1 ? 'resultado' : 'resultados';

  status.textContent = `${total} ${label}`;

  if (total === 0) {
    gallery.innerHTML = `
      <p class="empty-state">No se encontraron GIFs. Prueba con otra palabra.</p>
    `;
    return;
  }

  gallery.innerHTML = collection.map(createGifCard).join('');
}

// 5. Eventos
form.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault();
  const results = searchGifs(gifs, input.value);
  renderGifs(results);
});

input.addEventListener('input', () => {
  if (input.value.trim() === '') {
    renderGifs(gifs);
  }
});

// Inicializar
renderGifs(gifs);