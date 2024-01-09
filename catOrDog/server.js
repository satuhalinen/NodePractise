const fs = require("fs");
const http = require("http");

const port = 3000;
const host = "localhost";

const catData = fs.readFileSync(`${__dirname}/cat.jpg`);
const dogData = fs.readFileSync(`${__dirname}/dog.jpg`);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/") {
    res.end("<h1>This is an empty page.</h1>");
  } else if (pathName === "/cat") {
    res.writeHead(200, {
      "Content-Type": "image/jpeg",
    });
    res.end(catData);
  } else if (pathName === "/dog") {
    res.writeHead(200, {
      "Content-Type": "image/jpeg",
    });
    res.end(dogData);
  } else {
    res.writeHead(400, {
      "Content-type": "text/html",
    });
    res.end("<h1>Only cat and dog pages work.</h1>");
  }
});

server.listen(port, host, () => {
  console.log(`Listening to request on port ${port}`);
});
