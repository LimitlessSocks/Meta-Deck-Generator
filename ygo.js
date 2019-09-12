const YGOPRODECK_API_URL = "https://db.ygoprodeck.com/api/v4/cardinfo.php";
const VOID_FUNCTION = (...discard) => { return; };
const EXTRA_DECK_SIZE = 15;
const SIDE_DECK_SIZE = 15;
const ARCHETYPE_LIST = ["ABC", "Abyss Actor", "Aesir", "Aether", "Alien", "Alligator", "Ally of Justice", "Altergeist", "Amazoness", "Amorphage", "Ancient Gear ", "Angel", "Anti", "Apoqliphort", "Aquaactress", "Arcana Force", "Archfiend", "Armed Dragon", "Aroma", "Artifact", "Assault Blackwing", "Assault Mode", "Atlantean", "B.E.S.", "Bamboo Sword", "Batteryman", "Battleguard", "Battlewasp", "Battlin' Boxer", "Black Luster Soldier", "Blackwing", "Blaze Accelerator", "Blue-Eyes", "Bonding", "Borrel", "Bounzer", "Bujin", "Burning Abyss", "Butterfly", "Celtic Guard", "Chaos", "Charmer", "Chemicritter", "Chronomaly", "Chrysalis", "Cipher", "Clear Wing", "Cloudian", "Constellar", "Crusadia", "Crystal Beast", "Crystron", "Cubic", "CXyz", "Cyber Dragon", "Cyberdark", "D/D", "Danger!", "Dark Contract", "Dark Magician", "Dark Scorpion", "Dark World", "Darklord", "Demise", "Deskbot", "Destiny HERO", "Destruction Sword", "Dice ", "Dinomist", "Dinowrestler", "Dododo", "Dracoslayer", "Dracoverlord", "Dragunity", "Duston", "Earthbound", "Edge Imp", "Elemental HERO", "Elemental Lord", "Elementsaber", "Empowered Warrior", "Endymion", "Evil Eye", "Evolsaur", "Evoltile", "Evolzar", "Exodia", "Eyes Restrict", "F.A.", "Fire Fist", "Fire Formation", "Fire King", "Fishborg", "Flamvell", "Flower Cardian", "Fluffal", "Fortune Lady", "Frightfur", "Frog", "Fur Hire", "Gadget", "Gagaga", "Galaxy-Eyes", "Gandora ", "Geargia", "Gem-", "Genex", "Ghostrick", "Gimmick Puppet", "Gishki", "Gladiator Beast", "Gogogo", "Gorgonic", "Gouki", "Gravekeeper's", "Graydle", "Greed", "Guardian", "Guardragon", "Harpie", "Hazy", "Heraldic", "Heraldry", "Heroic", "Hieratic", "Hi-Speedroid", "Hole", "Horus the Black Flame Dragon", "Ice Barrier", "Igknight", "Impcantation", "Infernity", "Infernoid", "Infestation", "Infinitrack", "Invoked", "Inzektor", "Iron Chain", "Jester", "Jinzo ", "Junk", "Jurrac", "Kaiju", "Karakuri", "Knightmare", "Koa'ki Meiru", "Koala", "Kozmo", "Krawler", "Kuriboh", "Laval", "Legendary Knight", "Lightsworn", "Lunalight", "Lyrilusc", "Machina", "Madolche", "Magical Musket", "Magician ", "Magnet Warrior", "Majespecter", "Majestic", "Maju", "Malefic", "Marincess", "Mask", "Masked HERO", "Mayakashi", "Mecha Phantom Beast", "Mekk-Knight", "Meklord", "Melodious", "Mermail", "Metalfoes", "Metaphys", "Mist Valley", "Monarch", "Morphtronic", "Naturia", "Nekroz", "Neo-Spacian", "Nephthys", "Nimble", "Ninja", "Ninjitsu Art", "Noble Knight", "Nordic", "Odd-Eyes", "of Gusto", "of Rituals", "Ojama", "Orcust", "Paleozoic ", "Parasite", "Parshath", "Penguin", "Performage", "Performapal", "Phantasm Spiral", "Phantom Knights", "Photon", "Power Tool", "Prank-Kids", "Predaplant", "Prediction Princess", "Priestess", "Prophecy", "PSY-Frame", "Qli", "Raidraptor", "Red-Eyes", "Reptilianne", "Resonator", "Ritual Beast", "Roid", "Rokket", "Rose Dragon", "Salamangreat", "Scrap", "Secret Six Samurai", "Shaddoll", "Shark ", "Shinobird", "Shiranui", "Silent Magician", "Silent Swordsman", "Six Samurai", "Skull Servant", "Sky Striker", "Slime", "Solemn", "Sphinx", "Spirit Message", "SPYRAL", "Star Seraph", "Steelswarm", "Stellarknight", "Subterror", "Super Defense Robot", "Super Quant", "Superheavy", "Sylvan", "Symphonic Warrior", "T.G.", "Tellarknight", "The Agent", "The Weather", "Thunder Dragon", "Tianwei", "Timelord", "Time Thief", "Tindangle", "Toon", "Triamid", "Trickstar", "U.A.", "Umbral Horror", "Utopia ", "Valkyrie", "Vampire", "Vendread", "Venom", "Volcanic", "Vylon", "Watt", "Wind-Up", "Windwitch", "Witchcrafter", "World Chalice", "World Legacy", "Worm", "X-Saber", "Yang Zing", "Yosenju", "Yubel", "Zefra", "Zoodiac"];

// MAIN DECK TYPES
const EFFECT_MONSTER = "Effect Monster";
const FLIP_EFFECT_MONSTER = "Flip Effect Monster";
const FLIP_TUNER_EFFECT_MONSTER = "Flip Tuner Effect Monster";
const GEMINI_MONSTER = "Gemini Monster";
const NORMAL_MONSTER = "Normal Monster";
const NORMAL_TUNER_MONSTER = "Normal Tuner Monster";
const PENDULUM_EFFECT_MONSTER = "Pendulum Effect Monster";
const PENDULUM_FLIP_EFFECT_MONSTER = "Pendulum Flip Effect Monster";
const PENDULUM_NORMAL_MONSTER = "Pendulum Normal Monster";
const PENDULUM_TUNER_EFFECT_MONSTER = "Pendulum Tuner Effect Monster";
const RITUAL_EFFECT_MONSTER = "Ritual Effect Monster";
const RITUAL_MONSTER = "Ritual Monster";
const SKILL_CARD = "Skill Card";
const SPELL_CARD = "Spell Card";
const SPIRIT_MONSTER = "Spirit Monster";
const TOON_MONSTER = "Toon Monster";
const TRAP_CARD = "Trap Card";
const TUNER_MONSTER = "Tuner Monster";
const UNION_EFFECT_MONSTER = "Union Effect Monster";
const UNION_TUNER_EFFECT_MONSTER = "Union Tuner Effect Monster";
// EXTRA DECK TYPES
const FUSION_MONSTER = "Fusion Monster";
const PENDULUM_EFFECT_FUSION_MONSTER = "Pendulum Effect Fusion Monster";
const LINK_MONSTER = "Link Monster";
const SYNCHRO_MONSTER = "Synchro Monster";
const SYNCHRO_PENDULUM_EFFECT_MONSTER = "Synchro Pendulum Effect Monster";
const SYNCHRO_TUNER_MONSTER = "Synchro Tuner Monster";
const XYZ_MONSTER = "XYZ Monster";
const XYZ_PENDULUM_EFFECT_MONSTER = "XYZ Pendulum Effect Monster";
const TOKEN_MONSTER = "Token";

const has = function arrayContainsElement (array, el) {
    return array.indexOf(el) !== -1;
}

const isOfType = function isOfType (types) {
    return function curriedIsOfType (card) {
        return has(types, card.type);
    };
}

const MAIN_DECK_TYPES = [
    EFFECT_MONSTER,
    FLIP_EFFECT_MONSTER,
    FLIP_TUNER_EFFECT_MONSTER,
    GEMINI_MONSTER,
    NORMAL_MONSTER,
    NORMAL_TUNER_MONSTER,
    PENDULUM_EFFECT_MONSTER,
    PENDULUM_FLIP_EFFECT_MONSTER,
    PENDULUM_NORMAL_MONSTER,
    PENDULUM_TUNER_EFFECT_MONSTER,
    RITUAL_EFFECT_MONSTER,
    RITUAL_MONSTER,
    SKILL_CARD,
    SPELL_CARD,
    SPIRIT_MONSTER,
    TOON_MONSTER,
    TRAP_CARD,
    TUNER_MONSTER,
    UNION_EFFECT_MONSTER,
    UNION_TUNER_EFFECT_MONSTER,
];

const isMainDeck = isOfType(MAIN_DECK_TYPES);

const RITUAL_TYPES = [
    RITUAL_EFFECT_MONSTER,
    RITUAL_MONSTER,
];

const isRitual = isOfType(RITUAL_TYPES);

const EXTRA_DECK_TYPES = [
    FUSION_MONSTER,
    PENDULUM_EFFECT_FUSION_MONSTER,
    LINK_MONSTER,
    SYNCHRO_MONSTER,
    SYNCHRO_PENDULUM_EFFECT_MONSTER,
    SYNCHRO_TUNER_MONSTER,
    XYZ_MONSTER,
    XYZ_PENDULUM_EFFECT_MONSTER,
];

const isExtraDeck = isOfType(EXTRA_DECK_TYPES);

const FUSION_TYPES = [
    FUSION_MONSTER,
    PENDULUM_EFFECT_FUSION_MONSTER,
];

const isFusion = isOfType(FUSION_TYPES);

const XYZ_TYPES = [
    XYZ_MONSTER,
    XYZ_PENDULUM_EFFECT_MONSTER,
];

const isXyz = isOfType(XYZ_TYPES);

const SYNCHRO_TYPES = [
    SYNCHRO_MONSTER,
    SYNCHRO_PENDULUM_EFFECT_MONSTER,
    SYNCHRO_TUNER_MONSTER,
];

const isSynchro = isOfType(SYNCHRO_TYPES);

const PENDULUM_TYPES = [
    PENDULUM_EFFECT_MONSTER,
    PENDULUM_FLIP_EFFECT_MONSTER,
    PENDULUM_NORMAL_MONSTER,
    PENDULUM_TUNER_EFFECT_MONSTER,
];

const isPendulum = isOfType(PENDULUM_TYPES);

const TUNER_TYPES = [
    FLIP_TUNER_EFFECT_MONSTER,
    NORMAL_TUNER_MONSTER,
    PENDULUM_TUNER_EFFECT_MONSTER,
    TUNER_MONSTER,
    UNION_TUNER_EFFECT_MONSTER,
    SYNCHRO_TUNER_MONSTER,
];

const isTuner = isOfType(TUNER_TYPES);

const FLIP_TYPES = [
    FLIP_TUNER_EFFECT_MONSTER,
    FLIP_EFFECT_MONSTER,
    PENDULUM_FLIP_EFFECT_MONSTER,
];

const isFlip = isOfType(FLIP_TYPES);

const NORMAL_TYPES = [
    NORMAL_TUNER_MONSTER,
    NORMAL_MONSTER,
    PENDULUM_NORMAL_MONSTER
];

const isNormal = isOfType(NORMAL_TYPES);

const isSpirit = isOfType([ SPIRIT_MONSTER ]);
const isLink = isOfType([ LINK_MONSTER ]);

const isSkill = isOfType([ SKILL_CARD ]);
const isSpell = isOfType([ SPELL_CARD ]);
const isTrap = isOfType([ TRAP_CARD ]);
const isToken = isOfType([ TOKEN_MONSTER ]);

const isMonster = function isCardTypeMonster (card) {
    return !isSkill(card) && !isSpell(card) && !isTrap(card);
}

const random = function randomIntegerBetweenInclusive (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const sample = function uniformRandomSampleFromArray (array, n) {
    let copy = [...array];
    let result = [];
    let repeat = n;
    while(repeat !== 0 && copy.length !== 0) {
        let randomIndex = random(0, copy.length - 1);
        let randomRemoved = copy.splice(randomIndex, 1)[0];
        result.push(randomRemoved);
        repeat--;
    }
    return result;
}

const randomFrom = function selectUniformRandomElementFromArray (array) {
    return sample(array, 1)[0];
}

const formatRequest = function formatObjectForUrlRequest (base, object) {
    let options = Object.entries(object)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
    return base + "?" + options;
}

const getCardsCache = {};
const getCards = async function getYGOPRODeckCardInformation (
    options = {}
) {
    let url = formatRequest(YGOPRODECK_API_URL, options);
    
    if(getCardsCache[url]) {
        return getCardsCache[url];
    }
    else {
        let response = await fetch(url);
        let data = await response.json();
        getCardsCache[url] = data[0];
        return getCardsCache[url];
    }
}

const countAllowed = function getAllowedAmountOfCard (card) {
    switch(card.ban_tcg) {
        case "Semi-Limited":
            return 2;
        
        case "Limited":
            return 1;
            
        case "Banned":
            return 0;
            
        default:
            return 3;
    }
}

const repeatAllowed = function tileRepeatByAllowed (list, result = []) {
    let iterate = list;
    if(!iterate.forEach) iterate = [iterate];
    iterate.forEach(card => {
        let count = countAllowed(card);
        for(let i = 0; i < count; i++) {
            result.push(card);
        }
    });
    return result;
}

const getIds = function getIdsOfCardList (list) {
    return list.map(e => e.id);
}

const compileDeck = function compileDeckToYGOPro (main, extra, side) {
    let lines = [
        "#created by LimitlessSocks's program",
        "#main",
        ...getIds(main),
        "#extra",
        ...getIds(extra),
        "!side",
        ...getIds(side),
    ];
    return lines.join("\n");
}

// [...new Set(allCards.filter(isMonster).filter(e=>parseInt(e.atk)+parseInt(e.def)==0).map(e=>e.name))].sort().join`
// `

// https://stackoverflow.com/a/30832210/4119004
const download = function promptSaveFile (data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

const onAnyChange = function addEventListenersChangeAndInput (el, cb) {
    el.addEventListener("change", cb);
    el.addEventListener("input", cb);
}

class SliderValue {
    constructor(tr) {
        this.onChanges = [];
        this.id = tr.id;
        this.count = tr.querySelector(".count input[type=number]");
        this.range = tr.querySelector(".range input[type=range]");
        this.max = this.range.max;
        this.min = this.range.min;
        
        this.updateCount();
        onAnyChange(this.range, () => this.updateCount());
        onAnyChange(this.count, () => this.updateRange());
    }
    
    listenForChange(fn) {
        fn(this.value);
        this.onChanges.unshift(fn);
    }
    
    set max(v) {
        if(this.value > v) {
            this.value = v;
        }
        this.count.max = this.range.max = v;
    }
    
    get max() {
        return parseInt(this.range.max, 10);
    }
    
    set min(v) {
        this.count.min = this.range.min = v;
        if(this.value < v) {
            this.value = v;
        }
    }
    
    get min() {
        return parseInt(this.range.min, 10);
    }
    
    set value(v) {
        if(v < this.min) {
            v = this.min;
        }
        if(v > this.max) {
            v = this.max;
        }
        this.count.value = this.range.value = v;
        this.callOnChanges();
    }
    
    get value() {
        return parseInt(this.range.value, 10);
    }
    
    callOnChanges() {
        this.onChanges.forEach(fn => fn(this.value));
    }
    
    updateCount() {
        this.value = this.range.value;
        this.callOnChanges();
    }
    
    updateRange() {
        this.value = this.count.value;
        this.callOnChanges();
    }
}

const clearChildren = function removeAllChildrenFromNode (node) {
    while(node.lastChild) {
        node.removeChild(node.lastChild);
    }
}

const subtitle = function formatSubtitleOfCard (card) {
    let types = [card.race];
    
    if(isPendulum(card)) {
        types.push("Pendulum");
    }
    
    if(isXyz(card)) {
        types.push("Xyz");
    }
    if(isFusion(card)) {
        types.push("Fusion");
    }
    if(isSynchro(card)) {
        types.push("Synchro");
    }
    if(isRitual(card)) {
        types.push("Ritual");
    }
    
    if(isTuner(card)) {
        types.push("Tuner");
    }
    if(isFlip(card)) {
        types.push("Flip");
    }
    if(isSpirit(card)) {
        types.push("Spirit");
    }
    if(isNormal(card)) {
        types.push("Normal");
    }
    else if(isSkill(card)) {
        types.push("Skill");
    }
    else if(isToken(card)) {
        types.push("Token");
    }
    else {
        types.push("Effect");
    }
    return "[" + types.join("/") + "]";
}

const levelOf = function levelRankOrLinkOfCard (card) {
    let noun = "Level ";
    let amount = card.level;
    if(isXyz(card)) {
        noun = "Rank ";
        amount = card.level;
    }
    else if(isLink(card)) {
        noun = "Link-";
        amount = card.linkval;
    }
    return noun + amount;
}

const atkDef = function attackDefenseOfCard (card) {
    let values = [];
    if(card.atk) {
        values.push(`ATK/${card.atk}`);
    }
    if(card.def) {
        values.push(`DEF/${card.def}`);
    }
    return values.join(" ");
}

const describe = function formatHumanReadableCardDescription (card) {
    let lines = [];
    
    let title = `"${card.name}" (${card.id})`;
    lines.push(title);
    
    let byline;
    if(isSpell(card) || isTrap(card)) {
        let signifier = card.type.split(" ")[0].toUpperCase();
        byline = signifier;
        if(card.race) {
            byline += ` (${card.race})`;
        }
    }
    else {
        byline = subtitle(card);
    }
    lines.push(byline);
    
    if(isMonster(card)) {
        lines.push([
            card.attribute,
            levelOf(card),
            atkDef(card),
        ].join(" "));
    }
    
    lines.push(card.desc);
    
    return lines.join("\n");
}


window.addEventListener("load", function () {
    
    let downloadButton = document.getElementById("download");
    let filenameField = document.getElementById("filename");
    let randomize = document.getElementById("randomize");
    let sliderValues = {};
    
    [...document.querySelectorAll("tr.datarow")]
        .forEach((tr) => {
            sliderValues[tr.id] = new SliderValue(tr);
        });
    
    let decksize = sliderValues["decksize"];
    let generics = sliderValues["generics"];
    let archetypes = sliderValues["archetypes"];
    
    //decksize.listenForChange(function (newValue) {
    //    generics.max = newValue;
    //});
    
    let generate = document.getElementById("generate");
    let output = document.getElementById("output");
    let notes = document.getElementById("notes");
    let randomcard = document.getElementById("randomcard");
    
    randomcard.addEventListener("click", async function () {
        let allCards = await getCards();
        
        let card = randomFrom(allCards);
        
        console.log(card);
        
        clearChildren(notes);
        
        let img = document.createElement("img");
        img.src = card.image_url;
        img.width = "210";
        img.height = "307";
        img.title = card.name;
        notes.appendChild(img);
        img.style.float = "left";
        img.style.padding = "0px 10px 10px 10px";
        
        let desc = document.createElement("pre");
        desc.style.whiteSpace = "pre-wrap";
        
        let content = describe(card);
        
        desc.appendChild(document.createTextNode(content));
        notes.append(desc);
    });
    
    let updateDownloadButton = function () {
        downloadButton.disabled = output.value === "";
    };
    
    updateDownloadButton();
    
    onAnyChange(output, updateDownloadButton);
    
    downloadButton.addEventListener("click", function () {
        download(output.value, filenameField.value + ".ydk", "text");
    });
    
    randomize.addEventListener("click", function (ev) {
        Object.values(sliderValues).forEach((sv) => {
            let newValue = random(
                sv.min,
                sv.max
            );
            sv.value = newValue;
        });
    });
    
    let updateNotes = function (notices) {
        clearChildren(notes);
        let ul = document.createElement("ul");
        
        // append new children
        notices.forEach((notice) => {
            let li = document.createElement("li");
            let text = document.createTextNode(notice);
            li.appendChild(text);
            ul.appendChild(li);
        });
        
        notes.appendChild(ul);
    };
    
    generate.addEventListener("click", async function (ev) {
        let notices = [];
        
        let allCards = await getCards();
        
        let size = decksize.value;
        let percentGeneric = generics.value / 100;
        let archetypeCount = archetypes.value;
        
        notices.push("Deck size: " + size);
        notices.push("Number of archetypes: " + archetypeCount);
        notices.push("Percent generic: " + Math.floor(percentGeneric * 10000) / 100 + "%");
        
        let genericCardCount = Math.floor(percentGeneric * size);
        let genericExtraCardCount = Math.floor(percentGeneric * EXTRA_DECK_SIZE);
        
        let archetypeCardCount = size - genericCardCount;
        let archetypeExtraCardCount = EXTRA_DECK_SIZE - genericExtraCardCount;
        
        notices.push(`Main deck composition: ${genericCardCount} generic / ${archetypeCardCount} archetype`);
        notices.push(`Extra deck composition: ${genericExtraCardCount} generic / ${archetypeExtraCardCount} archetype`);
        
        let archetypeList = sample(ARCHETYPE_LIST, archetypeCount);
        console.log(archetypeList);
        
        let mainDeck = [];
        let extraDeck = [];
        
        let mainDeckCandidates = [];
        let extraDeckCandidates = [];
        
        for(let archetype of archetypeList) {
            let roster = await getCards({ archetype: archetype });
            roster.forEach((card) => {
                let destination;
                if(isMainDeck(card)) {
                    destination = mainDeckCandidates;
                }
                else if(isExtraDeck(card)) {
                    destination = extraDeckCandidates
                }
                else if(isToken(card)) {
                    // pass
                }
                else {
                    console.warn("Unknown type: ", card);
                }
                
                if(destination) {
                    //let count = countAllowed(card);
                    //for(let i = 0; i < count; i++) {
                    //    destination.push(card);
                    //}
                    repeatAllowed(card, destination);
                }
            });
        }
        
        mainDeck.push(...sample(mainDeckCandidates, archetypeCardCount));
        extraDeck.push(...sample(extraDeckCandidates, archetypeExtraCardCount));
        
        // select generics
        if(mainDeck.length !== size) {
            let genericCards = allCards.filter(e => !e.archetype);
            
            let genericMainCards = repeatAllowed(genericCards.filter(isMainDeck));
            let genericExtraCards = repeatAllowed(genericCards.filter(isExtraDeck));
            
            let remainingMain = size - mainDeck.length;
            let remainingExtra = EXTRA_DECK_SIZE - extraDeck.length;
            
            mainDeck.push(...sample(genericMainCards, remainingMain));
            extraDeck.push(...sample(genericExtraCards, remainingExtra));
        }
        
        if(archetypeCount) {
            let archetypesWithFrequency = archetypeList.map((name) => {
                let [mainFrequency, extraFrequency] = [
                    mainDeck,
                    extraDeck
                ].map(source => (
                    source.filter(e => e.archetype === name).length
                ));
                return `${name} (${mainFrequency} main, ${extraFrequency} extra)`;
            }).join(", ");
            notices.push("Archetypes: " + archetypesWithFrequency);
        }
        else {
            notices.push("No intentional archetypes.");
        }
        
        // side deck is anything
        let restOfCards = repeatAllowed(allCards);
        [...mainDeck, ...extraDeck].forEach((card) => {
            let index = restOfCards.findIndex(other => other.name === card.name);
            if(index !== -1) {
                restOfCards.splice(index, 1);
            }
        });
        
        let sideDeck = sample(restOfCards, SIDE_DECK_SIZE);
        
        console.log(mainDeck.map(e => e.name));
        console.log(extraDeck.map(e => e.name));
        
        output.value = compileDeck(mainDeck, extraDeck, sideDeck);
        
        updateNotes(notices);
    });
    
});
