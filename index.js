const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const courses = require("./Data/courses.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Madroos Server Running");
});

app.get("/courses", (req, res) => {
    res.send(courses);
});

app.listen(port, () => {
    console.log("Server Run Ok");
});
