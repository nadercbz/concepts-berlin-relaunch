/* Lädt den 3D Laden Baukasten (ladenbau3d.js) erst, wenn der Bereich in die Nähe kommt.
   Quellcode des Baukastens: ladenbau3d/src, bauen mit npm run build. */
(function () {
  var root = document.querySelector('[data-lgen]');
  if (!root) return;
  var me = document.currentScript, v = me && me.src.indexOf('?') > 0 ? me.src.split('?')[1] : '';
  var ok = false;
  try {
    var gl = document.createElement('canvas').getContext('webgl2');
    ok = !!gl;
    var lose = gl && gl.getExtension('WEBGL_lose_context');
    if (lose) lose.loseContext();
  } catch (e) { ok = false; }
  if (!ok) { root.classList.add('lgen--nogl'); return; }
  function load() {
    var s = document.createElement('script');
    s.src = 'assets/js/ladenbau3d.js' + (v ? '?' + v : '');
    s.type = 'module';
    s.async = true;
    document.body.appendChild(s);
  }
  if (!('IntersectionObserver' in window) || /baukasten=/.test(location.hash)) return load();
  var io = new IntersectionObserver(function (es) {
    if (es[0].isIntersecting) { io.disconnect(); load(); }
  }, { rootMargin: '1000px 0px' });
  io.observe(root);
})();
