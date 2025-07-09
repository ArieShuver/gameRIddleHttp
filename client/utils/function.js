import Riddle from "../classes/Riddle.js";
import rl from "readline-sync";

export async function AllRiddles() {
    const response = await fetch("http://localhost:3000/riddles");
    const data = await response.json();
    const arr = [];
    for (const element of data) {
        const riddle = new Riddle(
            element.id,
            element.name,
            element.ask,
            element.answer
        );
        arr.push(riddle);
    }
    for (const riddle of arr) {
        riddle.displaysTheRiddle();
        riddle.ask();
    }
}

export async function addRiddle() {
    const id = parseInt(rl.question("Enter riddle ID: "));
    const name = rl.question("Enter riddle name: ");
    const ask = rl.question("Enter riddle question: ");
    const answer = rl.question("Enter riddle answer: ");

    const newRiddle = { id, name, ask, answer };

    const response = await fetch("http://localhost:3000/riddles/addRiddle ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRiddle)
    });

    const result = await response.json();
    console.log("riddle added:", result);
}

export async function updateRiddle() {
    const id = parseInt(rl.question("enter riddle ID to update: "));
    const name = rl.question("enter new name: ");
    const ask = rl.question("enter new question: ");
    const answer = rl.question("enter new answer: ");

    const updated = { id, name, ask, answer };

    const response = await fetch("http://localhost:3000/riddles/updateRiddle", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
    });

    const result = await response.json();
    console.log("Riddle updated:", result);
}

export async function deleteRiddle() {
    const id = parseInt(rl.question("Enter ID of riddle to delete: "));

    const response = await fetch("http://localhost:3000/riddles/deleteRiddle", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ "id": id }),
    });


    const result = await response.json();
    console.log("riddle deleted:", result);
}
