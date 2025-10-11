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
            "next to the lake": [7, ["eyebrow seal", "shark puppy", "angry cat", "black cat", "egg puppy"]],
            "in the mountains": [7, ["bunny", "snow monke", "yowling puppy", "stuffed bunny", "stuffed ania"]],
            "in my neighborhood": [7, ["eyebrow seal", "chikawa", "stuffed grace", "wise monke"]]
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
            "honey ginseng": [18, ["tomato","eyebrow seal", "forehead puppy", "shark puppy"]],
            "pi pa gao": [18, ["angry cat", "angry puppy", "tomato", "chikawa", "belly cat", "egg puppy"]],
            "vitamin c": [18,["yowling puppy", "owl cat", "squirrel", "stuffed ania", "black cat"]],
            "jasmine": [18,["fire kitty", "snuggles", "cheek cat", "cyndaquil", "stuffed bunny"]],
            "actually fuck that. i want beer": [18,["cheek beer cat", "belly cat", "wise monke", "owl cat", "shark puppy"]]
        },
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
            "the one i call every day, duh!": [17, ["angry cat", "yowling puppy", "black cat", "chikawa", "tomato", "forehead puppy"]],
            "the wise one, i need advice about something...": [17,["black cat", "angry cat", "bunny", "chikawa", "snow monke"]],
            "someone to just be on the phone w. i just like the company of someone else": [17,["black cat", "tomato", "snow monke", "owl cat", "snuggles", "stuffed ania"]]
        },
    },
    "17": {
        "text":"you're having a nice time with your friend. it's so important to have strong friendships!",
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
            "oh shoot! i gotta eat something. i'll go to the midnight cafe": [13,["green hamster", "egg puppy", "snuggles"]]
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
            "i wish my girlfriend was here...": [8, ["tomato", "snow monke", "egg puppy", "tomato", "angry cat", "black cat"]],
            "is that a walnut tree??": [8, ["black cat", "forehead puppy", "bunny", "owl cat", "green hamster"]],
            "what was that sound just now???": [8, ["yowling puppy", "bunny", "chikawa", "angry puppy", "stuffed grace"]]
        },
    },
    "6": {
        "text":"there are so many cafes in town! how do you decide?",
        "choices":{
            "the closest one": [13, ["angry puppy", "belly cat", "chikawa", "egg puppy", "fire kitty"]],
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
            "wtf?? smh some people don't have any manners... i'll stare at them angrily": [15, ["angry cat", "angry cat", "green hamster", "stuffed ania", "chipmunk"]],
            "wait what just happened?": [15, ["chikawa", "egg puppy", "tomato", "forehead puppy"]],
            "i guess they're in a rush. that's okay i have time!": [15, ["eyebrow seal", "wise monke", "cheek cat", "snuggles"]]
        },
    },
    "15": {
        "text":"you order your drink. how much do you tip?",
        "choices":{
            "no tip": [16, ["green hamster", "snow monke", "angry puppy", "black cat"]],
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
        "text":"suddenly a wizard appears in front of you!! he asks ",
        "choices":{
            "continue":[0,[]],
        },
    },





    "1000": {
        "text":"",
        "choices":{
            "A": [0, []]
        },
    },
        
};

const personalities = { 
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
        text.appendChild(secondText);
        text.appendChild(secondImg);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `it's ania's 28th bday! check out what creature ania sends grace at https://html-preview.github.io/?url=https://raw.githubusercontent.com/graceshaoy/ania28/sophie/home_page/index.html#`;
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
