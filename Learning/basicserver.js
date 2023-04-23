const http = require("http");

const dataControl=(req,resp)=>
{
    resp.write("<h1>Hello this is ankit </h1>");
    resp.end();
}



http
  .createServer(dataControl)
  .listen(45000);

// test(a,b)
// {

// }
// test(10,20)
