/* =========================================================================
   Andile Gumede — Portfolio JS
   - AOS init
   - Mobile nav toggle
   - Scroll progress bar
   - Sticky nav shadow + active link highlighting
   - Smooth-scroll with fixed-nav offset
   - Dark/light mode toggle (localStorage)
   - Hero typing animation
   - Animated stat counters
   - Project filters
   - Back-to-top button
   - Contact form: async submit to Formspree + confetti
   - Footer year auto-update
   ========================================================================= */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initAOS();
    initFooterYear();
    initThemeToggle();
    initMobileNav();
    initNavScroll();
    initScrollProgress();
    initSmoothScroll();
    initTyping();
    initCounters();
    initProjectFilters();
    initBackToTop();
    initContactForm();
  }

  /* ---------- AOS ---------- */
  function initAOS() {
    if (window.AOS) {
      window.AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 60,
        disable: function () {
          return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        }
      });
    }
  }

  /* ---------- Footer year ---------- */
  function initFooterYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------- Theme toggle ---------- */
  function initThemeToggle() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    var icon = btn.querySelector('i');

    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var initial = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(initial);

    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });

    function applyTheme(t) {
      if (t === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
        btn.setAttribute('aria-label', 'Switch to light mode');
      } else {
        document.documentElement.removeAttribute('data-theme');
        if (icon) { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); }
        btn.setAttribute('aria-label', 'Switch to dark mode');
      }
    }
  }

  /* ---------- Mobile nav ---------- */
  function initMobileNav() {
    var toggle = document.getElementById('menuToggle');
    var links = document.getElementById('navLinks');
    if (!toggle || !links) return;
    var icon = toggle.querySelector('i');

    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      if (icon) {
        icon.classList.toggle('fa-bars', !open);
        icon.classList.toggle('fa-xmark', open);
      }
    });

    // Close on link click
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (links.classList.contains('is-open')) {
          links.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-xmark'); }
        }
      });
    });
  }

  /* ---------- Scroll: progress bar + nav state + active link ---------- */
  function initNavScroll() {
    var nav = document.getElementById('nav');
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
    var sections = navLinks
      .map(function (a) {
        var id = a.getAttribute('href');
        return id && id.charAt(0) === '#' ? document.querySelector(id) : null;
      })
      .filter(Boolean);

    if (!nav && !sections.length) return;

    var navH = 72;

    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      if (nav) nav.classList.toggle('is-scrolled', y > 8);

      // Active link
      var activeIndex = 0;
      for (var i = 0; i < sections.length; i++) {
        var top = sections[i].getBoundingClientRect().top - navH - 24;
        if (top <= 0) activeIndex = i;
      }
      navLinks.forEach(function (a, i) { a.classList.toggle('is-active', i === activeIndex); });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initScrollProgress() {
    var bar = document.getElementById('scrollProgress');
    if (!bar) return;
    function update() {
      var h = document.documentElement;
      var max = (h.scrollHeight - h.clientHeight) || 1;
      var pct = (window.scrollY / max) * 100;
      bar.style.width = pct + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ---------- Smooth scroll with nav offset ---------- */
  function initSmoothScroll() {
    var navH = 72;
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var href = a.getAttribute('href');
        if (!href || href === '#') return;
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - navH + 1;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ---------- Typing animation in hero ---------- */
  function initTyping() {
    var el = document.getElementById('typing');
    if (!el) return;

    var words = [
      'CS Manager',
      'Call Centre Manager',
      'Account Operations Lead',
      'Team Leader & Coach',
      'Data-Driven CS Pro'
    ];
    var wordIndex = 0, charIndex = 0, deleting = false;

    var typeSpeed = 70;
    var deleteSpeed = 40;
    var pauseEnd = 1400;
    var pauseStart = 350;

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = words[0];
      return;
    }

    function tick() {
      var current = words[wordIndex];
      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          return setTimeout(tick, pauseEnd);
        }
        return setTimeout(tick, typeSpeed);
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 1) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          return setTimeout(tick, pauseStart);
        }
        return setTimeout(tick, deleteSpeed);
      }
    }
    setTimeout(tick, 450);
  }

  /* ---------- Animated counters in stat strip ---------- */
  function initCounters() {
    var els = document.querySelectorAll('[data-counter]');
    if (!els.length) return;

    var shown = new WeakSet();

    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { animate(el); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !shown.has(entry.target)) {
          shown.add(entry.target);
          animate(entry.target);
        }
      });
    }, { threshold: 0.4 });

    els.forEach(function (el) { io.observe(el); });

    function animate(el) {
      var target = parseFloat(el.getAttribute('data-counter')) || 0;
      var prefix = el.getAttribute('data-prefix') || '';
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = 1400;
      var start = performance.now();

      function frame(now) {
        var t = Math.min(1, (now - start) / duration);
        var eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        var value = target * eased;
        var display;
        if (target >= 1000) {
          display = Math.round(value).toLocaleString();
        } else if (target % 1 !== 0) {
          display = value.toFixed(1);
        } else {
          display = Math.round(value).toString();
        }
        el.textContent = prefix + display + suffix;
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
  }

  /* ---------- Project filters ---------- */
  function initProjectFilters() {
    var buttons = document.querySelectorAll('.filter');
    var projects = document.querySelectorAll('.project');
    if (!buttons.length || !projects.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');
        buttons.forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
        });
        projects.forEach(function (p) {
          var tags = (p.getAttribute('data-tags') || '').split(/\s+/);
          var show = filter === 'all' || tags.indexOf(filter) !== -1;
          p.classList.toggle('is-hidden', !show);
        });
      });
    });
  }

  /* ---------- Back to top ---------- */
  function initBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('is-visible', window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Contact form ---------- */
  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    var submitBtn = document.getElementById('submitBtn');
    var note = document.getElementById('formNote');

    form.addEventListener('submit', function (e) {
      // Reset note
      if (note) { note.textContent = ''; note.className = 'form-note'; }

      // Basic validation
      var email = form.querySelector('#email');
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        e.preventDefault();
        if (note) { note.textContent = 'Please enter a valid email address.'; note.classList.add('is-error'); }
        email.focus();
        return;
      }

      var action = form.getAttribute('action') || '';
      // If Formspree URL isn't set yet, simulate success client-side so the
      // experience still feels finished before deployment.
      if (action.indexOf('YOUR_FORMSPREE_ID') !== -1 || !action) {
        e.preventDefault();
        succeed();
        return;
      }

      // Otherwise: real async submit to Formspree
      e.preventDefault();
      submitBtn && submitBtn.classList.add('is-loading');

      var data = new FormData(form);
      fetch(action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (res) {
          if (res.ok) { succeed(); }
          else { fail('Hmm, that didn\'t go through. Please email me directly.'); }
        })
        .catch(function () { fail('Network hiccup. Please email me directly.'); })
        .finally(function () { submitBtn && submitBtn.classList.remove('is-loading'); });
    });

    function succeed() {
      form.reset();
      if (note) {
        note.textContent = 'Thanks — message received. I’ll get back to you within 24 hours.';
        note.classList.add('is-success');
      }
      confetti();
    }
    function fail(msg) {
      if (note) { note.textContent = msg; note.classList.add('is-error'); }
    }
  }

  /* ---------- Confetti micro-delight ---------- */
  function confetti() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var colors = ['#2563EB', '#10B981', '#F59E0B', '#6366F1', '#EC4899'];
    var count = 28;
    var origin = { x: window.innerWidth / 2, y: window.innerHeight * 0.6 };

    for (var i = 0; i < count; i++) {
      var piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = origin.x + 'px';
      piece.style.top = origin.y + 'px';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      var dx = (Math.random() - 0.5) * window.innerWidth * 0.6;
      piece.style.setProperty('--cx', dx + 'px');
      piece.style.animationDelay = (Math.random() * 0.15) + 's';
      piece.style.borderRadius = Math.random() > 0.5 ? '2px' : '50%';
      document.body.appendChild(piece);
      setTimeout((function (p) { return function () { p.remove(); }; })(piece), 2800);
    }
  }
})();
