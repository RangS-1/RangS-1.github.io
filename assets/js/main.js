
function setNavActive() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    link.classList.remove('active');

    if (path === '/' || path.endsWith('/index.html') && !path.includes('/dashboard') && !path.includes('/about') && !path.includes('/pages') && !path.includes('/projects') && !path.includes('/arts') && !path.includes('/cert')) {
      if (href.includes('index.html') && !href.includes('/dashboard') && !href.includes('/about')) {
        link.classList.add('active');
      }
    } else if (path.includes('/dashboard') || path.includes('/projects') || path.includes('/arts') || path.includes('/cert')) {
      if (href.includes('/dashboard')) link.classList.add('active');
    } else if (path.includes('/about')) {
      if (href.includes('/about')) link.classList.add('active');
    }
  });

  document.querySelectorAll('.sub-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    link.classList.remove('active');

    if (path.includes('/dashboard') && href.includes('/dashboard')) link.classList.add('active');
    else if (path.includes('/projects') && href.includes('/projects')) link.classList.add('active');
    else if (path.includes('/arts') && href.includes('/arts')) link.classList.add('active');
    else if (path.includes('/cert') && href.includes('/cert')) link.classList.add('active');
  });
}

function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });
}

let lightboxEl = null;

function createLightbox() {
  lightboxEl = document.createElement('div');
  lightboxEl.className = 'lightbox-overlay';
  lightboxEl.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" id="lightboxClose">✕</button>
      <img src="" alt="" class="lightbox-img" id="lightboxImg">
      <div class="lightbox-body">
        <div class="lightbox-title" id="lightboxTitle"></div>
        <div class="lightbox-meta" id="lightboxMeta"></div>
        <div class="cert-skills" id="lightboxSkills"></div>
      </div>
    </div>
  `;
  document.body.appendChild(lightboxEl);

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightboxEl.addEventListener('click', (e) => {
    if (e.target === lightboxEl) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

function openLightbox({ imgSrc, title, meta, skills }) {
  if (!lightboxEl) createLightbox();
  document.getElementById('lightboxImg').src = imgSrc;
  document.getElementById('lightboxImg').alt = title;
  document.getElementById('lightboxTitle').textContent = title;
  document.getElementById('lightboxMeta').textContent = meta || '';
  const skillsEl = document.getElementById('lightboxSkills');
  skillsEl.innerHTML = '';
  if (skills && skills.length > 0) {
    skills.forEach(s => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = s;
      skillsEl.appendChild(span);
    });
  }
  lightboxEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (lightboxEl) {
    lightboxEl.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function initDashboard() {
  const searchInput = document.getElementById('searchInput');
  const categorySelect = document.getElementById('categorySelect');
  const articleList = document.getElementById('articleList');
  const resultCount = document.getElementById('resultCount');
  const paginationEl = document.getElementById('pagination');

  if (!searchInput || !articleList || typeof ARTICLES === 'undefined') return;

  const ARTICLES_PER_PAGE = 10;
  let currentPage = 1;
  let filteredArticles = [...ARTICLES];

  if (categorySelect && typeof CATEGORIES !== 'undefined') {
    CATEGORIES.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat.value;
      opt.textContent = cat.label;
      categorySelect.appendChild(opt);
    });
  }

  function renderPage() {
    articleList.innerHTML = '';

    if (filteredArticles.length === 0) {
      articleList.innerHTML = '<div class="no-results">Tidak ada artikel yang ditemukan.</div>';
      if (resultCount) resultCount.textContent = '0 hasil';
      renderPagination(0);
      return;
    }

    const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    const end = Math.min(start + ARTICLES_PER_PAGE, filteredArticles.length);
    const pageArticles = filteredArticles.slice(start, end);

    if (resultCount) resultCount.textContent = `${filteredArticles.length} hasil`;

    pageArticles.forEach(article => {
      const item = document.createElement('div');
      item.className = 'article-item';
      item.innerHTML = `
        <div class="article-meta">
          <span>${article.date}</span>
          <span>·</span>
          <span class="cat-tag">[${article.category}]</span>
          <span>·</span>
          <span>${article.readTime}</span>
        </div>
        <div class="article-item-title">${article.title}</div>
        <div class="article-item-summary">${article.summary}</div>
        <div class="article-tags">
          ${article.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
        </div>
      `;
      item.addEventListener('click', () => {
        window.location.href = article.url;
      });
      articleList.appendChild(item);
    });

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    if (!paginationEl) return;
    paginationEl.innerHTML = '';

    if (totalPages <= 1) return;

    function makeBtn(label, page, isActive, isDisabled, isEllipsis) {
      const btn = document.createElement('button');
      btn.className = 'page-btn';
      btn.textContent = label;
      if (isActive) btn.classList.add('active');
      if (isDisabled) btn.classList.add('disabled');
      if (isEllipsis) btn.classList.add('ellipsis');
      if (!isDisabled && !isEllipsis) {
        btn.addEventListener('click', () => {
          currentPage = page;
          renderPage();
          articleList.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
      return btn;
    }

    const prevBtn = makeBtn('«', currentPage - 1, false, currentPage === 1, false);
    paginationEl.appendChild(prevBtn);

    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    let prev = 0;
    for (const i of range) {
      if (prev && i - prev > 1) {
        rangeWithDots.push('...');
      }
      rangeWithDots.push(i);
      prev = i;
    }

    rangeWithDots.forEach(item => {
      if (item === '...') {
        paginationEl.appendChild(makeBtn('…', null, false, true, true));
      } else {
        paginationEl.appendChild(makeBtn(item, item, item === currentPage, false, false));
      }
    });

    const nextBtn = makeBtn('»', currentPage + 1, false, currentPage === totalPages, false);
    paginationEl.appendChild(nextBtn);
  }

  function filterArticles() {
    const query = searchInput.value.toLowerCase().trim();
    const category = categorySelect ? categorySelect.value : 'all';

    filteredArticles = [...ARTICLES];

    if (category !== 'all') {
      filteredArticles = filteredArticles.filter(a => a.category === category);
    }

    if (query) {
      filteredArticles = filteredArticles.filter(a =>
        a.title.toLowerCase().includes(query) ||
        a.summary.toLowerCase().includes(query) ||
        a.category.toLowerCase().includes(query) ||
        a.date.toLowerCase().includes(query) ||
        a.tags.some(t => t.toLowerCase().includes(query))
      );
    }

    filteredArticles.sort((a, b) => b.id - a.id);

    currentPage = 1;
    renderPage();
  }

  filterArticles();

  searchInput.addEventListener('input', filterArticles);
  if (categorySelect) categorySelect.addEventListener('change', filterArticles);
}

const INDO_MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

function parseArtDateInfo(dateStr) {
  if (!dateStr) return { key: '0000-00', label: 'Lainnya', formatted: '-' };
  const parts = String(dateStr).trim().split(/[-/]/);
  if (parts.length >= 2) {
    const year = parseInt(parts[0], 10);
    const monthIdx = parseInt(parts[1], 10) - 1;
    if (!isNaN(year) && monthIdx >= 0 && monthIdx < 12) {
      const day = parts.length >= 3 ? parseInt(parts[2], 10) : null;
      const key = `${year}-${String(monthIdx + 1).padStart(2, '0')}`;
      const label = `${INDO_MONTHS[monthIdx]} ${year}`;
      const formatted = day && !isNaN(day) ? `${day} ${INDO_MONTHS[monthIdx]} ${year}` : label;
      return { key, label, formatted, year, month: monthIdx };
    }
  }
  return { key: '0000-00', label: 'Lainnya', formatted: dateStr };
}

function openArtDetailLightbox(art) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  const artName = art.artName || art['art-name'] || 'Tanpa Judul';
  const type = art.type || '';
  const desc = art.description || '';
  const ref = art.reference;
  const dateInfo = parseArtDateInfo(art.date);

  const imgEl = document.getElementById('lbImg');
  if (imgEl) {
    imgEl.src = art.image;
    imgEl.alt = artName;
  }

  const titleEl = document.getElementById('lbTitle');
  if (titleEl) titleEl.textContent = artName;

  const typeEl = document.getElementById('lbType');
  if (typeEl) {
    if (type) {
      typeEl.textContent = `#${type}`;
      typeEl.style.display = 'inline-block';
    } else {
      typeEl.style.display = 'none';
    }
  }

  const metaEl = document.getElementById('lbMeta');
  if (metaEl) {
    const metaParts = [];
    if (dateInfo.formatted && dateInfo.formatted !== '-') {
      metaParts.push(dateInfo.formatted);
    }
    if (art.time) {
      metaParts.push(art.time);
    }
    metaEl.textContent = metaParts.length > 0 ? `${metaParts.join(' · ')}` : '';
  }

  const descEl = document.getElementById('lbDesc');
  if (descEl) {
    descEl.textContent = desc;
    descEl.style.display = desc ? 'block' : 'none';
  }

  const actionsEl = document.getElementById('lbActions');
  if (actionsEl) {
    actionsEl.innerHTML = '';
    const hasRef = ref && ref.trim() !== '' && ref.trim().toLowerCase() !== 'none';
    if (hasRef) {
      const btn = document.createElement('a');
      btn.className = 'lightbox-ref-btn';
      btn.href = ref;
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
      btn.innerHTML = '↗ Lihat Referensi';
      actionsEl.appendChild(btn);
    } else {
      const btn = document.createElement('span');
      btn.className = 'lightbox-ref-btn disabled';
      btn.textContent = 'No reference used';
      actionsEl.appendChild(btn);
    }
  }

  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightboxArts() {
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function initArts() {
  const container = document.getElementById('artsContainer');
  if (!container || typeof ARTS === 'undefined') return;

  const filterBtns = document.querySelectorAll('.arts-filter-btn');
  let currentFilter = 'all';

  const lb = document.getElementById('lightbox');
  if (lb && !lb.dataset.listenersBound) {
    lb.dataset.listenersBound = 'true';
    lb.addEventListener('click', (e) => {
      if (e.target === lb) closeLightboxArts();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightboxArts();
    });
  }

  function renderGallery() {
    container.innerHTML = '';

    const filtered = ARTS.filter(art => {
      if (currentFilter === 'all') return true;
      const type = (art.type || '').toLowerCase();
      return type === currentFilter.toLowerCase();
    });

    if (filtered.length === 0) {
      container.innerHTML = '<div class="no-results">Tidak ada karya yang ditemukan untuk kategori ini.</div>';
      return;
    }

    const groupsMap = new Map();
    filtered.forEach(art => {
      const dateInfo = parseArtDateInfo(art.date);
      if (!groupsMap.has(dateInfo.key)) {
        groupsMap.set(dateInfo.key, {
          key: dateInfo.key,
          label: dateInfo.label,
          items: []
        });
      }
      groupsMap.get(dateInfo.key).items.push(art);
    });

    groupsMap.forEach(group => {
      group.items.sort((a, b) => (Number(b.id) || 0) - (Number(a.id) || 0));
      group.maxId = group.items.length > 0 ? (Number(group.items[0].id) || 0) : 0;
    });

    const sortedGroups = Array.from(groupsMap.values()).sort((a, b) => {
      if (b.maxId !== a.maxId) {
        return b.maxId - a.maxId;
      }
      return b.key.localeCompare(a.key);
    });

    sortedGroups.forEach(group => {
      const section = document.createElement('section');
      section.className = 'arts-month-section';

      const title = document.createElement('h2');
      title.className = 'arts-month-title';
      title.textContent = group.label;
      section.appendChild(title);

      const grid = document.createElement('div');
      grid.className = 'masonry-grid';

      group.items.forEach(art => {
        const artName = art.artName || art['art-name'] || 'Tanpa Judul';
        const type = art.type || '';
        const item = document.createElement('div');
        item.className = 'masonry-item';
        item.setAttribute('data-id', art.id);
        item.setAttribute('data-tag', type.toLowerCase());

        item.innerHTML = `
          <img src="${art.image}" alt="${artName}" loading="lazy" onerror="this.style.background='#d4cfc6';this.style.minHeight='200px';">
          <div class="masonry-overlay">
            <div class="masonry-overlay-text">lihat detail</div>
          </div>
          <div class="masonry-item-info">
            <span class="masonry-item-tag">#${type}</span>
            <div class="masonry-item-title">${artName}</div>
          </div>
        `;

        item.addEventListener('click', () => {
          openArtDetailLightbox(art);
        });

        grid.appendChild(item);
      });

      section.appendChild(grid);
      container.appendChild(section);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter || 'all';
      renderGallery();
    });
  });

  renderGallery();
}

document.addEventListener('DOMContentLoaded', () => {
  setNavActive();
  initMobileMenu();
  initDashboard();
  initArts();
});
