
class Player {
    constructor(name) {
        this.name = name;
        this.arr = [];
    }

    time(start, end) {
        this.arr.push(end - start);
    }

    showStats() {
        const TimeSuccess = `----${this.name}---time:  ${this.arr}`
        return TimeSuccess;
    }
}

export default Player