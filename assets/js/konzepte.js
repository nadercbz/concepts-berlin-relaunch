/* Konzepte: drei Pakete und Baukasten. Auswahl wird per E-Mail angefragt. Keine Preise. */
(function () {
  'use strict';
  var GROUPS = [
    { name: 'Marke', items: [
      ['logo', 'Logo und Bildmarke', 'Das Zeichen Ihrer Marke, in allen Formaten.'],
      ['farben', 'Farben und Schrift', 'Eine klare Farbwelt und passende Schriften.'],
      ['brandbook', 'Brandbook', 'Alle Regeln Ihrer Marke an einem Ort.'],
      ['namecheck', 'Namens Recherche', 'Erste Prüfung, ob der Name frei ist.'],
      ['praesentation', 'Präsentation', 'Ihr Konzept für Vermieter und Partner.']
    ]},
    { name: 'Produkt', items: [
      ['karte', 'Speisekarte und Rezepturen', 'Angebot, Preisstruktur und Rezeptkarten.'],
      ['fotos', 'Produktfotos', 'Bilder für Karte, Website und Social Media.'],
      ['verpackung', 'Verpackung und Becher', 'Design für Becher, Tüten und Boxen.']
    ]},
    { name: 'Store', items: [
      ['visual', '3D Visualisierung', 'Ihr Laden als 3D Bild, bevor gebaut wird.'],
      ['ladenbau', 'Ladenbau Plan', 'Grundriss und Plan für den Ausbau.'],
      ['werbeanlage', 'Werbeanlage und Schild', 'Fassade und Leuchtschrift als Zeichnung.'],
      ['menuboard', 'Menüboard', 'Gestaltung der Karte über der Theke.'],
      ['druck', 'Druckdateien', 'Flyer, Plakate und Schilder druckfertig.']
    ]},
    { name: 'Betrieb', items: [
      ['ablauf', 'Abläufe Küche und Service', 'Wer macht was, Schritt für Schritt.'],
      ['onboarding', 'Onboarding Video', 'Ein Video, das neue Mitarbeiter einarbeitet.'],
      ['businessplan', 'Businessplan', 'Zahlen, Kosten und Planung als Excel.'],
      ['franchise', 'Franchise Handbuch', 'Für Systeme nach einem erfolgreichen Pilotbetrieb.']
    ]},
    { name: 'Auftritt', items: [
      ['website', 'Website', 'Moderne Website, fertig online.'],
      ['social', 'Social Media', 'Profile, Vorlagen und laufende Beiträge.'],
      ['imagefilm', 'Imagefilm', 'Ein Film über Ihre Marke und Ihren Laden.'],
      ['erklaer', 'Erklärvideo und Interview', 'Ihr Konzept in einer Minute erklärt.'],
      ['launch', 'Eröffnungsplan', 'Was vor und am Eröffnungstag passiert.']
    ]}
  ];
  var PACKS = [
    { id: 'marke', title: 'Marke', sub: 'Für den sichtbaren Start.', items: ['logo', 'farben', 'brandbook', 'website', 'social'] },
    { id: 'laden', title: 'Marke und Store', sub: 'Für die Eröffnung Ihres Ladens.', top: true, plus: 'Alles aus Marke', items: ['karte', 'fotos', 'visual', 'ladenbau', 'werbeanlage', 'imagefilm'] },
    { id: 'komplett', title: 'Komplett', sub: 'Fertig zum Eröffnen und Wachsen.', plus: 'Alles aus Marke und Store', items: ['verpackung', 'menuboard', 'ablauf', 'onboarding', 'businessplan', 'launch'] }
  ];
  var MAIL = 'info@conceptsmedia.de', LABEL = {};
  GROUPS.forEach(function (g) { g.items.forEach(function (it) { LABEL[it[0]] = it[1]; }); });
  function packItems(id) { var out = []; for (var i = 0; i < PACKS.length; i++) { out = out.concat(PACKS[i].items); if (PACKS[i].id === id) break; } return out; }

  var elPacks = document.getElementById('kzPacks'), elBlocks = document.getElementById('kzBlocks');
  if (!elPacks || !elBlocks) return;
  var sel = new Set(), packName = '', scen = '';
  var arrow = '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  elPacks.innerHTML = PACKS.map(function (p, i) {
    var lis = (p.plus ? '<li class="plus">' + p.plus + '</li>' : '') + p.items.map(function (k) { return '<li>' + LABEL[k] + '</li>'; }).join('');
    return '<div class="pack' + (p.top ? ' is-top' : '') + '" data-reveal>' + (p.top ? '<span class="pack__badge">Empfohlen</span>' : '') +
      '<div class="pack__n">PAKET 0' + (i + 1) + '</div><h3>' + p.title + '</h3><p class="pack__sub">' + p.sub + '</p><ul>' + lis + '</ul>' +
      '<button type="button" class="btn' + (p.top ? '' : ' btn--line') + '" data-pack="' + p.id + '">Paket wählen ' + arrow + '</button></div>';
  }).join('');

  elBlocks.innerHTML = GROUPS.map(function (g) {
    return '<div class="bk__g"><h3>' + g.name + '</h3><div class="bk__grid">' + g.items.map(function (it) {
      return '<button type="button" class="bk__b" aria-pressed="false" data-id="' + it[0] + '"><strong>' + it[1] + '</strong><span>' + it[2] + '</span></button>';
    }).join('') + '</div></div>';
  }).join('');

  var elList = document.getElementById('kzList'), elCount = document.getElementById('kzCount'), elSend = document.getElementById('kzSend'), elSum = document.getElementById('kzSum'), elScen = document.getElementById('kzScen');
  function render() {
    elBlocks.querySelectorAll('.bk__b').forEach(function (b) { b.setAttribute('aria-pressed', sel.has(b.dataset.id) ? 'true' : 'false'); });
    var ids = []; GROUPS.forEach(function (g) { g.items.forEach(function (it) { if (sel.has(it[0])) ids.push(it[0]); }); });
    elCount.textContent = ids.length + (ids.length === 1 ? ' Baustein' : ' Bausteine') + (packName ? ', Start: ' + packName : '');
    elList.innerHTML = ids.length ? ids.map(function (k) { return '<li>' + LABEL[k] + '</li>'; }).join('') : '<li class="empty">Noch nichts ausgewählt. Tippen Sie links an, was Sie brauchen.</li>';
    if (elScen) elScen.textContent = scen ? 'Ausgangslage: ' + scen : 'Ausgangslage: noch nicht gewählt';
    var bodyTxt = 'Hallo Concepts Media,\n\nich interessiere mich für ein Konzept Paket' + (packName ? ' (Start: ' + packName + ')' : '') + '.\n' + (scen ? '\nAusgangslage: ' + scen + '\n' : '') +
      '\nMeine Bausteine:\n' + ids.map(function (k) { return '• ' + LABEL[k]; }).join('\n') + '\n\nMein Vorhaben:\n\n\nViele Grüße';
    elSend.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent('Konzept Anfrage') + '&body=' + encodeURIComponent(bodyTxt);
    elSend.style.pointerEvents = ids.length ? '' : 'none'; elSend.style.opacity = ids.length ? '' : '.45';
  }
  function flash() { elSum.classList.remove('is-flash'); void elSum.offsetWidth; elSum.classList.add('is-flash'); }
  elBlocks.addEventListener('click', function (e) { var b = e.target.closest('.bk__b'); if (!b) return; var id = b.dataset.id; sel.has(id) ? sel.delete(id) : sel.add(id); render(); flash(); });
  elPacks.addEventListener('click', function (e) {
    var b = e.target.closest('[data-pack]'); if (!b) return;
    var p = PACKS.filter(function (x) { return x.id === b.dataset.pack; })[0];
    sel = new Set(packItems(p.id)); packName = p.title; render();
    document.getElementById('baukasten').scrollIntoView({ behavior: 'smooth' }); setTimeout(flash, 600);
  });
  document.querySelectorAll('[data-scen]').forEach(function (b) {
    b.addEventListener('click', function () {
      scen = scen === b.dataset.scen ? '' : b.dataset.scen;
      document.querySelectorAll('[data-scen]').forEach(function (x) { x.textContent = x.dataset.scen === scen ? 'Ausgewählt' : 'Auswählen'; x.classList.toggle('btn--line', x.dataset.scen !== scen); });
      render();
    });
  });
  document.getElementById('kzReset').addEventListener('click', function () { sel.clear(); packName = ''; render(); });
  render();
})();
