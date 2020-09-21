const http = require ('http');
const fs = require ("fs")

const hostname = '127.0.0.1';
const port = 3000;



const route =(page,res)=>{

    fs.readFile(page, (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(data)
        res.end();
    })
    
}


const server = http.createServer((req, res) => {

  let page= req.url
  
    switch(page){ 
       case "/" :route("./index.html",res)
       break;
       case "/contacts": route("./contacts.html", res)
           break;
       case "/services": route("./index.html", res)
           break;
           default: route("./404.html",res)
   }

});

server.listen(port, hostname, () => {
     console.log("Server running at on port :"+ port);
 });