const books=[
{id:'elf',cover:'assets/elf-blood.png',title:'Elf Blood',type:'trilogy',label:'Book One · Main trilogy',color:'blue',url:'https://www.barnesandnoble.com/w/elf-blood-jonathan-m-reed/1151826925?ean=2940197076762',desc:'An elf without her memories, an unusual household, and events that unsettle a carefully separated world.',more:'The opening novel introduces Taylor, Breni, Reyla and an unfolding mystery about reality, memory and power.'},
{id:'before',cover:'assets/the-world-before.png',title:'The World Before',type:'trilogy',label:'Book Two · Main trilogy',color:'gold',url:'https://www.barnesandnoble.com/w/the-world-before-jonathan-m-reed/1151832194?ean=2940197269034',desc:'Journey to an earlier age, when powerful creators shaped the first living worlds and ancient choices cast long shadows.',more:'The primordial era of the Chronicles explores creation, early civilizations and the roots of later conflicts.'},
{id:'goddess',cover:'assets/the-goddess-elf.png',title:'The Goddess Elf',type:'trilogy',label:'Book Three · Main trilogy',color:'rose',url:'https://www.barnesandnoble.com/w/the-goddess-elf-jonathan-m-reed/1151849785?ean=2940197154309',desc:'Old bonds and impossible responsibilities test the people who hold reality together.',more:'The final book in the original trilogy brings the intertwined destinies of the central characters to a new stage.'},
{id:'listening',cover:'assets/the-listening-world.png',title:'The Listening World',type:'companion',label:'POST-MAIN-STORY · A Reyla story',color:'green',url:'https://www.barnesandnoble.com/w/the-listening-world-jonathan-m-reed/1151755465?ean=2940197197375',desc:'A reflective journey through communities, forests and the quiet language of a living world.',more:'A Reyla-centered tale of listening, mediation and belonging among different peoples.'},
{id:'rain',cover:'assets/dark-rain.png',title:'Dark Rain',type:'companion',label:'POST-MAIN-STORY · A Breni story',color:'rain',url:'https://www.barnesandnoble.com/w/dark-rain-jonathan-m-reed/1151749248?ean=2940196121609',desc:'A rain-soaked island, two vampire clans and a mystery that threatens an uneasy peace.',more:'Breni enters a tense dispute between vampire clans while dangerous secrets surface.'},
{id:'wonders',cover:'assets/small-wonders.png',title:'Small Wonders',type:'companion',label:'Selena & Talula · Companion',color:'rose',desc:'A tender portrait of daily life, growing trust and the small moments that make a family.',more:'An intimate story about Selena and Talula and the everyday love that binds them.'},
{id:'creatures',title:"Plu's Creatures",type:'companion',label:'A Plu story · Companion',color:'gold',desc:'A playful collection of encounters with the remarkable creatures of the world.',more:'A lighter-hearted episodic journey across the strange and wonderful beings of the Chronicles.'},
{id:'plu',title:'PLU — A Goddess’s Side Story',type:'companion',label:'Final companion · In progress',color:'gold',desc:'A future side story centered on Plu, set after the other books.',more:'This story is still being written and will appear after the other books in the reading collection.'}];
const chars=[
{id:'breni',name:'Breni',symbol:'☽',subtitle:'Vampire · Demi-god · Warrior',height:'6′9″',age:'Ageless',love:'Talula',overview:'A formidable warrior with sharp instincts and fierce devotion to her chosen family.',abilities:['Twin silver daggers','Exceptional strength and speed','Sunlight immunity','Immobilization']},
{id:'reyla',name:'Reyla',symbol:'❦',subtitle:'The Last True-born Druid',height:'Not confirmed',age:'Not confirmed',love:'The World',overview:'Thoughtful and perceptive, Reyla listens before she acts and has a profound kinship with the natural world.',abilities:['Connection to nature','Attentive perception','Mediation','Druidic magic']},
{id:'plu',name:'Plu',symbol:'✧',subtitle:'The Goddess Elf · Creator',height:'Approx. 5′0″ (true form)',age:'Ageless',love:'Selena',overview:'Witty, curious and playful, Plu combines creative power with warmth. Her eyes resemble scattered galaxies.',abilities:['Creation and worldbuilding','Reality shaping','Divine perception','Self-augmentation']},
{id:'selena',name:'Selena',symbol:'✦',subtitle:'The Goddess · Co-creator',height:'Not confirmed',age:'Ageless',love:'Plu',overview:'Compassionate and resolute, Selena brings strength and patience to the worlds she cherishes.',abilities:['Creation magic','Protective magic','Life essence','Divine presence']}
];
let spoiler=false,cat='All';
const lore=[
['Peoples','Elves','An ancient people connected to magic, memory and history.'],['Peoples','Druids','Rare guardians connected to the living world.'],['Peoples','Vampires','A powerful people with varied clans and traditions.'],['Peoples','Minotaurs','A formidable civilization with protected sanctuaries.'],['Peoples','Dragons','Magnificent beings present since the earliest ages.'],['Peoples','Ogres & Giants','Enormous peoples with ancient disputes.'],['Peoples','Goblins & Dark Elves','Distinct peoples with complicated relationships.'],['Peoples','Dwarves','Communities known for their inventive craftsmanship.'],
['Magic','Divine Creation','The ability to shape life and worlds.'],['Magic','Druidic Magic','Power rooted in connection and understanding.'],['Magic','Residual Essence','Traces of power that linger in materials and places.'],['Magic','Crystal Storage','Crystals capable of holding unusual magical energies.'],
['Places','New Londanais','An important urban center.'],['Places','Bozton','A city where the extraordinary meets everyday life.'],['Places','Everlangyrs','A region with complicated coexistence among peoples.'],['Places','Teramek','A distinctive territory in the wider world.'],['Places','Dark Veil Mountains','Remote mountains linked to dragon communities.'],['Places','The Minotaur Sanctuary','A place of refuge and tradition.'],
['History','The Government','An institution using specially empowered technology.'],['History','The Fracture','A defining disruption at the heart of the trilogy.'],['History','The Separation Era','An age marked by realities divided.'],['History','The Merger Era','A later age of changing relationships between worlds.']];
const secrets=[['History','The Hybrid Official','An ancient seeker of residual divine power.'],['Magic','Pocket Reality','A separate space resulting from the Fracture.'],['History',"Reyla's Ascension",'A transformation in her relationship with the world.']];
const timeline=[
['The First Ages','Creation and the earliest peoples','The first worlds take shape.',false],['Ancient Civilizations','Cultures and conflicts','Peoples forge alliances and inherit disputes.',false],['The Separation Era','Elf Blood','Divided reality forms the backdrop to the first book.',false],['The Age of Change','The Goddess Elf','The trilogy approaches a turning point.',false],['The Fracture','A world-altering event','An attempt to seize magical essence changes history.',true],['A Living World',"Reyla's later journey",'Much later, Reyla travels among communities.',true],['The Far Future','Dark Rain','Breni confronts a mystery involving vampire clans.',true]];
const relations={
'breni|plu':'A chosen family connection and shared responsibility.',
'plu|selena':'Wives and co-creators whose love underlies the Chronicles.',
'breni|selena':'Family ties and mutual protection.',
'reyla|selena':'Connected through care for the living world.',
'plu|reyla':'A connection through the living world and creation.',
'breni|reyla':'Trusted companions across shared journeys.',
'selena|talula':'Mother and daughter united by devotion.',
'breni|taylor':'Longtime companions with a bond of trust.',
'plu|taylor':'Connected through the legacy of the Goddess Elf.',
'selena|taylor':'A deep bond whose origins are explored in the novels.',
'breni|talula':'A bond important to Breni’s personal story.',
'reyla|talula':'Connected through their extended family and shared world.'
};
const $=s=>document.querySelector(s);
function renderBooks(filter='all'){
 $('#bookGrid').innerHTML=books.filter(b=>filter==='all'||b.type===filter).map(b=>'<article class="book-card"><div class="book-art '+b.color+'">'+(b.cover?'<img class="cover-image" src="'+b.cover+'" alt="'+b.title+' cover" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'">':'')+'<span class="cover-text" style="'+(b.cover?'display:none':'')+'">'+b.title+'</span></div><div class="book-meta"><small>'+b.label+'</small><h3>'+b.title+'</h3><p>'+b.desc+'</p><button class="text-link" data-book="'+b.id+'">Discover this story →</button>'+(b.url?'<a class="btn purchase-link" target="_blank" rel="noopener noreferrer" href="'+b.url+'">Buy at Barnes & Noble ↗</a>':'<span class="purchase-pending">Purchase link coming soon</span>')+'</div></article>').join('');
}
renderBooks();
document.querySelectorAll('[data-book-filter]').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('[data-book-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderBooks(btn.dataset.bookFilter)
}));
$('#characterGrid').innerHTML=chars.map(c=>'<article class="character-card"><div class="character-art" aria-hidden="true">'+c.symbol+'</div><div class="character-info"><h3>'+c.name+'</h3><p class="role">'+c.subtitle+'</p><div class="stats"><div><span>Height</span><strong>'+c.height+'</strong></div><div><span>Age</span><strong>'+c.age+'</strong></div><div><span>True love</span><strong>'+c.love+'</strong></div></div><button class="btn" data-char="'+c.id+'">View profile</button></div></article>').join('');
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-book]');
 if(b){const x=books.find(v=>v.id===b.dataset.book);$('#bookDialogContent').innerHTML='<small>'+x.label+'</small><h2>'+x.title+'</h2><p>'+x.desc+'</p><p>'+x.more+'</p>'+(x.url?'<a class="btn primary" href="'+x.url+'" target="_blank" rel="noopener noreferrer">Buy at Barnes & Noble ↗</a>':'<p>Purchase link coming soon.</p>');$('#bookDialog').showModal()}
 const cb=e.target.closest('[data-char]');
 if(cb){const c=chars.find(v=>v.id===cb.dataset.char),d=$('#characterDetail');d.hidden=false;d.innerHTML='<button class="detail-close" aria-label="Close profile">×</button><h3>'+c.name+'</h3><p>'+c.subtitle+'</p><div class="split"><p>'+c.overview+'</p><div><h3>Key abilities</h3><ul>'+c.abilities.map(a=>'<li>'+a+'</li>').join('')+'</ul></div></div>';d.scrollIntoView({behavior:'smooth',block:'nearest'})}
 if(e.target.matches('.detail-close'))$('#characterDetail').hidden=true;
});
$('.close-dialog').onclick=()=>$('#bookDialog').close();
$('#bookDialog').onclick=e=>{if(e.target===$('#bookDialog'))$('#bookDialog').close()};
$('#loreFilters').innerHTML=['All','Peoples','Magic','Places','History'].map(c=>'<button class="pill '+(c==='All'?'active':'')+'" data-lore-cat="'+c+'">'+c+'</button>').join('');
function renderLore(){const q=$('#loreSearch').value.toLowerCase();let entries=lore.concat(spoiler?secrets:[]).filter(x=>(cat==='All'||x[0]===cat)&&x.join(' ').toLowerCase().includes(q));$('#loreGrid').innerHTML=entries.map(x=>'<article class="lore-card"><small>'+x[0]+'</small><h3>'+x[1]+'</h3><p>'+x[2]+'</p></article>').join('');$('#loreEmpty').hidden=entries.length!==0}
renderLore();
$('#loreSearch').oninput=renderLore;
document.querySelectorAll('[data-lore-cat]').forEach(b=>b.onclick=()=>{cat=b.dataset.loreCat;document.querySelectorAll('[data-lore-cat]').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderLore()});
function renderTimeline(){$('#timelineList').innerHTML=timeline.filter(t=>spoiler||!t[3]).map(t=>'<article class="time-point"><small>'+t[0]+'</small><h3>'+t[1]+'</h3><p>'+t[2]+'</p></article>').join('')}
renderTimeline();$('#spoilerToggle').onchange=e=>{spoiler=e.target.checked;renderLore();renderTimeline()};
const names={plu:'Plu',selena:'Selena',breni:'Breni',reyla:'Reyla',talula:'Talula',taylor:'Taylor'};
function updateRelation(){const a=$('#firstPerson').value,b=$('#secondPerson').value,key=[a,b].sort().join('|');$('#relationResult').innerHTML='<strong>'+names[a]+' & '+names[b]+'</strong><p>'+(a===b?'Choose two different characters.':relations[key]||'Their stories intersect in the wider world. Learn more in the novels.')+'</p>'}
document.querySelectorAll('#firstPerson,#secondPerson').forEach(x=>x.onchange=updateRelation);
let selected=[];
document.querySelectorAll('.relation-node').forEach(b=>b.onclick=()=>{selected.push(b.dataset.person);if(selected.length>2)selected=[b.dataset.person];$('#firstPerson').value=selected[0];if(selected[1])$('#secondPerson').value=selected[1];updateRelation()});
updateRelation();
$('.menu-toggle').onclick=()=>{const nav=$('#nav');nav.classList.toggle('open');$('.menu-toggle').setAttribute('aria-expanded',nav.classList.contains('open'))};
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>{$('#nav').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false')});
$('#year').textContent=new Date().getFullYear();