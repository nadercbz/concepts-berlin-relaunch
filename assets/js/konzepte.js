/* Konzepte: zwei Pakete, nur Leistungen aus dem Angebot von Concepts Media (Stand 01.11.2026). Anfrage per E-Mail, keine Preise. */
(function () {
  'use strict';
  var LABEL = {
    logo: 'Logo', brandbook: 'Brandbook', praesentation: 'Präsentation', menuboard: 'Menüboard', visual: 'Visualisierung in 3D', ladenzeichnung: 'Ladenzeichnung', fotos: 'Produktfotos',
    imagefilm: 'Imagefilm', website: 'Website', druck: 'Druckdateien', erklaer: 'Erklärvideo mit Interview'
  };
  var PACKS = [
    { id: 'marke-store', title: 'Marke und Store', sub: 'Ihr Auftritt und Ihr Laden, geplant und sichtbar.', items: ['logo', 'brandbook', 'praesentation', 'menuboard', 'visual', 'ladenzeichnung', 'fotos'] },
    { id: 'komplett', title: 'Komplett', sub: 'Dazu Film, Website und alles für den Druck.', top: true, plus: 'Alles aus Paket 01', items: ['imagefilm', 'website', 'druck', 'erklaer'] }
  ];
  var MAIL = 'info@conceptsmedia.de';
  function packItems(id) { var out = []; for (var i = 0; i < PACKS.length; i++) { out = out.concat(PACKS[i].items); if (PACKS[i].id === id) break; } return out; }

  var elPacks = document.getElementById('kzPacks');
  if (!elPacks) return;
  var scen = '';
  var arrow = '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  elPacks.innerHTML = PACKS.map(function (p, i) {
    var lis = (p.plus ? '<li class="plus">' + p.plus + '</li>' : '') + p.items.map(function (k) { return '<li>' + LABEL[k] + '</li>'; }).join('');
    return '<div class="pack' + (p.top ? ' is-top' : '') + '" data-reveal>' + (p.top ? '<span class="pack__badge">Empfohlen</span>' : '') +
      '<div class="pack__n">PAKET 0' + (i + 1) + '</div><h3>' + p.title + '</h3><p class="pack__sub">' + p.sub + '</p><ul>' + lis + '</ul>' +
      '<a class="btn' + (p.top ? '' : ' btn--line') + '" data-pack="' + p.id + '" href="#">Paket anfragen ' + arrow + '</a></div>';
  }).join('');

  function mailFor(id) {
    var p = PACKS.filter(function (x) { return x.id === id; })[0];
    var body = 'Hallo Concepts Media,\n\nich interessiere mich für das Paket "' + p.title + '".\n' + (scen ? '\nAusgangslage: ' + scen + '\n' : '') +
      '\nEnthalten:\n' + packItems(id).map(function (k) { return '• ' + LABEL[k]; }).join('\n') + '\n\nMein Vorhaben:\n\n\nViele Grüße';
    return 'mailto:' + MAIL + '?subject=' + encodeURIComponent('Konzept Anfrage ' + p.title) + '&body=' + encodeURIComponent(body);
  }
  function render() { elPacks.querySelectorAll('[data-pack]').forEach(function (a) { a.href = mailFor(a.dataset.pack); }); }

  document.querySelectorAll('[data-scen]').forEach(function (b) {
    b.addEventListener('click', function () {
      scen = scen === b.dataset.scen ? '' : b.dataset.scen;
      document.querySelectorAll('[data-scen]').forEach(function (x) { x.textContent = x.dataset.scen === scen ? 'Ausgewählt' : 'Auswählen'; x.classList.toggle('btn--line', x.dataset.scen !== scen); });
      render();
    });
  });
  render();
})();
