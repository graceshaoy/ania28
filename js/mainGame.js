const gameData= {
    "1": {
        "text": "the day is full of possibilities! you have nothing planned today. what will you decide to do first?",
"choices": {
            "go on a walk": [2,["cyndaquil","chikawa", "squirrel", "chipmunk", "owl cat"]],
            "brew a cup of tea": [3,["tomato", "snuggles", "bunny", "wise monke"]],
            "call up a friend": [4,["forehead puppy", "chikawa", "yowling puppy", "snow monke", "black cat"]],
            "take a nap": [5, ["snuggles", "belly cat", "stuffed ania", "stuffed grace", "fire kitty"]],
            "hang out at a cafe": [6,["shark puppy", "tomato", "green hamster", "cheek beer cat"]]
        }
    },
    "2": {
        "text":"where will you take a walk?",
        "choices":{
            "in the woods": [7, ["cyndaquil", "owl cat", "green hamster", "squirrel", "chipmunk"]],
            "next to the lake": [7, ["eyebrow seal", "shark puppy", "black cat", "egg puppy"]],
            "in the mountains": [7, ["bunny", "snow monke", "yowling puppy", "stuffed bunny", "stuffed ania"]],
            "in my neighborhood": [7, ["eyebrow seal", "chikawa", "stuffed grace", "wise monke","helpless puppy"]]
        },
    },
    "7": {
        "text":"you're having a nice walk. it's lovely out! what are you thinking about?",
        "choices":{
            "wow the sun feels so good!": [8, ["fire kitty", "cyndaquil", "belly cat", "eyebrow seal", "stuffed grace"]],
            "oooh i could get a little snack as a treat :3": [8, ["shark puppy", "belly cat", "chipmunk", "stuffed ania"]],
            "i wish my girlfriend was here...": [8, ["tomato", "snow monke", "egg puppy", "tomato", "angry cat", "black cat"]],
            "is that a walnut tree??": [8, ["black cat", "forehead puppy", "bunny", "owl cat", "green hamster"]],
        },
    },
    "3": {
        "text":"what kind of tea?",
        "choices":{
            "honey ginseng": [19, ["tomato","eyebrow seal", "forehead puppy", "shark puppy"]],
            "pi pa gao": [19, ["angry cat", "angry puppy", "tomato", "chikawa", "belly cat", "egg puppy", "helpless puppy"]],
            "vitamin c": [19,["yowling puppy", "owl cat", "squirrel", "stuffed ania", "black cat"]],
            "jasmine": [19,["fire kitty", "snuggles", "cheek cat", "cyndaquil", "stuffed bunny"]],
            "actually fuck that. i want beer": [18,["cheek beer cat", "belly cat", "wise monke", "owl cat", "shark puppy"]]
        },
    },
    "19": {
        "text":"how do you boil your water?",
        "choices":{
            "kettle": [18, ["cheek cat", "fire kitty", "shark puppy", "snow monke", "snuggles"]],
            "pot": [18, ["yowling puppy", "stuffed grace", "belly cat", "bunny"]],
            "microwave": [18, ["green hamster", "owl cat", "angry cat", "eyebrow seal"]]
        }
    },
    "18": {
        "text":"you're sipping your drink, enjoying the flavor. what a perfect choice for this day!",
        "choices":{
            "continue":[14,[]]
        },
    },
    "14": {
        "text":"the cup is empty.. what will you do next?",
        "choices": {
            "go on a walk": [2,["cyndaquil","chikawa", "squirrel", "chipmunk", "owl cat"]],
            "call up a friend": [4,["forehead puppy", "chikawa", "yowling puppy", "snow monke", "black cat"]],
            "take a nap": [5, ["snuggles", "belly cat", "stuffed ania", "stuffed grace", "fire kitty"]],
            "hang out at a cafe": [6,["shark puppy", "tomato", "green hamster", "cheek beer cat"]]
        }
    },
    "4": {
        "text":"which friend will you call?",
        "choices":{
            "the one i haven't caught up w in awhile": [17, ["wise monke", "shark puppy", "stuffed ania", "eyebrow seal"]],
            "the one i call every day, duh!": [17, ["angry cat", "yowling puppy", "black cat", "chikawa", "tomato", "forehead puppy", "helpless puppy"]],
            "the wise one, i need advice about something...": [17,["black cat", "angry cat", "bunny", "chikawa", "snow monke"]],
            "someone to just be on the phone w. i just like the company of someone else": [17,["black cat", "tomato", "snow monke", "owl cat", "snuggles", "stuffed ania"]]
        },
    },
    "17":{
        "text":"your friend doesn't pick up :( what do you do?",
        "choices":{
            "call again!":[20, ["tomato","black cat", "yowling puppy", "chipmunk"]],
            "call another friend":[20, ["forehead puppy", "owl cat", "egg puppy", "eyebrow seal", "angry puppy"]],
            "eh. i guess go on a walk": [2,["snow monke", "snuggles", "angry cat", "owl cat", "squirrel"]],
            "maybe i'll go to a cafe instead!": [6,["shark puppy", "forehead puppy", "cheek cat", "stuffed ania"]]
        }
    },
    "20": {
        "text":"they pick up! you're having a nice time with your friend. it's so important to have strong friendships!",
        "choices":{
            "continue":[8,[]]
        },
    },
    "5": {
        "text":"naptime! zzz...",
        "choices":{
            "continue": [9, []]
        },
    },
    "9": {
        "text":"you wake up and the sun is setting!",
        "choices":{
            "i'm going back to sleep!": [10,["belly cat", "cyndaquil", "snuggles", "chipmunk"]],
            "oh perfect! i want to see the sunset! i'll take a quick walk": [12,["tomato", "forehead puppy", "owl cat", "squirrel", "cyndaquil"]],
            "oh shoot! i gotta eat something. i'll go to the cafe that's open late": [13,["green hamster", "egg puppy", "chikawa", "belly cat", "cheek cat", "fire kitty"]]
        },
    },
    "10": {
        "text":"you wake up and the stars are out!",
        "choices":{
            "i'm going back to sleep!": [11,["belly cat", "snuggles", "stuffed ania"]],
            "oh nice! i want to see the stars! i'll take a walk to see the stars": [12,["tomato", "forehead puppy", "owl cat", "stuffed grace"]],
            "oh shoot! i gotta eat something. i'll go to the midnight cafe": [13,["green hamster", "egg puppy", "snuggles", "helpless puppy"]]
        },
    },
    "11": {
        "text":"you wake up and the owls are hoo-ing!",
        "choices":{
            "i'm going back to sleep!": [0,["snuggles"]],
            "wow it sounds so calm out. i'll take a nice, quiet walk!": [12,["tomato", "forehead puppy", "owl cat"]],
            "oh shoot! i gotta eat something. i'll go to the 24hr cafe": [13,["green hamster", "egg puppy"]]
        },
    },
    "12": {
        "text":"you're having a nice walk. it's lovely out! what are you thinking about?",
        "choices":{
            "oooh i could get a little snack as a treat :3": [8, ["shark puppy", "belly cat", "chipmunk", "stuffed ania"]],
            "i wish my girlfriend was here...": [8, ["tomato", "snow monke", "egg puppy", "tomato", "forehead puppy", "black cat"]],
            "is that a walnut tree??": [8, ["black cat", "forehead puppy", "bunny", "owl cat", "green hamster"]],
            "what was that sound just now???": [8, ["yowling puppy", "bunny", "chikawa", "angry puppy", "stuffed grace", "helpless puppy"]]
        },
    },
    "6": {
        "text":"there are so many cafes in town! how do you decide?",
        "choices":{
            "the closest one": [13, ["angry puppy", "belly cat", "chikawa", "egg puppy", "fire kitty", "helpless puppy"]],
            "the best reviews": [13, ["angry cat", "chipmunk", "wise monke", "cheek cat"]],
            "my favorite :) i never stray!": [13, ["forehead puppy", "angry cat","black cat","snow monke"]],
            "the one w the coolest looking drinks": [13, ["tomato", "stuffed ania", "owl cat"]],
            "the one w the best looking interior": [13, ["stuffed ania", "shark puppy", "fire kitty"]],
            "best outdoor patio!": [13, ["eyebrow seal", "bunny", "stuffed bunny", "squirrel"]]
        },
    },
    "13": {
        "text":"you're at the cafe, looking at the menu. you step up to order, but someone cuts you and starts ordering!",
        "choices":{
            "that's rude asf! i'm calling them out": [15, ["yowling puppy", "angry puppy", "bunny", "owl cat", "cyndaquil"]],
            "wtf?? smh some people don't have any manners... i'll stare at them angrily": [15, ["angry cat", "green hamster", "stuffed ania", "chipmunk"]],
            "wait what just happened?": [15, ["chikawa", "egg puppy", "tomato", "forehead puppy", "helpless puppy"]],
            "i guess they're in a rush. that's okay i have time!": [15, ["eyebrow seal", "wise monke", "cheek cat", "snuggles"]]
        },
    },
    "15": {
        "text":"you order your drink. how much do you tip?",
        "choices":{
            "no tip": [16, ["green hamster", "snow monke", "angry puppy", "black cat", "helpless puppy"]],
            "$1": [16, ["yowling puppy", "squirrel", "eyebrow seal", "shark puppy"]],
            "$2": [16, ["angry cat", "tomato", "wise monke", "stuffed ania", "forehead puppy"]],
            "$3": [16, ["cheek cat", "cheek beer cat", "stuffed bunny", "belly cat"]],
            "the tip options are in dollars bc a dollar tip is more than a 20% tip. anyways, $1.": [16, ["green hamster", "chikawa", "owl cat", "cheek cat", "stuffed grace"]]
        },
    },
    "16": {
        "text":"you get your drink and sit down. it's a nice cafe, a good drink! you're glad you chose this spot.",
        "choices":{
            "continue":[8,[]]
        },
    },

    "8": {
        "text":"suddenly a wizard appears in front of you!! he pushes you into a portal...",
        "choices":{
            "nao! let me go! i don't i want to follow this strange man anywhere...":[21,["squirrel", "owl cat", "cheek beer cat", "cheek cat"]],
            "hey! he interrupted the lovely time i was having! i'm not going":[21,["snuggles", "snow monke", "angry puppy", "shark puppy"]],
            "what.. what's going on...": [22,["forehead puppy", "stuffed grace", "stuffed bunny", "eyebrow seal", "helpless puppy"]],
            "hm let's see where this takes us": [22,["egg puppy", "fire kitty", "chipmunk", "wise monke"]]
        },
    },
    "21":{
        "text": "it's too late... you're already being transported!",
        "choices": {"continue":[22,[]]}
    },
    "22": {
        "text":"where do you think this portal is taking you?",
        "choices":{
            "space!":[23,["black cat", "eyebrow seal", "chikawa", "green hamster", "snow monke"]],
            "another dimension":[23, ["snuggles", "angry cat", "tomato", "green hamster", "stuffed ania"]],
            "a different time": [23, ["fire kitty", "egg puppy", "cyndaquil", "yowling puppy", "cheek cat"]],
            "into the microscopic world!": [23, ["cheek beer cat", "bunny", "chipmunk", "owl cat", "snow monke"]]
        },
    },
    "23": {
        "text": "it actually took you to your girlfriend's room. she's not here though! what do you do?",
        "choices": {
            "i'm getting in bed and knocking out! it's the best waking up to cuddles": [24,["snuggles", "belly cat", "cheek cat", "stuffed bunny", "snow monke"]],
            "hello...? walk around and see if she's home, just not in her room": [26,["tomato", "black cat", "stuffed ania", "forehead puppy", "yowling puppy", "helpless puppy"]],
            "i'll do my own thing and wait for her to come home": [27,["squirrel", "egg puppy", "stuffed grace", "owl cat", "eyebrow seal"]],
            "no fun without her... i'm leaving!": [31,["shark puppy", "cheek beer cat", "angry puppy", "wise monke", "cyndaquil", "squirrel"]]
        }
    },
    "24":{
        "text": "zzz...",
        "choices":{"continue":[25,[]]}
    },
    "25":{
        "text": "you wake up to kisses and hugs!",
        "choices":{"continue":[30,[]]}
    },
    "26":{
        "text": "you find her in the living room! she's surprised you're here (ofc... you came thru a portal)",
        "choices":{"continue":[30,[]]}
    },
    "27":{
        "text": "what do you do while waiting?",
        "choices":{
            "read a book": [29,["bunny", "eyebrow seal", "owl cat", "wise monke", "squirrel"]],
            "play video games!": [29,["shark puppy", "green hamster", "cheek beer cat", "black cat"]],
            "go on my phone": [29,["belly cat", "fire kitty", "cheek cat", "tomato", "stuffed ania"]],
            "get a workout in": [29,["shark puppy", "cheek beer cat", "snow monke", "chipmunk", "cyndaquil"]],
            "i'll cook something yummy!":[29,["forehead puppy", "tomato", "angry puppy", "belly cat", "cheek cat"]]
        }
    },
    "29":{
        "text": "she eventually gets home and is surprised you're here!",
        "choices":{
            "continue":[30,[]]
        }
    },
    "31":{
        "text":"the wizard's voice booms... 'you can't leave bc that's too many branching timelines for this quiz' ... wow what a mysterious voice!",
        "choices":{
            "continue":[32,[]]
        }
    },
    "32":{
        "text": "you're in your girlfriend's room. she's not here though! what do you do?",
        "choices": {
            "i'm getting in bed and knocking out! it's the best waking up to cuddles": [24,["snuggles", "belly cat", "cheek cat", "stuffed bunny", "snow monke"]],
            "hello...? walk around and see if she's home, just not in her room": [26,["tomato", "black cat", "stuffed ania", "forehead puppy", "angry cat", "yowling puppy"]],
            "i'll do my own thing and wait for her to come home": [27,["squirrel", "egg puppy", "stuffed grace", "owl cat", "eyebrow seal"]]
        }
    },
    "30":{
        "text": "yipee! gf time! what should you guys do together?",
        "choices":{
            "let's watch something and get cozy": [33,["eyebrow seal", "cyndaquil", "chipmunk", "tomato", "black cat"]],
            "naptime :3": [36,["forehead puppy", "snow monke", "snuggles", "belly cat", "black cat", "stuffed ania", "cheek cat"]],
            "let's go explore!": [37,["shark puppy", "stuffed ania", "wise monke", "yowling puppy", "bunny"]],
            "let her decide!": [39,["angry cat", "angry puppy", "chikawa", "green hamster", "snow monke",'helpless puppy']]
        } 
    },
    "33" : {
        "text": "what will you watch?",
        "choices":{
            "horror movie!": [34, ["angry cat", "black cat", "tomato"]],
            "something nice and happy": [34, ["eyebrow seal", "forehead puppy", "stuffed bunny",'helpless puppy']],
            "a fancy film": [34, ["wise monke", "cheek beer cat", "squirrel", "green hamster"]],
            "our tv show :)": [34, ["snow monke", "belly cat","stuffed ania", "forehead puppy"]]
        }
    },
    "34": {
        "text": "you turn the lights off, press play, and share a blanket...",
        "choices":{"continue":[70,[]]}
    },
    "36": {
        "text": "you get into bed, tuck yourselves in, and fall asleep...",
        "choices":{"continue":[70,[]]}
    },
    "37": {
        "text": "where will you explore?",
        "choices": {
            "i saw a post for a cool event earlier today, let's do that!": [38,["shark puppy", "stuffed ania", "cheek beer cat"]],
            "new sweet treat place!": [38,['belly cat','egg puppy','fire kitty','cheek cat']],
            "a park nearby": [38,["squirrel",'chipmunk','owl cat','wise monke']],
            "wherever the wind takes us": [38,["chikawa","black cat","chipmunk","snow monke",'helpless puppy']]
        }
    },
    "38": {
        "text": "you go and have so much fun! it's always nice to do things together :)",
        "choices":{"continue":[70,[]]}
    },
    "39": {
        "text": "she decided to stay home and put something on the tv! would you like to pick what to watch?",
        "choices": {
            "okie": [33,['black cat','shark puppy','stuffed bunny','tomato','snuggles']],
            "no i'm tired of making choices today": [40,['helpless puppy','cyndaquil','fire kitty','angry cat']]
        }
    },
    "40": {
        "text":"after a second, she chooses a tv show you guys had forgotten about",
        "choices":{'continue':[34,[]]}
    },
    "70": {
       "text": "what a full day! i wonder what tomorrow holds... . • ° ★ ✰⋆｡:ﾟ･*☽",
        "choices":{'continue':[71,[]]}
    },
    "71":{
        "text":"",
        "choices":{'see your results':[0,[]]}
    }
};

const personalities = { 
    "helpless puppy":0,
    "angry cat": 0,
    "angry puppy": 0,
    "shark puppy": 0, 
    "wise monke": 0, 
    "yowling puppy": 0, 
    "tomato": 0, 
    "snow monke": 0, 
    "owl cat": 0, 
    "green hamster": 0,
    "chikawa": 0,
    "cyndaquil": 0,
    "bunny": 0,
    "forehead puppy": 0,
    "belly cat": 0,
    "fire kitty": 0,
    "egg puppy": 0,
    "cheek cat": 0,
    "cheek beer cat": 0,
    "snuggles": 0,
    "stuffed ania": 0,
    "stuffed grace": 0,
    "stuffed bunny": 0,
    "squirrel": 0,
    "chipmunk": 0,
    "black cat": 0,
    "eyebrow seal": 0
};

let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    
    // Render the game state content
    storyText.textContent = gameData[state].text;
    choicesContainer.innerHTML = '';

    for (const [choice, info] of Object.entries(gameData[state].choices)) {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'choice-button';
        let nextState = info[0];
        button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
        choicesContainer.appendChild(button);
    }
}


function changeState(newState, selectedPersonalities) { 
    console.log('Changing to state:', newState); // Debug log
    console.log('Selected personalities:', selectedPersonalities); // Debug log
    
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        console.log('State is 0, calling revealMostSelectedVegetable'); // Debug log
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}
function revealMostSelectedVegetable() {
    console.log('revealMostSelectedVegetable called'); // Debug log
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }

    let secondMaxCount = 0;
    let secondMaxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)) {
        if (vegetable !== maxVeggie && count > secondMaxCount) {
            secondMaxCount = count;
            secondMaxVeggie = vegetable;
        }
    }

    console.log('Max veggie:', maxVeggie, 'Count:', maxCount, 'Second max veggie', secondMaxVeggie, 'second max count', secondMaxCount); // Debug log

    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const veggieImagePath = `images/id_cards/${maxVeggie}.png`;
    const secondVeggieImagePath = `images/id_cards/${secondMaxVeggie}.png`;

    // Preload the image
    const img = new Image();
    img.src = veggieImagePath;
    img.className = 'responsive-image';

    // Create the second image element
    const secondImg = new Image();
    secondImg.src = secondVeggieImagePath;
    secondImg.className = 'responsive-image-small';

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share the game with Friends';
    shareButton.className = 'share-button';

    // Function to show results (with or without image)
    function showResults() {
        choicesContainer.style.display = 'none';
        console.log('cleared')
        text.textContent = "Drumroll... here's your Creature ID!";
        // add line break
        text.appendChild(document.createElement('br'));
        text.appendChild(img);
        // Add secret identity text between the images
        const secondText = document.createElement('p');
        secondText.textContent = "(and your secret identity....)";
        secondText.style.fontSize = '18px';
        secondText.style.textAlign = 'center';
        text.appendChild(secondText);
        text.appendChild(secondImg);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `it's ania's 28th bday! check out which of ania's favorite creatures you are at https://html-preview.github.io/?url=https://raw.githubusercontent.com/graceshaoy/ania28/sophie/home_page/index.html#`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        text.appendChild(shareButton);
    }

    // Once the image is loaded, update the DOM
    img.onload = () => {
        console.log('Image loaded successfully'); // Debug log
        showResults();
    };

    // If image fails to load, still show results
    img.onerror = () => {
        console.log('Image failed to load, showing results anyway'); // Debug log
        showResults();
    };
}


function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.subtitle').style.display = 'none';
    // document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
