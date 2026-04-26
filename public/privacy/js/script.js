// ========= Configuração =========
// Adicione/remova fotos aqui. "locked: true" = aparece borrada (precisa assinar).
const POSTS = [
  { img: 'images/foto1.jpg', locked: false },
  { img: 'images/foto2.jpg', locked: true  },
  { img: 'images/foto3.jpg', locked: true  },
];

const VIDEOS = [
  { img: 'images/video1.jpg', video: 'videos/video1.mp4', locked: false },
  { img: 'images/video2.jpg', video: 'videos/video2.mp4', locked: true  },
  { img: 'images/video3.jpg', video: 'videos/video3.mp4', locked: true  },
  { img: 'images/video4.jpg', video: 'videos/video4.mp4', locked: true  },
];

// ========= Renderização =========
function createCard(item, isVideo = false) {
  const card = document.createElement('div');
  card.className = 'card' + (item.locked ? ' card--locked' : '') + (isVideo ? ' card--video' : '');

  const img = document.createElement('img');
  img.src = item.img;
  img.alt = isVideo ? 'Vídeo exclusivo' : 'Foto exclusiva';
  img.loading = 'lazy';
  img.onerror = () => { img.src = '/placeholder.svg'; };
  card.appendChild(img);

  if (item.locked) {
    const lock = document.createElement('div');
    lock.className = 'card__lock';
    lock.innerHTML = '🔒<span>Assine para ver</span>';
    card.appendChild(lock);
    card.addEventListener('click', openModal);
  } else if (isVideo) {
    const play = document.createElement('div');
    play.className = 'card__play';
    play.textContent = '▶';
    card.appendChild(play);
  }

  return card;
}

function renderGrid(targetId, items, isVideo = false) {
  const grid = document.getElementById(targetId);
  if (!grid) return;
  grid.innerHTML = '';
  items.forEach(item => grid.appendChild(createCard(item, isVideo)));
}

renderGrid('feedGrid', POSTS);
renderGrid('photosGrid', POSTS);
renderGrid('videosGrid', VIDEOS, true);

// ========= Tabs =========
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    tabs.forEach(t => t.classList.remove('tab--active'));
    panels.forEach(p => p.classList.remove('panel--active'));
    tab.classList.add('tab--active');
    document.querySelector(`.panel[data-panel="${target}"]`)?.classList.add('panel--active');
  });
});

// ========= Modal =========
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalCta = document.getElementById('modalCta');

function openModal() { modal.hidden = false; document.body.style.overflow = 'hidden'; }
function closeModal() { modal.hidden = true; document.body.style.overflow = ''; }

modalClose.addEventListener('click', closeModal);
modalCta.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ========= Botões =========
document.getElementById('subscribeBtn').addEventListener('click', () => {
  document.getElementById('planos').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('messageBtn').addEventListener('click', openModal);

// ========= Footer =========
document.getElementById('year').textContent = new Date().getFullYear();
