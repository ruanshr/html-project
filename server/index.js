const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const server = http.createServer();

server.on("request", (req, res) => {
  const reqPath = url.parse(req.url).path;
  const filePath = path.join(__dirname, "../", `${reqPath}`);
  console.log(filePath)
  fs.exists(filePath, function (exists) {
    if (exists) {
      fs.stat(filePath, function (err, stats) {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html;charset=utf8" });
          res.end(
            `<div styel="color:black;font-size:22px;">server error</div>`
          );
        } else {
          if (stats.isFile()) {
            const file = fs.createReadStream(filePath);
            res.writeHead(200, {
              "Content-Type": "text/html;charset=utf8",
            });
            file.pipe(res);
          } else {
            fs.readdir(filePath, function (err, files) {
              var str = "";
              for (var i in files) {
                str += `${files[i]}<br/>`;
              }
              res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
              res.write(str);
            });
          }
        }
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html;charset=utf8" });
      res.end(`<div styel="color:black;font-size:22px;">404 not found</div>`);
    }
  });
});


server.listen(3000, "127.0.0.1", () => {
  console.log("启动服务成功");
});
