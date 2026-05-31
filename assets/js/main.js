// ===========================
// MAIN.JS
// Common UI interactions
// ===========================

// --- NAV ACTIVE STATE ---
function setNavActive() {
  const path = window.location.pathname;
  // Main nav
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

  // Sub nav
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

// --- MOBILE MENU ---
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });
}

// --- LIGHTBOX ---
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

  // Close via button
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  // Close via overlay click
  lightboxEl.addEventListener('click', (e) => {
    if (e.target === lightboxEl) closeLightbox();
  });
  // Close via ESC
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

// --- DASHBOARD SEARCH + FILTER + PAGINATION ---
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

  // Populate category dropdown
  if (categorySelect && typeof CATEGORIES !== 'undefined') {
    CATEGORIES.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat.value;
      opt.textContent = cat.label;
      categorySelect.appendChild(opt);
    });
  }

  // --- Render articles for current page ---
  function renderPage() {
    articleList.innerHTML = '';

    if (filteredArticles.length === 0) {
      articleList.innerHTML = '<div class="no-results">Tidak ada artikel yang ditemukan.</div>';
      if (resultCount) resultCount.textContent = '0 hasil';
      renderPagination(0);
      return;
    }

    const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
    // Clamp currentPage
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

  // --- Render pagination buttons ---
  function renderPagination(totalPages) {
    if (!paginationEl) return;
    paginationEl.innerHTML = '';

    if (totalPages <= 1) return;

    // Helper: create a page button
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
          // Scroll to article list top
          articleList.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
      return btn;
    }

    // « Prev button
    const prevBtn = makeBtn('«', currentPage - 1, false, currentPage === 1, false);
    paginationEl.appendChild(prevBtn);

    // Build page number list with ellipsis logic
    // Always show: first, last, currentPage-1, currentPage, currentPage+1
    const delta = 2; // pages around current
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

    // » Next button
    const nextBtn = makeBtn('»', currentPage + 1, false, currentPage === totalPages, false);
    paginationEl.appendChild(nextBtn);
  }

  // --- Filter articles and reset to page 1 ---
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

    // Sort articles by ID (newest first)
    filteredArticles.sort((a, b) => b.id - a.id);

    currentPage = 1;
    renderPage();
  }

  //renderPage()
  // Initial render (calls filterArticles to apply sorting)
  filterArticles();

  // Bind events
  searchInput.addEventListener('input', filterArticles);
  if (categorySelect) categorySelect.addEventListener('change', filterArticles);
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  setNavActive();
  initMobileMenu();
  initDashboard();
});
