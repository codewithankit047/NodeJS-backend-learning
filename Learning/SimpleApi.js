const http = require("http");
const data = require('./data')

http.createServer((res, resp) => {
    resp.writeHead(200,{
        'Contetn-Type':'application\json'}),
        resp.write(JSON.stringify(data));
        resp.end();
    

}).listen(4000);
