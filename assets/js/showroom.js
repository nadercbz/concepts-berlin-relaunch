/* Showroom: Kachelansicht der Visualisierungen. Öffnet über jeden Knopf mit data-showroom, Klick auf eine Kachel öffnet die Lightbox. */
(function () {
  'use strict';
  var d = document, body = d.body, sr = d.getElementById('showroom');
  if (!sr) return;
  var G = window.gsap, reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches || !G;
  var scroller = sr.querySelector('.shw__scroll'), bg = sr.querySelector('.shw__bg'), head = sr.querySelector('.shw__head'), lb = d.getElementById('lb');
  var tiles = Array.prototype.slice.call(sr.querySelectorAll('.shw__t'));
  var btns = Array.prototype.slice.call(d.querySelectorAll('[data-showroom]'));
  var urls = tiles.map(function (t) { return t.dataset.full; });
  var caps = tiles.map(function (t) { return t.dataset.name + (t.dataset.ort ? '<span>' + t.dataset.ort + '</span>' : ''); });
  var isOpen = false, lastFocus = null, io = null;
  function lbOpen() { return lb && lb.classList.contains('is-open'); }

  /* Kacheln unterhalb der ersten Ansicht tauchen beim Scrollen weich auf */
  function watch(rest) {
    if (!('IntersectionObserver' in window)) { G.set(rest, { clearProps: 'all' }); return; }
    io = new IntersectionObserver(function (es) {
      var hit = es.filter(function (e) { return e.isIntersecting; }).map(function (e) { io.unobserve(e.target); return e.target; });
      if (hit.length) G.to(hit, { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 1.1, ease: 'expo.out', stagger: 0.07, clearProps: 'transform,opacity' });
    }, { root: scroller, rootMargin: '0px 0px -6% 0px', threshold: 0.08 });
    rest.forEach(function (t) { io.observe(t); });
  }

  function open(e) {
    if (isOpen) return;
    isOpen = true; lastFocus = (e && e.currentTarget) || d.activeElement;
    var r = lastFocus && lastFocus.getBoundingClientRect ? lastFocus.getBoundingClientRect() : { left: innerWidth - 120, top: 40, width: 0, height: 0 };
    var ox = r.left + r.width / 2, oy = r.top + r.height / 2;
    scroller.scrollTop = 0; sr.classList.add('is-open'); sr.setAttribute('aria-hidden', 'false'); body.style.overflow = 'hidden';
    btns.forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
    if (location.hash !== '#showroom') history.replaceState(null, '', '#showroom');
    sr.querySelector('.shw__x').focus({ preventScroll: true });
    if (reduce) return;

    var vh = scroller.clientHeight, first = [], rest = [];
    tiles.forEach(function (t) { (t.offsetTop < vh + 40 ? first : rest).push(t); });
    var far = Math.hypot(innerWidth, innerHeight);
    G.killTweensOf([bg, head].concat(tiles));
    G.fromTo(bg, { opacity: 0 }, { opacity: 1, duration: 0.7, ease: 'power2.out' });
    G.fromTo(head.children, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.08, delay: 0.12 });
    /* Welle vom Knopf aus: je weiter weg, desto später, mit leichter Drehung und Unschärfe wie auf Wasser */
    first.forEach(function (t) {
      var b = t.getBoundingClientRect(), dist = Math.hypot(b.left + b.width / 2 - ox, b.top + b.height / 2 - oy);
      G.fromTo(t, { opacity: 0, y: 46, scale: 0.84, rotation: G.utils.random(-5, 5), filter: 'blur(10px)' },
        { opacity: 1, y: 0, scale: 1, rotation: 0, filter: 'blur(0px)', duration: 1.25, ease: 'expo.out', delay: 0.12 + (dist / far) * 0.65, clearProps: 'transform,opacity,filter' });
    });
    G.set(rest, { opacity: 0, y: 60, scale: 0.92, rotation: function () { return G.utils.random(-3, 3); } });
    watch(rest);
  }

  function close() {
    if (!isOpen) return;
    isOpen = false; if (io) { io.disconnect(); io = null; }
    btns.forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    if (location.hash === '#showroom') history.replaceState(null, '', location.pathname + location.search);
    function done() { sr.classList.remove('is-open'); sr.setAttribute('aria-hidden', 'true'); body.style.overflow = ''; if (G) G.set([bg, head.children].concat(tiles), { clearProps: 'all' }); }
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    if (reduce) return done();
    var top = scroller.scrollTop, vh = scroller.clientHeight;
    var vis = tiles.filter(function (t) { return t.offsetTop + t.offsetHeight > top && t.offsetTop < top + vh; });
    G.killTweensOf([bg, head.children].concat(tiles));
    G.to(vis, { opacity: 0, y: -24, scale: 0.94, duration: 0.42, ease: 'power2.in', stagger: { each: 0.012, from: 'end' } });
    G.to(head.children, { opacity: 0, y: -14, duration: 0.3, ease: 'power2.in' });
    G.to(bg, { opacity: 0, duration: 0.5, delay: 0.22, ease: 'power2.inOut', onComplete: done });
  }

  btns.forEach(function (b) { b.addEventListener('click', open); });
  sr.querySelector('.shw__x').addEventListener('click', close);
  tiles.forEach(function (t, i) {
    t.addEventListener('click', function () { if (window.__lbOpenList) window.__lbOpenList(urls, caps, i, t); });
  });
  /* Escape schließt den Showroom nur, wenn keine Lightbox darüber offen ist (Capture, läuft vor der Lightbox) */
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && isOpen && !lbOpen()) close(); }, true);
  /* Fokus bleibt im Showroom */
  d.addEventListener('focusin', function (e) { if (isOpen && !lbOpen() && !sr.contains(e.target)) sr.querySelector('.shw__x').focus({ preventScroll: true }); });
  if (location.hash === '#showroom') setTimeout(open, 400);
})();
