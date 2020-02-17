
const http = require('http');

const server = http.createServer((req,res)=>{
  // console.log(req.headers);
  const url = req.url;
  //routing requests
  if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>');
    res.write('</html>');
    return res.end()
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('Hello');
  res.end();
})
server.listen(3000);

