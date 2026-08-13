(() => {
  'use strict';

  /* ============ Portfolio data ============ */
  const EXAMPLES_BY_KEY = {
    'clay-mask': {
      key: 'clay-mask',
      label: 'THUMBNAIL · CLAY MASK',
      layout: 'square',
      images: [
        { src: 'assets/images/clay-mask.jpg', alt: 'Clay mask thumbnail' },
        { src: 'assets/images/ingredients.jpg', alt: 'Ingredients callout' }
      ],
      reasons: [
        '"pore" 관련 키워드는 검색량이 높았지만, 리뷰에서는 클레이 마스크 특유의 "당김·건조함(stripped)"에 대한 불만이 반복적으로 나타났습니다.',
        '스킨케어 소비자들이 성분에 점점 더 민감해지는 추세를 반영해, 벤토나이트처럼 검색량은 낮지만 신뢰를 주는 롱테일 키워드 성분명을 모듈에 명시했습니다.',
        '"쿨링감"과 "당기지 않음"을 앞세워, 포어 케어와 저자극을 동시에 만족시키는 메시지로 구성했습니다.'
      ]
    },
    'lip-stain': {
      key: 'lip-stain',
      label: 'A+ CONTENT · PLUMPING LIP GLOSS',
      layout: 'wide',
      aspect: '970/600',
      fanWidth: 56,
      fanStep: 8,
      images: [
        { src: 'assets/images/lip-gloss-clear.jpg', alt: '클리어 글로스 사용 컷' },
        { src: 'assets/images/lip-gloss-red.jpg', alt: '레드 글로시 스테인 사용 컷' },
        { src: 'assets/images/lip-gloss-pink.jpg', alt: '핑크 글로시 스테인 사용 컷' }
      ],
      reasons: [
        '리뷰와 Q&A에서 "한 번 발랐을 때"와 "덧발랐을 때" 색상 차이에 대한 궁금증이 반복적으로 나타나, 사용법을 색상 강도 중심으로 구성했습니다.',
        '단독 사용과 다른 제품과의 레이어링을 모두 보여줘, 구매 전 발색·활용법에 대한 불확실성을 줄였습니다.',
        '레이어링 제품을 함께 노출해 교차 판매 가능성도 열어두었습니다.'
      ]
    },
    'clinical': {
      key: 'clinical',
      label: 'A+ CONTENT (PREMIUM) · MIST',
      layout: 'wide',
      aspect: '5/2',
      fanWidth: 88,
      fanStep: 8,
      images: [
        { src: 'assets/images/clinical-1.jpg', alt: '임상 시험 1 — 수분감 개선' },
        { src: 'assets/images/clinical-2.jpg', alt: '임상 시험 2 — 피부결 개선' },
        { src: 'assets/images/clinical-3.jpg', alt: '임상 시험 3 — 유수분 밸런스 개선' }
      ],
      reasons: [
        '미스트 카테고리는 "정말 효과가 있을까?"라는 의구심이 구매 전환의 가장 큰 장벽이라, 수치와 이미지로 증명하는 임상 시험 결과를 프리미엄 A+ 모듈로 구성했습니다.',
        'Before/After 사진과 그래프로 개선폭(수분감·피부결·유수분 밸런스)을 한눈에 보여줘 신뢰를 시각적으로 전달했습니다.',
        '시험 기관, 기간, 샘플 수, 측정 장비 등 법적으로 필요한 문구를 각 모듈 하단에 작게 명시해 신뢰도와 규정 준수를 동시에 확보했습니다.'
      ]
    },
    'lip-bullets': {
      key: 'lip-bullets',
      label: 'LISTING COPY · LIP STAIN',
      layout: 'keyword',
      keywords: [
        { term: 'lip stain', vol: '215,015', longtail: false },
        { term: 'hyaluronic acid', vol: '79,686', longtail: false },
        { term: 'peptide lip treatment', vol: '7,960', longtail: false },
        { term: 'korean lip oil stain', vol: '1,683', longtail: true },
        { term: 'hydrating lip stain', vol: '590', longtail: true }
      ],
      bullets: [
        'HIGH-SHINE, COLOR-DRENCHED LIP STAIN',
        'HYDRATING SERUM BLEND — hyaluronic acid',
        'PEPTIDE COMPLEX 2×',
        'CLEAN, K-BEAUTY ROOTS — skin-friendly, paraben-free'
      ],
      reasons: [
        '"lip stain"같은 검색량이 가장 높은 키워드를 제품명과 불릿에 반영하고, 리뷰를 스캔해 "high shine", "hydrating"처럼 반복 등장하는 키워드를 추출했습니다.',
        '"hydrating lip stain", "korean lip stain"같은 롱테일 키워드를 찾아, 추출한 모디파이어와 함께 각 불릿에 엮어 배치했습니다.',
        '"hyaluronic acid", "peptide" 같은 성분 키워드의 검색량이 높다는 점에서, 성분에 민감한 고객층을 겨냥해 성분명을 불릿에 직접 노출했습니다.'
      ]
    },
    'toner': {
      key: 'toner',
      label: 'THUMBNAIL · TONER',
      layout: 'square',
      images: [
        { src: 'assets/images/toner-1.jpg', alt: 'Toner thumbnail' },
        { src: 'assets/images/toner-2.jpg', alt: 'Toner texture shot' }
      ],
      reasons: [
        '리뷰 분석 결과 "촉촉함"은 원하지만 "끈적임"은 싫어하는 니즈가 반복적으로 드러났습니다.',
        '"without heaviness", "no stickiness", "watery texture", "lightweight" 등 실제 고객 언어를 모듈 카피에 그대로 반영했습니다.',
        '검색량이 높은 "hydration" 키워드는 유지하면서, 가벼운 사용감을 함께 증명하는 구조로 설계했습니다.'
      ]
    }
  };

  const EXAMPLE_ORDER = ['lip-bullets', 'toner', 'lip-stain', 'clay-mask', 'clinical'];
  const EXAMPLES = EXAMPLE_ORDER.map((k) => EXAMPLES_BY_KEY[k]);

  /* ============ Portfolio carousel ============ */
  const proofCard = document.getElementById('proofCard');
  const proofDots = document.getElementById('proofDots');
  const proofPrev = document.getElementById('proofPrev');
  const proofNext = document.getElementById('proofNext');

  let proofIndex = 0;

  function imgSlotHtml(img, idSuffix) {
    const missing = !img.src;
    const label = img.alt || 'Image';
    if (missing) {
      return `<div class="img-slot missing" data-label="${escapeHtml(label)}"></div>`;
    }
    return `<div class="img-slot" data-label="${escapeHtml(label)}">` +
      `<img src="${img.src}" alt="${escapeHtml(label)}" loading="lazy" ` +
      `onerror="this.closest('.img-slot').classList.add('missing')"></div>`;
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function renderVisual(ex) {
    if (ex.layout === 'wide') {
      const step = ex.fanStep || 15; // fan spread, as % of the wrap's own width
      const fanWidth = ex.fanWidth || 70; // each image's width, as % of the wrap's own width
      const aspectStr = ex.aspect || '970/600';
      const [aw, ah] = aspectStr.split('/').map(Number);
      const aspectDecimal = aw / ah;

      // Every offset below is expressed as a fraction of the wrap's WIDTH (not
      // height) so the cascade keeps the same proportions at any screen size.
      // The wrap's own height is then derived (via aspect-ratio) from that same
      // geometry, so the box always hugs the fanned images exactly — no fixed
      // height guess, no dead space, no separate mobile/desktop tuning.
      const imgHeightFrac = (fanWidth / 100) / aspectDecimal;
      const heightOverWidth = (2 * step / 100) + imgHeightFrac;

      const baseLeft = Math.max(0, (100 - (fanWidth + step)) / 2); // centers the group
      const topSteps = [0, step, step * 2];
      const leftSteps = [baseLeft, baseLeft + step / 2, baseLeft + step];

      const items = ex.images.map((img, i) => {
        const topStep = topSteps[i] !== undefined ? topSteps[i] : topSteps[topSteps.length - 1];
        const leftPct = leftSteps[i] !== undefined ? leftSteps[i] : leftSteps[leftSteps.length - 1];
        const topPct = heightOverWidth > 0 ? topStep / heightOverWidth : 0;
        const z = 3 - i;
        return `<div style="position:absolute;top:${topPct.toFixed(3)}%;left:${leftPct.toFixed(3)}%;width:${fanWidth}%;z-index:${z};aspect-ratio:${aspectStr}">` +
          imgSlotHtml(img, i) + `</div>`;
      }).join('');

      return `<div class="proof-wide-wrap"><div class="proof-wide" style="aspect-ratio:1 / ${heightOverWidth.toFixed(4)}">${items}</div></div>`;
    }

    if (ex.layout === 'keyword') {
      const keywordRows = ex.keywords.map((kw) => (
        `<div class="keyword-row${kw.longtail ? ' longtail' : ''}">` +
        `<span class="keyword-term">${escapeHtml(kw.term)}</span>` +
        `<span class="keyword-vol">${escapeHtml(kw.vol)}</span></div>`
      )).join('');
      const bulletLines = ex.bullets.map((b) => `<div class="proof-copy-line">· ${escapeHtml(b)}</div>`).join('');
      return `<div class="proof-keyword">` +
        `<div style="display:flex;flex-direction:column;gap:5px">` +
        `<div class="proof-keyword-head">키워드 검색량 · 광범위 → 롱테일</div>${keywordRows}</div>` +
        `<div class="proof-copy-block"><div class="proof-copy-head">최종 카피 (일부)</div>${bulletLines}</div>` +
        `</div>`;
    }

    // square (default)
    const items = ex.images.map((img, i) => imgSlotHtml(img, i)).join('');
    return `<div class="proof-square">${items}</div>`;
  }

  function renderProof() {
    const ex = EXAMPLES[proofIndex];
    const reasons = ex.reasons.map((r) => `<li>${escapeHtml(r)}</li>`).join('');

    proofCard.innerHTML = `
      <div class="proof-label">${escapeHtml(ex.label)}</div>
      <div class="proof-body">
        <div class="proof-visual">${renderVisual(ex)}</div>
        <div class="proof-reasons-col">
          <div class="proof-reasons-head">이런 리서치를 기반으로 만들었어요</div>
          <ul class="proof-reasons">${reasons}</ul>
        </div>
      </div>
    `;

    Array.from(proofDots.children).forEach((dot, i) => {
      dot.classList.toggle('is-active', i === proofIndex);
    });
  }

  function renderDots() {
    proofDots.innerHTML = EXAMPLES.map((_, i) =>
      `<button class="dot" aria-label="사례 ${i + 1}"></button>`
    ).join('');
    Array.from(proofDots.children).forEach((dot, i) => {
      dot.addEventListener('click', () => { proofIndex = i; renderProof(); });
    });
  }

  proofPrev.addEventListener('click', () => {
    proofIndex = (proofIndex - 1 + EXAMPLES.length) % EXAMPLES.length;
    renderProof();
  });
  proofNext.addEventListener('click', () => {
    proofIndex = (proofIndex + 1) % EXAMPLES.length;
    renderProof();
  });

  renderDots();
  renderProof();

  /* ============ FAQ accordion ============ */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question');
    const sign = item.querySelector('.faq-sign');
    btn.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      faqItems.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-sign').textContent = '+';
      });
      if (willOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        sign.textContent = '−';
      }
    });
  });

  /* ============ Video lightbox ============ */
  const lightbox = document.getElementById('lightbox');
  const lightboxVideo = document.getElementById('lightboxVideo');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src) {
    lightboxVideo.src = src;
    lightbox.classList.add('is-open');
    lightboxVideo.play().catch(() => {});
  }
  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightboxVideo.pause();
    lightboxVideo.removeAttribute('src');
    lightboxVideo.load();
  }

  document.querySelectorAll('.work-video-slot').forEach((slot) => {
    slot.addEventListener('click', () => {
      if (slot.classList.contains('missing')) return;
      openLightbox(slot.dataset.video);
    });
  });
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  /* ============ Booking modal ============ */
  const bookingModal = document.getElementById('bookingModal');
  const bookingIframe = document.getElementById('bookingIframe');
  const bookingModalClose = document.getElementById('bookingModalClose');

  function openBookingModal(url) {
    bookingIframe.src = url;
    bookingModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeBookingModal() {
    bookingModal.classList.remove('is-open');
    bookingIframe.src = 'about:blank';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.booking-cta').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openBookingModal(link.href);
    });
  });
  bookingModalClose.addEventListener('click', closeBookingModal);
  bookingModal.addEventListener('click', (e) => { if (e.target === bookingModal) closeBookingModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeBookingModal(); });

  /* ============ Mobile nav ============ */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
