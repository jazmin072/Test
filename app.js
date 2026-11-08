const books=[
{id:'elf',cover:'assets/compact/elf-blood.webp',title:'Elf Blood',type:'trilogy',label:'Book One · Main trilogy',color:'blue',url:'https://books2read.com/u/b61750',desc:'Taylor has no memory of the life before her hidden forest home. As a government investigation and strange magical disturbances draw separate lives together, the boundaries between realities begin to fail.',more:'Book One follows Taylor and Breni, Selena and Talula, and agent Ray Myers as a long-concealed mystery begins to unfold. The story ends with the Goddess Elf’s return.'},
{id:'before',cover:'assets/compact/the-world-before.webp',title:'The World Before',type:'trilogy',label:'Book Two · Main trilogy',color:'gold',url:'https://books2read.com/u/b61dg6',desc:'Before the Fracture, Plu and Selena shaped a young world of dragons, elves and ancient peoples. Choices made in those first ages would eventually threaten everything they created.',more:'Book Two returns to the primordial era to explore creation, the early peoples, the Ogre–Giant conflict, and the events leading to the Fracture.'},
{id:'goddess',cover:'assets/compact/the-goddess-elf.webp',title:'The Goddess Elf',type:'trilogy',label:'Book Three · Main trilogy',color:'rose',url:'https://books2read.com/u/mZA1dB',desc:'Old bonds and impossible responsibilities test the people who hold reality together.',more:'The final book in the original trilogy brings the intertwined destinies of the central characters to a new stage.'},
{id:'listening',cover:'assets/compact/the-listening-world.webp',title:'The Listening World',type:'companion',label:'POST-TRILOGY COMPANION · A Reyla story',color:'green',url:'https://books2read.com/u/bPWpQx',desc:'A reflective journey through communities, forests and the quiet language of a living world.',more:'Reyla journeys through communities and living landscapes two centuries after the main trilogy, seeking understanding rather than violence.'},
{id:'rain',cover:'assets/compact/dark-rain.webp',title:'Dark Rain',type:'companion',label:'POST-MAIN-STORY · A Breni story',color:'rain',url:'https://books2read.com/u/3ngxn5',desc:'When an attack at Greybridge threatens a fragile peace between rival clans, Breni investigates evidence implicating missing dwarves. The closer she looks, the more carefully staged the violence appears.',more:'Working with Iven, Breni uncovers a conspiracy involving captive people and old technology, while an unexpected protective gift begins to awaken.'},
{id:'wonders',cover:'assets/compact/small-wonders.webp',title:'Small Wonders',type:'companion',label:'Selena & Talula · Scheduled January 27, 2027',color:'rose',url:'https://books2read.com/u/38BoMZ',desc:'A tender portrait of daily life, growing trust and the small moments that make a family.',more:'An intimate story about Selena and Talula and the everyday love that binds them.'},
{id:'creatures',cover:'6171b117-c259-4ec7-84b0-61ced6a89a91.png',title:"Plu's Creatures",type:'companion',label:'Free website-exclusive book · 27 chapters',color:'gold',desc:'Read all 27 chapters of Plu’s guide to the peoples, creatures, crafts and histories of the Chronicles—free, exclusively on this website.',more:'Plu speaks directly to you throughout the guide. When she looks back on Taylor’s life in the chapter on elves, she tells that part in the third person.'},
{id:'plu',cover:'assets/compact/plu-side-story.webp',title:'PLU — A Goddess’s Side Story',type:'companion',label:'Plu companion · Scheduled May 29, 2027',color:'gold',url:'https://books2read.com/u/bMKj5v',desc:'A character-focused fantasy companion exploring Plu’s curiosity, humour, relationships and adventures beyond the great events.',more:'The ebook manuscript has been uploaded to Draft2Digital, with a scheduled release date of May 29, 2027. Check Books2Read for retailer availability and preorder options.'}];

const storefronts={
elf:[['All retailers · Books2Read',books[0].url],['Barnes & Noble','https://www.barnesandnoble.com/w/elf-blood-jonathan-m-reed/1151826925?ean=2940197076762'],['ThriftBooks','https://www.thriftbooks.com/w/elf-blood-the-chronicles-of-plu-and-selena_jonathan-m-reed/60835761/']],
before:[['All retailers · Books2Read',books[1].url],['Barnes & Noble','https://www.barnesandnoble.com/w/the-world-before-jonathan-m-reed/1151832194?ean=2940197269034'],['ThriftBooks','https://www.thriftbooks.com/w/the-world-before-the-chronicles-of-plu-and-selena_jonathan-m-reed/60834395/'],['Feltrinelli · eBook','https://www.lafeltrinelli.it/world-before-ebook-inglese-jonathan-m-reed/e/9798237360950']],
goddess:[['All retailers · Books2Read',books[2].url],['Barnes & Noble','https://www.barnesandnoble.com/w/the-goddess-elf-jonathan-m-reed/1151849785?ean=2940197154309']],
listening:[['All retailers · Books2Read',books[3].url],['Fishpond · paperback','https://www.fishpond.com.au/Books/listening-world-Jonathan-M-Reed/9798237084870'],['IBS · paperback','https://www.ibs.it/listening-world-libro-inglese-jonathan-m-reed/e/9798237084870']],
wonders:[['Books2Read · Retailers and preorder information',books.find(book=>book.id==='wonders').url]],
plu:[['Books2Read · Retailers and preorder information',books.find(book=>book.id==='plu').url]],
rain:[['All retailers · Books2Read',books[4].url],['ThriftBooks','https://www.thriftbooks.com/w/dark-rain-the-chronicles-of-plu-and-selena_jonathan-m-reed/60774735/'],['IBS · paperback','https://www.ibs.it/dark-rain-libro-inglese-jonathan-m-reed/e/9798237895520'],['Feltrinelli · paperback','https://www.lafeltrinelli.it/dark-rain-libro-inglese-jonathan-m-reed/e/9798237895520']]
};
const releaseInfo={
elf:{status:'Retailer listing available',date:'See retailer',desc:'View retailers and formats.'},
before:{status:'Retailer listing available',date:'See retailer',desc:'View retailers and formats.'},
goddess:{status:'Retailer listing available',date:'See retailer',desc:'Use the retailer link to check publication status, formats and availability.'},
listening:{status:'Retailer listing available',date:'See retailer',desc:'Reyla’s story, set two centuries after the trilogy.'},
rain:{status:'Retailer listing available',date:'See retailer',desc:'Breni’s post-trilogy mystery.'},
wonders:{status:'Ebook scheduled · Check Books2Read',date:'January 27, 2027',desc:'Selena and Talula’s companion story. See Books2Read for retailer and preorder availability.'},
creatures:{status:'Free website exclusive',date:'Read online now',desc:'The complete 27-chapter Plu’s Creatures reader is free on this website.'},
plu:{status:'Ebook scheduled · Check Books2Read',date:'May 29, 2027',desc:'A Plu-focused fantasy companion. Draft2Digital lists May 29, 2027 as the planned ebook release date.'}
};
const chars=[
{image:'assets/breni.webp',id:'breni',name:'Breni',symbol:'☽',group:'core',subtitle:'Vampire · Demi-god · Warrior',height:'6′9″',age:'Ageless',love:'Family and those she protects',overview:'A composed, fiercely loyal warrior whose imposing strength is matched by restraint. She builds a home with Taylor, protects Reyla, and takes responsibility for people in danger.',abilities:['Twin silver daggers','Exceptional strength and speed','Sunlight immunity','Immobilization'],books:['Elf Blood','The Goddess Elf','Dark Rain']},
{image:'assets/reyla.webp',id:'reyla',name:'Reyla',symbol:'❦',group:'core',subtitle:'The last true-born Druid',height:'5′6″',age:'Not confirmed',love:'The living world',overview:'A thoughtful listener who values people and nature equally. Her visual reference has dark natural curls, fine-framed glasses, a warm complexion, and distinctive personal markings; her in-world design combines those features with forest-green druid clothing, organic gold details, and living green magic. After finding family in the mansion, she becomes a mediator who seeks patient, lasting solutions instead of force.',abilities:['Connection to nature','Druidic perception','Mediation','World code affinity'],books:['Elf Blood','The Goddess Elf']},
{image:'assets/plu.webp',id:'plu',name:'Plu',symbol:'✧',group:'core',subtitle:'The Goddess Elf · Creator',height:'Approx. 5′0″ (true form)',age:'Ageless',love:'Selena',overview:'A playful, wise creator whose curiosity and affection are as defining as her power. Plu can adjust her appearance to reflect her own mood and to suit the people around her. She may choose a more familiar, gentle, or approachable look when she senses that it would help someone feel comfortable, while expressing herself differently when she feels playful, serious, confident, or at ease. These changes are a natural expression of her awareness and consideration for others—not a loss of power or a change in who she is. After she is reborn and returns, she deliberately chooses an appearance closer to Talula’s because she believes a familiar face will help the people around her feel more comfortable. Her long elven ears and galaxy-like eyes still hint at her extraordinary nature.',abilities:['Creation and worldbuilding','Reality shaping','Divine awareness','Self-augmentation'],books:['The Goddess Elf','Plu side story']},
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
const publicProfiles={
 breni:{subtitle:'Vampire · Warrior',overview:'Breni is a reserved and fiercely loyal vampire. She shares a home with Taylor and shows her affection through practical care and quiet companionship.',abilities:['Strength','Restraint','Protecting her household']},
 reyla:{subtitle:'A thoughtful listener',overview:'Reyla pays attention to what other people miss. She finds a home with Taylor and Breni and brings a patient curiosity to the people and places around her.',abilities:['Observation','Listening','Care for the natural world']},
 plu:{subtitle:'The Goddess Elf · Creator',overview:'Plu is a playful creator who loves Selena and takes an irrepressible interest in the people and creatures of their worlds. She can adjust her appearance to reflect her mood and to help the people around her feel more at ease, choosing how she presents herself with awareness of who is nearby and how comfortable they may feel.',abilities:['Creation','Curiosity','Playfulness']},
 selena:{subtitle:'Goddess · Co-creator · Mother',overview:'Selena helped create worlds with her wife, Plu. As Talula’s mother, she brings that same devotion to the routines and responsibilities of everyday life.',abilities:['Creation','Protecting her family','Practical care']},
 taylor:{subtitle:'Elf · Healer',overview:'Taylor has no memory of her past. She makes a home with Breni and tends to the living things around their forest mansion.',abilities:['Healing','Gardening','Care for her household']},
 talula:{subtitle:'Selena’s daughter',overview:'Talula is a bright, observant young woman who asks hard questions and shares a close bond with her mother, Selena.',abilities:['Quick learning','Curiosity','Observation']},
 ray:{subtitle:'Human agent · Sector 1-7',overview:'Ray follows unusual evidence with persistence and a sharp eye. Her work leads her to question the official account.',abilities:['Investigation','Aura-sight','Attention to detail']}
};
const profileFor=c=>spoiler?c:{...c,...publicProfiles[c.id]};
const bookPages={elf:'elf-blood.html',before:'the-world-before.html',goddess:'the-goddess-elf.html',listening:'the-listening-world.html',rain:'dark-rain.html',creatures:'plu-creatures.html'};
const lore=[
['Magic','Divine Creation','The ability to shape life and worlds.'],['Magic','Druidic Magic','Power rooted in connection and understanding.'],['Magic','Residual Essence','Traces of power that linger in materials and places.'],['Magic','Crystal Storage','Crystals capable of holding unusual magical energies.'],
['Places','New Londanais','An important urban center.'],['Places','Bozton','A city where the extraordinary meets everyday life.'],['Places','Everlangyrs','A region with complicated coexistence among peoples.'],['Places','Teramek','A distinctive territory in the wider world.'],['Places','Dark Veil Mountains','Remote mountains linked to dragon communities.'],['Places','The Minotaur Sanctuary','A place of refuge and tradition.'],
['History','The Government','An institution using specially empowered technology.'],['History','The Fracture','A defining disruption at the heart of the trilogy.'],['History','The Separation Era','An age marked by realities divided.'],['History','The Merger Era','A later age of changing relationships between worlds.']];
const secrets=[['History','The Hybrid Official','A mysterious government official whose story is not yet known.'],['Magic','Pocket Reality','A separate space resulting from the Fracture.'],['History',"Reyla's Ascension",'A transformation in her relationship with the world.']];
const timeline=[
['The First Ages','Creation and the earliest peoples','The first worlds take shape.',false],['Ancient Civilizations','Cultures and conflicts','Peoples forge alliances and inherit disputes.',false],['The Separation Era','Elf Blood','Divided reality forms the backdrop to the first book.',false],['The Hidden Age','The government’s official year: 2727','The government teaches 2727 as the true year. Plu reveals that this is not the world’s real age: the history in The World Before shows a world approaching its 4,000th year. The official date conceals how much older the world truly is.',true],['The Age of Change','The Goddess Elf','The trilogy approaches a turning point.',false],['The Fracture','A world-altering event','An attempt to seize magical essence changes history.',true],['The Far Future','Dark Rain','Breni confronts a mystery involving vampire clans.',true]];
const relations={
 "plu|selena":{label:"Wives · Co-creators · Enduring love",text:"Plu and Selena loved one another long before the worlds they created existed. They are wives and partners in both creation and everyday life: their teasing and tenderness are as important to them as their extraordinary powers. Selena knows Plu not simply as a goddess but as her beloved, and Plu finds joy in Selena's presence. Their commitment survives distances and crises that could have broken a lesser bond.",spoiler:"Even during separation, Selena holds on to Plu. When Plu returns, Selena feels her presence almost instantly and their reunion briefly stops the world around them."},
 "breni|taylor":{label:"Companions · A home built together",text:"For decades, Breni and Taylor share the mansion as their home. Breni is reserved and protective, while Taylor brings warmth, curiosity and healing to their routines. Their relationship is built through years of trust and familiarity, not just dramatic moments. When Reyla arrives, they both make room for someone new in the life they have carefully built.",spoiler:"Taylor's memories remain within Plu after the merge, but Breni still grieves the separate life and person she knew."},
 "breni|reyla":{label:"Chosen family · Protector and confidante",text:"Breni finds Reyla near a stream and brings her to the mansion. What begins as shelter grows into a chosen-family bond, with Breni offering security and Reyla giving the household another reason to open itself to the world. Their affection is seen in everyday care, shared decisions and Breni's determination to keep Reyla safe.",spoiler:"Even after Reyla's ascension, Breni misses their ordinary life together while their connection continues."},
 "reyla|taylor":{label:"Found family · Welcome and belonging",text:"Taylor welcomes Reyla into the mansion and treats her as a person who deserves a home, not a mystery to be solved. Their shared routines and quiet conversations allow Reyla to feel safe and Taylor to experience a fuller family life. Both value compassion and find comfort in the other's presence.",spoiler:"Taylor's experiences with Reyla remain part of the memories Plu carries after the merge."},
 "selena|talula":{label:"Mother and daughter · Everyday devotion",text:"Selena is a goddess, but with Talula she is first and foremost a mother. Their love grows through childhood questions, ordinary routines, laughter and difficult journeys. Selena listens as well as protects; Talula trusts her enough to ask hard questions. The bond between them is intimate because they know one another in the small moments, not merely through magic.",spoiler:"Talula's unusual resonance and the events surrounding the Fracture ultimately make their bond part of Plu's return."},
 "plu|talula":{label:"Family · A mystery reaching across lives",text:"Talula grows up in the world Selena protects, and Plu's absence remains important to their family story. Their connection is not an ordinary relationship between two people living side by side: it reaches into questions of identity, memory and the love that survives separation. The reason their paths are linked belongs to the trilogy's central mystery.",spoiler:"Taylor and Talula merge to bring Plu back, and Talula's experiences continue within her."},
 "selena|taylor":{label:"Family mystery · Love across separation",text:"Taylor lives without knowing the full truth of her beginning, yet her life remains deeply connected to Selena's choices. Selena's story helps explain the circumstances Taylor inherits; Taylor's compassion, healing and family life show what she becomes independently. Their connection has consequences neither can treat as merely abstract.",spoiler:"Selena split Taylor from herself during the Fracture, setting the separated lives and eventual reunion in motion."},
 "talula|taylor":{label:"Parallel lives · Shared destiny",text:"Taylor and Talula grow up in radically different circumstances, one with Breni at the mansion and the other with Selena. Each builds meaningful relationships and memories. Their bond matters because their lives are both real and treasured, even before they understand why they are connected.",spoiler:"Their meeting and merge bring the Goddess Elf back. Both sets of memories endure in Plu."},
 "plu|taylor":{label:"Identity · A life with meaning",text:"Taylor's missing memories and unusual gifts connect her to the mystery of Plu. Yet the decades she spends caring for Breni, Reyla and the living world are worthwhile in their own right. The answer to who she is does not erase the person she has been.",spoiler:"Taylor merges with Talula, returning Plu with Taylor's experiences and memories."},
 "plu|breni":{label:"Creator and chosen family · Mutual respect",text:"Plu's playful curiosity contrasts with Breni's quiet, deliberate strength. Breni is not impressed by power alone, and Plu sees more in her than a formidable warrior: she values Breni's loyalty, restraint and fierce care for others. They are linked by family and by a shared desire to protect it, even when they express that desire very differently.",spoiler:"Breni's connection to Taylor makes her bond with the returned Plu especially complex, while Breni's own origin reaches back to the Fracture."},
 "breni|selena":{label:"Family loyalty · Protective love",text:"Selena openly cherishes those close to her; Breni often expresses care by standing between danger and the people she loves. Their different temperaments mask a similar determination to keep their family safe. They understand the weight of responsibility even when they do not always show their feelings the same way.",spoiler:"Breni was created from Selena's rage and love during the Fracture."},
 "breni|talula":{label:"Extended family · Trust and protection",text:"Breni's formidable presence can be intimidating, but her actions show Talula that strength can be gentle and restrained. Talula's intelligence and curiosity bring a different energy to their shared family. Their bond grows through the people they love and the danger they want those people to survive.",spoiler:"Talula's part in Plu's return gives Breni's relationship with her a deeper significance."},
 "plu|reyla":{label:"Trust · Guardians of the living world",text:"Plu recognizes Reyla's willingness to listen to people and nature rather than impose force. Reyla offers a patient, grounded perspective to a creator who can see possibilities on a cosmic scale. Their mutual care for life makes them allies, even though they work on very different levels.",spoiler:"Plu peacefully preserves Ray and Reyla's identities and later helps Reyla remain connected through her transformation into the world's code."},
 "reyla|selena":{label:"Compassion · Different kinds of strength",text:"Selena and Reyla are both protective, but Selena's passion and divine presence contrast with Reyla's quiet patience. Reyla searches for peaceful resolutions; Selena understands the impulse to act decisively when loved ones are threatened. They recognize in each other a sincere concern for living people and the world they inhabit.",spoiler:"Reyla's ascension changes how she can help protect the world without severing her ties to her family."},
 "reyla|talula":{label:"Family · Curiosity and understanding",text:"Talula asks direct questions and learns quickly, while Reyla pays close attention to what others overlook. Their shared family brings them into the same extraordinary story. Both are learning what responsibility means in a world shaped by powerful magic, even when their paths are different.",spoiler:"Their roles in the separated realities become clearer during the events that return Plu."},
 "ray|reyla":{label:"Friends · Two distinct people",text:"Ray and Reyla are separate women with different strengths. Ray follows evidence stubbornly and asks questions the government would rather leave unanswered; Reyla understands the world through observation, care and connection. Their friendship matters precisely because they are individuals, not interchangeable halves of one person.",spoiler:"The government's soul-projection experiment forces Ray into Reyla's body. Plu later peacefully joins their souls while preserving both identities."},
 "ray|selena":{label:"Investigation · A challenge to certainty",text:"Ray's training teaches her to trust reports and procedure, but traces of Selena's existence challenge what the government says is possible. Selena is a person with deep family loyalties, not merely the inexplicable presence Ray is asked to investigate. The more Ray learns, the less simple her assignment becomes.",spoiler:"Ray's investigation draws her toward the hidden history of the Fracture and the truth about Selena."},
 "ray|plu":{label:"Searching for truth · Unexpected compassion",text:"Ray wants answers she can verify, while Plu understands the forces that lie behind the mystery Ray encounters. Their paths connect through the consequences of the divided world. The relationship is not a long-standing friendship; it becomes meaningful because the truth Ray uncovers has a personal cost.",spoiler:"Plu safeguards Ray and Reyla's distinct souls when the separated realities are resolved."},
 "ray|breni":{label:"Investigator and protector · Converging paths",text:"Ray approaches danger by pursuing clues and questioning authority. Breni approaches it by guarding a home and the people inside it. Their different instincts bring the same extraordinary events into focus from opposite directions, particularly when Reyla's fate is involved.",spoiler:"The government's actions eventually draw the mansion and its residents into the larger conflict Ray is investigating."},
 "ray|taylor":{label:"Mystery · Lives drawn together",text:"Ray searches for explanations that official accounts cannot provide, while Taylor is living with unexplained memories and powers of her own. Ray's urgency contrasts with Taylor's focus on the family and home she has made. Their connection is through the unfolding mystery, not an invented history of close friendship.",spoiler:"Taylor's role in the reunification of the realities is revealed when the Goddess Elf returns."},
 "ray|talula":{label:"Separate journeys · A shared turning point",text:"Ray investigates strange magical evidence through her government work. Talula experiences unusual magic through her life with Selena. They do not need to know one another intimately for their actions to matter to the same mystery: each approaches a changing world from a very different perspective.",spoiler:"Their separate threads ultimately contribute to the events that restore Plu."}
};
const $=s=>document.querySelector(s);
function retailerLinks(book){
 const list=storefronts[book.id]||[];
 return list.length?'<div class="storefront-links" aria-label="Retailers for '+book.title+'">'+list.map(([store,url])=>'<a href="'+url+'" rel="noopener noreferrer" target="_blank">'+store+' ↗</a>').join('')+'</div>':'<p class="retailer-empty">Retailers coming soon.</p>';
}
const readerAvailability={
 elf:{label:'Free ebook · Start here',note:'Book One · Released October 31, 2026 · Free ebook',button:'Read Elf Blood free'},
 before:{label:'Book Two · Retailers',note:'Continue the main trilogy · Retailer pricing and formats vary',button:'Explore Book Two'},
 goddess:{label:'Book Three · Retailers',note:'Complete the trilogy · Retailer pricing and formats vary',button:'Explore Book Three'},
 rain:{label:'Paid companion',note:'Breni’s post-trilogy story · Now a paid title',button:'Explore Dark Rain'},
 listening:{label:'Reyla companion',note:'A later-era companion story · Check retailer pricing',button:'Explore The Listening World'},
 creatures:{label:'Free · Website exclusive',note:'Full 27-chapter book · Read online, no registration required',button:'Read all 27 chapters free'}
};
function renderBookCard(book){
 const info=releaseInfo[book.id],page=bookPages[book.id],availability=readerAvailability[book.id];
 const category=book.type==='trilogy'?'MAIN TRILOGY':(book.id==='listening'?'POST-TRILOGY COMPANION · A REYLA STORY':(book.id==='rain'?'POST-TRILOGY COMPANION':'COMPANION STORY'));
 const art='<div class="book-art '+book.color+'">'+(book.cover?'<img class="cover-image" src="'+book.cover+'" alt="'+book.title+' cover" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.style.display=\'block\'">':'')+'<span class="cover-text" style="'+(book.cover?'display:none':'')+'">'+book.title+'</span></div>';
 const readerLink=book.url?'<a class="reader-direct-link" href="'+book.url+'" target="_blank" rel="noopener noreferrer">Find reading formats and retailers ↗</a><details class="book-retailers"><summary>More retailer options</summary>'+retailerLinks(book)+'</details>':'<p class="reader-direct-link">Website exclusive · No payment or account required</p>';
 const published=page?'<p class="book-availability"><strong>'+availability.label+'</strong><span>'+availability.note+'</span></p><a class="btn primary" href="'+page+'">'+availability.button+'</a>'+readerLink:null;
 const upcoming='<p class="release-short">'+(book.id==='plu'?'Scheduled ebook release · May 29, 2027':book.id==='wonders'?'Scheduled ebook release · January 27, 2027':'In progress · Release date to be announced')+'</p>'+(book.url?'<a class="btn primary" href="'+book.url+'" target="_blank" rel="noopener noreferrer">View Books2Read listing ↗</a>':'')+'<button class="text-link" data-book="'+book.id+'">Discover this story →</button>';
 return '<article class="book-card '+(book.type==='trilogy'?'main-volume':'companion-volume')+'">'+art+'<div class="book-meta"><small class="book-category">'+category+'</small><h3>'+book.title+'</h3><p>'+book.desc+'</p>'+(published||upcoming)+'</div></article>';
}
function renderBooks(filter='all'){
 const groups=[
  {id:'trilogy',title:'The original trilogy',hint:'Start here · Read Books One through Three',ids:['elf','before','goddess']},
  {id:'after',title:'Breni’s companion story',hint:'Set after the main trilogy · Contains later-era context',ids:['rain']},
  {id:'standalone',title:'Reyla’s companion story',hint:'Set two centuries after Book Three · A self-contained journey',ids:['listening']},
  {id:'other',title:'Other companions & stories ahead',hint:'Family moments, creature tales and future adventures',ids:['wonders','creatures','plu']}
 ];
 const eligible=book=>{
  if(filter==='all')return true;
  if(filter==='upcoming')return ['wonders','plu'].includes(book.id);
  return book.type===filter;
 };
 $('#bookGrid').innerHTML=groups.map(g=>{
  const list=g.ids.map(id=>books.find(b=>b.id===id)).filter(b=>b&&eligible(b));
  return list.length?'<div class="book-section"><div class="book-group-heading"><h3>'+g.title+'</h3><p>'+g.hint+'</p></div><div class="book-group-grid">'+list.map(renderBookCard).join('')+'</div></div>':'';
 }).join('');
}

function renderReleases(){
 $('#releaseGrid').innerHTML=books.filter(book=>!bookPages[book.id]).map(book=>{
  const info=releaseInfo[book.id];
  return '<article class="release-card"><img src="'+(book.cover||'assets/plu.webp')+'" alt="" loading="lazy"><div><small>'+info.status+'</small><h3>'+book.title+'</h3><p class="release-date">'+info.date+'</p><p>'+info.desc+'</p>'+(book.url?'<a class="btn primary" href="'+book.url+'" target="_blank" rel="noopener noreferrer">View Books2Read listing ↗</a>':'')+'<button class="text-link" data-book="'+book.id+'">Explore this upcoming story</button></div></article>';
 }).join('');
}
renderReleases();
renderBooks();
document.querySelectorAll('[data-book-filter]').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('[data-book-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderBooks(btn.dataset.bookFilter)
}));
/* Author-uploaded full-length individual portraits, not collage crops.
   No headshots or separate thumbnails for supporting cast. */
const supportingPortraits={
 saelis:'assets/supporting/saelis.png',
 torven:'assets/supporting/torven.png',
 vessa:'assets/supporting/vessa.png',
 iven:'assets/supporting/iven.png'
};
function characterArtMarkup(c){
 if(supportingPortraits[c.id]){
  return '<img class="supporting-full-figure" src="'+supportingPortraits[c.id]+'" alt="" loading="lazy">';
 }
 return (c.image?'<img src="'+c.image+'" alt="" loading="lazy" data-fallback="'+(c.fallback||'')+'" onerror="if(this.dataset.fallback){this.src=this.dataset.fallback;delete this.dataset.fallback}else{this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'}">':'')+
  '<span class="character-symbol" style="'+(c.image?'display:none':'')+'">'+c.symbol+'</span>';
}
// Short, spoiler-safe profile facts. Interpretive details are character flavour, not new story canon.
const characterTidbits={
 iven:[['People','Dwarf'],['Strength','Practical thinking'],['Adventure','Dark Rain']],
 saelis:[['People','Dark elves'],['Role','Commander'],['Priority','Her community']],
 torven:[['People','Goblins'],['Role','King'],['Priority','His people']],
 vessa:[['Features','Horns and wings'],['Personality','Outspoken'],['Known for','Hospitality']],

 hybrid:[['Position','Government official'],['Influence','Behind the scenes'],['Identity','A mystery']]
};
function profileFacts(c){
 if(c.group!=='core')return characterTidbits[c.id]||[];
 const bonds={breni:'Family and those she protects',reyla:'The living world',plu:'Selena',selena:'Plu',taylor:'Breni',talula:'Selena',ray:'Undisclosed'};
 return [['Height',c.height],['Age',c.age],['Important bonds',bonds[c.id]||'Undisclosed']];
}
function characterFactRows(c){
 return profileFacts(c).map(([label,value])=>'<div><span>'+label+'</span><strong>'+value+'</strong></div>').join('');
}
let activeProfile=null,profileTrigger=null;
function pluAppearanceMarkup(){
 const studies=[
  {n:1,url:'assets/plu-appearance-1.avif',title:'Appearance study 01 · Three outfits',alt:'Three full-body costume variations of Plu, featuring a forest gown, a celestial gown, and moonlit clothing',wide:true},
  {n:2,url:'assets/plu-alternate-2.avif',title:'Appearance 02 · Regal cosmic goddess',alt:'Full-body Plu in her darker regal cosmic goddess appearance with glowing violet eyes, a jeweled crown, and a purple celestial gown'},
  {n:3,url:'assets/plu-alternate-3.avif',title:'Appearance 03 · Blonde elven form',alt:'Full-body Plu with blonde braided hair, elf ears, and a purple and gold goddess gown'},
  {n:4,url:'assets/plu-alternate-4.avif',title:'Appearance 04 · Violet-eyed celestial form',alt:'Full-body Plu with dark violet hair, elven ears, ornate purple celestial clothing, and magical light in her hand'},
  {n:5,url:'assets/plu-appearance-2.avif',title:'Appearance study 05 · Three more looks',alt:'Three full-body illustrations of Plu in alternate goddess clothing, shown side by side',wide:true},
  {n:6,url:'assets/plu-appearance-3.avif',title:'Appearance study 06 · Three more looks',alt:'Full-body Plu appearance variations with changing goddess clothing and magical styling',wide:true},
  {n:7,url:'assets/plu-appearance-4.avif',title:'Appearance study 07 · Three more looks',alt:'Three alternate full-body outfits and appearances of Plu, the Goddess Elf',wide:true}
 ];
 const cards=studies.map(item=>'<figure class="'+(item.wide?'plu-appearance-triptych':'plu-appearance-portrait')+'"><a href="'+item.url+'" target="_blank" rel="noopener noreferrer" aria-label="Open '+item.title+' full size"><img src="'+item.url+'" loading="lazy" alt="'+item.alt+'"></a><figcaption>'+item.title+'</figcaption></figure>').join('');
 return '<section class="plu-appearance-section" id="plu-appearances" aria-labelledby="plu-appearance-title"><p class="character-group">PLU’S CHANGING APPEARANCE</p><h4 id="plu-appearance-title">The Many Faces of Plu</h4><p>Plu can change how she presents herself with her feelings and to put others at ease. These images show alternate appearances drawn from her book artwork. They represent one goddess choosing different faces and presentations, not separate characters or fixed transformations.</p><div class="plu-appearance-grid">'+cards+'</div></section>';
}
function showCharacterProfile(id,{focus=true,trigger=null}={}){
 const original=chars.find(c=>c.id===id);
 const detail=$('#characterDetail');
 if(!original||(!spoiler&&original.spoiler)){detail.hidden=true;activeProfile=null;return}
 const c=profileFor(original);
 activeProfile=id;
 if(trigger)profileTrigger=trigger;
 detail.hidden=false;
 detail.innerHTML='<button class="detail-close" aria-label="Close profile">×</button><h3 tabindex="-1">'+c.name+'</h3><p>'+c.subtitle+'</p><div class="split"><div><h4>Biography</h4><p>'+c.overview+'</p>'+(spoiler?'<p><strong>Appearances:</strong> '+c.books.join(', ')+'</p>':'')+'</div><div><h4>Key abilities & traits</h4><ul>'+c.abilities.map(a=>'<li>'+a+'</li>').join('')+'</ul><h4>Profile</h4><div class="stats">'+characterFactRows(c)+'</div></div>'+(id==='plu'?pluAppearanceMarkup():'')+'</div>';
 if(focus){detail.scrollIntoView({block:'start'});detail.querySelector('h3').focus({preventScroll:true})}
}
function renderCharacters(filter='all'){
 const visible=chars.filter(c=>(filter==='all'||c.group===filter)&&(!c.spoiler||spoiler));
 $('#characterGrid').innerHTML=visible.map(original=>{
  const c=profileFor(original);
  const isApprovedSupport=Boolean(supportingPortraits[c.id]);
  const heading='<p class="character-group">'+(c.group==='core'?'MAIN CAST':'SUPPORTING CAST')+'</p><h3>'+c.name+'</h3><p class="role">'+c.subtitle+'</p>';
  return '<article class="character-card '+(isApprovedSupport?'supporting-full-body-card':'')+'"><div class="character-art" '+(isApprovedSupport?'role="img" aria-label="Full-body illustration of '+c.name+'"':'aria-hidden="true"')+'>'+characterArtMarkup(c)+'</div><div class="character-info">'+heading+'<div class="stats">'+characterFactRows(c)+'</div><button class="btn" data-char="'+c.id+'">View full profile</button></div></article>';
 }).join('');
}
renderCharacters();
document.querySelectorAll('[data-character-filter]').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('[data-character-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
 $('#characterDetail').hidden=true;activeProfile=null;profileTrigger=null;renderCharacters(btn.dataset.characterFilter)
}));
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-book]');
 if(b){const x=books.find(v=>v.id===b.dataset.book);$('#bookDialogContent').innerHTML='<small>'+x.label+'</small><h2>'+x.title+'</h2><p>'+x.desc+'</p><p>'+x.more+'</p>'+(x.id==='plu'?'<p><strong>Scheduled ebook release: May 29, 2027</strong></p>':x.id==='wonders'?'<p><strong>Scheduled ebook release: January 27, 2027</strong></p>':'')+'<h3>Retailer listings</h3>'+retailerLinks(x);$('#bookDialog').showModal()}
 const cb=e.target.closest('[data-char]');
 if(cb)showCharacterProfile(cb.dataset.char,{trigger:cb});
 if(e.target.closest('.detail-close')){
  const id=activeProfile;
  $('#characterDetail').hidden=true;
  activeProfile=null;
  const target=profileTrigger?.isConnected?profileTrigger:document.querySelector('[data-char="'+id+'"]');
  target?.focus();
 }

});
$('.close-dialog').onclick=()=>$('#bookDialog').close();
$('#bookDialog').onclick=e=>{if(e.target===$('#bookDialog'))$('#bookDialog').close()};
$('#loreFilters').innerHTML=['All','Magic','Places','History'].map(c=>'<button class="pill '+(c==='All'?'active':'')+'" data-lore-cat="'+c+'">'+c+'</button>').join('');
/* World encyclopedia illustrations are limited to magic, places and history. */
// Approved magical emblems and regional heraldry. Artwork is displayed only
// after its image file exists in /assets/lore-approved; the original icon
// remains as a graceful fallback until the art is added to the repository.
const approvedLoreImages={
  "The Government": "government-faceless-officials.png",
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
  return '<article id="lore-'+x[1].toLowerCase().replace(/[^a-z0-9]+/g,'-')+'" class="lore-card"><img class="lore-card-visual" src="'+art+'" data-fallback-src="'+fallback+'" alt="Chronicles illustration for '+x[1]+'" loading="lazy"><div class="lore-card-body"><small>'+x[0]+'</small><h3>'+x[1]+'</h3><p>'+x[2]+'</p></div></article>';
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
renderTimeline();
const spoilerControls=[...document.querySelectorAll('[data-spoiler-toggle]')];
spoilerControls.forEach(control=>control.addEventListener('change',()=>{
 spoiler=control.checked;
 spoilerControls.forEach(toggle=>toggle.checked=spoiler);
 document.body.classList.toggle('lore-explorer',spoiler);
 $('#readerModeName').textContent=spoiler?'Lore Explorer · spoilers visible':'New Reader · spoilers protected';
 renderLore();renderTimeline();renderBestiary();
 renderCharacters(document.querySelector('[data-character-filter].active')?.dataset.characterFilter||'all');
 if(activeProfile)showCharacterProfile(activeProfile,{focus:false});
 updateRelation();renderGlossary();renderGlobalSearch();showLocation(currentLocationIndex);
 galleryHost.querySelectorAll('[data-gallery-person]').forEach(tile=>{
  tile.querySelector('small').textContent=profileFor(chars.find(c=>c.id===tile.dataset.galleryPerson)).subtitle;
 });
}));
const relationCast=['plu','selena','breni','taylor','reyla','talula','ray','hybrid'];
const names=Object.fromEntries(chars.map(ch=>[ch.id,ch.name]));
const activeRelationIds=()=>relationCast.filter(id=>id!=='hybrid');
const assetFor=id=>{const ch=chars.find(c=>c.id===id);return ch?.image||null};
function setOptions(select,choice){select.innerHTML=activeRelationIds().map(id=>'<option value="'+id+'">'+(names[id]||id)+'</option>').join('');if(activeRelationIds().includes(choice))select.value=choice}
let selected=[];
function renderRelationMap(){
 const first=$('#firstPerson').value,second=$('#secondPerson').value;
 const focused=$('#relationMap').contains(document.activeElement)?document.activeElement.dataset.person:null;
 $('#relationMap').innerHTML=activeRelationIds().map(id=>{
  const ch=profileFor(chars.find(c=>c.id===id)),pic=assetFor(id);
  return '<button type="button" class="relation-node '+(id===first||id===second?'selected':'')+' '+(id==='ray'?'ray-node':'')+'" data-person="'+id+'" aria-pressed="'+(id===first||id===second)+'" aria-label="Select '+ch.name+'"><span class="relation-photo">'+(pic?'<img src="'+pic+'" alt="" loading="lazy">':'<span class="relation-glyph">'+ch.symbol+'</span>')+'</span><span class="relation-name">'+ch.name+'</span><small>'+ch.subtitle+'</small></button>';
 }).join('');
 if(focused)$('#relationMap').querySelector('[data-person="'+focused+'"]')?.focus({preventScroll:true});
}
const relationshipMoments={
 'plu|selena':{plain:'Long before the worlds had names, Plu and Selena were already partners. Their teasing, everyday affection and shared responsibility as creators keep their marriage personal rather than distant or ceremonial.',deep:'When Plu returns, Selena recognises her presence almost instantly. Their reunion becomes a moment powerful enough to stop the world around them.'},
 'breni|taylor':{plain:'Before Reyla arrives, Breni and Taylor spend many decades together at the mansion. Taylor tends living things and Breni keeps their home safe; the quiet routine they share is as meaningful as any battle.',deep:'Their shared life changes after Taylor and Talula merge, but its memories remain part of Plu and of Breni.'},
 'selena|talula':{plain:'Talula notices that Selena does not age and asks questions as she grows. Selena responds as a mother who wants her daughter to understand and feel safe, even as extraordinary events draw closer.',deep:'Their closeness and the spark around Talula echo the forces behind the first Fracture.'},
 'breni|reyla':{plain:'Breni discovers Reyla near a stream in the seventy-ninth year of life at the mansion. Taking her home changes the household from a pair into a family.',deep:'When Reyla later joins the living world, Breni still misses their familiar daily life together.'},
 'plu|breni':{plain:'Breni meets extraordinary power with restraint rather than flattery. Plu recognises how much care lies beneath Breni’s guarded strength, while Breni comes to understand Plu through her actions toward their family.',deep:'Plu carries memories from Taylor’s years with Breni, giving their relationship an especially complicated intimacy after her return.'},
 'ray|reyla':{plain:'Ray investigates by following evidence while Reyla reads people and the living world with patience. Their differences make their friendship meaningful: they are distinct people whose paths matter to one another.',deep:'The soul-projection experiment joins their fates; Plu later brings their two souls together peacefully without erasing either identity.'},
 'reyla|taylor':{plain:'Taylor welcomes Reyla into the mansion rather than treating her as a stranger to fear. Everyday kindness and shared domestic life turn a safe place into a home.',deep:'Taylor’s experiences with Reyla survive as part of the memories Plu carries.'}
};
function relationshipMomentFor(a,b){return relationshipMoments[[a,b].sort().join('|')]||relationshipMoments[a+'|'+b]||relationshipMoments[b+'|'+a]}
const featuredPerspectives={
 'plu|selena':[['Plu','Selena is the person she can tease, trust and build worlds with. Their ordinary time together matters as much as their work as creators.'],['Selena','She loves the woman who makes her laugh and shares the responsibility of caring for what they created.']],
 'breni|plu':[['Breni','She judges Plu by how she cares for their family. Her respect comes from what Plu does with her power.'],['Plu','She values the care and restraint beneath Breni’s formidable strength.']],
 'selena|talula':[['Selena','Being Talula’s mother means listening to difficult questions and sharing the daily work of growing up.'],['Talula','Selena is the person she trusts with questions she cannot answer on her own.']]
};
function updateRelation(){
 const one=$('#firstPerson').value,two=$('#secondPerson').value,key=[one,two].sort().join('|');
 const perspectives=featuredPerspectives[key]||featuredPerspectives[[one,two].join('|')]||featuredPerspectives[[two,one].join('|')];
 const moment=relationshipMomentFor(one,two);
 $('#featuredConnections').querySelectorAll('[data-pair]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.pair.split('|').sort().join('|')===key)));
 const rel=relations[key]||relations[[one,two].join('|')]||relations[[two,one].join('|')];const result=$('#relationResult');
 result.innerHTML=one===two?'<strong>Select two different characters</strong><p>Choose another portrait or use the menus.</p>':rel?'<strong>'+names[one]+' & '+names[two]+'</strong><small class="relation-type">'+rel.label+'</small><p>'+rel.text+'</p>'+ (moment?'<div class="relationship-moment"><h4>A moment that defines them</h4><p>'+moment.plain+'</p>'+(spoiler&&moment.deep?'<p class="spoiler-detail"><strong>Beyond the mystery:</strong> '+moment.deep+'</p>':'')+'</div>':'')+(perspectives?'<dl class="bond-perspectives">'+perspectives.map(([name,copy])=>'<div><dt>'+name+'</dt><dd>'+copy+'</dd></div>').join('')+'</dl>':'')+(spoiler&&rel.spoiler?'<p class="spoiler-detail"><strong>Spoiler:</strong> '+rel.spoiler+'</p>':''):'<strong>'+names[one]+' & '+names[two]+'</strong><p>Both belong to the wider Chronicles, but the books do not establish a specific close personal connection between them.</p>';
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
$('#featuredConnections').addEventListener('click',event=>{
 const button=event.target.closest('[data-pair]');
 if(!button)return;
 const [first,second]=button.dataset.pair.split('|');
 $('#firstPerson').value=first;
 $('#secondPerson').value=second;
 selected=[];
 updateRelation();
 $('#relationResult').focus();
});
$('.menu-toggle').onclick=()=>{const nav=$('#nav');nav.classList.toggle('open');$('.menu-toggle').setAttribute('aria-expanded',nav.classList.contains('open'))};
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>{$('#nav').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false');document.querySelectorAll('#nav details').forEach(d=>d.open=false)});
document.querySelectorAll('#nav details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('#nav details').forEach(other=>{if(other!==d)other.open=false})}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('#nav details').forEach(d=>d.open=false);$('#nav').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false')}});
$('#year').textContent=new Date().getFullYear();

/* Interactive character gallery. Keep achievements spoiler-safe by default. */
const galleryCharacters=['plu','selena','breni','reyla','taylor','talula','ray'];
const galleryFacts={
 plu:{achievement:'Helped shape worlds and brought hope to a divided reality.',secret:'Returned as the Goddess Elf and helped restore the fractured world.',food:'Rosemary-roasted duck with blackberry glaze, buttery turnips and aged goat cheese'},
 selena:{achievement:'Protected Talula and helped her find the Minotaur sanctuary.',secret:'Held her family together through the Fracture and Plu’s return.',food:'Chargrilled lamb with spiced aubergine, saffron rice and crumbled sheep’s cheese'},
 breni:{achievement:'Built a home with Taylor and made room for someone who needed shelter.',secret:'Defended her family and later uncovered the conspiracy behind the vampire-clan conflict.',food:'Pepper-crusted venison with wild mushrooms, roasted root vegetables and sharp cheddar'},
 reyla:{achievement:'Found a home with Breni and Taylor and earned their trust.',secret:'Became part of the living world while preserving her bonds with loved ones.',food:'Herb-baked trout with lemon greens, creamy potatoes and fresh soft cheese'},
 taylor:{achievement:'Used her healing gift to care for living things and protect her family.',secret:'Her merging with Talula helped bring the Goddess Elf home.',food:'Roast chicken with garlic potatoes, glazed carrots and melted Gruyère'},
 talula:{achievement:'Travelled with Selena and reached the Minotaur sanctuary.',secret:'Joined with Taylor to bring Plu back as the Goddess Elf.',food:'Cheese-stuffed beef dumplings with pepper sauce and crisp cabbage'},
 ray:{achievement:'Followed unusual magical evidence despite the government’s official account.',secret:'Her investigation and soul-projection journey helped uncover the divided-realities mystery.',food:'Spicy beef-and-pepper skillet with melted provolone, onions and garlic-roasted potatoes'}
};
// Character-specific full-body artwork uploaded to GitHub.
// Each image shows the book outfit beside the beach outfit.
const galleryFullBody={
 plu:'assets/compact/portrait-plu.webp',
 selena:'assets/compact/portrait-selena.webp',
 breni:'assets/compact/portrait-breni.webp',
 reyla:'assets/compact/portrait-reyla.webp',
 taylor:'assets/compact/portrait-taylor.webp',
 talula:'assets/compact/portrait-talula.webp',
 ray:'assets/compact/portrait-ray.webp'
};
const galleryHost=document.querySelector('#portraitGallery');
const galleryModal=document.querySelector('#galleryDialog');
const galleryContent=document.querySelector('#galleryDialogContent');
let galleryReturnFocus=null,galleryOpeningProfile=false;
function openCharacterGallery(id){
 const original=chars.find(x=>x.id===id);
 if(!original||!galleryModal||!galleryContent)return;
 const person=profileFor(original);
 galleryReturnFocus=document.activeElement;
 const info=galleryFacts[id]||{};
 galleryContent.replaceChildren();
 const visual=document.createElement('div');
 visual.className='gallery-full-figure';
 const img=document.createElement('img');
 img.src=encodeURI(galleryFullBody[id]||person.image);
 img.alt='Full-body book and beach outfits of '+person.name;
 img.onerror=()=>{
  if(img.dataset.fallbackUsed)return;
  img.dataset.fallbackUsed='true';
  img.src=person.image;
 };
 visual.append(img);
 const bio=document.createElement('div');bio.className='gallery-details';
 const title=document.createElement('h3');title.textContent=person.name;
 const subtitle=document.createElement('p');subtitle.textContent=person.subtitle;
 const heading=document.createElement('h4');heading.textContent='Biggest achievement';
 const achievement=document.createElement('p');achievement.textContent=(spoiler&&info.secret)||info.achievement||'A story still unfolding.';
 const foodHeading=document.createElement('h4');foodHeading.textContent='Favourite food';
 const food=document.createElement('p');food.textContent=info.food||'A warm home-cooked meal';
 const link=document.createElement('button');link.type='button';link.className='btn';link.textContent='View full profile';
 link.addEventListener('click',()=>{
  galleryOpeningProfile=true;
  galleryModal.close();
  showCharacterProfile(id,{trigger:galleryReturnFocus});
 });
 bio.append(title,subtitle,heading,achievement,foodHeading,food,link);
 galleryContent.append(visual,bio);
 if(!galleryModal.open){galleryModal.showModal();galleryModal.querySelector('.close-gallery').focus()}
}
if(galleryHost&&galleryModal&&galleryContent){
 galleryHost.innerHTML=galleryCharacters.map(id=>{
  const person=profileFor(chars.find(x=>x.id===id));
  return '<button type="button" class="portrait-tile" data-gallery-person="'+id+'" aria-label="Open '+person.name+' character gallery"><img src="'+person.image+'" alt="Portrait of '+person.name+'" loading="lazy"><span class="portrait-label">'+person.name+'</span><small>'+person.subtitle+'</small></button>';
 }).join('');
 galleryHost.addEventListener('click',event=>{
  const tile=event.target.closest('[data-gallery-person]');
  if(tile)openCharacterGallery(tile.dataset.galleryPerson);
 });
 galleryModal.querySelector('.close-gallery').addEventListener('click',()=>galleryModal.close());
 galleryModal.addEventListener('click',e=>{if(e.target===galleryModal)galleryModal.close()});
 galleryModal.addEventListener('close',()=>{
  if(!galleryOpeningProfile)galleryReturnFocus?.focus({preventScroll:true});
  galleryOpeningProfile=false;
 });
}
const locationAnchor=name=>'atlas-'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-');
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
 const books=document.createElement('p');books.className='location-source';books.textContent=hiddenLocation?'Explore this location in Lore Explorer.':'Explore in: '+place.books;
 locationDetail.append(label,title,description,peopleTitle,people,landTitle,land,books);
}
if(locationList&&locationDetail){
 locationList.innerHTML=knownLocations.map((place,i)=>'<button id="'+locationAnchor(place.name)+'" type="button" data-location="'+i+'" aria-pressed="false">'+place.name+' <span>›</span></button>').join('');
 locationList.addEventListener('click',event=>{const button=event.target.closest('[data-location]');if(button)showLocation(Number(button.dataset.location))});
 if(atlasPins){
  atlasPins.innerHTML=knownLocations.map((place,i)=>place.x==null?'':'<button type="button" class="atlas-pin" style="left:'+place.x+'%;top:'+place.y+'%" data-atlas-index="'+i+'" aria-pressed="false" aria-label="Explore '+place.name+'"><span class="atlas-pin-dot" aria-hidden="true">✦</span><span class="atlas-pin-label">'+place.name+'</span></button>').join('');
  atlasPins.addEventListener('click',event=>{const button=event.target.closest('[data-atlas-index]');if(!button)return;showLocation(Number(button.dataset.atlasIndex));if(matchMedia('(max-width:760px)').matches)locationDetail.scrollIntoView({behavior:'smooth',block:'start'})});
 }
 atlasPortalButton?.addEventListener('click',()=>{showLocation(knownLocations.length-1);locationDetail.scrollIntoView({behavior:'smooth',block:'nearest'})});
 const selectLocationHash=()=>{
  const index=knownLocations.findIndex(place=>'#'+locationAnchor(place.name)===location.hash);
  if(index>=0)showLocation(index);
 };
 window.addEventListener('hashchange',selectLocationHash);
 showLocation(0);
 selectLocationHash();
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
 {name:'Chimeras',category:'Peoples',realm:'Plu’s Creatures · Maera’s story',summary:'Maera illustrates how a chimera’s particular features can affect work, balance and daily life. One person’s appearance does not define every chimera.'},
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
/* Every race and creature uses its own approved image file.
   This keeps the archive consistent and avoids sprite-sheet panel crops. */
function legacyRacePortrait(entry,portraits){
 // Prefer the already-uploaded species-specific illustrations over the
 // older generic humanoid portraits for these two creature entries.
 if(entry.name==='Cyclopes'){
  return '<div class="codex-portrait-gallery single"><figure class="codex-portrait-figure"><img class="codex-portrait-image" src="/cyclopes-approved.webp" alt="Single-eyed cyclops carrying a stone hammer in mountainous terrain" loading="lazy"><figcaption>Cyclops concept illustration</figcaption></figure></div>';
 }
 if(entry.name==='Dragons'){
  return '<div class="dragon-model-grid" role="group" aria-label="Four dragon concept illustrations">'+
   [0,1,2,3].map(n=>'<div class="dragon-model-cell dragon-model-'+n+'" role="img" aria-label="Dragon concept illustration '+(n+1)+'"></div>').join('')+
   '</div>';
 }
 if(!portraits.length){
  return '<div class="codex-portrait-gallery single"><p class="codex-art-pending">Artwork coming soon.</p></div>';
 }
 const safeName=escapeCreatureText(entry.name);
 return '<div class="codex-portrait-gallery '+(portraits.length===1?'single':'')+'">'+
  portraits.map(([file,label])=>'<figure class="codex-portrait-figure"><img class="codex-portrait-image" src="/assets/creatures/'+file+'" alt="Full-body '+escapeCreatureText(label.toLowerCase())+' portrait of '+safeName+'" loading="lazy"><figcaption>'+escapeCreatureText(label)+' reference</figcaption></figure>').join('')+
  '</div>';
}

/* The author's newer GitHub uploads are scenes showing each race in its
   environment. Keep the earlier full-body portrait gallery available
   without replacing it or changing any established book lore. */
const creatureAnchor=name=>'creature-'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-');
const raceSceneUploads={
  "Elves": "elves.png",
  "Druids": "druids.png",
  "Vampires": "vampires.png",
  "Minotaurs": "minotaurs.png",
  "Dark Elves": "dark-elves.png",
  "Goblins": "goblins.png",
  "Giants": "giants.png",
  "Ogres": "ogres.png",
  "Cyclopes": "cyclopes.png",
  "Succubi": "succubi.png",
  "Witches & Wiccans": "witches-wiccans.png",
  "Fairies": "fairies.png",
  "Werewolves": "werewolves.png",
  "Harpies": "harpies.png",
  "Nymphs": "nymphs.png",
  "Leprechauns": "leprechauns.png",
  "Dark Slimes": "dark-slimes.png",
  "Dwarves": "dwarves.avif",
  "Humans": "humans.avif",
  "Hybrids": "hybrids.avif",
  "Monsters": "monsters.avif"
};
function approvedRacePortrait(entry,portraits){
 const previousPortraits=legacyRacePortrait(entry,portraits);
 const sceneFile=raceSceneUploads[entry.name];
 if(!sceneFile)return previousPortraits;
 const raceName=escapeCreatureText(entry.name);
 const sceneAlt='Illustrated concept scene showing '+raceName+' in their world';
 return '<div class="race-scene-and-models">'+
  '<figure class="race-illustrated-scene"><img src="/assets/race-scenes/'+sceneFile+'" alt="'+sceneAlt+'" loading="lazy" decoding="async"><figcaption>'+raceName+' · concept artwork</figcaption></figure>'+
  '<details class="race-older-art"><summary>View additional character designs</summary>'+previousPortraits+'</details>'+
  '</div>';
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
  const bookReference=rows.length&&(spoiler||!bestiaryReveals.has(entry.name))?'<details class="creature-reference"><summary>Additional book-reference notes</summary><div class="race-stats">'+rows+'</div><p class="race-stats-basis">'+escapeCreatureText(stats.basis||'Book details take priority; visual interpretation is not additional canon.')+'</p></details>':'';
  return '<article id="'+creatureAnchor(entry.name)+'" class="bestiary-card codex-entry '+(raceSceneUploads[entry.name]?'race-scene-card ':'')+(entry.name==='Dragons'?'dragon-race-card':entry.name==='Cyclopes'?'cyclopes-race-card':'')+' '+(bestiaryVoice==='plu'?'plu-active':'government-active')+'"><div class="codex-portrait">'+portraitMarkup+'</div><div class="codex-info"><small>'+escapeCreatureText(entry.category)+' · '+escapeCreatureText(entry.realm)+'</small><h3>'+escapeCreatureText(entry.name)+'</h3>'+voiceMarkup+bookReference+'</div></article>';
 }).join('');
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
/* Each glossary entry illustrates a concrete narrative moment rather
   than reusing generic magic icons. Spoiler visibility remains unchanged. */
// Cropped cinematic panels from the author's earlier approved glossary artwork.
// The six regular entries use a single real-image sprite, not placeholder SVGs.
const approvedGlossaryPanelIndex={
 'The Fracture':0,
 'Separation Era':1,
 'Merger Era':2,
 'Divine Creation':3,
 'Druidic Magic':4,
 'Residual Essence':5
};
const glossarySceneImages={
  "The Fracture": "the-fracture.svg",
  "Separation Era": "separation-era.svg",
  "Merger Era": "merger-era.svg",
  "Divine Creation": "divine-creation.svg",
  "Druidic Magic": "druidic-magic.svg",
  "Residual Essence": "residual-essence.svg",
  "Pocket Reality": "pocket-reality.svg",
  "Crystal Storage": "crystal-storage.svg",
  "Reyla’s Ascension": "reylas-ascension.svg"
};
const glossarySceneAlt={
"The Fracture":"A witness watches the violet rupture split the sky over the city",
"Separation Era":"Taylor and Breni spend another evening isolated inside their forest mansion",
"Merger Era":"Two women stand on a bridge as the divided world rejoins",
"Divine Creation":"Plu and Selena shape a living landscape in the beginning",
"Druidic Magic":"A Druid touches a forest tree as living roots and leaves stir with magic",
"Residual Essence":"An investigator gathers glowing magical fragments from a damaged sanctuary",
"Pocket Reality":"A mansion stands enclosed inside a separated pocket of reality",
"Crystal Storage":"Government machinery holds stolen magical essence inside glowing crystals",
"Reyla’s Ascension":"Reyla joins a living tree as her form becomes connected to the world"
};
const glossaryEntries=[
 ['The Fracture','A defining disruption of reality whose causes emerge across the trilogy.',false],
 ['Separation Era','The age of divided realities in Elf Blood.',false],
 ['Merger Era','A later period of change between the worlds.',true],
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
  const panel=approvedGlossaryPanelIndex[x[0]];
  let illustration;
  if(Number.isInteger(panel)){
   const sceneFiles=['the-fracture.avif','separation-era.avif','merger-era.avif','divine-creation.avif','druidic-magic.avif','residual-essence.avif'];
   illustration=document.createElement('img');
   illustration.className='glossary-visual glossary-detailed-art';
   illustration.loading='lazy';
   illustration.src='assets/glossary-scenes/'+sceneFiles[panel];
   illustration.alt=(spoiler?glossarySceneAlt[x[0]]:undefined)||'An illustrated scene from the books';
   illustration.addEventListener('error',()=>{
    const fallback='assets/glossary-scenes/'+glossarySceneImages[x[0]];
    if(!illustration.src.endsWith('/'+fallback))illustration.src=fallback;
   });
  }else{
   illustration=document.createElement('img');
   illustration.className='glossary-visual';
   illustration.loading='lazy';
   const scene=glossarySceneImages[x[0]];
   illustration.src=scene?'assets/glossary-scenes/'+scene:loreArtFor(['History',x[0]]);
   illustration.alt=(spoiler?glossarySceneAlt[x[0]]:undefined)||'Illustrated moment from The Chronicles';
   illustration.addEventListener('error',()=>{
    const fallback=loreArtFor(['History',x[0]]);
    if(!illustration.src.endsWith('/'+fallback))illustration.src=fallback;
   });
  }
  const title=document.createElement('h3');title.textContent=x[0];
  const p=document.createElement('p');p.textContent=x[1];
  card.append(illustration,title,p);root.append(card);
 });
}
renderGlossary();
const globalSearch=document.querySelector('#globalSearch'),globalResults=document.querySelector('#globalSearchResults'),globalStatus=document.querySelector('#globalSearchStatus'),globalFilters=document.querySelector('#globalSearchFilters');
let globalFilter='All';
function searchable(){
 const links=bookPages;
 const entries=[
 ...books.map(b=>({type:'Books',title:b.title,description:b.desc,href:links[b.id]||'#books'})),
 ...chars.filter(ch=>(spoiler||!ch.spoiler)&&ch.id!=='hybrid').map(ch=>({type:'Characters',title:ch.name,description:profileFor(ch).subtitle,href:'#characters',char:ch.id})),
 ...knownLocations.map(loc=>({type:'Locations',title:loc.name,description:loc.tag,href:'#'+locationAnchor(loc.name),location:knownLocations.indexOf(loc)})),
 ...bestiaryEntries.map(b=>({type:'Creatures',title:b.name,description:spoiler?b.summary:b.category+' of the Chronicles',href:'#'+creatureAnchor(b.name)})),
 ...lore.concat(spoiler?secrets:[]).filter(x=>x[1]!=='The Hybrid Official').map(x=>({type:'Lore',title:x[1],description:x[2],href:'#world'})),
 ...glossaryEntries.filter(x=>spoiler||!x[2]).map(x=>({type:'Lore',title:x[0],description:x[1],href:'#glossary'}))
 ];
 return entries;
}
function searchRank(hit,term){
 const title=hit.title.toLocaleLowerCase();
 if(title===term)return hit.type==='Locations'?0:1;
 return title.startsWith(term)?2:title.includes(term)?3:4;
}
function renderGlobalSearch(){
 if(!globalSearch||!globalResults)return;
 const term=globalSearch.value.toLocaleLowerCase().trim();
 globalResults.replaceChildren();
 if(!term){globalStatus.textContent='Start typing to explore the Chronicles.';return}
 const hits=searchable().filter(x=>(globalFilter==='All'||x.type===globalFilter)&&[x.title,x.description].join(' ').toLocaleLowerCase().includes(term)).sort((a,b)=>searchRank(a,term)-searchRank(b,term)).slice(0,24);
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
  if(link.dataset.resultLocation!==undefined)showLocation(Number(link.dataset.resultLocation));
  if(link.hash.startsWith('#creature-')&&!document.querySelector(link.hash))document.querySelector('[data-bestiary-cat="All"]')?.click();
  if(link.dataset.resultChar){e.preventDefault();showCharacterProfile(link.dataset.resultChar,{trigger:link})}
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
  anchor.addEventListener('click',event=>{
   event.preventDefault();
   openCharacterGallery(id);
  });
  officialLineup.append(anchor);
 });
}
