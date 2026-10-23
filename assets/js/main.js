/* Concepts Relaunch: Kopfzeile, Menü, Seitenwechsel, Slider, Lightbox, Videos, Formular, Scroll Animationen */
(function () {
  'use strict';
  var d = document, html = d.documentElement, body = d.body;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var G = window.gsap, ST = window.ScrollTrigger;
  if (reduce || !G || !ST) html.classList.add('no-anim');
  function $$(s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); }

  /* ---------- Kopfzeile und Fortschritt ---------- */
  var hdr = d.getElementById('hdr'), prog = d.querySelector('.hdr__progress'), lastY = 0, menuOpen = false;
  function onScroll() {
    var y = window.scrollY || 0, max = html.scrollHeight - innerHeight;
    hdr.classList.toggle('is-small', y > 40);
    hdr.classList.toggle('is-hidden', y > lastY + 2 && y > 480 && !menuOpen);
    if (y < lastY - 2) hdr.classList.remove('is-hidden');
    if (prog) prog.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
    lastY = y;
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Handy Menü ---------- */
  var burger = d.querySelector('.hdr__burger');
  function setMenu(open) {
    menuOpen = open; html.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) burger.addEventListener('click', function () { setMenu(!menuOpen); });
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menuOpen) setMenu(false); });

  /* ---------- Seitenwechsel mit Vorhang ---------- */
  var curtain = d.querySelector('.curtain');
  d.addEventListener('click', function (e) {
    var a = e.target.closest('a'); if (!a || !curtain || reduce) return;
    var href = a.getAttribute('href') || '';
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank') return;
    if (!/\.html(#.*)?$/.test(href) || /^https?:/.test(href)) return;
    if (href.split('#')[0] === location.pathname.split('/').pop() && href.indexOf('#') > -1) return;
    e.preventDefault(); setMenu(false);
    curtain.classList.add('is-leaving');
    setTimeout(function () { location.href = href; }, 480);
  });
  addEventListener('pageshow', function (e) { if (e.persisted && curtain) curtain.classList.remove('is-leaving'); });

  /* ---------- Slider in Karten ---------- */
  $$('[data-slider]').forEach(function (sl) {
    var imgs = $$('.slider__img', sl), n = imgs.length, i = 0;
    var cnt = sl.querySelector('.slider__count'), dots = $$('.slider__dots i', sl);
    function go(k) {
      i = (k + n) % n;
      imgs.forEach(function (im, j) {
        if (j === i && im.dataset.src) { im.src = im.dataset.src; if (im.dataset.srcset) im.srcset = im.dataset.srcset; delete im.dataset.src; }
        im.classList.toggle('is-on', j === i);
      });
      dots.forEach(function (dt, j) { dt.classList.toggle('is-on', j === i); });
      if (cnt) cnt.textContent = (i + 1) + '/' + n;
    }
    sl._go = go; sl._idx = function () { return i; };
    if (n < 2) return;
    sl.querySelector('.slider__btn--prev').addEventListener('click', function (e) { e.stopPropagation(); go(i - 1); });
    sl.querySelector('.slider__btn--next').addEventListener('click', function (e) { e.stopPropagation(); go(i + 1); });
    var sx = null;
    sl.addEventListener('pointerdown', function (e) { sx = e.clientX; });
    sl.addEventListener('pointerup', function (e) {
      if (sx === null) return; var dx = e.clientX - sx; sx = null;
      if (Math.abs(dx) > 40) { sl._swiped = true; go(dx < 0 ? i + 1 : i - 1); setTimeout(function () { sl._swiped = false; }, 50); }
    });
  });

  /* ---------- Lightbox ---------- */
  var lb = d.getElementById('lb');
  if (lb) {
    var lbImg = lb.querySelector('img'), lbCap = lb.querySelector('.lb__cap'), lbNum = lb.querySelector('.lb__num');
    var list = [], li = 0, lastFocus = null;
    function show(k) {
      li = (k + list.length) % list.length; lbImg.src = list[li];
      lbNum.textContent = (li + 1) + ' / ' + list.length;
      lb.querySelector('.lb__nav').style.visibility = list.length > 1 ? '' : 'hidden';
    }
    function openLb(media) {
      var imgs = $$('img', media);
      list = imgs.map(function (im) { return im.dataset.full || im.dataset.src || im.src; });
      var card = media.closest('.card');
      lbCap.innerHTML = card ? (card.querySelector('h3').textContent + '<span>' + (card.querySelector('.card__body p') || { textContent: '' }).textContent + '</span>') : '';
      lastFocus = media; show(media._idx ? media._idx() : 0);
      lb.classList.add('is-open'); body.style.overflow = 'hidden'; lb.querySelector('.lb__x').focus();
    }
    function closeLb() { lb.classList.remove('is-open'); body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
    $$('.card__media').forEach(function (m) {
      m.setAttribute('tabindex', '0'); m.setAttribute('role', 'button'); m.setAttribute('aria-label', 'Bilder groß ansehen');
      m.addEventListener('click', function (e) { if (m._swiped || e.target.closest('.slider__btn')) return; openLb(m); });
      m.addEventListener('keydown', function (e) { if (e.key === 'Enter') openLb(m); });
    });
    lb.querySelector('.lb__x').addEventListener('click', closeLb);
    lb.querySelector('.lb__prev').addEventListener('click', function () { show(li - 1); });
    lb.querySelector('.lb__next').addEventListener('click', function () { show(li + 1); });
    lb.querySelector('.lb__stage').addEventListener('click', function (e) { if (e.target === e.currentTarget) closeLb(); });
    d.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLb(); if (e.key === 'ArrowLeft') show(li - 1); if (e.key === 'ArrowRight') show(li + 1);
    });
    var lsx = null, st = lb.querySelector('.lb__stage');
    st.addEventListener('pointerdown', function (e) { lsx = e.clientX; });
    st.addEventListener('pointerup', function (e) { if (lsx === null) return; var dx = e.clientX - lsx; lsx = null; if (Math.abs(dx) > 40) show(dx < 0 ? li + 1 : li - 1); });
  }

  /* ---------- Video Fenster ---------- */
  var vm = d.getElementById('vm');
  if (vm) {
    var vmv = vm.querySelector('video'), vmLast = null;
    function openVm(src, poster, from) {
      vmLast = from; vmv.poster = poster || ''; vmv.src = src;
      vm.classList.add('is-open'); body.style.overflow = 'hidden';
      var p = vmv.play(); if (p && p.catch) p.catch(function () {});
      vm.querySelector('.lb__x').focus();
    }
    function closeVm() { vmv.pause(); vm.classList.remove('is-open'); body.style.overflow = ''; setTimeout(function () { vmv.removeAttribute('src'); vmv.load(); }, 350); if (vmLast) vmLast.focus(); }
    d.addEventListener('click', function (e) { var t = e.target.closest('[data-video]'); if (!t) return; e.preventDefault(); openVm(t.dataset.video, t.dataset.poster, t); });
    vm.querySelector('.lb__x').addEventListener('click', closeVm);
    vm.addEventListener('click', function (e) { if (e.target === vm) closeVm(); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && vm.classList.contains('is-open')) closeVm(); });
  }

  /* Hintergrund Videos nur abspielen, wenn sichtbar */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { var v = en.target; if (en.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else v.pause(); });
    }, { threshold: .05 });
    $$('video[data-bg]').forEach(function (v) { io.observe(v); });
  }

  /* ---------- Kontaktformular: öffnet die E-Mail mit allen Angaben ---------- */
  $$('form[data-mail]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (n) { var el = f.elements[n]; return el ? el.value.trim() : ''; };
      var subj = v('betreff') || 'Projektanfrage über die Website';
      var text = 'Name: ' + v('name') + '\nE-Mail: ' + v('email') + (v('telefon') ? '\nTelefon: ' + v('telefon') : '') + '\n\n' + v('nachricht');
      location.href = 'mailto:info@conceptsmedia.de?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(text);
    });
  });

  /* Leistungs Kacheln: roter Kreis startet an der Maus */
  $$('.svc__i').forEach(function (el) {
    el.addEventListener('pointermove', function (e) { var r = el.getBoundingClientRect(); el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
  });

  /* Statement: Wörter einzeln einpacken */
  $$('.statement').forEach(function (el) {
    el.innerHTML = el.textContent.trim().split(/\s+/).map(function (w) { return '<span class="w">' + w + '</span>'; }).join(' ');
  });

  /* Zahlen hochzählen */
  function countUp(el) {
    var to = parseFloat(el.dataset.count), dec = (el.dataset.count.split('.')[1] || '').length, t0 = null, dur = 1600;
    function fmt(x) { return x.toLocaleString('de-DE', { minimumFractionDigits: dec, maximumFractionDigits: dec }); }
    if (html.classList.contains('no-anim')) { el.textContent = fmt(to); return; }
    function step(t) { if (!t0) t0 = t; var p = Math.min(1, (t - t0) / dur); el.textContent = fmt(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }

  if (html.classList.contains('no-anim')) { $$('[data-count]').forEach(countUp); return; }

  /* ---------- Scroll Animationen ---------- */
  G.registerPlugin(ST);
  if (window.SplitText) G.registerPlugin(window.SplitText);
  ST.config({ ignoreMobileResize: true });
  var mm = G.matchMedia();

  // Sicherheitsnetz: falls etwas hängt, alles sichtbar machen
  setTimeout(function () { $$('[data-reveal]').forEach(function (el) { if (getComputedStyle(el).opacity === '0' && el.getBoundingClientRect().top < innerHeight) G.to(el, { opacity: 1, y: 0, duration: .4 }); }); }, 3500);

  // Überschriften Zeile für Zeile
  if (window.SplitText) {
    d.fonts.ready.then(function () {
      $$('[data-split]').forEach(function (el) {
        var s = new window.SplitText(el, { type: 'lines', linesClass: 'split-line', mask: 'lines' });
        G.from(s.lines, { yPercent: 110, duration: 1.05, ease: 'expo.out', stagger: .09, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
      });
      ST.refresh();
    });
  }

  // Unterseiten Held
  var ph = d.querySelector('.phero');
  if (ph) {
    var t = ph.querySelector('.phero__title'), bg = ph.querySelector('.phero__bg');
    G.fromTo(bg, { scale: 1.22 }, { scale: 1, duration: 2.2, ease: 'expo.out' });
    if (window.SplitText) {
      var sp = new window.SplitText(t, { type: 'chars', mask: 'chars' });
      G.from(sp.chars, { yPercent: 115, duration: 1.1, ease: 'expo.out', stagger: .028, delay: .35 });
    }
    G.from(ph.querySelector('.phero__sub'), { opacity: 0, letterSpacing: '1em', duration: 1.4, ease: 'expo.out', delay: .6 });
    G.from(ph.querySelector('.phero__box'), { y: 70, opacity: 0, duration: 1.2, ease: 'expo.out', delay: .8 });
    G.to(bg, { yPercent: 14, ease: 'none', scrollTrigger: { trigger: ph, start: 'top top', end: 'bottom top', scrub: true } });
    G.to(ph.querySelector('.phero__inner'), { y: -90, opacity: .2, ease: 'none', scrollTrigger: { trigger: ph, start: 'top top', end: 'bottom top', scrub: true } });
  }

  // Startseite Held
  var hero = d.querySelector('.hero');
  if (hero) {
    G.from(hero.querySelector('.hero__box'), { y: 60, opacity: 0, scale: .96, duration: 1.3, ease: 'expo.out', delay: .4 });
    G.from(hero.querySelectorAll('.hero__strip > *'), { y: 30, opacity: 0, duration: .9, ease: 'expo.out', stagger: .08, delay: .7 });
    G.to(hero.querySelector('.hero__media'), { scale: 1.15, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
    G.to(hero.querySelector('.hero__box'), { y: -120, opacity: 0, ease: 'none', scrollTrigger: { trigger: hero, start: '15% top', end: 'bottom top', scrub: true } });
  }

  // Einblenden in Gruppen
  ST.batch('[data-reveal]', {
    start: 'top 90%', once: true,
    onEnter: function (els) { G.to(els, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: .1, overwrite: true }); }
  });

  // Bilder öffnen sich beim Scrollen
  $$('[data-clip]').forEach(function (el) {
    var img = el.querySelector('img');
    G.to(el, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 92%', end: 'top 35%', scrub: .6 } });
    if (img) G.fromTo(img, { scale: 1.3 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // Parallax
  $$('[data-parallax]').forEach(function (el) {
    var amt = parseFloat(el.dataset.parallax) || 12;
    G.fromTo(el, { yPercent: -amt }, { yPercent: amt, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // Statement Wort für Wort
  $$('.statement').forEach(function (el) {
    G.to(el.querySelectorAll('.w'), { opacity: 1, stagger: .08, ease: 'none', scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 45%', scrub: true } });
  });

  // Zahlen
  $$('[data-count]').forEach(function (el) { ST.create({ trigger: el, start: 'top 90%', once: true, onEnter: function () { countUp(el); } }); });

  // Großes Statement: Zeilen fahren zusammen
  $$('.giant').forEach(function (g) {
    var l = g.querySelectorAll('.giant__l');
    G.fromTo(l[0], { xPercent: -28 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: g, start: 'top bottom', end: 'center center', scrub: true } });
    if (l[1]) G.fromTo(l[1], { xPercent: 28 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: g, start: 'top bottom', end: 'center center', scrub: true } });
  });

  // Kontakt Block
  $$('.cblock').forEach(function (c) {
    G.from(c.querySelector('.cblock__info'), { xPercent: -8, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: c, start: 'top 80%', once: true } });
    G.from(c.querySelector('.cblock__form'), { xPercent: 8, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: c, start: 'top 80%', once: true } });
  });

  // Zeitstrahl
  $$('.tl').forEach(function (tl) {
    G.to(tl.querySelector('.tl__line i'), { scaleY: 1, ease: 'none', scrollTrigger: { trigger: tl, start: 'top 70%', end: 'bottom 70%', scrub: true } });
  });

  // Laufband reagiert auf Scroll Tempo
  var marq = $$('.marquee__in');
  if (marq.length) {
    var skew = G.quickTo(marq, 'skewX', { duration: .5, ease: 'power3' });
    ST.create({ onUpdate: function (self) { skew(Math.max(-10, Math.min(10, self.getVelocity() / -250))); } });
  }

  // Horizontale Galerie (nur Desktop gepinnt)
  mm.add('(min-width: 1024px)', function () {
    $$('.hgal').forEach(function (g) {
      var track = g.querySelector('.hgal__track');
      var dist = function () { return Math.max(0, track.scrollWidth - innerWidth); };
      G.to(track, { x: function () { return -dist(); }, ease: 'none', scrollTrigger: { trigger: g, start: 'top top', end: function () { return '+=' + dist(); }, pin: true, scrub: .8, invalidateOnRefresh: true, anticipatePin: 1 } });
    });
  });

  addEventListener('load', function () { ST.refresh(); });
})();
