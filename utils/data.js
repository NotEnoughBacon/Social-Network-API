const names = [
    "Agsilly",
    "Albion",
    "Alvida",
    "Amadob",
    "Andre",
    "Arlong",
    "Arthur",
    "Baggaley",
    "Bartolomeo",
    "Basil Hawkins",
    "Bizarre",
    "Blondie",
    "Bluejam",
    "Boa Hancock",
    "Brew",
    "Brocca",
    "Buggy",
    "Cands",
    "Candy",
    "Capone Bege",
    "Caribou",
    "Cavendish",
    "Charlotte Linlin",
    "Charlotte Lola",
    "Chesskippa",
    "Choi",
    "Colscon",
    "Decalvan Brothers",
    "Delacuaji",
    "Demaro Black",
    "Devil Dias",
    "Diez Barrels",
    "Doma",
    "Donquixote Doflamingo",
    "Edward Newgate",
    "Elmy",
    "Epoida",
    "Eustass Kid",
    "Fisher Tiger",
    "Forliewbs",
    "Foxy",
    "Foxy",
    "Fugar",
    "Gally",
    "Gecko Moria",
    "Gerotini",
    "Gol D. Roger",
    "Goo",
    "Great Michael",
    "Gyro",
    "Hajrudin",
    "Hangan",
    "Happygun",
    "Haritsu Kendiyo",
    "Hody Jones",
    "Ibusu",
    "Ideo",
    "Islewan",
    "Jewelry Bonney",
    "John",
    "Julius",
    "Kaidou",
    "Karma",
    "Kechatch",
    "Kinga",
    "Kuro",
    "Lacuba",
    "Leo",
    "Lip Doughty",
    "Little Oars Jr.",
    "Macro",
    "Marshall D. Teach",
    "Masira",
    "McGuy",
    "Mikazuki",
    "Mikazuki",
    "Monkey D. Luffy",
    "Ninth",
    "Nosgarl",
    "Oli",
    "Palms",
    "Pavlik",
    "Peachbeard",
    "Puppu",
    "Pururu",
    "Raccoon",
    "Ramba",
    "Reforte",
    "Rocks D. Xebec",
    "Roshio",
    "Rush",
    "Scratchmen Apoo",
    "Seamars",
    "Shoujou",
    "Shanks",
    "Sleepy",
    "Squard",
    "Trafalgar D. Water Law",
    "Urouge",
    "Vander Decken",
    "Vander Decken IX",
    "Vitan",
    "Wallem",
    "Whitey Bay",
    "X Drake",
    "Yurikah",
    "Zodia",
    "Zucca",
];

const thoughts = [
    "Im gonna be queen of the ASTRONAUNTS!",
    "I found the secret password, no spoilers",
    "Really good!",
    "What does this do?",
    "Yes sir, one of the ones of all time",
    "That damned cliffhangar",
    "test test",
    "New chapter is out!",
    "Beep Boop, this is good",
    "Hes made of rubber!",
    "Im worried I could spoil something...",
    "so Ill try my best not to say any spoilers here!",
    "YOU is absolutely incredible",
    "Beep bop",
    "Im kind of really into YOUUUUU right now",
];

const possibleReactions = [
    "👍",
    "👎",
    "♥",
    "💢",
    "🏴‍☠️",
    "This slaps",
    "Meh, could be better",
    "REEEEEEEEE",
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () => `${getRandomArrItem(names)}`;

const getRandomThought = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughts),
            reactions: [...getReaction(2)],
        });
    }
    return results;
};

const getReaction = (int) => {
    if (int === 1) {
        return getRandomArrItem(possibleReactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactions: getRandomArrItem(possibleReactions),
            username: getRandomName(),
        });
    }
    return results;
};

module.exports = { getRandomName, getRandomThought, getReaction };