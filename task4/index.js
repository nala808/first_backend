const { urlencoded, json } = require("body-parser");
const express = require("express");
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

const mission = [
    {
        id: "15",
        missionName: "overlord",
        astronaut: ["mayan", "nawal", "maiar"],
        progress: 25,
    },
    {
        id: "28",
        missionName: "phantom",
        astronaut: ["ghazal", "salem", "noor"],
        progress: 3,
    },
    {
        id: "6",
        missionName: "nemesis",
        astronaut: ["abeer", "sawsan", "nadia"],
        progress: 6,
    },
];

app.post("/mission", (req, res) => {
    console.log(req.body);
    const data = req.body;
    data.astronaut = JSON.parse(data.astronaut);
    console.log(data);
    mission.push(data);
    res.send("create mission");
});

app.get("/missions", (req, res) => {
    res.send("get all missions");
});

app.get("/mission/:id", (req, res) => {
    const parmsId = req.params.id;
    for (let index = 0; index < mission.length; index++) {
        if (mission[index].id == parmsId) {
            return res.send("get the mission");
        }
    }
    res.send("mission is not found");
});

app.put("/mission", (req, res) => {
    const data = req.body;
    for (let index = 0; index < mission.length; index++) {
        if (mission[index].id === data.id) {
            mission[index] = data;
            return res.send("mission is updated");
        }
    }
    res.send("mission is not found");
});

app.delete("/mission/:id", (req, res) => {
    const parmsId = req.params.id;
    for (let index = 0; index < mission.length; index++) {
        if (mission[index].id === parmsId) {
            mission.splice(index, 1);
            return res.send("delete mission");
        }
    }
    res.send("mission is not found");
});

const port = 3000;
app.listen(port, () => {
    console.log("The server is running on port " + port);
});