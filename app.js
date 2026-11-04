const books=[
{id:'elf',cover:'assets/elf-blood.png',title:'Elf Blood',type:'trilogy',label:'Book One · Main trilogy',color:'blue',url:'https://books2read.com/u/b61750',desc:'An elf without her memories, an unusual household, and events that unsettle a carefully separated world.',more:'The opening novel introduces Taylor, Breni, Reyla and an unfolding mystery about reality, memory and power.'},
{id:'before',cover:'assets/the-world-before.png',title:'The World Before',type:'trilogy',label:'Book Two · Main trilogy',color:'gold',url:'https://books2read.com/u/b61dg6',desc:'Journey to an earlier age, when powerful creators shaped the first living worlds and ancient choices cast long shadows.',more:'The primordial era of the Chronicles explores creation, early civilizations and the roots of later conflicts.'},
{id:'goddess',cover:'assets/the-goddess-elf.png',title:'The Goddess Elf',type:'trilogy',label:'Book Three · Main trilogy',color:'rose',url:'https://books2read.com/u/mZA1dB',desc:'Old bonds and impossible responsibilities test the people who hold reality together.',more:'The final book in the original trilogy brings the intertwined destinies of the central characters to a new stage.'},
{id:'listening',cover:'assets/the-listening-world.png',title:'The Listening World',type:'companion',label:'POST-MAIN-STORY · A Reyla story',color:'green',url:'https://books2read.com/u/bPWpQx',desc:'A reflective journey through communities, forests and the quiet language of a living world.',more:'A Reyla-centered tale of listening, mediation and belonging among different peoples.'},
{id:'rain',cover:'assets/dark-rain.png',title:'Dark Rain',type:'companion',label:'POST-MAIN-STORY · A Breni story',color:'rain',url:'https://books2read.com/u/3ngxn5',desc:'A rain-soaked island, two vampire clans and a mystery that threatens an uneasy peace.',more:'Breni enters a tense dispute between vampire clans while dangerous secrets surface.'},
{id:'wonders',cover:'assets/small-wonders.png',title:'Small Wonders',type:'companion',label:'Selena & Talula · Companion',color:'rose',desc:'A tender portrait of daily life, growing trust and the small moments that make a family.',more:'An intimate story about Selena and Talula and the everyday love that binds them.'},
{id:'creatures',title:"Plu's Creatures",type:'companion',label:'A Plu story · Companion',color:'gold',desc:'A playful collection of encounters with the remarkable creatures of the world.',more:'A lighter-hearted episodic journey across the strange and wonderful beings of the Chronicles.'},
{id:'plu',cover:'assets/plu-side-story.png',title:'PLU — A Goddess’s Side Story',type:'companion',label:'Final companion · In progress',color:'gold',desc:'A future side story centered on Plu, set after the other books.',more:'This story is still being written and will appear after the other books in the reading collection.'}];

const storefronts={
elf:[['All retailers · Books2Read',books[0].url],['Barnes & Noble','https://www.barnesandnoble.com/w/elf-blood-jonathan-m-reed/1151826925?ean=2940197076762'],['ThriftBooks','https://www.thriftbooks.com/w/elf-blood-the-chronicles-of-plu-and-selena_jonathan-m-reed/60835761/']],
before:[['All retailers · Books2Read',books[1].url],['Barnes & Noble','https://www.barnesandnoble.com/w/the-world-before-jonathan-m-reed/1151832194?ean=2940197269034'],['ThriftBooks','https://www.thriftbooks.com/w/the-world-before-the-chronicles-of-plu-and-selena_jonathan-m-reed/60834395/'],['Feltrinelli · eBook','https://www.lafeltrinelli.it/world-before-ebook-inglese-jonathan-m-reed/e/9798237360950']],
goddess:[['All retailers · Books2Read',books[2].url],['Barnes & Noble','https://www.barnesandnoble.com/w/the-goddess-elf-jonathan-m-reed/1151849785?ean=2940197154309']],
listening:[['All retailers · Books2Read',books[3].url],['Fishpond · paperback','https://www.fishpond.com.au/Books/listening-world-Jonathan-M-Reed/9798237084870'],['IBS · paperback','https://www.ibs.it/listening-world-libro-inglese-jonathan-m-reed/e/9798237084870']],
rain:[['All retailers · Books2Read',books[4].url],['ThriftBooks','https://www.thriftbooks.com/w/dark-rain-the-chronicles-of-plu-and-selena_jonathan-m-reed/60774735/'],['IBS · paperback','https://www.ibs.it/dark-rain-libro-inglese-jonathan-m-reed/e/9798237895520'],['Feltrinelli · paperback','https://www.lafeltrinelli.it/dark-rain-libro-inglese-jonathan-m-reed/e/9798237895520']]
};
const releaseInfo={
elf:{status:'Listed as published',date:'October 2026',desc:'Paperback listed with an October 2026 release month. Exact day varies or has not been verified.'},
before:{status:'Upcoming · preorder',date:'December 10, 2026',desc:'Retailer listings currently show December 10, 2026 for print and eBook editions.'},
goddess:{status:'Date to be confirmed',date:'Not announced',desc:'No independently confirmed publication date found; please check the bookstore listings.'},
listening:{status:'Published',date:'October 21, 2026',desc:'Paperback publication date reported by an independent retailer.'},
rain:{status:'Published',date:'October 21, 2026',desc:'Paperback publication date reported by an independent retailer.'},
wonders:{status:'In progress',date:'To be announced',desc:'Companion story about Selena and Talula. Publication date not confirmed.'},
creatures:{status:'Release date not confirmed',date:'To be announced',desc:'The playful Plu creature adventures. No confirmed retailer release date.'},
plu:{status:'Still being written',date:'After the other books',desc:'The final companion book is still being written. Its publication date has not been announced.'}
};
const chars=[
{image:'assets/breni.webp',id:'breni',name:'Breni',symbol:'☽',group:'core',subtitle:'Vampire · Demi-god · Warrior',height:'6′9″',age:'Ageless',love:'Family and those she protects',overview:'A composed, fiercely loyal warrior whose imposing strength is matched by restraint. She builds a home with Taylor, protects Reyla, and takes responsibility for people in danger.',abilities:['Twin silver daggers','Exceptional strength and speed','Sunlight immunity','Immobilization'],books:['Elf Blood','The Goddess Elf','Dark Rain']},
{image:'assets/reyla.webp',id:'reyla',name:'Reyla',symbol:'❦',group:'core',subtitle:'The last true-born Druid',height:'5′6″',age:'Not confirmed',love:'The living world',overview:'A thoughtful listener who values people and nature equally. Her visual reference has dark natural curls, fine-framed glasses, a warm complexion, and distinctive personal markings; her in-world design combines those features with forest-green druid clothing, organic gold details, and living green magic. After finding family in the mansion, she becomes a mediator who seeks patient, lasting solutions instead of force.',abilities:['Connection to nature','Druidic perception','Mediation','World code affinity'],books:['Elf Blood','The Goddess Elf','The Listening World']},
{image:'assets/plu.webp',id:'plu',name:'Plu',symbol:'✧',group:'core',subtitle:'The Goddess Elf · Creator',height:'Approx. 5′0″ (true form)',age:'Ageless',love:'Selena',overview:'A playful, wise creator whose curiosity and affection are as defining as her power. After she is reborn and returns, Plu deliberately chooses an appearance closer to Talula’s. She believes that a familiar, approachable face will make the people around her more comfortable than a majestic divine form. This is a personal choice, not a loss of power or a change in who she is. Her long elven ears and galaxy-like eyes still hint at her extraordinary nature.',abilities:['Creation and worldbuilding','Reality shaping','Divine awareness','Self-augmentation'],books:['The Goddess Elf','Plu side story']},
{image:'assets/selena.webp',id:'selena',name:'Selena',symbol:'✦',group:'core',subtitle:'Goddess · Co-creator · Mother',height:'5′9″',age:'Ageless',love:'Plu',overview:'A devoted goddess and mother who acts from compassion, responsibility, and fierce loyalty. Her visual design follows the official Selena references: a deeper warm complexion, distinctive blue-grey hair, and an elegant, powerful presence. She shares the work of creation with Plu and raises Talula with care.',abilities:['Creation and life essence','Protective magic','Emotional resonance','Divine presence'],books:['Elf Blood','The Goddess Elf','Small Wonders']},
{image:'assets/taylor-new.webp',fallback:'assets/taylor.webp',id:'taylor',name:'Taylor',symbol:'✺',group:'core',subtitle:'Elf · Healer · The mansion',height:'6′0″',age:'Decades in the mansion',love:'Breni',overview:'Taylor shares a resemblance to Plu but appears far less majestic: a relaxed, bohemian elf with long tousled blonde hair, fine rainbow-coloured star glimmers woven through it, prominent pointed ears, layered beads and crystal jewellery, and comfortable flowing woodland clothes. Her mysterious past and missing memories contrast with the ordinary life she builds with Breni and Reyla.',abilities:['Healing living things','Unusual magical intuition','Compassion and curiosity'],books:['Elf Blood'],spoiler:false},
{image:'assets/talula.webp',id:'talula',name:'Talula',symbol:'✶',group:'core',subtitle:'Selena’s daughter',height:'Not confirmed',age:'Grows up during Elf Blood',love:'Her family',overview:'Bright, observant, and deeply bonded to Selena, Talula grows up surrounded by extraordinary magic but treasures ordinary moments with her mother. Her distinct appearance includes dark hair streaked with red and asymmetrical ears: one pointed elven ear and one rounded human ear. She has no tattoos.',abilities:['Quick learning','Unusual magical resonance','Determination'],books:['Elf Blood','Small Wonders'],spoiler:false},
{image:'ray-approved-website.webp',id:'ray',name:'Ray',symbol:'◈',group:'core',subtitle:'Human agent · Sector 1-7',height:'Not confirmed',age:'Not confirmed',love:'Not confirmed',overview:'A resourceful government investigator whose rare green aura-sight draws her into the divided-realities mystery. Her distinct appearance includes a light complexion, tied-back dark hair, clear-framed glasses, a weathered Sector 1-7 jacket, and a single softly green-glowing eye; she has no surrounding magical aura. She and Reyla were separate friends before the soul-projection events.',abilities:['Investigation and field leadership','Rare aura sight','Resourcefulness'],books:['Elf Blood'],spoiler:false},
{id:'hybrid',name:'The Hybrid Official',symbol:'◆',group:'core',subtitle:'A mysterious government figure',height:'Unknown',age:'Unknown',love:'Unknown',overview:'An elusive official whose influence is felt through the government. Their identity, origins, motives, and true capabilities remain a mystery within the unfolding story.',abilities:['Unknown'],books:['The main trilogy'],spoiler:true},
{id:'iven',name:'Iven',symbol:'⚒',group:'supporting',subtitle:'Dwarf · Companion-story ally',height:'Not confirmed',age:'Not confirmed',love:'Not confirmed',overview:'A dwarf connected to Breni’s investigation and the fraught relationship between dwarven communities and vampire clans.',abilities:['Local knowledge','Investigation and practical problem-solving'],books:['Dark Rain']},
{id:'saelis',name:'Saelis',symbol:'♜',group:'supporting',subtitle:'Dark elf commander',height:'Not confirmed',age:'Not confirmed',love:'Her people',overview:'A dark elf leader involved in the long-running Everlangyrs dispute, where opposing communities must learn to share a future.',abilities:['Leadership','Negotiation','Knowledge of the valley’s history'],books:['The Listening World']},
{id:'torven',name:'Torven',symbol:'♛',group:'supporting',subtitle:'Goblin king',height:'Not confirmed',age:'Not confirmed',love:'His people',overview:'A goblin ruler representing his community in the Everlangyrs talks. His decisions matter to the future of the valley.',abilities:['Leadership','Political negotiation','Community representation'],books:['The Listening World']},
{id:'vessa',name:'Vessa',symbol:'❧',group:'supporting',subtitle:'A winged acquaintance',height:'Not confirmed',age:'Not confirmed',love:'Not confirmed',overview:'An outspoken, hospitable woman with curved horns, wings, and a tail whose meeting with Plu and Selena becomes an unexpectedly memorable encounter.',abilities:['Resourcefulness','Hospitality','Independent spirit'],books:['Plu side story']}
];
let spoiler=false,cat='All';
const lore=[
['Magic','Divine Creation','The ability to shape life and worlds.'],['Magic','Druidic Magic','Power rooted in connection and understanding.'],['Magic','Residual Essence','Traces of power that linger in materials and places.'],['Magic','Crystal Storage','Crystals capable of holding unusual magical energies.'],
['Places','New Londanais','An important urban center.'],['Places','Bozton','A city where the extraordinary meets everyday life.'],['Places','Everlangyrs','A region with complicated coexistence among peoples.'],['Places','Teramek','A distinctive territory in the wider world.'],['Places','Dark Veil Mountains','Remote mountains linked to dragon communities.'],['Places','The Minotaur Sanctuary','A place of refuge and tradition.'],
['History','The Government','An institution using specially empowered technology.'],['History','The Fracture','A defining disruption at the heart of the trilogy.'],['History','The Separation Era','An age marked by realities divided.'],['History','The Merger Era','A later age of changing relationships between worlds.']];
const secrets=[['History','The Hybrid Official','A mysterious government official whose story is not yet known.'],['Magic','Pocket Reality','A separate space resulting from the Fracture.'],['History',"Reyla's Ascension",'A transformation in her relationship with the world.']];
const timeline=[
['The First Ages','Creation and the earliest peoples','The first worlds take shape.',false],['Ancient Civilizations','Cultures and conflicts','Peoples forge alliances and inherit disputes.',false],['The Separation Era','Elf Blood','Divided reality forms the backdrop to the first book.',false],['The Age of Change','The Goddess Elf','The trilogy approaches a turning point.',false],['The Fracture','A world-altering event','An attempt to seize magical essence changes history.',true],['A Living World',"Reyla's later journey",'Much later, Reyla travels among communities.',true],['The Far Future','Dark Rain','Breni confronts a mystery involving vampire clans.',true]];
const relations={
'plu|selena':{label:'Wives · Co-creators',text:'Plu and Selena were wives before the worlds existed. Together they create worlds and life, and their enduring love anchors the trilogy.'},
'breni|taylor':{label:'Vampire and hidden last Elf · Companions',text:'Breni is a vampire. Taylor is the last surviving Elf during the Fracture, and the world does not know she exists. They build a life together in the mansion, which later becomes a refuge for Reyla.'},
'breni|reyla':{label:'Chosen family · Protection',text:'Breni finds Reyla near a stream in their seventy-ninth year at the mansion. She brings Reyla home, where love, trust and everyday care grow between them.'},
'reyla|taylor':{label:'Family · The mansion',text:'Taylor welcomes Reyla into the household. They develop a deep familial bond while Reyla learns the routines and safety of their home.'},
'selena|talula':{label:'Mother · Daughter',text:'Selena raises Talula with devotion. Their closeness grows through everyday childhood moments explored in Small Wonders.'},
'plu|talula':{label:'Linked through creation',text:'Talula is closely connected to Plu and Selena and to the extraordinary magic at the heart of the trilogy.',spoiler:'The union of Talula and Taylor leads to Plu’s return as the Goddess Elf.'},
'selena|taylor':{label:'Family · Origins of the Fracture',text:'Taylor has a profound connection to Selena, although the full reason belongs to the trilogy’s central mystery.',spoiler:'Selena split Taylor from herself during the Fracture, shaping the events of the Separation Era.'},
'talula|taylor':{label:'Parallel lives',text:'Taylor and Talula are linked by the mystery of their origins, despite growing up apart.',spoiler:'Their meeting and merging restore the Goddess Elf.'},
'plu|taylor':{label:'Connected across eras',text:'Taylor’s story is tied to the Goddess Elf, but the source of that connection is part of the trilogy’s unfolding mystery.',spoiler:'Taylor joins Talula in the return of Plu.'},
'plu|breni':{label:'Creator · Chosen family',text:'Plu and Breni share a bond of protection and family that reaches beyond their ordinary lives.'},
'breni|selena':{label:'A protective family bond',text:'Breni and Selena are bound by loyalty and by the events surrounding the separated realities.',spoiler:'Breni was born from Selena’s rage and love during the Fracture.'},
'breni|talula':{label:'Chosen family',text:'Talula and Breni become important members of the same extended family.'},
'plu|reyla':{label:'Creation · Care for the world',text:'Plu recognizes and protects Reyla’s extraordinary connection to the living world.',spoiler:'Plu peacefully unites Ray and Reyla’s souls and later supports Reyla’s transformation into the living world’s code.'},
'reyla|selena':{label:'Family · Guardianship',text:'Reyla and Selena share a profound concern for the people and living world around them.'},
'reyla|talula':{label:'Family across the fracture',text:'Reyla and Talula become connected through their shared family and the events that draw the realities together.'},
'ray|reyla':{label:'Friends · Separated lives',text:'Ray and Reyla trained and worked alongside one another. They are distinct people whose friendship survived a painful separation.',spoiler:'Government soul projection forced Ray to share Reyla’s body. Plu later joined their two souls peacefully, preserving both identities.'},
'ray|selena':{label:'Mystery and investigation',text:'As a government agent, Ray encounters traces of Selena’s presence and gradually challenges the official account of what she sees.'},
'ray|plu':{label:'Fates converging',text:'Ray’s investigation leads her into the mystery surrounding the Goddess Elf.',spoiler:'After the return, Plu preserves Ray’s soul together with Reyla’s.'},
'ray|breni':{label:'Their paths converge',text:'Ray’s search for Reyla draws her toward the mansion and Breni’s family.'},
'ray|taylor':{label:'The mansion mystery',text:'Ray’s journey becomes entangled with Taylor’s life at the mansion.'},
'ray|talula':{label:'Separate sides of the mystery',text:'Ray’s work and Talula’s unusual connection to magic both contribute to the events of Elf Blood.'},

};
const $=s=>document.querySelector(s);
function retailerLinks(book){
 const list=storefronts[book.id]||[];
 return list.length?'<div class="storefront-links" aria-label="Retailers for '+book.title+'">'+list.map(([store,url])=>'<a href="'+url+'" rel="noopener noreferrer" target="_blank">'+store+' ↗</a>').join('')+'</div>':'<p class="retailer-empty">Store listings will be added when confirmed.</p>';
}
function renderBookCard(book){
 const info=releaseInfo[book.id],upcoming=['before','goddess','wonders','creatures','plu'].includes(book.id);
 const category=book.type==='trilogy'?'MAIN TRILOGY':(['listening','rain'].includes(book.id)?'POST-TRILOGY COMPANION':'COMPANION STORY');
 return '<article class="book-card '+(book.type==='trilogy'?'main-volume':'companion-volume')+'"><div class="book-art '+book.color+'">'+(book.cover?'<img class="cover-image" src="'+book.cover+'" alt="'+book.title+' cover" loading="lazy">':'')+'<span class="cover-text" style="'+(book.cover?'display:none':'')+'">'+book.title+'</span></div><div class="book-meta"><small class="book-category">'+category+'</small><h3>'+book.title+'</h3><p>'+book.desc+'</p><p class="release-short"><strong>'+info.status+'</strong> · '+info.date+'</p>'+(['elf','before','goddess','listening','rain'].includes(book.id)?'<a class="text-link" href="'+({'elf':'elf-blood.html','before':'the-world-before.html','goddess':'the-goddess-elf.html','listening':'the-listening-world.html','rain':'dark-rain.html'}[book.id])+'">Explore book page →</a>':'<button class="text-link" data-book="'+book.id+'">Discover this story →</button>')+'<h4>Available retailers</h4>'+retailerLinks(book)+'</div></article>';
}
function renderBooks(filter='all'){
 const groups=[
  {id:'trilogy',title:'The original trilogy',hint:'Start here · Read Books One through Three',ids:['elf','before','goddess']},
  {id:'after',title:'Stories after the trilogy',hint:'Reyla and Breni · Best read after the main trilogy',ids:['listening','rain']},
  {id:'other',title:'Other companions & stories ahead',hint:'Family moments, creature tales and future adventures',ids:['wonders','creatures','plu']}
 ];
 const eligible=book=>{
  if(filter==='all')return true;
  if(filter==='upcoming')return ['before','goddess','wonders','creatures','plu'].includes(book.id);
  return book.type===filter;
 };
 $('#bookGrid').innerHTML=groups.map(g=>{
  const list=g.ids.map(id=>books.find(b=>b.id===id)).filter(b=>b&&eligible(b));
  return list.length?'<div class="book-section"><div class="book-group-heading"><h3>'+g.title+'</h3><p>'+g.hint+'</p></div><div class="book-group-grid">'+list.map(renderBookCard).join('')+'</div></div>':'';
 }).join('');
}

function renderReleases(){
 $('#releaseGrid').innerHTML=books.map(book=>{
 const info=releaseInfo[book.id];
 return '<article class="release-card"><img src="'+(book.cover||'assets/plu.webp')+'" alt="" loading="lazy"><div><small>'+info.status+'</small><h3>'+book.title+'</h3><p class="release-date">'+info.date+'</p><p>'+info.desc+'</p><a href="#books">See book & retailers</a></div></article>';
 }).join('');
}
renderReleases();
renderBooks();
document.querySelectorAll('[data-book-filter]').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('[data-book-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderBooks(btn.dataset.bookFilter)
}));
function renderCharacters(filter='all'){
 const visible=chars.filter(c=>(filter==='all'||c.group===filter)&&(!c.spoiler||spoiler));
 $('#characterGrid').innerHTML=visible.map(c=>'<article class="character-card"><div class="character-art" aria-hidden="true">'+(c.image?'<img src="'+c.image+'" alt="" loading="lazy" data-fallback="'+(c.fallback||'')+'" onerror="if(this.dataset.fallback){this.src=this.dataset.fallback;delete this.dataset.fallback}else{this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'}">':'')+'<span class="character-symbol" style="'+(c.image?'display:none':'')+'">'+c.symbol+'</span></div><div class="character-info"><p class="character-group">'+(c.group==='core'?'MAIN CAST':'SUPPORTING CAST')+'</p><h3>'+c.name+'</h3><p class="role">'+c.subtitle+'</p><div class="stats"><div><span>Height</span><strong>'+c.height+'</strong></div><div><span>Age</span><strong>'+c.age+'</strong></div><div><span>Important bonds</span><strong>'+c.love+'</strong></div></div><button class="btn" data-char="'+c.id+'">View full profile</button></div></article>').join('');
}
renderCharacters();
document.querySelectorAll('[data-character-filter]').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('[data-character-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
 $('#characterDetail').hidden=true;renderCharacters(btn.dataset.characterFilter)
}));
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-book]');
 if(b){const x=books.find(v=>v.id===b.dataset.book);$('#bookDialogContent').innerHTML='<small>'+x.label+'</small><h2>'+x.title+'</h2><p>'+x.desc+'</p><p>'+x.more+'</p>'+'<h3>Retailer listings</h3>'+retailerLinks(x);$('#bookDialog').showModal()}
 const cb=e.target.closest('[data-char]');
 if(cb){const c=chars.find(v=>v.id===cb.dataset.char),d=$('#characterDetail');d.hidden=false;d.innerHTML='<button class="detail-close" aria-label="Close profile">×</button><p class="eyebrow">'+(c.group==='core'?'MAIN CAST':'SUPPORTING CAST')+'</p><h3>'+c.name+'</h3><p>'+c.subtitle+'</p><div class="split"><div><h3>Biography</h3><p>'+c.overview+'</p><p><strong>Appearances:</strong> '+c.books.join(', ')+'</p></div><div><h3>Key abilities & traits</h3><ul>'+c.abilities.map(a=>'<li>'+a+'</li>').join('')+'</ul><h3>Profile</h3><p>Height: '+c.height+'<br>Age: '+c.age+'<br>Important bonds: '+c.love+'</p></div></div>';d.scrollIntoView({behavior:'smooth',block:'nearest'})}
 if(e.target.matches('.detail-close'))$('#characterDetail').hidden=true;
});
$('.close-dialog').onclick=()=>$('#bookDialog').close();
$('#bookDialog').onclick=e=>{if(e.target===$('#bookDialog'))$('#bookDialog').close()};
$('#loreFilters').innerHTML=['All','Magic','Places','History'].map(c=>'<button class="pill '+(c==='All'?'active':'')+'" data-lore-cat="'+c+'">'+c+'</button>').join('');
/* World encyclopedia illustrations are limited to magic, places and history. */
// Approved magical emblems and regional heraldry. Artwork is displayed only
// after its image file exists in /assets/lore-approved; the original icon
// remains as a graceful fallback until the art is added to the repository.
const approvedLoreImages={
  "The Government": "government-faceless-officials.webp",
  "Divine Creation": "celestial_creation_mandala.png",
  "Druidic Magic": "luminous_tree_of_life_sigil.png",
  "Residual Essence": "amethyst_essence_in_twilight_emblem.png",
  "Crystal Storage": "amethyst_crystal_arcane_emblem.png",
  "New Londanais": "new_londanais_heraldic_banner.png",
  "Bozton": "bozton_s_emerald_eye_banner.png",
  "Everlangyrs": "everlangyrs_the_uneasy_treaty_banner.png",
  "Teramek": "restored_rift_heraldic_banner.png",
  "Dark Veil Mountains": "moonlit_dragon_heraldry_of_the_dark_veil_mountains.png",
  "The Minotaur Sanctuary": "minotaur_sanctuary_heraldic_banner.png"
};
function loreArtFor(entry){
 const title=entry[1];
 if(/Everlangyrs/i.test(title))return 'assets/lore-valley.svg';
 if(/Dark Veil|Mountain/i.test(title))return 'assets/lore-mountains.svg';
 if(/Government/i.test(title))return 'assets/lore-technology.svg';
 if(/New Londanais|Bozton|Teramek/i.test(title))return 'assets/lore-city.svg';
 if(/Crystal|Essence/i.test(title))return 'assets/lore-crystal.svg';
 if(/Fracture|Separation|Pocket/i.test(title))return 'assets/lore-fracture.svg';
 if(/Druid|Sanctuary|Ascension/i.test(title))return 'assets/lore-forest.svg';
 return entry[0]==='History'?'assets/lore-fracture.svg':entry[0]==='Magic'?'assets/lore-creation.svg':'assets/lore-valley.svg';
}
function renderLore(){
 const q=$('#loreSearch').value.toLowerCase();
 const entries=lore.concat(spoiler?secrets:[]).filter(x=>(cat==='All'||x[0]===cat)&&x.join(' ').toLowerCase().includes(q));
 $('#loreGrid').innerHTML=entries.map(x=>{
  const fallback=loreArtFor(x);
  const art=approvedLoreImages[x[1]]?'assets/lore-approved/'+approvedLoreImages[x[1]]:fallback;
  return '<article class="lore-card"><img class="lore-card-visual" src="'+art+'" data-fallback-src="'+fallback+'" alt="Chronicles illustration for '+x[1]+'" loading="lazy"><div class="lore-card-body"><small>'+x[0]+'</small><h3>'+x[1]+'</h3><p>'+x[2]+'</p></div></article>';
 }).join('');
 $('#loreGrid').querySelectorAll('img[data-fallback-src]').forEach(img=>{
  img.addEventListener('error',()=>{
   const fallback=img.dataset.fallbackSrc;
   if(fallback && !img.src.endsWith('/'+fallback))img.src=fallback;
  });
  if(img.complete&&img.naturalWidth===0&&img.dataset.fallbackSrc)img.src=img.dataset.fallbackSrc;
 });
 $('#loreEmpty').hidden=entries.length!==0;
}
renderLore();
$('#loreSearch').oninput=renderLore;
document.querySelectorAll('[data-lore-cat]').forEach(b=>b.onclick=()=>{cat=b.dataset.loreCat;document.querySelectorAll('[data-lore-cat]').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderLore()});
function renderTimeline(){$('#timelineList').innerHTML=timeline.filter(t=>spoiler||!t[3]).map(t=>'<article class="time-point"><small>'+t[0]+'</small><h3>'+t[1]+'</h3><p>'+t[2]+'</p></article>').join('')}
renderTimeline();$('#spoilerToggle').onchange=e=>{spoiler=e.target.checked;document.body.classList.toggle('lore-explorer',spoiler);$('#readerModeName').textContent=spoiler?'Lore Explorer · spoilers visible':'New Reader · spoilers protected';renderLore();renderTimeline();renderBestiary();renderCharacters(document.querySelector('[data-character-filter].active')?.dataset.characterFilter||'all');syncRelationControls();renderGlossary();renderGlobalSearch();if(typeof showLocation==='function')showLocation(currentLocationIndex)};
const relationCast=['plu','selena','breni','taylor','reyla','talula','ray','hybrid'];
const names=Object.fromEntries(chars.map(ch=>[ch.id,ch.name]));
const activeRelationIds=()=>relationCast.filter(id=>id!=='hybrid');
const assetFor=id=>{const ch=chars.find(c=>c.id===id);return ch?.image||null};
function setOptions(select,choice){select.innerHTML=activeRelationIds().map(id=>'<option value="'+id+'">'+(names[id]||id)+'</option>').join('');if(activeRelationIds().includes(choice))select.value=choice}
let selected=[];
function renderRelationMap(){
 const first=$('#firstPerson').value,second=$('#secondPerson').value;
 $('#relationMap').innerHTML=activeRelationIds().map(id=>{
  const ch=chars.find(c=>c.id===id),pic=assetFor(id);
  return '<button type="button" class="relation-node '+(id===first||id===second?'selected':'')+' '+(id==='ray'?'ray-node':'')+'" data-person="'+id+'" aria-label="Select '+ch.name+'"><span class="relation-photo">'+(pic?'<img src="'+pic+'" alt="" loading="lazy">':'<span class="relation-glyph">'+ch.symbol+'</span>')+'</span><span class="relation-name">'+ch.name+'</span><small>'+ch.subtitle+'</small></button>';
 }).join('');
}
function updateRelation(){
 const one=$('#firstPerson').value,two=$('#secondPerson').value,key=[one,two].sort().join('|');
 const rel=relations[key];const result=$('#relationResult');if(!spoiler&&!['plu|selena','breni|taylor','selena|talula'].includes(key)&&one!==two){result.innerHTML='<strong>Relationship details protected</strong><p>These lives become connected as the trilogy unfolds. Enable Lore Explorer for more context.</p>';renderRelationMap();return;}
 result.innerHTML=one===two?'<strong>Select two different characters</strong><p>Choose another portrait or use the menus.</p>':rel?'<strong>'+names[one]+' & '+names[two]+'</strong><small class="relation-type">'+rel.label+'</small><p>'+rel.text+'</p>'+(spoiler&&rel.spoiler?'<p class="spoiler-detail"><strong>Spoiler:</strong> '+rel.spoiler+'</p>':''):'<strong>'+names[one]+' & '+names[two]+'</strong><p>Both belong to the wider Chronicles, but the books do not establish a specific close personal connection between them.</p>';
 renderRelationMap();
}
function syncRelationControls(){
 const first=$('#firstPerson').value||'plu',second=$('#secondPerson').value||'selena';
 setOptions($('#firstPerson'),first);setOptions($('#secondPerson'),second);
 if(!activeRelationIds().includes(first))$('#firstPerson').value='plu';
 if(!activeRelationIds().includes(second))$('#secondPerson').value='selena';
 updateRelation();
}
document.querySelectorAll('#firstPerson,#secondPerson').forEach(x=>x.onchange=()=>{selected=[];updateRelation()});
$('#relationMap').addEventListener('click',e=>{
 const node=e.target.closest('[data-person]');if(!node)return;
 const id=node.dataset.person;selected.push(id);
 if(selected.length>2)selected=[id];
 $('#firstPerson').value=selected[0];
 if(selected[1])$('#secondPerson').value=selected[1];
 updateRelation();
});
syncRelationControls();
$('.menu-toggle').onclick=()=>{const nav=$('#nav');nav.classList.toggle('open');$('.menu-toggle').setAttribute('aria-expanded',nav.classList.contains('open'))};
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>{$('#nav').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false');document.querySelectorAll('#nav details').forEach(d=>d.open=false)});
document.querySelectorAll('#nav details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('#nav details').forEach(other=>{if(other!==d)other.open=false})}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('#nav details').forEach(d=>d.open=false);$('#nav').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false')}});
$('#year').textContent=new Date().getFullYear();

/* Gallery is built from the existing approved illustrations. */
const galleryCharacters=['plu','selena','breni','reyla','taylor','talula','ray'];
const galleryHost=document.querySelector('#portraitGallery');
const galleryModal=document.querySelector('#galleryDialog');
const galleryContent=document.querySelector('#galleryDialogContent');
if(galleryHost&&galleryModal&&galleryContent){
 galleryHost.innerHTML=galleryCharacters.map(id=>{
  const person=chars.find(x=>x.id===id);
  return '<button type="button" class="portrait-tile" data-gallery-person="'+id+'" aria-label="View '+person.name+' portrait"><img src="'+person.image+'" alt="Portrait of '+person.name+'" loading="lazy"><span class="portrait-label">'+person.name+'</span><small>'+person.subtitle+'</small></button>';
 }).join('');
 galleryHost.addEventListener('click',event=>{
  const tile=event.target.closest('[data-gallery-person]');if(!tile)return;
  const person=chars.find(x=>x.id===tile.dataset.galleryPerson);
  galleryContent.replaceChildren();
  const img=document.createElement('img');img.src=person.image;img.alt='Official portrait of '+person.name;
  const bio=document.createElement('div');bio.className='gallery-details';
  const title=document.createElement('h3');title.textContent=person.name;
  const subtitle=document.createElement('p');subtitle.textContent=person.subtitle;
  const link=document.createElement('a');link.href='#characters';link.className='btn';link.textContent='View character profiles';
  bio.append(title,subtitle,link);galleryContent.append(img,bio);
  galleryModal.showModal();
 });
 galleryModal.querySelector('.close-gallery').addEventListener('click',()=>galleryModal.close());
 galleryModal.addEventListener('click',e=>{if(e.target===galleryModal)galleryModal.close()});
 galleryContent.addEventListener('click',e=>{if(e.target.closest('a[href="#characters"]'))galleryModal.close()});
}
const knownLocations=[
 {name:'New Londanais',tag:'Urban centre',x:37,y:42,description:'A named urban centre within the separated-era setting. Its appearance in the books connects the city to the wider human world, but the official map does not establish exact streets or borders.',people:'Urban residents living within the human world during the events of the trilogy. The books do not establish a complete demographic breakdown.',land:'City terrain and precise regional boundaries have not been specified.',books:'Elf Blood · Main trilogy'},
 {name:'Bozton',tag:'City',x:49,y:51,description:'An urban setting featured in The Goddess Elf, where residents must respond to events far larger than the city itself.',people:'Citizens of Bozton, whose everyday lives intersect with the main characters.',land:'A settled city; its physical position and surrounding territory have not been fixed in the books.',books:'The Goddess Elf'},
 {name:'Everlangyrs',tag:'Shared region',x:61,y:47,description:'A region where a difficult history between neighbouring communities leads to negotiations and a continuing effort to live together. Reyla’s later work returns here.',people:'Dark elves and goblins, with distinctive communities, histories and competing accounts of the valley.',land:'An inhabited valley with paths, foundations, shared meeting spaces and settlements. The Listening World follows how the region changes through cooperation.',books:'The Goddess Elf · The Listening World'},
 {name:'Teramek',tag:'Territory',x:83,y:59,description:'A location associated with the fractures between realities and the work of repairing what has been damaged.',people:'The available books do not establish a complete inventory of its residents or communities.',land:'The exact terrain, borders and geographic position have not been established.',books:'The Goddess Elf'},
 {name:'Dark Veil Mountains',tag:'Mountain region',x:63,y:19,description:'A mountainous region visited in Reyla’s later travels, where dragons seek stronger connections with neighbouring communities.',people:'Dragon communities, including a settlement interested in trade and access along a northern road.',land:'Remote mountain terrain with access routes. Exact peaks, borders and distances remain unspecified.',books:'The Listening World'},
 {name:'The Minotaur Sanctuary',tag:'Sanctuary',x:26,y:38,description:'A refuge with a vital place in Selena and Talula’s journey during Elf Blood. The sanctuary is threatened during the separated-era events.',people:'The Minotaurs and the community that maintains the sanctuary and its traditions.',land:'Protected sanctuary land. Its detailed terrain and exact position have not been formally mapped.',books:'Elf Blood'},
 {name:'Breni’s Island Mystery',tag:'Offshore island',x:16,y:76,description:'The island setting of Dark Rain, where Breni investigates a conflict involving vampire clans and dwarves.',people:'Vampire clans and dwarven residents involved in the mystery.',land:'An offshore island reached through ferry travel. Its placement on this atlas is illustrative and can change with the story.',books:'Dark Rain'},
 {name:'Plu’s Off-world Journeys',tag:'Portal · beyond the globe',x:null,y:null,portal:true,description:'Plu’s stories include visits beyond the main world. These destinations are not part of the Earth-based atlas and are approached through a portal rather than assigned invented coordinates.',people:'The peoples and creatures encountered differ from one visited world to another. Specific communities will be added as each destination is confirmed.',land:'Other worlds beyond the primary setting. No invented world names, borders or distances are assigned here.',books:'Plu’s Creatures · Plu’s companion adventures'}
];
const locationList=document.querySelector('#locationList'),locationDetail=document.querySelector('#locationDetail');
const atlasPins=document.querySelector('#atlasPins'),atlasPortalButton=document.querySelector('#atlasPortalButton');
let currentLocationIndex=0;
function showLocation(index){
 if(!locationList||!locationDetail||!knownLocations[index])return;
 currentLocationIndex=index;const place=knownLocations[index];
 locationList.querySelectorAll('button').forEach(button=>{const active=Number(button.dataset.location)===index;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});
 atlasPins?.querySelectorAll('[data-atlas-index]').forEach(button=>{const active=Number(button.dataset.atlasIndex)===index;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});
 atlasPortalButton?.classList.toggle('active',!!place.portal);
 locationDetail.replaceChildren();
 const label=document.createElement('small');label.textContent=place.tag;
 const title=document.createElement('h3');title.textContent=place.name;
 const hiddenLocation=!spoiler&&['Everlangyrs','Teramek','Dark Veil Mountains','Breni’s Island Mystery','Plu’s Off-world Journeys'].includes(place.name);
 const description=document.createElement('p');description.textContent=hiddenLocation?'This location appears in later books. Additional history is available in Lore Explorer mode.':place.description;
 const peopleTitle=document.createElement('h4');peopleTitle.textContent='People & communities';
 const people=document.createElement('p');people.textContent=hiddenLocation?'Further details are protected for new readers.':place.people;
 const landTitle=document.createElement('h4');landTitle.textContent='The land';
 const land=document.createElement('p');land.textContent=hiddenLocation?'The full landscape notes are available in Lore Explorer mode.':place.land;
 const books=document.createElement('p');books.className='location-source';books.textContent='Explore in: '+place.books;
 const caveat=document.createElement('small');caveat.className='atlas-caveat';caveat.textContent=place.portal?'Beyond the main world · no map placement':'Illustrative placement · locations may shift as the stories develop';
 locationDetail.append(label,title,description,peopleTitle,people,landTitle,land,books,caveat);
}
if(locationList&&locationDetail){
 locationList.innerHTML=knownLocations.map((place,i)=>'<button type="button" data-location="'+i+'" aria-pressed="false">'+place.name+' <span>›</span></button>').join('');
 locationList.addEventListener('click',event=>{const button=event.target.closest('[data-location]');if(button)showLocation(Number(button.dataset.location))});
 if(atlasPins){
  atlasPins.innerHTML=knownLocations.map((place,i)=>place.x==null?'':'<button type="button" class="atlas-pin" style="left:'+place.x+'%;top:'+place.y+'%" data-atlas-index="'+i+'" aria-pressed="false" aria-label="Explore '+place.name+'"><span class="atlas-pin-dot" aria-hidden="true">✦</span><span class="atlas-pin-label">'+place.name+'</span></button>').join('');
  atlasPins.addEventListener('click',event=>{const button=event.target.closest('[data-atlas-index]');if(!button)return;showLocation(Number(button.dataset.atlasIndex));if(matchMedia('(max-width:760px)').matches)locationDetail.scrollIntoView({behavior:'smooth',block:'start'})});
 }
 atlasPortalButton?.addEventListener('click',()=>{showLocation(knownLocations.length-1);locationDetail.scrollIntoView({behavior:'smooth',block:'nearest'})});
 showLocation(0);
}

/* Canon-conscious, art-ready creature notes. Images can be attached once approved. */
const bestiaryEntries=[
 {name:'Elves',category:'Peoples',realm:'Fracture era · hidden history',summary:'During the Fracture, the world believes the Elves are gone. Taylor is the last surviving Elf, and her existence is unknown to the world. The Elves return publicly only after Plu repairs the shattered world.'},
 {name:'Druids',category:'Peoples',realm:'The World Before · The Listening World',summary:'A people connected deeply to living nature. Their history and the legacy of their magic shape events across the Chronicles.'},
 {name:'Vampires',category:'Peoples',realm:'Fracture era · Elf Blood · Dark Rain',summary:'Vampires include full-blooded and half-blooded individuals and make up about 15% of the population in the Fracture-era notes. They can retain a youthful appearance at extraordinary ages. Breni is a vampire; her later story explores conflict between vampire clans.'},
 {name:'Minotaurs',category:'Peoples',realm:'Elf Blood',summary:'The Minotaur sanctuary offers a refuge and preserves the traditions of its people during a dangerous period.'},
 {name:'Dark Elves',category:'Peoples',realm:'The Goddess Elf · The Listening World',summary:'A distinct community whose history with neighbouring goblins is important to the future of Everlangyrs.'},
 {name:'Goblins',category:'Peoples',realm:'The Goddess Elf · The Listening World',summary:'A community with its own leaders and history in Everlangyrs. Their negotiations with the dark elves shape the region.'},
 {name:'Dwarves',category:'Peoples',realm:'The World Before · Dark Rain',summary:'An established people of the world. Dwarven characters play important roles in the mystery surrounding Breni’s island journey.'},
 {name:'Dragons',category:'Creatures',realm:'The World Before · The Listening World',summary:'Among the world’s ancient beings. Reyla’s later travels take her toward dragon settlements in the Dark Veil Mountains.'},
 {name:'Giants',category:'Creatures',realm:'The World Before · The Goddess Elf',summary:'Powerful beings whose early conflicts are part of the world’s deep history and whose presence continues into later eras.'},
 {name:'Ogres',category:'Creatures',realm:'The World Before',summary:'An ancient people whose conflict with giants belongs to the early history explored in The World Before.'},
 {name:'Cyclopes',category:'Creatures',realm:'The World Before · The Goddess Elf',summary:'One of the extraordinary peoples encountered in the history and later gatherings of the Chronicles.'},
 {name:'Succubi',category:'Creatures',realm:'Plu’s Creatures',summary:'A type of being encountered in Plu’s lighter adventures. Their appearances belong to those companion tales rather than the main trilogy’s central mystery.'},
 {name:'Witches & Wiccans',category:'Peoples',realm:'Fracture era · society and magic',summary:'Witches and Wiccans form the largest population group in the Fracture-era notes, at approximately 60%. Their magical practices and political position vary; the books also show witches involved in experimentation.'},
 {name:'Fairies',category:'Peoples',realm:'Fracture era · everyday society',summary:'Fairies simply exist as part of the world. Their presence is treated as ordinary, with little public curiosity about why they exist.'},
 {name:'Werewolves',category:'Peoples',realm:'Fracture era · transformation',summary:'Werewolves use an amulet to prevent unwanted transformations. The notes do not establish a universal trigger or transformation schedule.'},
 {name:'Harpies',category:'Peoples',realm:'Fracture era · World Government',summary:'Harpies are associated with official positions in the World Government.'},
 {name:'Nymphs',category:'Peoples',realm:'Fracture era · World Government',summary:'Nymphs serve among the officials of the World Government.'},
 {name:'Leprechauns',category:'Peoples',realm:'Fracture era · security forces',summary:'Leprechauns are associated with the world’s security and military forces.'},
 {name:'Humans',category:'Peoples',realm:'Fracture era · protected population',summary:'Humans are identified as a protected species in the author’s Fracture-era notes.'},
 {name:'Hybrids',category:'Peoples',realm:'Fracture era · experimentation and society',summary:'Hybrids are a common class formed from two or more species or lineages. The books describe hybrid captives, hunters and experimentation; being a hybrid does not automatically make someone dangerous.'},
 {name:'Monsters',category:'Creatures',realm:'Fracture era · vilified beings',summary:'“Monsters” is a broad social label applied to beasts, animals and certain hybrids. The notes describe them as vilified, but the label alone does not establish that an individual is hostile.'},
 {name:'Dark Slimes',category:'Creatures',realm:'Plu’s Creatures',summary:'Unusual dark slime creatures encountered in Plu’s comedic travels. Their particular encounters are explored in the companion stories.'}
];
const bestiaryPortraits={
 'Elves':[['elves-male.webp','Male'],['elves-female.webp','Female']],
 'Druids':[['druids-male.webp','Male'],['druids-female.webp','Female']],
 'Vampires':[['vampires-male.webp','Male'],['vampires-female.webp','Female']],
 'Minotaurs':[['minotaurs-male.webp','Male'],['minotaurs-female.webp','Female']],
 'Goblins':[['goblins-male.webp','Male'],['goblins-female.webp','Female']],
 'Dark Elves':[['dark-elves.webp','Female']],
 'Dwarves':[['dwarves.webp','Female']],
 'Dragons':[['dragons.webp','Female']],
 'Giants':[['giants.webp','Female']],
 'Ogres':[['ogres.webp','Female']],
 'Cyclopes':[['cyclopes.webp','Female']],
 'Succubi':[['succubi.webp','Female']],
 'Witches & Wiccans':[['witches-wiccans.webp','Female']],
 'Fairies':[['fairies.webp','Female']],
 'Werewolves':[['werewolves.webp','Female']],
 'Harpies':[['harpies.webp','Female']],
 'Nymphs':[['nymphs.webp','Female']],
 'Leprechauns':[['leprechauns.webp','Female']],
 'Humans':[['humans.webp','Female']],
 'Hybrids':[['hybrids.webp','Female']],
 'Monsters':[['monsters.webp','Female']],
 'Dark Slimes':[['dark-slimes.webp','Female']]
};
const bestiaryStats={
 'Elves':{traits:'Tall stature is described. An elf bride wears her hair braided with starlight lilies. Elves emerged from old-growth forests and share an ancient language with the sky-dwellers.',role:'During the Fracture, the world believes the Elves are gone. Taylor is the last surviving Elf known to the story; the people return publicly after Plu repairs the shattered world.',basis:'Book basis: The World Before and the wedding material in Our Goddess, Book One. No universal height measurement, lifespan or standard clothing is stated.'},
 'Druids':{traits:'A Druid is described as broad-shouldered, with palms stained by the dark green ink of the forest floor.',abilities:'Connection to dirt and living nature; the books also describe the manipulation of living blood.',role:'Their history and relationship with the living world shape events across the Chronicles.',basis:'Book basis: Our Goddess, Book One. No universal height, lifespan or clothing is specified.'},
 'Vampires':{traits:'The books distinguish full-blooded and half-blooded vampires. At least one ancient vampire, about 2,010 years old, retains an appearance of roughly 30.',population:'Approximately 15% in the Fracture-era author notes.',role:'Vampire clans have their own communities and tensions; Dark Rain follows a conflict between two clans.',basis:'Book basis: Elf Blood, Dark Rain and Fracture-era notes. The age example is individual, not a universal aging rule.'},
 'Minotaurs':{traits:'Enormous, horned people. A young Minotaur is described with small horns, one notched near the tip.',role:'The sanctuary is a functioning community with families, children, merchants, workers, metalworkers, gardens and places of refuge.',basis:'Book basis: The Goddess Elf, sanctuary scenes. They are a people and community, not mindless monsters.'},
 'Dark Elves':{traits:'The books establish a distinct people and community; they do not establish one universal body type or costume.',role:'Their shared history and political relationship with neighbouring goblins shape events in Everlangyrs.',basis:'Book basis: The Goddess Elf and The Listening World. Clothing and physical details should be treated as portrait interpretation unless a passage specifies them.'},
 'Goblins':{traits:'The books establish a distinct people and community; they do not establish one universal body type or costume.',role:'They have leaders, community interests and a history of negotiation and conflict with the dark elves in Everlangyrs.',basis:'Book basis: The Goddess Elf and The Listening World. The portrait is not a claim that all goblins look alike.'},
 'Dwarves':{traits:'The books show dwarves breaking through a mountain rock face and opening a massive stone hall to the sky.',role:'Their communities include skilled builders and workers; dwarven characters also appear in Breni’s later island investigation.',basis:'Book basis: Our Goddess, Book One, and Dark Rain. No universal height or body type is stated.'},
 'Dragons':{traits:'Ancient sky-dwellers who existed before the elves and shared an old language with them.',role:'Later stories include dragon settlements in the Dark Veil Mountains.',basis:'Book basis: The World Before and later dragon-settlement material. Specific anatomy, colours and abilities should follow individual descriptions.'},
 'Giants':{traits:'An ancient people included in the early history of the world. The books do not establish a standard height or universal build in the current reference notes.',role:'Their conflicts with ogres form part of the ancient history explored in The World Before.',basis:'Book basis: The World Before. Any details visible only in the portrait are visual interpretation, not additional canon.'},
 'Ogres':{traits:'An ancient people included in the early history of the world. The current book notes do not establish a universal body type or anatomy.',role:'Their conflict with giants is part of the ancient history explored in The World Before.',basis:'Book basis: The World Before. Avoid importing generic fantasy-ogre traits as facts about this world.'},
 'Cyclopes':{traits:'A people included in ancient history and later gatherings. The name alone is not used as evidence for height, build or additional abilities.',role:'Their place in the world is established, while further social details remain limited in the current references.',basis:'Book basis: The World Before and The Goddess Elf. The portrait should not be treated as proof of unstated traits.'},
 'Succubi':{traits:'A type of being encountered in Plu’s companion adventures. The current notes do not establish a universal appearance.',role:'Their appearances belong to the companion stories rather than the central trilogy conflict.',basis:'Book basis: Plu’s Creatures companion material. Specific traits and abilities should be tied to the particular encounter.'},
 'Witches & Wiccans':{traits:'The books show copper instruments, glass lenses, measuring devices and experimental magic. Practices and appearances vary.',population:'Approximately 60% in the Fracture-era author notes.',role:'A large and varied population group; some factions conduct magical experimentation.',basis:'Book basis: Fracture-era notes and the witches’ experimental equipment in the novels. No single stereotyped costume represents the group.'},
 'Fairies':{traits:'Fairies exist as part of everyday society. The author notes deliberately do not establish one standard appearance.',role:'Their existence is treated as ordinary in the world; characters do not generally stop to question why they exist.',basis:'Book basis: Fracture-era author notes. Wings, height and clothing are not assumed unless a specific passage says so.'},
 'Werewolves':{traits:'The notes establish an amulet used to prevent unwanted transformations.',role:'The amulet is a practical part of transformation control.',basis:'Book basis: Fracture-era notes. Transformation triggers, schedules and exact forms are not generalized here.'},
 'Harpies':{traits:'The current book references do not establish standard anatomy, clothing or body measurements.',role:'Harpies are associated with official positions in the World Government.',basis:'Book basis: Fracture-era notes. The female portrait is an artistic reference, not a claim that all harpies share one appearance.'},
 'Nymphs':{traits:'Tiny, translucent beings that move through mist and gather around people.',role:'Nymphs are also associated with official positions in the World Government.',basis:'Book basis: Fracture-era notes. Keep their described small, translucent nature distinct from generic winged-fairy imagery.'},
 'Leprechauns':{traits:'The current book references do not establish standard physical traits or costume.',role:'Leprechauns are associated with security forces and the military.',basis:'Book basis: Fracture-era notes. Avoid importing stereotyped folklore clothing or abilities.'},
 'Humans':{traits:'Human appearances vary by individual and era; no single portrait represents the entire population.',role:'Humans are identified as a protected species in the Fracture-era notes.',basis:'Book basis: Fracture-era notes and individual human characters. Clothing should reflect the depicted era.'},
 'Hybrids':{traits:'A broad class formed from two or more species or lineages. Appearance varies according to the lineages involved.',role:'The books describe hybrid captives, hunters and experimentation. Hybrid status alone does not make an individual dangerous.',basis:'Book basis: Fracture-era notes and the novels. Each hybrid design should identify its lineage combination where the text provides it.'},
 'Monsters':{traits:'“Monsters” is a broad social label for beasts, animals and certain hybrids; it is not one biological species.',role:'The notes describe monsters as vilified, but the label alone does not establish that an individual is hostile.',basis:'Book basis: Fracture-era notes. The image represents one illustrative creature, not a universal monster anatomy.'},
 'Dark Slimes':{traits:'Unusual dark slime beings encountered in Plu’s companion adventures.',role:'Their specific encounters are explored in the companion stories.',basis:'Book basis: Plu’s Creatures companion material. Do not assume generic role-playing-game powers or biology.'}
};
// Plu's notes are the author's own words, preserved exactly; a missing
// Cyclopes entry remains unfilled until the author supplies it.
const pluCreatureNotes={
  "Elves": "the sweetest and most beautiful creatures i have had the pleasure of shaping into existence.  Smart. Agile.  Very good at making the sun happy . GLAD they are back!",
  "Druids": "Selena? 'Yes love?' Want to take this? 'Oh yes of course,  ahem. \"Druids are cool\"' that's it? 'Yes my love'  well Selena has spoken.",
  "Vampires": "oh vampires!! Yes they are so spookkyyy,  Breni is a vampire,  she so brooding!! I love her!!  The other are nice to talk to, they have unquie ways of making blood into food an its always taste great!! 'Why are u eating blood?' Obviously so i can discuss with you Breni!!",
  "Minotaurs": "these are Selena's babies she made then to fight off my constant advances to her while she worked,  they were her guards against me! 'No love they were my team to keep you occupied so I could work' ohh so that's why they are so effective at building,  mediation and dance parties.",
  "Dark Elves": "i honestly don't know what they're THINK they are but they just tan elves they created a name to feel different but I accept it .",
  "Goblins": "ughhh where do I start. They are so annoying they came into existence after the first dragons had died and the essence was pressing against some magical forces i didn't close off from earlier creations OPPPISE.",
  "Dwarves": "they are just cute builders and thinkers.  I don't know why but people are always surprised they are the same height....its like they expected them to be shorter...weird",
  "Dragons": "my first babies along with Elves,  they have evolved moved on and been there since the beginning.  There wisdom has no match but they are not arrogant,  always ready to teach and assist.",
  "Giants": "i was Watsted on so Elven/ fairly wine and made a really RELLY big creations that everyone just called Giants so we stuck with them.  Stronger then any race but also intelligent enough to know they are just tools.",
  "Ogres": "PASS 'Plu, you can't just pass, your telling them you're work' Selena my love Ogres, Cyclopes and Giants are honestly the same.  I don't want to explain how Druids created Cyclopes from Ogres abd Giants mixed with there blood its a total spoiler!",
  "Succubi": "well ill just say after that first one I never made any more . An its definitely good because they Creature i know its very very fun.",
  "Witches & Wiccans": "some good some bad I just hope they never try and do anything crazy...like rewrite existence or steal power from a creator.",
  "Fairies": "they are adorable and can change size shape or genital depending on the area they are in or they're ammonia levels.",
  "Werewolves": "so vampires created them to be servant during the time i was away...I dint like that so I fixed it. They are a free people and have there own culture now.",
  "Harpies": "they were another product of a world evolution.  They are many always in a group and never give you full truth and they always know the correct path.",
  "Nymphs": "my personal friends honestly,  they stay away from most society because they sexual energy can cause so much issues,  but for me and Selena  'PLU HUSH!' Oh sorry Selena is very private.",
  "Leprechauns": "I have never seen one  LIVE IN WORLD  i just know they exist because I feel there presence of life. I can see them helping people with things all over the world so I see no need to question them.",
  "Humans": "Squishy meat bags who are enamored with \"celebrity \" i don't understand what they are doing.  I am a literal Goddess but they worried about Some guy in TV program.",
  "Hybrids": "anything they want to be,  I don't judge i only create love an understanding.",
  "Monsters": "monsters are just thing people call what they don't understand,  I dont create monsters.  I create reality itself.",
  "Dark Slimes": "cuteness at its finest."
};
const governmentCreatureRecords={
  "Elves": {
    "status": "EXTINCT",
    "body": "No verified living subject. Claims of surviving bloodlines are to be confiscated and sealed."
  },
  "Druids": {
    "status": "EXTINCT",
    "body": "True-born lineages terminated. Unauthorised accounts of living descendants are to be treated as errors."
  },
  "Vampires": {
    "status": "MONITORED",
    "body": "Population acknowledged. Clan activity requires continued observation. Exceptional abilities are restricted information."
  },
  "Minotaurs": {
    "status": "UNCONTROLLED",
    "body": "Sanctuary activity has been reported. No unregistered territory is recognised as autonomous."
  },
  "Dark Elves": {
    "status": "EXTINCT",
    "body": "No sanctioned contact during the present era. All unverified accounts remain classified as folklore."
  },
  "Goblins": {
    "status": "EXTINCT",
    "body": "No controlled specimen or government-confirmed settlement. Taxonomic record closed."
  },
  "Dwarves": {
    "status": "EXTINCT",
    "body": "No current authorised contact recorded. Historical references alone do not establish survival."
  },
  "Dragons": {
    "status": "EXTINCT",
    "body": "Records predate the present government. No government-controlled living subject confirmed."
  },
  "Giants": {
    "status": "EXTINCT",
    "body": "No active contact. Reports of extraordinary stature require source suppression."
  },
  "Ogres": {
    "status": "EXTINCT",
    "body": "No living subject registered. Reports from inaccessible territories are not admissible."
  },
  "Cyclopes": {
    "status": "EXTINCT",
    "body": "No verified contact. Historic descriptions remain sealed pending authorised review."
  },
  "Succubi": {
    "status": "EXTINCT",
    "body": "No sanctioned observation. Unverified testimony is to be dismissed as superstition."
  },
  "Witches & Wiccans": {
    "status": "REGISTERED",
    "body": "Magical practices and affiliations are monitored. Unauthorised experimentation is a security concern."
  },
  "Fairies": {
    "status": "REGISTERED",
    "body": "Existence acknowledged. Distribution and behaviour are not matters for public inquiry."
  },
  "Werewolves": {
    "status": "MONITORED",
    "body": "Transformation management is recorded. Movement outside approved jurisdictions is subject to review."
  },
  "Harpies": {
    "status": "ACTIVE",
    "body": "Government-linked personnel. Details of service and communications are restricted."
  },
  "Nymphs": {
    "status": "ACTIVE",
    "body": "Government-linked personnel. All enquiries outside assigned jurisdiction are to be denied."
  },
  "Leprechauns": {
    "status": "ACTIVE",
    "body": "Security and military affiliations noted. Operational information withheld."
  },
  "Humans": {
    "status": "PROTECTED",
    "body": "Protected population. Public order and authorised supervision remain priorities."
  },
  "Hybrids": {
    "status": "CONTROLLED",
    "body": "Lineage classifications are recorded. Unauthorised variations and abilities must be reported."
  },
  "Monsters": {
    "status": "RESTRICTED",
    "body": "A general hazard designation. Unclassified beings encountered outside authorised zones are subject to containment."
  },
  "Dark Slimes": {
    "status": "EXTINCT",
    "body": "No government-sanctioned encounter. Biological and magical references remain unverified."
  }
};
// These reports intentionally describe the government's unreliable Book One
// classifications. EXTINCT means "not observed or controlled" to the agency.
const bestiaryReveals=new Set(['Elves','Minotaurs','Goblins','Ogres','Werewolves','Witches & Wiccans']);
let bestiaryVoice='government';
const escapeCreatureText=value=>String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

let bestiaryFilter='All';
/* Author-approved uploads: landscape four-panel Dragon sheet and portrait
   Cyclopes pair. Only image presentation changes; book lore stays intact. */
const approvedCreatureUploads={
 dragons:'/cc46fce9-238a-41e6-955e-082095b35d30.png',
 cyclopes:'/76967ae9-60d7-4739-94ac-f49080622d51.png'
};
/* Confirm that a landscape image is the four-column Dragon sheet and that the
   portrait image is the Cyclopes pair, even if GitHub changed upload names. */
function reconcileApprovedCreatureImages(){
 const urls=[approvedCreatureUploads.dragons,approvedCreatureUploads.cyclopes];
 Promise.all(urls.map(url=>new Promise(resolve=>{
  const probe=new Image();
  probe.onload=()=>resolve({url,width:probe.naturalWidth,height:probe.naturalHeight});
  probe.onerror=()=>resolve(null);
  probe.src=url;
 }))).then(found=>{
  const ready=found.filter(Boolean);
  const dragons=ready.find(info=>info.width>info.height);
  const cyclopes=ready.find(info=>info.height>info.width);
  if(dragons)document.querySelectorAll('.dragon-model-cell').forEach(node=>node.style.backgroundImage='url("'+dragons.url+'")');
  if(cyclopes)document.querySelectorAll('.cyclopes-model-pair img').forEach(node=>{if(node.getAttribute('src')!==cyclopes.url)node.setAttribute('src',cyclopes.url)});
 });
}
function approvedRacePortrait(entry,portraits){
 if(entry.name==='Dragons'){
  const labels=['Humanoid male','Humanoid female','Beast-form male','Beast-form female'];
  return '<div class="dragon-model-grid" role="group" aria-label="Four approved Dragon models">'+
   labels.map((label,i)=>'<div class="dragon-model-cell dragon-model-'+i+'" role="img" aria-label="'+label+' Dragon portrait, without printed image lettering"></div>').join('')+
   '</div>';
 }
 if(entry.name==='Cyclopes'){
  return '<div class="cyclopes-model-pair"><img src="'+approvedCreatureUploads.cyclopes+'" alt="Approved full-body male and female Cyclopes, with their eyes covered by broad leather visors" loading="lazy"></div>';
 }
 return '<div class="codex-portrait-gallery '+(portraits.length===1?'single':'')+'">'+portraits.map(([file,label])=>'<figure class="codex-portrait-figure"><img class="codex-portrait-image" src="/assets/creatures/'+file+'" alt="Full-body '+label.toLowerCase()+' portrait of '+entry.name+'" loading="lazy"><figcaption>'+label+' reference</figcaption></figure>').join('')+'</div>';
}
function renderBestiary(){
 const host=document.querySelector('#bestiaryGrid');
 if(!host)return;
 host.innerHTML=bestiaryEntries.filter(entry=>bestiaryFilter==='All'||entry.category===bestiaryFilter).map(entry=>{
  const stats=bestiaryStats[entry.name]||{};
  const portraits=bestiaryPortraits[entry.name]||[];
  const portraitMarkup=approvedRacePortrait(entry,portraits);
  const rows=[['Population',stats.population],['Visible traits',stats.traits],['Known abilities',stats.abilities],['Society & role',stats.role]].filter(row=>row[1]).map(row=>'<div class="race-stat"><strong>'+escapeCreatureText(row[0])+'</strong><span>'+escapeCreatureText(row[1])+'</span></div>').join('');
  const gov=governmentCreatureRecords[entry.name]||{status:'EXTINCT',body:'No verified contact. Record archived.'};
  const restricted= bestiaryVoice==='plu' && !spoiler && bestiaryReveals.has(entry.name);
  const entryNote=pluCreatureNotes[entry.name];
  const voiceMarkup=bestiaryVoice==='government'
   ?'<div class="race-voice government-record"><p class="voice-overline">WORLD GOVERNMENT · RESTRICTED ARCHIVE</p><div class="government-status"><span>FILE STATUS</span><strong>'+escapeCreatureText(gov.status)+'</strong></div><p class="government-extract">'+escapeCreatureText(gov.body)+'</p><small class="record-disclaimer">Government classification · not necessarily the truth</small></div>'
   :'<div class="race-voice plu-record"><p class="voice-overline">PLU’S PERSONAL NOTES · IN HER OWN WORDS</p>'+
      (restricted?'<div class="plu-spoiler-shield"><strong>Later-story note sealed</strong><p>Plu gives away a little too much here. Enable Lore Explorer to read this entry.</p></div>':
      entryNote?'<p class="plu-quote">'+escapeCreatureText(entryNote)+'</p>':
      '<p class="plu-not-written">Plu’s Cyclopes note has not been provided yet.</p>')+
      '</div>';
  const bookReference=rows?'<details class="creature-reference"><summary>Additional book-reference notes</summary><div class="race-stats">'+rows+'</div><p class="race-stats-basis">'+escapeCreatureText(stats.basis||'Book details take priority; visual interpretation is not additional canon.')+'</p></details>':'';
  return '<article class="bestiary-card codex-entry '+(entry.name==='Dragons'?'dragon-race-card':entry.name==='Cyclopes'?'cyclopes-race-card':'')+' '+(bestiaryVoice==='plu'?'plu-active':'government-active')+'"><div class="codex-portrait">'+portraitMarkup+'</div><div class="codex-info"><small>'+escapeCreatureText(entry.category)+' · '+escapeCreatureText(entry.realm)+'</small><h3>'+escapeCreatureText(entry.name)+'</h3>'+voiceMarkup+bookReference+'</div></article>';
 }).join('');
 reconcileApprovedCreatureImages();
}
const bestiaryVoiceControls=document.querySelector('#bestiaryVoiceControls');
if(bestiaryVoiceControls){
 bestiaryVoiceControls.addEventListener('click',event=>{
  const button=event.target.closest('[data-bestiary-voice]');
  if(!button)return;
  bestiaryVoice=button.dataset.bestiaryVoice;
  bestiaryVoiceControls.querySelectorAll('[data-bestiary-voice]').forEach(b=>{
   const active=b===button;
   b.classList.toggle('active',active);
   b.setAttribute('aria-pressed',String(active));
  });
  renderBestiary();
 });
}
const bestiaryFilters=document.querySelector('#bestiaryFilters');
if(bestiaryFilters){
 bestiaryFilters.innerHTML=['All','Peoples','Creatures'].map(cat=>'<button type="button" class="pill'+(cat==='All'?' active':'')+'" data-bestiary-cat="'+cat+'">'+cat+'</button>').join('');
 bestiaryFilters.addEventListener('click',event=>{
  const button=event.target.closest('[data-bestiary-cat]');if(!button)return;
  bestiaryFilter=button.dataset.bestiaryCat;
  bestiaryFilters.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b===button));
  renderBestiary();
 });
 renderBestiary();
}

/* Universal discovery - search reflects spoiler visibility and links into the archive. */
const glossaryEntries=[
 ['The Fracture','A defining disruption of reality whose causes emerge across the trilogy.',false],
 ['Separation Era','The age of divided realities in Elf Blood.',false],
 ['Merger Era','A later period of change between the worlds.',false],
 ['Divine Creation','The shaping of worlds and life associated with Plu and Selena.',false],
 ['Druidic Magic','Magic rooted in deep connection with the living world.',false],
 ['Residual Essence','Power that remains after an extraordinary magical event.',false],
 ['Pocket Reality','A separated space connected with the Fracture.',true],
 ['Crystal Storage','Using crystals to hold unusual magical energies.',true],
 ['Reyla’s Ascension','A later transformation in Reyla’s connection to the world.',true]
];
function renderGlossary(){
 const root=document.querySelector('#glossaryGrid');if(!root)return;
 root.replaceChildren();
 glossaryEntries.filter(x=>spoiler||!x[2]).forEach(x=>{
  const card=document.createElement('article');card.className='glossary-card';
  const illustration=document.createElement('img');illustration.className='glossary-visual';illustration.loading='lazy';illustration.src=loreArtFor(['History',x[0]]);illustration.alt='Original Chronicles fantasy lore illustration';
  const title=document.createElement('h3');title.textContent=x[0];
  const p=document.createElement('p');p.textContent=x[1];
  card.append(illustration,title,p);root.append(card);
 });
}
renderGlossary();
const globalSearch=document.querySelector('#globalSearch'),globalResults=document.querySelector('#globalSearchResults'),globalStatus=document.querySelector('#globalSearchStatus'),globalFilters=document.querySelector('#globalSearchFilters');
let globalFilter='All';
function searchable(){
 const links={elf:'elf-blood.html',before:'the-world-before.html',goddess:'the-goddess-elf.html'};
 const entries=[
 ...books.map(b=>({type:'Books',title:b.title,description:b.desc,href:links[b.id]||'#books'})),
 ...chars.filter(ch=>(spoiler||!ch.spoiler)&&ch.id!=='hybrid').map(ch=>({type:'Characters',title:ch.name,description:ch.subtitle,href:'#characters',char:ch.id})),
 ...knownLocations.filter(loc=>spoiler||!['Everlangyrs','Teramek','Dark Veil Mountains','Breni’s Island Mystery','Plu’s Off-world Journeys'].includes(loc.name)).map(loc=>({type:'Locations',title:loc.name,description:loc.tag,href:'#locations',location:knownLocations.indexOf(loc)})),
 ...bestiaryEntries.map(b=>({type:'Creatures',title:b.name,description:b.category+' · '+b.summary,href:'#bestiary'})),
 ...lore.concat(spoiler?secrets:[]).filter(x=>x[1]!=='The Hybrid Official').map(x=>({type:'Lore',title:x[1],description:x[2],href:'#world'})),
 ...glossaryEntries.filter(x=>spoiler||!x[2]).map(x=>({type:'Lore',title:x[0],description:x[1],href:'#glossary'}))
 ];
 return entries;
}
function renderGlobalSearch(){
 if(!globalSearch||!globalResults)return;
 const term=globalSearch.value.toLocaleLowerCase().trim();
 globalResults.replaceChildren();
 if(!term){globalStatus.textContent='Start typing to explore the Chronicles.';return}
 const hits=searchable().filter(x=>(globalFilter==='All'||x.type===globalFilter)&&[x.title,x.description].join(' ').toLocaleLowerCase().includes(term)).slice(0,24);
 globalStatus.textContent=hits.length+' '+(hits.length===1?'result':'results')+(spoiler?' · Lore Explorer':' · New Reader');
 hits.forEach(hit=>{
  const link=document.createElement('a');link.className='global-result';link.href=hit.href;
  const type=document.createElement('small');type.textContent=hit.type;
  const title=document.createElement('strong');title.textContent=hit.title;
  const desc=document.createElement('span');desc.textContent=hit.description;link.append(type,title,desc);
  if(hit.char)link.dataset.resultChar=hit.char;
  if(Number.isInteger(hit.location))link.dataset.resultLocation=hit.location;
  globalResults.append(link);
 });
}
if(globalSearch){
 globalSearch.addEventListener('input',renderGlobalSearch);
 document.querySelector('#clearGlobalSearch')?.addEventListener('click',()=>{globalSearch.value='';globalSearch.focus();renderGlobalSearch()});
 globalFilters?.addEventListener('click',e=>{
  const button=e.target.closest('[data-global-filter]');if(!button)return;
  globalFilter=button.dataset.globalFilter;
  globalFilters.querySelectorAll('button').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});
  renderGlobalSearch();
 });
 globalResults.addEventListener('click',e=>{
  const link=e.target.closest('.global-result');if(!link)return;
  if(link.dataset.resultLocation)showLocation(Number(link.dataset.resultLocation));
  if(link.dataset.resultChar){document.querySelector('[data-character-filter="all"]')?.click();const id=link.dataset.resultChar;requestAnimationFrame(()=>document.querySelector('[data-char="'+id+'"]')?.click())}
 });
 renderGlobalSearch();
}


/* Unified official reference gallery: all portraits are sourced from the same
   character records used by profiles, the connection map and lightbox. */
const officialLineup=document.querySelector('#officialCastLineup');
if(officialLineup){
 const officialOrder=['plu','selena','breni','reyla','taylor','talula','ray'];
 officialLineup.replaceChildren();
 officialOrder.forEach(id=>{
  const person=chars.find(ch=>ch.id===id);
  if(!person||!person.image)return;
  const anchor=document.createElement('a');
  anchor.className='official-cast-face';
  anchor.href='#gallery';
  anchor.dataset.portrait=id;
  anchor.setAttribute('aria-label','See the official portrait of '+person.name);
  const image=document.createElement('img');
  image.src=person.image;
  image.alt='Official reference portrait of '+person.name;
  image.loading='lazy';
  image.onerror=()=>{if(person.fallback&&image.src.indexOf(person.fallback)<0){image.src=person.fallback}else{anchor.hidden=true}};
  const name=document.createElement('span');
  name.textContent=person.name;
  anchor.append(image,name);
  officialLineup.append(anchor);
 });
}
