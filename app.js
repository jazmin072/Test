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
['Peoples','Elves','An ancient people connected to magic, memory and history.'],['Peoples','Druids','Rare guardians connected to the living world.'],['Peoples','Vampires','A powerful people with varied clans and traditions.'],['Peoples','Minotaurs','A formidable civilization with protected sanctuaries.'],['Peoples','Dragons','Magnificent beings present since the earliest ages.'],['Peoples','Goblins','A distinct people with their own communities and political traditions.'],['Peoples','Dark Elves','A distinct people with a complicated history alongside neighbouring communities.'],['Peoples','Dwarves','Communities known for inventive craftsmanship.'],['Peoples','Giants','An enormous people whose scale and strength are visible in the official artwork.'],['Peoples','Ogres','A powerful, broad-built people depicted with heavy weapons and substantial physical strength.'],['Peoples','Cyclopes','A large, powerful people depicted with a single central eye and imposing build.'],['Peoples','Succubi','Winged beings depicted with horns, tails and a magical presence.'],['Peoples','Dark Slimes','Unusual amorphous creatures depicted as shadowy, tentacled magical lifeforms.'],
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
 return '<article class="book-card '+(book.type==='trilogy'?'main-volume':'companion-volume')+'"><div class="book-art '+book.color+'">'+(book.cover?'<img class="cover-image" src="'+book.cover+'" alt="'+book.title+' cover" loading="lazy">':'')+'<span class="cover-text" style="'+(book.cover?'display:none':'')+'">'+book.title+'</span></div><div class="book-meta"><small class="book-category">'+category+'</small><h3>'+book.title+'</h3><p>'+book.desc+'</p><p class="release-short"><strong>'+info.status+'</strong> · '+info.date+'</p>'+(book.type==='trilogy'?'<a class="text-link" href="'+({'elf':'elf-blood.html','before':'the-world-before.html','goddess':'the-goddess-elf.html'}[book.id])+'">Explore book page →</a>':'<button class="text-link" data-book="'+book.id+'">Discover this story →</button>')+'<h4>Available retailers</h4>'+retailerLinks(book)+'</div></article>';
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
$('#loreFilters').innerHTML=['All','Peoples','Magic','Places','History'].map(c=>'<button class="pill '+(c==='All'?'active':'')+'" data-lore-cat="'+c+'">'+c+'</button>').join('');
/* Approved 4x4 artwork sheet: each entry displays its own 256x384 full-body cell. */
const raceArtFiles={
 'Elves':'elves-female.webp','Druids':'druids-female.webp','Vampires':'vampires-female.webp','Minotaurs':'minotaurs-female.webp','Goblins':'goblins-female.webp',
 'Dark Elves':'dark-elves.webp','Dwarves':'dwarves.webp','Dragons':'dragons.webp','Giants':'giants.webp','Ogres':'ogres.webp','Cyclopes':'cyclopes.webp','Succubi':'succubi.webp',
 'Witches & Wiccans':'witches-wiccans.webp','Fairies':'fairies.webp','Werewolves':'werewolves.webp','Harpies':'harpies.webp','Nymphs':'nymphs.webp','Leprechauns':'leprechauns.webp',
 'Humans':'humans.webp','Hybrids':'hybrids.webp','Monsters':'monsters.webp','Dark Slimes':'dark-slimes.webp'
};
const racePortraitFiles={
 'Elves':['elves-male.webp','elves-female.webp'],'Druids':['druids-male.webp','druids-female.webp'],
 'Vampires':['vampires-male.webp','vampires-female.webp'],'Minotaurs':['minotaurs-male.webp','minotaurs-female.webp'],
 'Goblins':['goblins-male.webp','goblins-female.webp']
};
const visualProfiles={
'Elves':['Humanoid · tall and slender','Agility · magical perception'], 'Druids':['Humanoid · nature-attuned','Nature connection · mediation'],
'Vampires':['Humanoid · powerful build','Strength · speed · clan knowledge'],'Minotaurs':['Humanoid · large and horned','Physical strength · sanctuary traditions'],
'Dragons':['Great-scaled creature · winged','Flight · formidable physical power'],'Goblins':['Humanoid · compact and agile','Resourcefulness · community knowledge'],
'Dark Elves':['Humanoid · slender build','Agility · leadership · negotiation'],'Dwarves':['Humanoid · compact and sturdy','Craftsmanship · endurance'],
'Giants':['Humanoid · exceptionally large','Reach · physical strength'],'Ogres':['Humanoid · massive and broad-built','Physical strength · heavy-weapon use'],
'Cyclopes':['Humanoid · massive, single-eyed','Physical strength · powerful reach'],'Succubi':['Winged humanoid · horned','Flight · magical presence'],
'Dark Slimes':['Amorphous creature · variable size','Fluid movement · tentacle-like extensions']
};
function loreArtFor(entry){
 const title=entry[1];
 if(raceArtFiles[title])return 'assets/creatures/'+raceArtFiles[title];
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
 let entries=lore.concat(spoiler?secrets:[]).filter(x=>(cat==='All'||x[0]===cat)&&x.join(' ').toLowerCase().includes(q));
 $('#loreGrid').innerHTML=entries.map(x=>{
  const art=loreArtFor(x),profile=visualProfiles[x[1]];
  const visual=profile?'<div class="race-visual-profile"><small>ILLUSTRATION-BASED PROFILE · ESTIMATE</small><p><strong>Build:</strong> '+profile[0]+'</p><p><strong>Visible traits:</strong> '+profile[1]+'</p></div>':'';
  return '<article class="lore-card"><img class="lore-card-visual" src="'+art+'" alt="Full-body illustrated reference for '+x[1]+'" loading="lazy"><div class="lore-card-body"><small>'+x[0]+'</small><h3>'+x[1]+'</h3><p>'+x[2]+'</p>'+visual+'</div></article>';
 }).join('');
 $('#loreEmpty').hidden=entries.length!==0;
}
renderLore();
$('#loreSearch').oninput=renderLore;
document.querySelectorAll('[data-lore-cat]').forEach(b=>b.onclick=()=>{cat=b.dataset.loreCat;document.querySelectorAll('[data-lore-cat]').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderLore()});
function renderTimeline(){$('#timelineList').innerHTML=timeline.filter(t=>spoiler||!t[3]).map(t=>'<article class="time-point"><small>'+t[0]+'</small><h3>'+t[1]+'</h3><p>'+t[2]+'</p></article>').join('')}
renderTimeline();$('#spoilerToggle').onchange=e=>{spoiler=e.target.checked;document.body.classList.toggle('lore-explorer',spoiler);$('#readerModeName').textContent=spoiler?'Lore Explorer · spoilers visible':'New Reader · spoilers protected';renderLore();renderTimeline();renderCharacters(document.querySelector('[data-character-filter].active')?.dataset.characterFilter||'all');syncRelationControls();renderGlossary();renderGlobalSearch();if(typeof showLocation==='function')showLocation(currentLocationIndex)};
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
const raceSceneSettings={"Elves":"Ancient woodland · illustrative","Druids":"Living woodland · nature-connected community","Vampires":"Island vampire clans · Dark Rain","Minotaurs":"The Minotaur Sanctuary","Dark Elves":"Everlangyrs · dark elf community","Goblins":"Everlangyrs · goblin community","Dwarves":"Stone-built workshops · illustrative","Dragons":"Dark Veil Mountains · later dragon community","Giants":"Rugged highlands · illustrative","Ogres":"Rocky wilderness · illustrative","Cyclopes":"Stony highlands · illustrative","Succubi":"Plu’s Creatures · exact region unspecified","Dark Slimes":"Plu’s Creatures · exact region unspecified"};
/* Illustrated race concepts are visual interpretations, not an assertion of
   fixed clothing, physical traits or abilities. Replace with approved art files as available. */
const bestiaryDesign={
 'Elves':{skin:'#edd1b7',hair:'#bb4a68',back:'#593961',eye:'#dfa854',kind:'elf'},
 'Druids':{skin:'#d9bd9e',hair:'#5e9d63',back:'#325b45',eye:'#a5e5a7',kind:'druid'},
 'Vampires':{skin:'#b6afc2',hair:'#282037',back:'#48315d',eye:'#e56f83',kind:'vampire'},
 'Minotaurs':{skin:'#9e6a50',hair:'#55413a',back:'#68402e',eye:'#f8cd8d',kind:'minotaur'},
 'Dark Elves':{skin:'#8b8ab5',hair:'#22223d',back:'#2d2851',eye:'#b7c2f8',kind:'elf'},
 'Goblins':{skin:'#78a96c',hair:'#536442',back:'#365947',eye:'#e0d27b',kind:'goblin'},
 'Dwarves':{skin:'#bd8967',hair:'#533b3c',back:'#5c3c2a',eye:'#eec98a',kind:'dwarf'},
 'Dragons':{skin:'#4c728d',hair:'#a7d0df',back:'#2d455e',eye:'#f2c26f',kind:'dragon'},
 'Giants':{skin:'#b49d90',hair:'#d4c0b0',back:'#5d526e',eye:'#e5cfb7',kind:'giant'},
 'Ogres':{skin:'#8f648e',hair:'#d8709e',back:'#513451',eye:'#f1daac',kind:'ogre'},
 'Cyclopes':{skin:'#9779bd',hair:'#533b7e',back:'#403169',eye:'#f9c777',kind:'cyclops'},
 'Succubi':{skin:'#ae8fa4',hair:'#33273c',back:'#6a2855',eye:'#ee8ca1',kind:'succubus'},
 'Dark Slimes':{skin:'#543269',hair:'#9a64ca',back:'#1b1b43',eye:'#dbb0ff',kind:'slime'}
};
function bestiaryPortrait(name){
 const a=bestiaryDesign[name]||bestiaryDesign.Elves;
 const horns=['succubus','minotaur','ogre'].includes(a.kind)?'<path d="M83 94 Q30 45 58 24 Q81 31 107 82 M177 94 Q227 45 202 24 Q177 31 153 82" fill="'+a.hair+'" stroke="#e6c58b" stroke-width="3"/>':'';
 const ears=['elf','goblin','druid','vampire'].includes(a.kind)?'<path d="M93 139 44 96 62 157 97 160 M165 139 213 96 198 157 164 160" fill="'+a.skin+'" stroke="#5c4060" stroke-width="3"/>':'';
 const flora=a.kind==='druid'?'<g fill="#aee0a8" stroke="#377753" stroke-width="2"><path d="M71 84Q58 37 28 45 Q29 85 71 84"/><path d="M176 67Q197 19 233 42 Q225 77 176 67"/><circle cx="128" cy="47" r="12" fill="#f1d39f"/></g>':'';
 const scales=a.kind==='dragon'?'<path d="M65 173 42 148 70 141 50 116 79 113 M191 173 217 148 190 141 208 116 179 113" fill="#7094af" stroke="#d4bb8d" stroke-width="3"/>':'';
 const eye=a.kind==='cyclops'?'<ellipse cx="129" cy="144" rx="24" ry="15" fill="#f1e3d1" stroke="#3b2b40" stroke-width="3"/><circle cx="129" cy="144" r="10" fill="'+a.eye+'"/><circle cx="129" cy="144" r="4" fill="#171525"/>':'<path d="M90 143Q109 130 123 146Q109 152 90 143 M136 146Q153 130 172 143Q153 152 136 146" fill="#f1e3d1" stroke="#3a283b" stroke-width="3"/><circle cx="108" cy="143" r="5" fill="'+a.eye+'"/><circle cx="153" cy="143" r="5" fill="'+a.eye+'"/>';
 const fang=a.kind==='vampire'||a.kind==='succubus'?'<path d="M119 174 123 184 127 175 M137 174 141 184 145 175" fill="#fcf5ed"/>':'';
 const one=a.kind==='slime';
 const content=one?'<path d="M59 227Q28 194 49 150Q38 117 62 97Q70 57 108 70Q130 33 161 74Q210 71 213 120Q242 157 205 184Q223 223 182 233Z" fill="url(#body)" stroke="#d7a4ff" stroke-width="3"/><path d="M78 154Q97 130 111 153M146 153Q164 132 184 154" fill="none" stroke="#ecd7ff" stroke-width="8" stroke-linecap="round"/><path d="M113 193Q130 204 151 190" fill="none" stroke="#e7c8ff" stroke-width="4" stroke-linecap="round"/><path d="M78 102Q110 61 145 81" fill="none" stroke="#fff" stroke-width="6" opacity=".35"/>':
 '<path d="M51 264 Q51 214 92 209 L113 201 L147 201 L170 209 Q214 217 213 264Z" fill="'+a.hair+'" stroke="#bb9d6d" stroke-width="2"/>'+horns+ears+scales+
 '<path d="M97 188 Q108 205 108 221 Q130 233 150 221 Q151 205 163 188" fill="'+a.skin+'"/>'+
 '<path d="M80 115Q83 69 129 73Q182 72 180 115 L177 178Q164 206 129 209Q95 204 81 178Z" fill="'+a.skin+'" stroke="#78556c" stroke-width="3"/>'+
 '<path d="M77 129Q58 72 97 62Q128 27 166 62Q199 68 184 128 Q168 112 167 91Q138 105 102 92Q99 119 77 129Z" fill="'+a.hair+'"/>'+
 flora+eye+'<path d="M119 175Q128 181 139 175" stroke="#7e5361" stroke-width="3" fill="none" stroke-linecap="round"/>'+fang+
 (a.kind==='minotaur'?'<path d="M101 181Q127 201 156 181 Q142 218 127 216 Q114 216 101 181" fill="#87634c"/>':'')+
 (a.kind==='dragon'?'<path d="M131 64Q138 24 164 25L157 80" fill="#a4d8e5" stroke="#d1ba84" stroke-width="2"/>':'');
 const svg='<svg xmlns="http://www.w3.org/2000/svg" width="260" height="270" viewBox="0 0 260 270"><defs><radialGradient id="bg"><stop stop-color="'+a.back+'"/><stop offset="1" stop-color="#141126"/></radialGradient><linearGradient id="body" x2="0" y2="1"><stop stop-color="#ae79dc"/><stop offset="1" stop-color="#2b173f"/></linearGradient></defs><rect width="260" height="270" fill="url(#bg)"/><g opacity=".3" stroke="#cba56c"><circle cx="130" cy="135" r="113" fill="none"/><circle cx="130" cy="135" r="99" fill="none"/><path d="M10 135H250 M130 10V260"/></g><g>'+content+'</g><path d="M9 9H251V261H9Z" fill="none" stroke="#d8b877" stroke-width="3"/><path d="M22 22H42 M22 22V42 M238 22H218 M238 22V42 M22 248H42 M22 248V228 M238 248H218 M238 248V228" stroke="#f3cf8d" stroke-width="3" fill="none"/></svg>';
 return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);
}
const raceArtwork={"Elves":"elves","Druids":"druids","Vampires":"vampires","Minotaurs":"minotaurs","Dark Elves":"dark-elves","Goblins":"goblins","Dwarves":"dwarves","Dragons":"dragons","Giants":"giants","Ogres":"ogres","Cyclopes":"cyclopes","Succubi":"succubi","Dark Slimes":"dark-slimes"};
const bestiaryStats={
 'Elves':{traits:'Tall stature is described; an elf bride wears her hair braided with starlight lilies. Elves emerged from the old-growth forests and share an ancient language with the sky-dwellers.',basis:'Book references: The World Before and the wedding scene in Our Goddess, Book One. No standard height, lifespan or body type is specified.'},
 'Druids':{traits:'A Druid is described as broad-shouldered, with palms stained by the dark green ink of the forest floor. Their people are connected to the dirt, living nature and the manipulation of living blood.',basis:'Book reference: Our Goddess, Book One. No standard height, lifespan or universal clothing is specified.'},
 'Vampires':{traits:'The books establish full-blooded and half-blooded vampires, vampire clans and exceptionally slow visible aging in at least one ancient vampire. Individual appearances vary.',basis:'Use individual character descriptions from the novels; do not impose a universal skin tone, body type or costume.'},
 'Minotaurs':{traits:'Enormous, horned people with families, children, merchants, workers, metalworkers and gardens in their sanctuary. A young Minotaur is described with small horns, one notched near the tip.',role:'A complete community with a sanctuary and working city.',basis:'Book reference: The Goddess Elf / Book Three sanctuary scene. Do not depict them as mindless monsters.'},
 'Dark Elves':{traits:'A distinct people with their own community and history with neighbouring goblins in Everlangyrs.',role:'Community and political counterpart to the goblins.',basis:'The novels establish their people and history; avoid inventing universal anatomy or clothing.'},
 'Goblins':{traits:'A distinct community in Everlangyrs with leaders, history and negotiations with the dark elves.',role:'Community with its own leadership and political interests.',basis:'The novels establish their society; physical details should come from individual book descriptions.'},
 'Dwarves':{traits:'Dwarves are shown breaking through a mountain rock face and opening a massive stone hall to the sky.',role:'Stone-hall builders and established people of the world.',basis:'Book reference: Our Goddess, Book One. No universal height or body type is specified.'},
 'Dragons':{traits:'Ancient sky-dwellers who existed before the elves; the old language of the elves was shared with them. Later stories include dragon settlements in the Dark Veil Mountains.',role:'Ancient people with settlements in later eras.',basis:'Book references: The World Before and later dragon-settlement material. Use only the physical details explicitly described for a particular dragon.'},
 'Giants':{traits:'An ancient people whose early conflicts are part of the world’s history.',basis:'The books establish their place in the ancient history; standard height, lifespan and appearance are not specified here.'},
 'Ogres':{traits:'An ancient people whose conflict with giants belongs to the early history explored in The World Before.',basis:'Do not use generic ogre anatomy as if it were canon; use only details stated in the books.'},
 'Cyclopes':{traits:'A people included in the world’s ancient history and later gatherings.',basis:'The name alone is not sufficient to establish height, build or abilities; book-specific details take priority.'},
 'Succubi':{traits:'A type of being encountered in Plu’s companion adventures.',basis:'Keep physical traits and abilities limited to what the companion stories actually describe.'},
 'Witches & Wiccans':{traits:'The books show witches using copper instruments, glass lenses, measurement devices and experimental magic. Practices and appearance are not uniform.',role:'A large and varied population group; some factions conduct magical experimentation.',basis:'Use the technology and practices shown in the novels rather than a single stereotyped witch costume.'},
 'Fairies':{traits:'Fairies exist as part of everyday society in the Fracture-era notes. A single universal appearance is not established there.',basis:'Do not assume standard wings, height or clothing unless a specific passage describes them.'},
 'Werewolves':{traits:'The notes describe an amulet used to prevent unwanted transformations.',role:'The amulet is a practical part of transformation control.',basis:'The amulet is established; exact transformation details and physical forms should follow individual book passages.'},
 'Harpies':{traits:'Specific physical details are not established in the current bestiary notes.',role:'Associated with official positions in the World Government.',basis:'Keep the portrait female as requested, but do not invent a canonical anatomy.'},
 'Nymphs':{traits:'Tiny, translucent beings that move through mist and gather around people.',role:'Associated with official positions in the World Government in the Fracture-era notes.',basis:'Book description: tiny and translucent; retain those traits rather than making them ordinary winged fairies.'},
 'Leprechauns':{traits:'Specific physical details are not established in the current bestiary notes.',role:'Associated with security forces and the military.',basis:'Military role is established; avoid importing stereotyped folklore costumes.'},
 'Humans':{traits:'Human appearance varies; the novels include humans in multiple roles and historical settings.',role:'Identified as a protected species in the author’s Fracture-era notes.',basis:'Use the relevant era and character descriptions; no single costume or body type represents all humans.'},
 'Hybrids':{traits:'A broad class formed from two or more species or lineages. Appearance varies according to the lineages involved.',role:'The books describe hybrid captives, hunters and experimentation; hybrid status does not automatically make someone dangerous.',basis:'Do not create one standard hybrid body. Use the specific lineage combination described in each case.'},
 'Monsters':{traits:'A broad social label applied to beasts, animals and certain hybrids; it does not describe one biological species.',role:'The notes describe monsters as vilified, but the label alone does not mean an individual is hostile.',basis:'Portraits must represent a specific book creature, not an invented generic monster.'},
 'Dark Slimes':{traits:'Unusual dark slime beings encountered in Plu’s companion adventures.',basis:'Keep form and abilities tied to the actual companion-story descriptions; do not assume generic RPG slime powers.'}
};
let bestiaryFilter='All';
function renderBestiary(){
 const host=document.querySelector('#bestiaryGrid');if(!host)return;
 host.innerHTML=bestiaryEntries.filter(entry=>bestiaryFilter==='All'||entry.category===bestiaryFilter).map(entry=>{
  const stats=bestiaryStats[entry.name]||{};
  const rows=[['Typical height',stats.height],['Build',stats.build],['Lifespan',stats.lifespan],['Population',stats.population],['Strengths',stats.strength],['Visible traits',stats.traits],['Societal role',stats.role]].filter(row=>row[1]).map(row=>'<div class="race-stat"><strong>'+row[0]+'</strong><span>'+row[1]+'</span></div>').join('');
  const portraits=racePortraitFiles[entry.name]||[raceArtFiles[entry.name]].filter(Boolean);
  const portrait=portraits.length?'<div class="codex-portrait-gallery" aria-label="Full-body artwork for '+entry.name+'">'+portraits.map((file,index)=>'<figure><img class="codex-portrait-image" src="assets/creatures/'+file+'" alt="'+entry.name+(portraits.length===2?(index===0?' male':' female'):'')+' full-body portrait" loading="lazy">'+(portraits.length===2?'<figcaption>'+(index===0?'Male':'Female')+'</figcaption>':'')+'</figure>').join('')+'</div>':'<div class="codex-portrait codex-art-pending" role="img" aria-label="Portrait artwork not yet available for '+entry.name+'"><span>Portrait artwork pending</span><small>Book-specific design required</small></div>';
  return '<article class="bestiary-card codex-entry">'+portrait+'<div class="codex-info"><small>'+entry.category+' · '+entry.realm+'</small><h3>'+entry.name+'</h3>'+(raceSceneSettings[entry.name]?'<p class="race-setting">Scene: '+raceSceneSettings[entry.name]+'</p>':'')+'<p class="race-explanation">'+entry.summary+'</p><h4 class="race-stats-heading">Race & creature profile</h4><div class="race-stats">'+rows+'</div><p class="race-stats-basis">'+(stats.basis||'Illustrative estimate; book details take priority.')+'</p></div></article>';
 }).join('');
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
