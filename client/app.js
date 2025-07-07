import rl from "readline-sync";
import { easytMath } from "./riddles/EasyMath.js"
import { Mystery } from "./riddles/Mystery.js";
import Player from "./classes/Player.js"
import { hard } from "./riddles/hard.js";
import { getTime } from "./utils/time.js";




 initGame();




function initGame() {
    const name = bootPlty();
    const start = getTime();
    // level();
    // const a = new 
    AllRiddles();
    const end = getTime();
    getPlayer(name, start, end)
}

function getPlayer(name, start, end) {
    const player1 = new Player(name)
    player1.time(start, end)
    console.log(player1.showStats());
}

function bootPlty() {
    console.log("welcome the game");
    const name = rl.question("what is your name?")
    return name;
}


function level() {
    const difficoultyLevel = rl.question("Choose difficulty: easy - 1 / medium - 2 / hard - 3:")
    switch (difficoultyLevel) {
        case "1":
            easytMath.DisplaysTheRiddle();
            break;
        case "2":
            Mystery.DisplaysTheRiddle();
            break;
        case "3":
            hard.DisplaysTheRiddle();
            break;

    }
}

function AllRiddles() {
    const aar = [easytMath, Mystery, hard]
    for (const element of aar) {
        element.displaysTheRiddle()
        element.ask()
    }
}

