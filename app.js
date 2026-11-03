const books=[
{id:'elf',cover:'assets/elf-blood.png',title:'Elf Blood',type:'trilogy',label:'Book One · Main trilogy',color:'blue',url:'https://www.barnesandnoble.com/w/elf-blood-jonathan-m-reed/1151826925?ean=2940197076762',desc:'An elf without her memories, an unusual household, and events that unsettle a carefully separated world.',more:'The opening novel introduces Taylor, Breni, Reyla and an unfolding mystery about reality, memory and power.'},
{id:'before',cover:'assets/the-world-before.png',title:'The World Before',type:'trilogy',label:'Book Two · Main trilogy',color:'gold',url:'https://www.barnesandnoble.com/w/the-world-before-jonathan-m-reed/1151832194?ean=2940197269034',desc:'Journey to an earlier age, when powerful creators shaped the first living worlds and ancient choices cast long shadows.',more:'The primordial era of the Chronicles explores creation, early civilizations and the roots of later conflicts.'},
{id:'goddess',cover:'assets/the-goddess-elf.png',title:'The Goddess Elf',type:'trilogy',label:'Book Three · Main trilogy',color:'rose',url:'https://www.barnesandnoble.com/w/the-goddess-elf-jonathan-m-reed/1151849785?ean=2940197154309',desc:'Old bonds and impossible responsibilities test the people who hold reality together.',more:'The final book in the original trilogy brings the intertwined destinies of the central characters to a new stage.'},
{id:'listening',cover:'assets/the-listening-world.png',title:'The Listening World',type:'companion',label:'POST-MAIN-STORY · A Reyla story',color:'green',url:'https://www.barnesandnoble.com/w/the-listening-world-jonathan-m-reed/1151755465?ean=2940197197375',desc:'A reflective journey through communities, forests and the quiet language of a living world.',more:'A Reyla-centered tale of listening, mediation and belonging among different peoples.'},
{id:'rain',cover:'assets/dark-rain.png',title:'Dark Rain',type:'companion',label:'POST-MAIN-STORY · A Breni story',color:'rain',url:'https://www.barnesandnoble.com/w/dark-rain-jonathan-m-reed/1151749248?ean=2940196121609',desc:'A rain-soaked island, two vampire clans and a mystery that threatens an uneasy peace.',more:'Breni enters a tense dispute between vampire clans while dangerous secrets surface.'},
{id:'wonders',cover:'assets/small-wonders.png',title:'Small Wonders',type:'companion',label:'Selena & Talula · Companion',color:'rose',desc:'A tender portrait of daily life, growing trust and the small moments that make a family.',more:'An intimate story about Selena and Talula and the everyday love that binds them.'},
{id:'creatures',title:"Plu's Creatures",type:'companion',label:'A Plu story · Companion',color:'gold',desc:'A playful collection of encounters with the remarkable creatures of the world.',more:'A lighter-hearted episodic journey across the strange and wonderful beings of the Chronicles.'},
{id:'plu',cover:'assets/plu-side-story.png',title:'PLU — A Goddess’s Side Story',type:'companion',label:'Final companion · In progress',color:'gold',desc:'A future side story centered on Plu, set after the other books.',more:'This story is still being written and will appear after the other books in the reading collection.'}];
const chars=[
{image:'assets/breni.webp',id:'breni',name:'Breni',symbol:'☽',group:'core',subtitle:'Vampire · Demi-god · Warrior',height:'6′9″',age:'Ageless',love:'Family and those she protects',overview:'A composed, fiercely loyal warrior whose imposing strength is matched by restraint. She builds a home with Taylor, protects Reyla, and takes responsibility for people in danger.',abilities:['Twin silver daggers','Exceptional strength and speed','Sunlight immunity','Immobilization'],books:['Elf Blood','The Goddess Elf','Dark Rain']},
{image:'assets/reyla.webp',id:'reyla',name:'Reyla',symbol:'❦',group:'core',subtitle:'The last true-born Druid',height:'5′6″',age:'Not confirmed',love:'The living world',overview:'A thoughtful listener who values people and nature equally. Her visual reference has dark natural curls, fine-framed glasses, a warm complexion, and distinctive personal markings; her in-world design combines those features with forest-green druid clothing, organic gold details, and living green magic. After finding family in the mansion, she becomes a mediator who seeks patient, lasting solutions instead of force.',abilities:['Connection to nature','Druidic perception','Mediation','World code affinity'],books:['Elf Blood','The Goddess Elf','The Listening World']},
{image:'assets/plu.webp',id:'plu',name:'Plu',symbol:'✧',group:'core',subtitle:'The Goddess Elf · Creator',height:'Approx. 5′0″ (true form)',age:'Ageless',love:'Selena',overview:'A playful, wise creator whose curiosity and affection are as defining as her power. After she is reborn and returns, Plu deliberately chooses an appearance closer to Talula’s. She believes that a familiar, approachable face will make the people around her more comfortable than a majestic divine form. This is a personal choice, not a loss of power or a change in who she is. Her long elven ears and galaxy-like eyes still hint at her extraordinary nature.',abilities:['Creation and worldbuilding','Reality shaping','Divine awareness','Self-augmentation'],books:['The Goddess Elf','Plu side story']},
{image:'assets/selena.webp',id:'selena',name:'Selena',symbol:'✦',group:'core',subtitle:'Goddess · Co-creator · Mother',height:'5′9″',age:'Ageless',love:'Plu',overview:'A devoted goddess and mother who acts from compassion, responsibility, and fierce loyalty. Her visual design follows the official Selena references: a deeper warm complexion, distinctive blue-grey hair, and an elegant, powerful presence. She shares the work of creation with Plu and raises Talula with care.',abilities:['Creation and life essence','Protective magic','Emotional resonance','Divine presence'],books:['Elf Blood','The Goddess Elf','Small Wonders']},
{image:'assets/taylor-new.webp',fallback:'assets/taylor.webp',id:'taylor',name:'Taylor',symbol:'✺',group:'core',subtitle:'Elf · Healer · The mansion',height:'6′0″',age:'Decades in the mansion',love:'Breni',overview:'Taylor shares a resemblance to Plu but appears far less majestic: a relaxed, bohemian elf with long tousled blonde hair, fine rainbow-coloured star glimmers woven through it, prominent pointed ears, layered beads and crystal jewellery, and comfortable flowing woodland clothes. Her mysterious past and missing memories contrast with the ordinary life she builds with Breni and Reyla.',abilities:['Healing living things','Unusual magical intuition','Compassion and curiosity'],books:['Elf Blood'],spoiler:false},
{image:'assets/talula.webp',id:'talula',name:'Talula',symbol:'✶',group:'core',subtitle:'Selena’s daughter',height:'Not confirmed',age:'Grows up during Elf Blood',love:'Her family',overview:'Bright, observant, and deeply bonded to Selena, Talula grows up surrounded by extraordinary magic but treasures ordinary moments with her mother. Her distinct appearance includes dark hair streaked with red and asymmetrical ears: one pointed elven ear and one rounded human ear. She has no tattoos.',abilities:['Quick learning','Unusual magical resonance','Determination'],books:['Elf Blood','Small Wonders'],spoiler:false},
{image:'assets/ray.webp',id:'ray',name:'Ray',symbol:'◈',group:'core',subtitle:'Human agent · Sector 1-7',height:'Not confirmed',age:'Not confirmed',love:'Not confirmed',overview:'A resourceful government investigator whose rare green aura-sight draws her into the divided-realities mystery. Her distinct appearance includes a light complexion, tied-back dark hair, clear-framed glasses, a weathered Sector 1-7 jacket, and a single softly green-glowing eye; she has no surrounding magical aura. She and Reyla were separate friends before the soul-projection events.',abilities:['Investigation and field leadership','Rare aura sight','Resourcefulness'],books:['Elf Blood'],spoiler:false},
{id:'hybrid',name:'The Hybrid Official',symbol:'◆',group:'core',subtitle:'A mysterious government figure',height:'Unknown',age:'Unknown',love:'Unknown',overview:'An elusive official whose influence is felt through the government. Their identity, origins, motives, and true capabilities remain a mystery within the unfolding story.',abilities:['Unknown'],books:['The main trilogy'],spoiler:true},
{id:'iven',name:'Iven',symbol:'⚒',group:'supporting',subtitle:'Dwarf · Companion-story ally',height:'Not confirmed',age:'Not confirmed',love:'Not confirmed',overview:'A dwarf connected to Breni’s investigation and the fraught relationship between dwarven communities and vampire clans.',abilities:['Local knowledge','Investigation and practical problem-solving'],books:['Dark Rain']},
{id:'saelis',name:'Saelis',symbol:'♜',group:'supporting',subtitle:'Dark elf commander',height:'Not confirmed',age:'Not confirmed',love:'Her people',overview:'A dark elf leader involved in the long-running Everlangyrs dispute, where opposing communities must learn to share a future.',abilities:['Leadership','Negotiation','Knowledge of the valley’s history'],books:['The Listening World']},
{id:'torven',name:'Torven',symbol:'♛',group:'supporting',subtitle:'Goblin king',height:'Not confirmed',age:'Not confirmed',love:'His people',overview:'A goblin ruler representing his community in the Everlangyrs talks. His decisions matter to the future of the valley.',abilities:['Leadership','Political negotiation','Community representation'],books:['The Listening World']},
{id:'vessa',name:'Vessa',symbol:'❧',group:'supporting',subtitle:'A winged acquaintance',height:'Not confirmed',age:'Not confirmed',love:'Not confirmed',overview:'An outspoken, hospitable woman with curved horns, wings, and a tail whose meeting with Plu and Selena becomes an unexpectedly memorable encounter.',abilities:['Resourcefulness','Hospitality','Independent spirit'],books:['Plu side story']}
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
'plu|selena':{label:'Wives · Co-creators',text:'Plu and Selena were wives before the worlds existed. Together they create worlds and life, and their enduring love anchors the trilogy.'},
'breni|taylor':{label:'Devoted companions',text:'Breni and Taylor spend eighty years building a life together in the mansion. Breni protects Taylor, and their shared home later becomes a refuge for Reyla.'},
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
function renderBooks(filter='all'){
 $('#bookGrid').innerHTML=books.filter(b=>filter==='all'||b.type===filter).map(b=>'<article class="book-card"><div class="book-art '+b.color+'">'+(b.cover?'<img class="cover-image" src="'+b.cover+'" alt="'+b.title+' cover" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'">':'')+'<span class="cover-text" style="'+(b.cover?'display:none':'')+'">'+b.title+'</span></div><div class="book-meta"><small>'+b.label+'</small><h3>'+b.title+'</h3><p>'+b.desc+'</p><button class="text-link" data-book="'+b.id+'">Discover this story →</button>'+(b.url?'<a class="btn purchase-link" target="_blank" rel="noopener noreferrer" href="'+b.url+'">Buy at Barnes & Noble ↗</a>':'<span class="purchase-pending">Purchase link coming soon</span>')+'</div></article>').join('');
}
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
 if(b){const x=books.find(v=>v.id===b.dataset.book);$('#bookDialogContent').innerHTML='<small>'+x.label+'</small><h2>'+x.title+'</h2><p>'+x.desc+'</p><p>'+x.more+'</p>'+(x.url?'<a class="btn primary" href="'+x.url+'" target="_blank" rel="noopener noreferrer">Buy at Barnes & Noble ↗</a>':'<p>Purchase link coming soon.</p>');$('#bookDialog').showModal()}
 const cb=e.target.closest('[data-char]');
 if(cb){const c=chars.find(v=>v.id===cb.dataset.char),d=$('#characterDetail');d.hidden=false;d.innerHTML='<button class="detail-close" aria-label="Close profile">×</button><p class="eyebrow">'+(c.group==='core'?'MAIN CAST':'SUPPORTING CAST')+'</p><h3>'+c.name+'</h3><p>'+c.subtitle+'</p><div class="split"><div><h3>Biography</h3><p>'+c.overview+'</p><p><strong>Appearances:</strong> '+c.books.join(', ')+'</p></div><div><h3>Key abilities & traits</h3><ul>'+c.abilities.map(a=>'<li>'+a+'</li>').join('')+'</ul><h3>Profile</h3><p>Height: '+c.height+'<br>Age: '+c.age+'<br>Important bonds: '+c.love+'</p></div></div>';d.scrollIntoView({behavior:'smooth',block:'nearest'})}
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
renderTimeline();$('#spoilerToggle').onchange=e=>{spoiler=e.target.checked;renderLore();renderTimeline();renderCharacters(document.querySelector('[data-character-filter].active')?.dataset.characterFilter||'all');syncRelationControls()};
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
 const rel=relations[key];const result=$('#relationResult');
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
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>{$('#nav').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false')});
$('#year').textContent=new Date().getFullYear();