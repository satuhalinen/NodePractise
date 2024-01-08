const fs = require("fs");

const textIn = fs.readFileSync("./comma.csv", "utf-8");

const textOut = textIn.replaceAll(",", ";");

fs.writeFileSync("./semicolon.csv", textOut);
