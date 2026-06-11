// ============ SITE DATA ============
// All site content loads from a published Google Sheet so it can be edited
// without touching code. Import sheet-template.csv into a Google Sheet,
// publish it (File > Share > Publish to web > CSV), and paste the URL below.
// While empty — or if the fetch fails — FALLBACK_ROWS is used, so the site
// never renders blank.
//
// Columns: section | key | title | description | icon_or_image | tags | link | order | visible
// Sections: guide (ignored) | config | social | project | jam | tech
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSIC_0qXomJ3gN7LJxbHMpiK_AJ7_Q7Gt_Bh8QW4ziWflXMtakTodv6JM0Vl_wzFjb8HZ_wd1lU1B9C/pub?output=csv';

const FALLBACK_ROWS = [
  { section: 'config', key: 'hero_label', description: 'game & software developer' },
  { section: 'config', key: 'hero_title', description: 'Luke Bradaric' },
  { section: 'config', key: 'hero_description', description: 'I build games, tools, and the things in between. Previously on the World of Warcraft team at Blizzard — always shipping something small on the side.' },
  { section: 'config', key: 'hero_button', description: 'about me ↓', link: '#about' },
  { section: 'config', key: 'about_1', description: "I'm Luke, a game and software developer. My love for game development started with a class I took in high school — years later, it's still my best-loved passion." },
  { section: 'config', key: 'about_2', description: "I've worked on the World of Warcraft team at Blizzard building developer tooling, and I ship small games with friends through game jams like Ludum Dare and GMTK." },
  { section: 'config', key: 'footer_text', description: '© 2026 Luke Bradaric' },

  { section: 'social', title: 'github', icon_or_image: 'github', link: 'https://github.com/lukebradaric', order: '1' },
  { section: 'social', title: 'linkedin', icon_or_image: 'linkedin', link: 'https://www.linkedin.com/in/lukebradaric/', order: '2' },
  { section: 'social', title: 'itch.io', icon_or_image: 'itchdotio', link: 'https://teamjolu.itch.io/', order: '3' },
  { section: 'social', title: 'email', icon_or_image: 'email', link: 'mailto:lukebradaric@gmail.com', order: '4' },

  { section: 'project', title: 'World of Warcraft', description: 'Worked on the World of Warcraft team for two consecutive summers and built tools to improve developer workflow.', icon_or_image: 'media/dragonflight-warwithin.png', tags: 'c#, c++, @blizzard', link: 'https://dragonflight.blizzard.com/en-us/', order: '1' },
  { section: 'project', title: 'TinyTools', description: 'Collection of lightweight Unity tools used to streamline game development processes.', icon_or_image: 'media/tinytools.png', tags: 'unity, c#', link: 'https://github.com/lukebradaric/TinyTools', order: '2' },
  { section: 'project', title: 'Adventure Assembly', description: 'Action roguelike with a snake-like twist on player movement. Collect heroes and fight off waves of enemies!', icon_or_image: 'media/adventureassembly.gif', tags: 'unity, c#', link: 'https://teamjolu.itch.io/adventurer-assembly', order: '3' },
  { section: 'project', title: 'FujiCraft', description: 'Custom built Minecraft server providing an MMO-like experience to an active community of 100+ players.', icon_or_image: 'media/fujicraft.png', tags: 'java', link: 'https://store.fujicraft.net/', order: '4' },
  { section: 'project', title: 'Killchain', description: 'First person movement shooter based around chains, momentum, and fast paced action.', icon_or_image: 'media/killchain.gif', tags: 'unity, c#', link: 'https://github.com/lukebradaric/killchain', order: '5' },
  { section: 'project', title: 'Puffer Bot', description: 'Automated Twitch clip compiler. Running on YouTube channels for games such as League of Legends, Valorant and more.', icon_or_image: 'media/puffer.png', tags: 'js, node', link: 'https://github.com/lukebradaric/puffer-twitch', order: '6' },

  { section: 'jam', title: 'Tink', description: 'Rogue-like where player behaviour influences the way levels generate.', icon_or_image: 'media/tink.gif', tags: 'unity, c#', link: 'https://twitter.com/luke_bradaric', order: '1' },
  { section: 'jam', title: 'The Later Lab', description: 'Travel between timelines and transport objects back and forth to solve puzzles.', icon_or_image: 'media/thelaterlab.gif', tags: 'unity, c#', link: 'https://teamjolu.itch.io/the-later-lab', order: '2' },
  { section: 'jam', title: 'Nuclear Labs', description: 'Freeze waves of enemies and kick them into the surrounding water to cool off your nuclear reactor.', icon_or_image: 'media/nuclearlabs.gif', tags: 'unity, c#', link: 'https://teamjolu.itch.io/nuclear-labs', order: '3' },
  { section: 'jam', title: 'Torch Fella', description: 'Control a series of blobs to transport a lit torch across a level in order to light the bonfire.', icon_or_image: 'media/torchfella.gif', tags: 'unity, c#', link: 'https://flowluke.itch.io/torch-fella', order: '4' },

  { section: 'tech', title: 'Unity', icon_or_image: 'unity', order: '1' },
  { section: 'tech', title: 'C-Sharp', icon_or_image: 'txt:C#', order: '2' },
  { section: 'tech', title: 'C++', icon_or_image: 'cplusplus', order: '3' },
  { section: 'tech', title: 'Unreal Engine', icon_or_image: 'unrealengine', order: '4' },
  { section: 'tech', title: 'Git', icon_or_image: 'git', order: '5' },
  { section: 'tech', title: 'JavaScript', icon_or_image: 'javascript', order: '6' },
  { section: 'tech', title: 'Node.js', icon_or_image: 'nodedotjs', order: '7' },
  { section: 'tech', title: 'Java', icon_or_image: 'openjdk', order: '8' },
];

// ============ ICONS ============
// Most icons come from the Simple Icons CDN by slug (https://simpleicons.org).
// LinkedIn and a generic email envelope aren't on the CDN, so they're inlined.
// 'txt:XYZ' renders the text XYZ instead of an icon.
const ICON_COLOR = '9BA39F';
const INLINE_ICONS = {
  linkedin: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z"/></svg>',
  email: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13zm2.24.5L12 12.25 19.76 6H4.24zM20 7.8l-7.5 6.04a.8.8 0 0 1-1 0L4 7.8v10.7h16V7.8z"/></svg>',
};

function iconEl(spec) {
  if (!spec) return null;
  if (spec.startsWith('txt:')) {
    const span = document.createElement('span');
    span.className = 'txt-icon';
    span.textContent = spec.slice(4);
    return span;
  }
  if (INLINE_ICONS[spec]) {
    const holder = document.createElement('span');
    holder.innerHTML = INLINE_ICONS[spec];
    return holder.firstChild;
  }
  const img = document.createElement('img');
  img.src = 'https://cdn.simpleicons.org/' + encodeURIComponent(spec) + '/' + ICON_COLOR;
  img.alt = '';
  return img;
}

// ============ CSV PARSING ============
// Minimal CSV parser that handles quoted fields, escaped quotes, and
// newlines inside quotes — enough for anything Google Sheets exports.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') { inQuotes = false; }
      else { field += c; }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      rows.push(row); row = [];
    } else {
      field += c;
    }
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function rowsToObjects(rows) {
  if (rows.length < 2) return [];
  const headers = rows[0].map((h) => h.trim().toLowerCase());
  return rows.slice(1).map((cells) => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = (cells[i] || '').trim(); });
    return obj;
  });
}

// ============ RENDERING ============
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function bySection(rows, section) {
  return rows
    .filter((r) => r.section === section)
    .filter((r) => (r.visible || 'TRUE').toUpperCase() !== 'FALSE')
    .sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
}

function setText(id, text) {
  const node = document.getElementById(id);
  if (node && text) node.textContent = text;
}

function applyConfig(rows) {
  const config = {};
  bySection(rows, 'config').forEach((r) => { config[r.key] = r; });

  setText('hero-label', (config.hero_label || {}).description);
  setText('hero-title', (config.hero_title || {}).description);
  setText('hero-description', (config.hero_description || {}).description);
  setText('footer-text', (config.footer_text || {}).description);

  const button = document.getElementById('hero-button');
  if (button && config.hero_button) {
    if (config.hero_button.description) button.textContent = config.hero_button.description;
    if (config.hero_button.link) button.href = config.hero_button.link;
  }

  // about_1, about_2, about_3... become paragraphs, in key order
  const aboutKeys = Object.keys(config).filter((k) => k.startsWith('about_')).sort();
  const aboutBox = document.getElementById('about-paragraphs');
  if (aboutBox && aboutKeys.length) {
    aboutBox.textContent = '';
    aboutKeys.forEach((k) => aboutBox.appendChild(el('p', 'muted', config[k].description)));
  }
}

function renderSocials(rows) {
  const socials = bySection(rows, 'social');
  if (!socials.length) return;

  const header = document.getElementById('header-socials');
  if (header) {
    header.textContent = '';
    socials.forEach((s) => {
      const a = el('a');
      a.href = s.link;
      a.setAttribute('aria-label', s.title);
      if (!s.link.startsWith('#') && !s.link.startsWith('mailto:')) {
        a.target = '_blank';
        a.rel = 'noopener';
      }
      const icon = iconEl(s.icon_or_image);
      if (icon) a.appendChild(icon);
      header.appendChild(a);
    });
  }

  const about = document.getElementById('about-links');
  if (about) {
    about.textContent = '';
    socials.forEach((s) => {
      const a = el('a', 'btn-ghost');
      a.href = s.link;
      if (!s.link.startsWith('#') && !s.link.startsWith('mailto:')) {
        a.target = '_blank';
        a.rel = 'noopener';
      }
      const icon = iconEl(s.icon_or_image);
      if (icon) a.appendChild(icon);
      a.appendChild(document.createTextNode(s.title));
      about.appendChild(a);
    });
  }
}

function renderTech(rows) {
  const techs = bySection(rows, 'tech');
  const list = document.getElementById('tech-list');
  if (!list || !techs.length) return;
  list.textContent = '';
  techs.forEach((t) => {
    const item = el('span', 'tech-item');
    const icon = iconEl(t.icon_or_image);
    if (icon) item.appendChild(icon);
    item.appendChild(document.createTextNode(t.title));
    list.appendChild(item);
  });
}

function buildCard(item) {
  const card = el('a', 'card');
  if (item.link) {
    card.href = item.link;
    card.target = '_blank';
    card.rel = 'noopener';
  }

  const media = el('div', 'card-media');
  const img = el('img');
  img.src = item.icon_or_image;
  img.alt = item.title;
  img.loading = 'lazy';
  media.appendChild(img);

  const body = el('div', 'card-body');
  body.appendChild(el('h3', '', item.title));
  body.appendChild(el('p', 'card-desc', item.description));

  const foot = el('div', 'card-foot');
  const tags = el('div', 'tags');
  (item.tags || '').split(',').map((t) => t.trim()).filter(Boolean).forEach((t) => {
    if (t.startsWith('@')) tags.appendChild(el('span', 'tag company', t.slice(1)));
    else tags.appendChild(el('span', 'tag tool', t));
  });
  foot.appendChild(tags);
  foot.appendChild(el('span', 'view', 'view ▸'));

  card.appendChild(media);
  card.appendChild(body);
  card.appendChild(foot);
  return card;
}

function renderCards(rows, section, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.textContent = '';
  bySection(rows, section).forEach((item) => grid.appendChild(buildCard(item)));
}

function renderAll(rows) {
  applyConfig(rows);
  renderSocials(rows);
  renderTech(rows);
  renderCards(rows, 'project', 'projects-grid');
  renderCards(rows, 'jam', 'jams-grid');
}

async function loadSite() {
  if (SHEET_CSV_URL) {
    try {
      const res = await fetch(SHEET_CSV_URL);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const rows = rowsToObjects(parseCsv(await res.text()));
      if (rows.length) { renderAll(rows); return; }
    } catch (err) {
      console.warn('Sheet fetch failed, using fallback content:', err);
    }
  }
  renderAll(FALLBACK_ROWS);
}

loadSite();
