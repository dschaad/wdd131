import {determineCharacterLevel} from "./Calculations.js";

const players = [
    {
        characterName: "Zelfina",
        playerName: "Rach",
        race: "Half-Elf",
        class: "Paladin",
        subclass: "",
        image: "images/Zelfina.png",
        experience: 920,
    },
    {
        characterName: "Astoria",
        playerName: "Shayna",
        race: "Aarakocra",
        class: "Fighter",
        subclass: "",
        image: "images/Astoria.jpeg",
        experience: 0,
    },
    {
        characterName: "Lorilla",
        playerName: "Shae",
        race: "Rock Gnome",
        class: "Sorcerer",
        subclass: "Draconic",
        image: "images/Lorilla.webp",
        experience: 400,
    },
    {
        characterName: "Tumblefoot",
        playerName: "Darell",
        race: "Lightfoot Halfling",
        class: "Rogue",
        subclass: "",
        image: "images/Tumblefoot.png",
        experience: 400,
    },
    {
        characterName: "Loralee",
        playerName: "Kristina",
        race: "Eladrin Elf",
        class: "Rogue",
        subclass: "",
        image: "images/Loralee.png",
        experience: 0,
    },
    {
        characterName: "Lyra",
        playerName: "Megan",
        race: "Wood Elf",
        class: "Warlock",
        subclass: "Genie",
        image: "images/Lyra.jpeg",
        experience: 400,
    }
]

let count = 0;

function playerTemplate(player, count) {
    let level = determineCharacterLevel(player.experience);
    return `<div class="player">
                <img src=${player.image} alt="image of ${player.characterName}">
                <ol class="player-stats">
                    <li>${player.characterName} (${player.playerName})</li>
                    <li>${player.race}</li>
                    <li>${player.subclass} ${player.class}</li>
                    <li>Level ${level} (${player.experience} XP)</li>
                    <li><input type="number" id="xp${count}" name="xp" placeholder="Enter XP"><button id="update${count}">Add XP</button></li>
                </ol>
            </div>`;
}

const playerList = document.querySelector("#player-list");

function addPlayer(player) {
    const html = playerTemplate(player, count);
    playerList.insertAdjacentHTML("beforeend", html);

    document.querySelector(`#update${count}`).addEventListener("click", updateExperience);

    count++;   
}

function updateExperience() {
    // console.log(this.id.substr(6));
    const index = this.id.substr(6);
    const xpInput = document.querySelector(`#xp${index}`).value;
    const xpValue = parseInt(xpInput);

    if (!isNaN(xpValue)) {
        const player = players[index];
        player.experience += xpValue;

        if (player.experience < 0) { player.experience = 0; }
    }

    count = 0;
    sortPlayers();
    renderPlayers();
}

// Sort players by experience points. If players have the same experience points, sort them alphabetically by character name
function sortPlayers() {
    players.sort((a, b) => {
        if (b.experience != a.experience) { return b.experience - a.experience; }
        else { return a.characterName.localeCompare(b.characterName); }
    });
}

function renderPlayers() {
    playerList.innerHTML = "";
    players.forEach(addPlayer);
}

sortPlayers();
renderPlayers();