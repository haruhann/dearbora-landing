(() => {
  'use strict';

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
