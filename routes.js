const fs = require('fs');

const routeHandler = (req,res) =>{ 
  const url = req.url;
  const method = req.method;
  //routing requests
if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>');
    res.write('</html>');
    return res.end()
  }
  
  //redircting Requests
  if(url === '/message' && method === 'POST'){
    const body = [];
    req.on('data', (chunk)=>{
      console.log(chunk)
      body.push(chunk)
    });
    req.on('end', ()=>{
      const bodyParsed = Buffer.concat(body).toString()
      console.log(bodyParsed)
      const message = bodyParsed.split('=')[1];
    fs.writeFileSync('message.txt', message);
    })
    res.statusCode=302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('Hello');
  res.end();
}

module.exports = routeHandler;

//module.exports = {
  // handler: routeHandler,
  // someText: 'Some Hard code text'
// }

//module.export.handler = routeHandler;
//module.export.someText = 'some hard code text';

//export.handler = routeHandler;
// export,someText = 'some text';