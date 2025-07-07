
import fs from "fs/promises";

// Reading a file
async function read(path) {
    try {
        const read = await fs.readFile(path, "utf-8")
        const readJson = JSON.parse(read)
        if (!Array.isArray(readJson)) {
            return [];
        }
        else {
            return readJson;
        }
    }
    catch (error) {
        console.log("error from read", error)
        return [];
    }
}

// read("./riddels.txt")

//Added a riddle
async function create(path, data) {
    let listRiddles = await read(path);
    console.log('data',{data});
    
    listRiddles.push(data);
    listRiddles = JSON.stringify(listRiddles);
    try {
        await fs.writeFile(path, listRiddles);
    }
    catch (error) {
        console.log(error);
    }
}

//change a riddle
async function update(idRiddle, newRiddle, path) {
    let listRiddles = await read(path);
    const indexRiddle = listRiddles.findIndex(riddle => riddle.id === idRiddle);
    if (indexRiddle != -1) {
        listRiddles[indexRiddle] = newRiddle;
    }
    else {
        return console.log('The riddle is not found');
    }
    try {
        listRiddles = JSON.stringify(listRiddles, null, 2)
        await fs.writeFile(path, listRiddles);
    }
    catch (error) {
        console.log(error);
    }
}

//delete a riddle
async function deleteRiddle(idRiddle, path) {
    let listRiddles = await read(path);
    const indexRiddle = listRiddles.findIndex(riddle => riddle.id === idRiddle);
    if (indexRiddle != -1) {
        listRiddles = listRiddles.filter(riddle => riddle.id !== idRiddle)
    }
    else {
        return console.log('The riddle is not found');
    }
    try {
        listRiddles = JSON.stringify(listRiddles, null, 2)
        await fs.writeFile(path, listRiddles);
    }
    catch (error) {
        console.log(error);
    }
}



// deleteRiddle(1, "./riddels.txt")


export {
    read,
    create,
    update,
    deleteRiddle
}

// export async function readBady(req) {
//     let body = [];
//     req.on("data", chunk => {
//         body.push(chunk);
//     });
//     req.on("end", () => {
//         const data = JSON.parse(Buffer.concat(body).toString());
//     });

// }
