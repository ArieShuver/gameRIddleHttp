import http from "http"
import { read, update, create, deleteRiddle } from "./functionality.js"
import { url } from "inspector";

const path = "./fileText.txt";

const server = http.createServer(async (req, res) => {
    if (req.method === "GET" && req.url === "/riddles") {
        response = await read(path)
        res.writeHead(200, { "content-type": "application/json" });
    }
    else if (req.method.toUpperCase() === "POST" && req.url === "/riddles/addRiddle ") {
        const data = await readBody(req);
        console.log('add', req);
        await create(path, data)
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Riddle added successfully" }));
    }
    else if (req.method.toUpperCase() === "PUT" && req.url === "/riddles/updateRiddle") {
        const data = await readBody(req);
        await update(data.id, data, path)
        console.log('cecvrdc');
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Riddle updated successfully" }))
    }
    else if (req.method.toUpperCase() === "DELETE" && req.url === "/riddles/deleteRiddle") {
        const data = await readBody(req);
        await deleteRiddle(data.id, path)
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Riddle deleted successfully" }));
    }
    else {
        res.writeHead(404, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: "Route not found" }));
    }
})

server.listen(3000, () => {
    console.log('server running');

})

async function readBody(req) {
    return new Promise((resolve, reject) => {
        let body = [];
        req.on("data", chunk => {
            body.push(chunk);
        });
        req.on("end", () => {
            try {
                const data = JSON.parse(Buffer.concat(body).toString());
                console.log("read body:", data);
                resolve(data);
            }
            catch (err) {
                reject(err);
            }
        });

        req.on("error", err => {
            reject(err);
        });
    });
}
