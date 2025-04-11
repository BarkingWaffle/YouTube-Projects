const quotes = [
  "Travel changes you. As you move through this life and this world you change things slightly, you leave marks behind, however small. And in return, life—and travel—leaves marks on you.",
  "Your body is not a temple, it's an amusement park. Enjoy the ride.",
  "I don't have to agree with you to like you or respect you.",
  "Do we really want to travel in hermetically sealed popemobiles through the rural provinces of France, Mexico and the Far East, eating only in Hard Rock Cafes and McDonalds? Or do we want to eat without fear, tearing into the local stew, the humble taqueria's mystery meat, the sincerely offered gift of a lightly grilled fish head? I know what I want. I want it all. I want to try everything once.",
  "If you’re twenty-two, physically fit, hungry to learn and be better, I urge you to travel – as far and as widely as possible. Sleep on floors if you have to. Find out how other people live and eat and cook. Learn from them – wherever you go.",
  "Travel changes you. As you move through this life and this world you change things slightly, you leave marks behind, however small. And in return, life - and travel - leaves marks on you. Most of the time, those marks - on your body or on your heart - are beautiful. Often, though, they hurt.",
  "Maybe that’s enlightenment enough: to know that there is no final resting place of the mind; no moment of smug clarity. Perhaps wisdom...is realizing how small I am, and unwise, and how far I have yet to go.",
  "Once you’ve been to Cambodia, you’ll never stop wanting to beat Henry Kissinger to death with your bare hands. You will never again be able to open a newspaper and read about that treacherous, prevaricating, murderous scumbag sitting down for a nice chat with Charlie Rose or attending some black-tie affair for a new glossy magazine without choking. Witness what Henry did in Cambodia – the fruits of his genius for statesmanship – and you will never understand why he’s not sitting in the dock at The Hague next to Milošević.",
  "No one understands and appreciates the American Dream of hard work leading to material rewards better than a non-American.",
  "If I'm an advocate for anything, it's to move. As far as you can, as much as you can. Across the ocean, or simply across the river. The extent to which you can walk in someone else's shoes or at least eat their food, it's a plus for everybody. Open your mind, get up off the couch, move.",
  "Vegetarians, and their Hezbollah-like splinter faction, the vegans ... are the enemy of everything good and decent in the human spirit.",
  "Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.",
  "Skills can be taught. Character you either have or you don't have.",
  "Don't lie about it. You made a mistake. Admit it and move on. Just don't do it again. Ever.",
  "They're professionals at this in Russia, so no matter how many Jell-O shots or Jager shooters you might have downed at college mixers, no matter how good a drinker you might think you are, don't forget that the Russians - any Russian - can drink you under the table.",
  "The journey is part of the experience - an expression of the seriousness of one's intent. One doesn't take the A train to Mecca.",
  "We know, for instance, that there is a direct, inverse relationship between frequency of family meals and social problems. Bluntly stated, members of families who eat together regularly are statistically less likely to stick up liquor stores, blow up meth labs, give birth to crack babies, commit suicide, or make donkey porn. If Little Timmy had just had more meatloaf, he might not have grown up to fill chest freezers with Cub Scout parts.",
  "I wanted adventures. I wanted to go up the Nung river to the heart of darkness in Cambodia. I wanted to ride out into a desert on camelback, sand and dunes in every direction, eat whole roasted lamb with my fingers. I wanted to kick snow off my boots in a Mafiya nightclub in Russia. I wanted to play with automatic weapons in Phnom Penh, recapture the past in a small oyster village in France, step into a seedy neon-lit pulqueria in rural Mexico. I wanted to run roadblocks in the middle of the night, blowing past angry militia with a handful of hurled Marlboro packs, experience fear, excitement, wonder. I wanted kicks – the kind of melodramatic thrills and chills I’d yearned for since childhood, the kind of adventure I’d found as a little boy in the pages of my Tintin comic books. I wanted to see the world – and I wanted the world to be just like the movies.",
  "I've long believed that good food, good eating, is all about risk. Whether we're talking about unpasteurized Stilton, raw oysters or working for organized crime 'associates,' food, for me, has always been an adventure.",
  "Assume the worst. About everybody. But don't let this poisoned outlook affect your job performance. Let it all roll off your back. Ignore it. Be amused by what you see and suspect. Just because someone you work with is a miserable, treacherous, self-serving, capricious and corrupt asshole shouldn't prevent you from enjoying their company, working with them or finding them entertaining.",
  "You have to be a romantic to invest yourself, your money, and your time in cheese."
]

const usedIndexes = new Set();
<<<<<<< HEAD
const quoteElement = document.getElementById("quote")

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear()
  }

    while(true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) continue

    const quote = quotes[randomIdx];
    quoteElement.innerHTML =  quote;
    usedIndexes.add(randomIdx);
    break
    }

  }
=======
const quoteElement = document.getElementById("quote");


function generateQuote() {
  quoteElement.innerHTML = "hello"
}
>>>>>>> b4e343f6d5d16414613eccec74ada1a59d352e26
