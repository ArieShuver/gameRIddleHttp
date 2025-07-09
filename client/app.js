import rl from "readline-sync";
import readlineSync from "readline-sync";
import Player from "./classes/Player.js"
import { getTime } from "./utils/time.js";
import { AllRiddles, addRiddle, updateRiddle, deleteRiddle } from "./utils/function.js";

async function mainMenu() {
  while (true) {
    console.log("\n=== Riddle Game Menu ===");
    console.log("1. Show all riddles");
    console.log("2. Add a riddle");
    console.log("3. Update a riddle");
    console.log("4. Delete a riddle");
    console.log("5. Exit");

    const choice = rl.question("Choose an option (1-5): ");
    switch (choice) {
      case "1":
        await AllRiddles();
        break;
      case "2":
        await addRiddle();
        break;
      case "3":
        await updateRiddle();
        break;
      case "4":
        await deleteRiddle();
        break;
      case "5":
        console.log("Bye!");
        process.exit(0);
      default:
        console.log("Invalid choice. Please choose 1-5.");
    }
  }
}

mainMenu();
