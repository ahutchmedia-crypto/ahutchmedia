const experiences = [
  {
    name: 'Lucky Lobster Co.',
    category: 'restaurants',
    location: 'Palm Harbor',
    tags: ['seafood', 'outdoor seating', 'sunset views'],
    description: 'Local favorite for lobster rolls, grouper tacos, and live music on the patio.',
    link: 'https://luckylobsterco.com',
    family: true
  },
  {
    name: 'Tarpon Springs Sponge Docks',
    category: 'attractions',
    location: 'Tarpon Springs',
    tags: ['heritage', 'waterfront', 'shopping'],
    description: 'Walk the historic sponge docks, watch boats unload, and browse Greek bakeries and markets.',
    link: 'https://spongedocks.net',
    family: true
  },
  {
    name: 'Anclote Key Dolphin Tour',
    category: 'tours',
    location: 'Tarpon Springs',
    tags: ['boat', 'dolphins', 'sunset'],
    description: 'Cruise the Gulf for dolphin sightings and a quick beach stop on Anclote Key Preserve.',
    link: 'https://anclotetours.com',
    family: true
  },
  {
    name: 'The Restorative',
    category: 'restaurants',
    location: 'Dunedin',
    tags: ['brunch', 'craft cocktails', 'cozy'],
    description: 'Fresh, chef-driven brunch and seasonal plates tucked away near the waterfront.',
    link: 'https://therestorative.com',
    family: false
  },
  {
    name: 'Fred Howard Park',
    category: 'outdoors',
    location: 'Tarpon Springs',
    tags: ['kayak', 'beach', 'sunset pier'],
    description: 'Launch a kayak, stroll the causeway, or stay for golden-hour views over the Gulf.',
    link: 'https://pinellas.gov/park/fred-howard-park/',
    family: true
  },
  {
    name: 'Leepa-Rattner Museum of Art',
    category: 'attractions',
    location: 'Tarpon Springs',
    tags: ['museum', 'modern art', 'indoors'],
    description: 'Museum featuring modern works from Abraham Rattner and curated traveling exhibits.',
    link: 'https://leeparattner.org',
    family: true
  },
  {
    name: 'Tarpon Tavern',
    category: 'nightlife',
    location: 'Tarpon Springs',
    tags: ['craft beer', 'burgers', 'nightlife'],
    description: 'Brick-lined tavern with 30+ taps, hearty pub fare, and a lively patio on the Pinellas Trail.',
    link: 'https://tarpontavern.com',
    family: false
  },
  {
    name: 'St. Nicholas Boat Line',
    category: 'tours',
    location: 'Tarpon Springs',
    tags: ['heritage tour', 'sponge diving demo', 'boat'],
    description: 'Climb aboard a vintage boat for a narrated history of sponge diving with live demonstrations.',
    link: 'https://stnicholasboatline.com',
    family: true
  },
  {
    name: '7venth Sun Brewery',
    category: 'nightlife',
    location: 'Dunedin',
    tags: ['craft beer', 'events', 'pet friendly'],
    description: 'Tampa Bay craft pioneer pouring hazy IPAs, sours, and hosting community events.',
    link: 'https://7venthsun.com',
    family: false
  },
  {
    name: 'Spongedocks Art Walk',
    category: 'shops',
    location: 'Tarpon Springs',
    tags: ['artists', 'galleries', 'handmade'],
    description: 'Meet local artists, browse coastal galleries, and take home handmade sponge art.',
    link: 'https://tarponspringsfloridausa.com',
    family: true
  },
  {
    name: 'Wall Springs Park Boardwalk',
    category: 'outdoors',
    location: 'Palm Harbor',
    tags: ['boardwalk', 'nature', 'sunrise tower'],
    description: 'Elevated boardwalk through mangroves with an observation tower and natural spring history.',
    link: 'https://pinellas.gov/park/wall-springs-park/',
    family: true
  },
  {
    name: 'Sunline Eco Tours',
    category: 'tours',
    location: 'Palm Harbor',
    tags: ['kayak', 'eco tour', 'manatees'],
    description: 'Guided kayak trips through St. Joseph Sound with chances to spot manatees and ospreys.',
    link: 'https://sunlinekayak.com',
    family: true
  },
  {
    name: 'Rusty Bellies Waterfront Grill',
    category: 'restaurants',
    location: 'Tarpon Springs',
    tags: ['seafood', 'dockside', 'live music'],
    description: 'Sea-to-table favorites at the end of the Sponge Docks with boats unloading daily catch.',
    link: 'https://rustybellies.com',
    family: true
  },
  {
    name: 'Replay Museum',
    category: 'attractions',
    location: 'Tarpon Springs',
    tags: ['arcade', 'pinball', 'retro'],
    description: 'A retro arcade where one admission unlocks unlimited play on pinball and classic consoles.',
    link: 'https://replaymuseum.org',
    family: true
  },
  {
    name: 'Cocoon Coffee House',
    category: 'shops',
    location: 'Palm Harbor',
    tags: ['coffee', 'workspace', 'local roaster'],
    description: 'Cozy house-turned-café roasting in-house with comfy nooks and Pinellas Trail access.',
    link: 'https://cocooncoffee.com',
    family: true
  }
];

const icons = {
  restaurants: '🍽️',
  tours: '🛥️',
  attractions: '🏛️',
  shops: '🛍️',
  outdoors: '🌊',
  nightlife: '🌙'
};

const cardGrid = document.getElementById('card-grid');
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');
const familyToggle = document.getElementById('family-friendly');
const resultCount = document.getElementById('result-count');
const quickPicks = document.getElementById('quick-picks');
const btnQuickPicks = document.getElementById('btn-quick-picks');
const btnExplore = document.getElementById('btn-explore');
const btnSave = document.getElementById('btn-save');
const dialog = document.getElementById('tip-dialog');
const closeDialog = document.getElementById('close-dialog');

function renderCards(items) {
  cardGrid.innerHTML = '';

  if (!items.length) {
    cardGrid.innerHTML = '<p class="muted">No matches—try another keyword or toggle.</p>';
    resultCount.textContent = '0 spots';
    return;
  }

  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'card';

    const heading = document.createElement('h3');
    heading.innerHTML = `${icons[item.category] ?? '⭐'} ${item.name}`;

    const meta = document.createElement('div');
    meta.className = 'category';
    meta.textContent = `${formatCategory(item.category)} • ${item.location}`;

    const desc = document.createElement('p');
    desc.textContent = item.description;

    const pills = document.createElement('div');
    pills.className = 'pill-row';
    item.tags.forEach((tag) => {
      const pill = document.createElement('span');
      pill.className = 'pill';
      pill.textContent = tag;
      pills.appendChild(pill);
    });

    const link = document.createElement('a');
    link.href = item.link;
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    link.className = 'btn ghost';
    link.textContent = 'View details';

    card.append(heading, meta, desc, pills, link);
    fragment.appendChild(card);
  });

  cardGrid.appendChild(fragment);
  resultCount.textContent = `${items.length} spot${items.length === 1 ? '' : 's'}`;
}

function formatCategory(id) {
  switch (id) {
    case 'restaurants':
      return 'Restaurants & Cafés';
    case 'tours':
      return 'Tours';
    case 'attractions':
      return 'Attractions & Museums';
    case 'shops':
      return 'Shops & Makers';
    case 'outdoors':
      return 'Outdoor & Water';
    case 'nightlife':
      return 'Nightlife';
    default:
      return 'Experience';
  }
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;
  const requireFamily = familyToggle.checked;

  const filtered = experiences.filter((item) => {
    const matchesQuery =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      item.location.toLowerCase().includes(query);

    const matchesCategory = category === 'all' || item.category === category;
    const matchesFamily = !requireFamily || item.family;

    return matchesQuery && matchesCategory && matchesFamily;
  });

  renderCards(filtered);
}

searchInput.addEventListener('input', applyFilters);
categorySelect.addEventListener('change', applyFilters);
familyToggle.addEventListener('change', applyFilters);

btnQuickPicks.addEventListener('click', () => {
  quickPicks.scrollIntoView({ behavior: 'smooth' });
});

btnExplore.addEventListener('click', () => {
  searchInput.focus();
});

btnSave.addEventListener('click', () => dialog.showModal());
closeDialog.addEventListener('click', () => dialog.close());

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

renderCards(experiences);
