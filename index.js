var isCaps = false;

function myFunction(id) {
    if(id in obj){
        if(isCaps){
            document.getElementById("myText").value += ' ' + obj[id].caps;
        }
        else {
            document.getElementById("myText").value += ' ' +  obj[id].normal;
        }
    }
}

function toggleCaps(){
    isCaps = !isCaps;
    displayEmoji()
}

function displayEmoji() {
    for(const btn_id in obj){
        if(isCaps) {
        document.getElementById(btn_id).innerHTML = obj[btn_id].caps;
        }  else {
        document.getElementById(btn_id).innerHTML = obj[btn_id].normal;
        }
    }
}

const obj = {
    bike: {
        normal: '🚲',
        caps: '🏍'
    },
    heart: {
        normal: '❤',
        caps: '💔'
    },
    mouth: {
        normal: '👄',
        caps: '💋'
    },
    child: {
        normal: '👶',
        caps: '🧒'
    },
    man: {
        normal: '👨',
        caps: '🧔'
    },
    person: {
        normal: '🧑',
        caps: '🧓'
    },
    woman: {
        normal: '👩',
        caps: '🧓'
    },
    student_man: {
        normal: '👨‍🎓',
        caps: '👨‍🏫'
    },
    student_woman: {
        normal: '👩‍🎓',
        caps: '👩‍🏫'
    },
    woman_baby: {
        normal: '🤰',
        caps: '🤱'
    },
    egg: {
        normal: '🥚',
        caps: '🐣'
    },
    chick: {
        normal: '🐥',
        caps: '🐓'
    },
    fish: {
        normal: '🐟',
        caps: '🐋'
    },
    bug: {
        normal: '🐛',
        caps: '🦋'
    },
    rose: {
        normal: '🌹',
        caps: '🥀'
    },
    tree: {
        normal: '🌱',
        caps: '🌲'
    },
    construction: {
        normal: '🏗',
        caps: '🏢'
    },
    train: {
        normal: '🚂',
        caps: '🚄'
    },
    car: {
        normal: '🚗',
        caps: '🏎'
    },
    scooter: {
        normal: '🛴',
        caps: '🛵'
    },
    boat: {
        normal: '⛵',
        caps: '🛥'
    },
    rocket: {
        normal: '🚀',
        caps: '🛸'
    },
    money: {
        normal: '🎰',
        caps: '💰'
    },
    caps: {
        normal: 'caps',
        caps: 'CAPS'
    }
}