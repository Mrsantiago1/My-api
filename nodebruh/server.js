const http = require('http');
const fs = require('fs');
const url = require('url');
const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  console.log(page);
  if (page == "/") {
  fs.readFile("indexOne.html", function (err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}
else if (page == "/indexTwo") {
  fs.readFile("indexTwo.html", function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}
else if (page =="/indexThree") {
  fs.readFile("indexThree.html",function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
  });
}
else if (page == "/css/styleOne.css") {
  fs.readFile('css/styleOne.css', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(data);
    res.end();
  });
}
else if (page == "/css/styleTwo.css") {
  fs.readFile('css/styleTwo.css', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(data);
    res.end();
  });
}
else if (page == "/css/styleThree.css") {
  fs.readFile('css/styleThree.css', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(data);
    res.end();
  });
}
else if (page == "/js/mainOne.js") {
  fs.readFile('js/mainOne.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(data);
    res.end();
  });
}
else if (page == "/js/mainTwo.js") {
  fs.readFile('js/mainTwo.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(data);
    res.end();
  });
}
else if (page == "/js/mainThree.js") {
  fs.readFile('js/mainThree.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(data);
    res.end();
  });
}else {
  res.write("re-look and type the page again")
  res.end();
}
});
server.listen(8000);
