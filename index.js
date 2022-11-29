const libOne = document.getElementById('lib-1');
const libTwo = document.getElementById('lib-2');
const libThree = document.getElementById('lib-3');
const beatName = document.getElementById('beat-name');
const padContainer = document.getElementById('pad-container');

//press key events
let selectedLib;

//Press key event handler
const pressKeyHandler = (e) => {
    switch (e.keyCode) {
        case 81:
            classClick('Q');
            const filterQ = selectedLib.filter((pad) => pad.key === 'Q');
            playSound(filterQ[0].sound, filterQ[0].name);
            break;
        case 87:
            classClick('W');
            const filterW = selectedLib.filter((pad) => pad.key === 'W');
            playSound(filterW[0].sound, filterW[0].name);
            break;
        case 69:
            classClick('E');
            const filterE = selectedLib.filter((pad)=> pad.key === 'E');
            playSound(filterE[0].sound, filterE[0].name);
            break;
        case 65:
            classClick('A');
            const filterA = selectedLib.filter((pad) => pad.key === 'A');
            playSound(filterA[0].sound, filterA[0].name);
            break;
        case 83:
            classClick('S');
            const filterS = selectedLib.filter((pad) => pad.key === 'S');
            playSound(filterS[0].sound, filterS[0].name);
            break;
        case 68:
            classClick('D');
            const filterD = selectedLib.filter((pad) => pad.key === 'D');
            playSound(filterD[0].sound, filterD[0].name);
            break;
        case 90:
            classClick('Z');
            const filterZ = selectedLib.filter((pad) => pad.key === 'Z');
            playSound(filterZ[0].sound, filterZ[0].name);
            break;
        case 88:
            classClick('X');
            const filterX = selectedLib.filter((pad) => pad.key === 'X');
            playSound(filterX[0].sound, filterX[0].name);
            break;
        case 67:
            classClick('C');
            const filterC = selectedLib.filter((pad) => pad.key === 'C');
            playSound(filterC[0].sound, filterC[0].name);
            break;
        case 49:
            selectedLib = libraryOne;
            createPads(libraryOne);
            break;
        case 50:
            selectedLib = libraryTwo;
            createPads(libraryTwo);
            break;
        case 51:
            selectedLib = libraryThree;
            createPads(libraryThree);
            break;
        default:
            console.log(`${e.keycode}Doesn't have a function`);
            break;
    }
};

//Key event listener
document.addEventListener('keydown', pressKeyHandler);

function sound(src) {
    this.sound = document.createElement('audio');
    this.sound.src = src; //set src attribute to the link passed
    this.sound.setAttribute('preload', 'auto');//preload the sound to be ready
    this.sound.setAttribute('controls', 'none');// hide controls
    this.sound.classList.add('clip');
    this.sound.style.display = 'none'; //hide the audio element
    document.body.appendChild(this.sound);//render the created audio into the DOM
    this.play = function(){
        this.sound.play();//play the sound
    };
    this.stop =function() {
        this.sound.pause();//pauses the sound
    };
}

//First Library
oneQ = new sound('./sounds/library1/BD_MF_Valve12.wav');
oneW = new sound('./sounds/library1/BellDull_MF_Valve1.wav');
oneE = new sound('./sounds/library1/Conga_MF_Valve1.wav');
oneA = new sound('./sounds/library1/HH_MF_Valve12.wav');
oneS = new sound('./sounds/library1/Perc_MF_LastValve1.wav');
oneD = new sound('./sounds/library1/SD_MF_Layered3.wav');
oneZ = new sound('./sounds/library1/Tom_MF_Valve4.wav');
oneX = new sound('./sounds/library1/Wood_MF_Valve_D4.wav');
oneC = new sound('./sounds/library1/Zap_MF_Valve2.wav');

libraryOne = [
    {
        sound: oneQ,
        name: 'BOOOOM!',
        key: 'Q'
    }, 

    {
        sound: oneW,
        name: 'DIIIING!',
        key: 'W'
    },
    {
        sound: oneE,
        name: 'DIPPPP!',
        key: "E"
    },
    {
        sound: oneA,
        name: 'TSSSS!',
        key: 'A'
    },
    {
        sound: oneS,
        name: 'DUUUUP!',
        key: 'S'
    },
    {
        sound: oneD,
        name: 'TAAAAM!',
        key: 'D'
    },
    {
        sound: oneZ,
        name: 'TUMMMM!',
        key: 'Z'
    },
    {
        sound: oneX,
        name: 'DUMM!',
        key: 'X'
    },
    {
        sound: oneC,
        name: 'PIUUUU!',
        key: 'C'
    }
];


//Second Library
twoQ = new sound('./sounds/library2/BD_MF_Valve11.wav');
twoW = new sound('./sounds/library2/BellDull_MF_Valve2.wav');
twoE = new sound('./sounds/library2/Conga_MF_Valve5.wav');
twoA = new sound('./sounds/library2/HH_MF_Valve15.wav');
twoS = new sound('./sounds/library2/Perc_MF_Valve33.wav');
twoD = new sound('./sounds/library2/SD_MF_Layered8.wav');
twoZ = new sound('./sounds/library2/Tom_MF_Valve3.wav');
twoX = new sound('./sounds/library2/Wood_MF_Valve_C4.wav');
twoC = new sound('./sounds/library2/Zap_MF_Valve4.wav');

libraryTwo = [
    {
        sound: twoQ,
        name: 'BOOOOM!',
        key: 'Q'
    },
    {
        sound: twoW,
        name: 'TIIIING!',
        key: 'W'
    },
    {
        sound: twoE,
        name: 'DOOOOU!',
        key: 'E'
    },
    {
        sound: twoA,
        name: 'KSSSS',
        key: 'A'
    },
    {
        sound: twoS,
        name: 'POP!',
        key: 'S'
    },
    {
        sound: twoD,
        name: 'DAAAAN!',
        key: 'D'
    },
    {
        sound: twoZ,
        name: 'ZUUUUM!',
        key: 'Z'
    },
    {
        sound: twoX,
        name: 'TIIIIN!',
        key: 'X'
    },
    {
        sound: twoC,
        name: 'TIUUUU!',
        key: 'C'
    }
];

//Third Library
threeQ = new sound('./sounds/library3/BD_MF_Valve14.wav');
threeW = new sound('./sounds/library3/Conga_MF_Valve3.wav');
threeE = new sound('./sounds/library3/HHo_MF_Valve1.wav');
threeA = new sound('./sounds/library3/Metal_MF_Valve18.wav');
threeS = new sound('./sounds/library3/Perc_MF_Valve37.wav');
threeD = new sound('./sounds/library3/Timp_MF_Valve1.wav');
threeZ = new sound('./sounds/library3/Tom_MF_Valve1.wav');
threeX = new sound('./sounds/library3/Wood_MF_Valve_G4.wav');
threeC = new sound('./sounds/library3/Zap_MF_Valve1.wav');

libraryThree = [
	{
		sound: threeQ,
		name: 'BOOOOOM!',
		key: 'Q'
	},
	{
		sound: threeW,
		name: 'DIIIIN!',
		key: 'W'
	},
	{
		sound: threeE,
		name: 'DUIHHH!',
		key: 'E'
	},
	{
		sound: threeA,
		name: 'DINNNNNN!',
		key: 'A'
	},
	{
		sound: threeS,
		name: 'DAP!',
		key: 'S'
	},
	{
		sound: threeD,
		name: 'POOOM!',
		key: 'D'
	},
	{
		sound: threeZ,
		name: 'TIUMMM!',
		key: 'Z'
	},
	{
		sound: threeX,
		name: 'TINN!',
		key: 'X'
	},
	{
		sound: threeC,
		name: 'PIUUUUU!',
		key: 'C'
	}
];

//Pad element generator
function newPad(pad) {
    const { sound, name, key } = pad;
    this.newPad = document.createElement('div');
    this.newPad.classList.add('drum-pad');
    this.newPad.setAttribute('id', key);
    this.newPad.setAttribute('type', 'button');
    this.newPad.innerText = key;
    this.newPad.onclick = () => {
        playSound(sound, name);
        classClick(key);
    };
    this.newPad.onmouseover = () => classHover(key);
    this.newPad.onmouseleave = () => {
        this.newPad.classList.remove('drum-pad-hover');
    };
    padContainer.appendChild(this.newPad);//add this new pad created to the pad-container div
};

// create pad function
const createPads = (library) => {
    while (padContainer.firstChild) {
        padContainer.removeChild(padContainer.lastChild);
    }
    library.map((pad) => {
        new newPad(pad);
    });
};

//play sound function
const playSound = (sound, name) => {
    sound.play();
    beatName.innerHTML = name;
};

//edit class when hover
const classHover = (key) => {
    const pad = document.getElementById(key);
    pad.classList.add('drum-pad-hover');
};

//edit class when clicking
const classClick = (key) => {
    const pad = document.getElementById(key);
    pad.classList.add('drum-pad-clicked');
    setTimeout(() => {
        pad.classList.remove('drum-pad-clicked');
    }, 500);
};

// render library on first load
window.onload = () => {
    selectedLib = libraryOne;
    createPads(libraryOne);
};

//render libraries on click
libOne.onclick = () => {
    selectedLib = libraryOne;
    createPads(libraryOne);
};
libTwo.onclick = () => {
    selectedLib = libraryTwo;
    createPads(libraryTwo);
};
libThree.onclick = () => {
    selectedLib = libraryThree;
    createPads(libraryThree);
};
