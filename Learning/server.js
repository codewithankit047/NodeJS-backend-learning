const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log("request has been made from browser to server");
  //   console.log(req.method);
  //   console.log(req.url);

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello,Pepcoder !:)</h1>");
  res.write("<h1>Hello,Pepcoder !:)</h1>");
  res.write("<h1>Hello,Pepcoder !:)</h1>");
  res.write("<h1>Hello,Pepcoder !:)</h1>");
  res.write("<h1>Hello,Pepcoder !:)</h1>");

  fs.readFile("./filenae", (err, fileData) => {
    if (err) {
      console.log("error");
    } else {
      res.end(fileData);
    }
  });
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("server listimng to the 3000 port");
});
