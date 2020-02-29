const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})






// Чтобы создать сервер
// const http = require("http");
// http.createServer().listen(3000);


// Добавляем listen, чтобы слушать порт
//
// const http = require("http");
// http.createServer(function(request, response){
//      
//     response.end("Hello world!");
// }).listen(3000);
//
//    request: хранит информацию о запросе
//    response: управляет отправкой ответа

