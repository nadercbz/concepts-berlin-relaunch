/* Coming Soon: animierte, interaktive Timeline mit den nächsten Eröffnungen.
   Termine kommen aus coming_soon.json (beim Bauen ins Overlay eingebettet). Öffnet über jeden Knopf mit data-soon und per #coming-soon. */
(function () {
  'use strict';
  var d = document, html = d.documentElement, body = d.body, cs = d.getElementById('coming-soon');
  if (!cs) return;
  var G = window.gsap, reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches || !G;
  var mobile = window.matchMedia('(max-width: 767px)');
  var data = [];
  try { data = JSON.parse(d.getElementById('cs-data').textContent) || []; } catch (e) { data = []; }

  var bg = cs.querySelector('.cs__bg'), head = cs.querySelector('.cs__head'), xBtn = cs.querySelector('.cs__x');
  var tl = d.getElementById('cs-tl'), axis = tl.querySelector('.cs__axis'), prog = tl.querySelector('.cs__prog');
  var cardsEl = d.getElementById('cs-cards'), meta = d.getElementById('cs-meta');
  var btns = [].slice.call(d.querySelectorAll('[data-soon]'));
  var MON = ['Jan', 'Feb', 'März', 'Apr', 'Mai', 'Juni', 'Juli', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  var MONL = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  var DAY = 864e5;
  var PIN = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
  var ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var CAL = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>';

  function parse(s) { var p = String(s).split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var now = new Date(), today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  data.forEach(function (e) { e._d = parse(e.datum); e._days = Math.round((e._d - today) / DAY); });
  data.sort(function (a, b) { return a._d - b._d; });

  /* Zeitachse: Anfang dieses Monats bis drei Monate nach dem letzten Termin */
  var start = new Date(today.getFullYear(), today.getMonth(), 1);
  var last = data.length ? data[data.length - 1]._d : today;
  var months = Math.max(3, (last.getFullYear() - start.getFullYear()) * 12 + last.getMonth() - start.getMonth() + 2);
  var end = new Date(start.getFullYear(), start.getMonth() + months, 1);
  function pos(dt) { return Math.max(0, Math.min(1, (dt - start) / (end - start))); }

  meta.textContent = 'Stand: ' + today.getDate() + '. ' + MONL[today.getMonth()] + ' ' + today.getFullYear();

  var ticks = [];
  for (var m = 0; m <= months; m++) {
    var md = new Date(start.getFullYear(), start.getMonth() + m, 1);
    var t = d.createElement('span');
    t.className = 'cs__tick';
    t.style.setProperty('--p', pos(md));
    t.innerHTML = '<i></i><b>' + MON[md.getMonth()] + '</b>' + (m === 0 || md.getMonth() === 0 ? '<small>' + md.getFullYear() + '</small>' : '');
    axis.appendChild(t); ticks.push(t);
  }
  var pToday = pos(today);
  prog.style.setProperty('--p', pToday);
  var todayEl = d.createElement('span');
  todayEl.className = 'cs__today';
  todayEl.style.setProperty('--p', pToday);
  todayEl.innerHTML = '<i></i><b>Heute</b>';
  axis.appendChild(todayEl);

  var nodes = data.map(function (e, i) {
    var b = d.createElement('button');
    b.type = 'button';
    b.className = 'cs__node' + (e._days <= 0 ? ' is-open-now' : '');
    b.style.setProperty('--p', pos(e._d));
    b.setAttribute('aria-label', e.marke + ', ' + e.titel + ', ' + e.datum_text);
    b.innerHTML = '<span class="cs__ring"></span><span class="cs__ring cs__ring--2"></span><span class="cs__dot"></span><span class="cs__lab"><b>' + esc(e.datum_text) + '</b><span>' + esc(e.marke) + '</span></span>';
    b.addEventListener('click', function () { select(i, true); });
    axis.appendChild(b);
    return b;
  });
  var more = d.createElement('span');
  more.className = 'cs__more';
  more.style.setProperty('--p', Math.min(0.96, Math.max(pos(last) + 0.18, 0.82)));
  more.innerHTML = '<span class="cs__dot"></span><span class="cs__lab"><b>Weitere folgen</b><span>Neue Standorte in Planung</span></span>';
  axis.appendChild(more);

  /* Karten: eine je Termin */
  var cards = data.map(function (e, i) {
    var a = d.createElement('article');
    a.className = 'cs__card';
    var exact = !e.ungefaehr;
    var count = e._days > 0
      ? '<div class="cs__count"><div class="cs__num">' + (exact ? '' : '<small>ca.</small>') + '<b data-n="' + e._days + '">0</b></div><span>' + (e._days === 1 ? 'Tag' : 'Tage') + ' bis zur Eröffnung</span></div>'
      : '<div class="cs__count"><div class="cs__num cs__num--now"><b>Jetzt geöffnet</b></div></div>';
    var pct = e._days > 0 ? Math.max(0.04, Math.min(1, (today - start) / (e._d - start))) : 1;
    a.innerHTML =
      '<div class="cs__media">' +
        (e.video ? '<video muted loop playsinline preload="none" poster="' + esc(e.poster || '') + '"><source src="' + esc(e.video) + '" type="video/mp4"></video>' : '<img src="' + esc(e.poster || '') + '" alt="">') +
        '<span class="cs__badge"><i></i>Coming Soon</span>' + (e.bildhinweis ? '<span class="cs__hint">' + esc(e.bildhinweis) + '</span>' : '') +
      '</div>' +
      '<div class="cs__info">' +
        '<span class="cs__date">' + CAL + esc(e.datum_text) + '</span>' +
        '<p class="cs__brand">' + esc(e.marke) + '</p>' +
        '<h3 class="cs__ttl">' + esc(e.titel) + '</h3>' +
        '<p class="cs__ort">' + PIN + esc(e.ort) + '</p>' +
        '<p class="cs__txt">' + esc(e.text) + '</p>' +
        count +
        '<div class="cs__bar" aria-hidden="true"><i style="--w:' + pct.toFixed(3) + '"></i></div>' +
        '<div class="cs__acts">' + (exact && e._days > 0 ? '<button class="btn btn--line cs__ics" type="button">' + CAL + 'In den Kalender</button>' : '') +
        '<a class="btn" href="kontakt.html">Expansion anfragen ' + ARROW + '</a></div>' +
      '</div>';
    var ics = a.querySelector('.cs__ics');
    if (ics) ics.addEventListener('click', function () { download(e); });
    cardsEl.appendChild(a);
    return a;
  });

  function download(e) {
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    var s = e._d.getFullYear() + p(e._d.getMonth() + 1) + p(e._d.getDate());
    var n2 = new Date(e._d.getTime() + DAY), s2 = n2.getFullYear() + p(n2.getMonth() + 1) + p(n2.getDate());
    var ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Concepts Media//Coming Soon//DE', 'BEGIN:VEVENT', 'UID:' + s + '-' + e.marke.replace(/\W+/g, '') + '@conceptsmedia.de',
      'DTSTAMP:' + s + 'T000000Z', 'DTSTART;VALUE=DATE:' + s, 'DTEND;VALUE=DATE:' + s2, 'SUMMARY:' + e.marke + ', ' + e.titel, 'LOCATION:' + e.ort, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    var a = d.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
    a.download = e.marke.toLowerCase().replace(/\W+/g, '-') + '-eroeffnung.ics';
    body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  /* Karte wählen: weiche Überblendung, Zähler läuft hoch, Video spielt */
  var active = -1;
  function countUp(card) {
    var b = card.querySelector('.cs__num b[data-n]');
    if (!b) return;
    var n = +b.dataset.n;
    if (reduce) { b.textContent = n; return; }
    var o = { v: 0 };
    G.to(o, { v: n, duration: 1.4, ease: 'power3.out', onUpdate: function () { b.textContent = Math.round(o.v); } });
  }
  function select(i, user) {
    if (i === active || !cards[i]) return;
    var prev = cards[active];
    active = i;
    nodes.forEach(function (n, k) { n.classList.toggle('is-active', k === i); n.setAttribute('aria-pressed', k === i ? 'true' : 'false'); });
    var c = cards[i], v = c.querySelector('video');
    if (prev) { var pv = prev.querySelector('video'); if (pv) pv.pause(); prev.classList.remove('is-on'); }
    c.classList.add('is-on');
    if (v) { var pl = v.play(); if (pl && pl.catch) pl.catch(function () {}); }
    if (!reduce) {
      G.fromTo(c, { clipPath: 'inset(12% 0% 0% 0% round 22px)', opacity: 0, y: 46 }, { clipPath: 'inset(0% 0% 0% 0% round 22px)', opacity: 1, y: 0, duration: 1.0, ease: 'expo.out', delay: user ? 0 : 0.85 });
      G.fromTo(c.querySelectorAll('.cs__info > *'), { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.06, delay: user ? 0.1 : 1.0 });
      G.fromTo(c.querySelector('.cs__bar i'), { scaleX: 0 }, { scaleX: 1, duration: 1.4, ease: 'power3.inOut', delay: user ? 0.3 : 1.25 });
      G.delayedCall(user ? 0.25 : 1.2, function () { countUp(c); });
    } else { countUp(c); }
  }

  /* Leichtes Kippen der Karte mit der Maus */
  if (!reduce && window.matchMedia('(hover: hover)').matches) {
    cards.forEach(function (c) {
      var mdia = c.querySelector('.cs__media');
      var rx = G.quickTo(mdia, 'rotationX', { duration: 0.6, ease: 'power3.out' }), ry = G.quickTo(mdia, 'rotationY', { duration: 0.6, ease: 'power3.out' });
      c.addEventListener('mousemove', function (ev) {
        var r = mdia.getBoundingClientRect();
        ry(((ev.clientX - r.left) / r.width - 0.5) * 8); rx(-((ev.clientY - r.top) / r.height - 0.5) * 6);
      });
      c.addEventListener('mouseleave', function () { rx(0); ry(0); });
    });
  }

  var isOpen = false, lastFocus = null;
  function otherOpen() { return (d.getElementById('lb') || {}).classList && d.getElementById('lb').classList.contains('is-open'); }
  function open(ev) {
    if (ev && ev.preventDefault) ev.preventDefault();
    if (html.classList.contains('menu-open')) { var bur = d.querySelector('.hdr__burger'); if (bur) bur.click(); }
    if (isOpen) return;
    isOpen = true; lastFocus = (ev && ev.currentTarget) || d.activeElement;
    cs.classList.add('is-open'); cs.setAttribute('aria-hidden', 'false'); body.style.overflow = 'hidden';
    cs.querySelector('.cs__scroll').scrollTop = 0;
    btns.forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
    if (location.hash !== '#coming-soon') history.replaceState(null, '', '#coming-soon');
    xBtn.focus({ preventScroll: true });
    active = -1;
    if (reduce) { select(0, true); return; }
    var vert = mobile.matches;
    G.killTweensOf([bg, axis, prog, todayEl, more].concat(ticks, nodes));
    G.fromTo(bg, { opacity: 0 }, { opacity: 1, duration: 0.7, ease: 'power2.out' });
    G.fromTo(head.querySelectorAll('.kicker, .cs__w, .cs__meta'), { y: 40, opacity: 0, rotation: 2 }, { y: 0, opacity: 1, rotation: 0, duration: 1.0, ease: 'expo.out', stagger: 0.07, delay: 0.1 });
    G.fromTo(axis, vert ? { '--ax': 0 } : { '--ax': 0 }, { '--ax': 1, duration: 1.2, ease: 'expo.inOut', delay: 0.2 });
    G.fromTo(ticks, { opacity: 0, y: vert ? 0 : 14, x: vert ? -14 : 0 }, { opacity: 1, y: 0, x: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08, delay: 0.45 });
    G.fromTo(prog, { '--g': 0 }, { '--g': 1, duration: 1.1, ease: 'power3.inOut', delay: 0.6 });
    G.fromTo(todayEl, { opacity: 0, scale: 0.3 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(2.2)', delay: 1.3 });
    G.fromTo(nodes, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(2.4)', stagger: 0.12, delay: 0.95 });
    G.fromTo(more, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1.4 });
    select(0, false);
  }
  function close() {
    if (!isOpen) return;
    isOpen = false;
    btns.forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    if (location.hash === '#coming-soon') history.replaceState(null, '', location.pathname + location.search);
    cards.forEach(function (c) { var v = c.querySelector('video'); if (v) v.pause(); });
    function done() { cs.classList.remove('is-open'); cs.setAttribute('aria-hidden', 'true'); body.style.overflow = ''; cards.forEach(function (c) { c.classList.remove('is-on'); }); }
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    if (reduce) return done();
    G.to(cs.querySelectorAll('.cs__card.is-on, .cs__tl'), { opacity: 0, y: -20, duration: 0.35, ease: 'power2.in' });
    G.to(head, { opacity: 0, y: -14, duration: 0.3, ease: 'power2.in' });
    G.to(bg, { opacity: 0, duration: 0.5, delay: 0.2, ease: 'power2.inOut', onComplete: function () {
      done(); G.set([head, cs.querySelectorAll('.cs__card'), tl], { clearProps: 'opacity,transform' });
    } });
  }

  btns.forEach(function (b) { b.addEventListener('click', open); });
  xBtn.addEventListener('click', close);
  cs.querySelector('.cs__bg').addEventListener('click', close);
  d.addEventListener('keydown', function (e) {
    if (!isOpen || otherOpen()) return;
    if (e.key === 'Escape') { e.stopPropagation(); close(); }
    else if (e.key === 'ArrowRight' && active < cards.length - 1) select(active + 1, true);
    else if (e.key === 'ArrowLeft' && active > 0) select(active - 1, true);
  }, true);
  d.addEventListener('focusin', function (e) { if (isOpen && !otherOpen() && !cs.contains(e.target)) xBtn.focus({ preventScroll: true }); });
  if (location.hash === '#coming-soon') setTimeout(open, 450);
})();
