import rl from "readline-sync";

class Riddle {
    constructor(id, name, taskDescription, correctAnswer) {
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }

    displaysTheRiddle() {
        console.log(this.taskDescription)
    }
    
    //
    ask() {
        let answer = rl.question("--Enter your answer--:  ")
        while (!compatibilityCheck(this.correctAnswer, answer)) {
            console.log(this.taskDescription)
            answer = rl.question("--Enter your answer--:  ")
        }
    }
}

function compatibilityCheck(item1, item2) {
    return (item1 == item2)
}

export default Riddle
