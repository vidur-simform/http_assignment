const http = require('http');
const port = 3001;

const httpServer  = http.createServer((req,res)=>{
    res.setHeader("Content-Type", "text/html");

    if(req.url=='/' ){
        res.writeHead(200);
        res.write("<h2>Hello World</h2>");
    }else if(req.url=='/welcome' && req.method === "GET"){
        res.writeHead(200);
        res.write("<h2>Welcome Page</h2>");
    }else if(req.url=='/about' && req.method === "GET"){
        res.writeHead(200);
        res.write("<h2>About Page</h2>");
    }else{
        // If not found then status code : 404
        res.writeHead(404);
        res.write("<h2>Page Not Found</h2>");
    }
    res.end(); 
});

httpServer.listen(port,()=>{
    console.log(`Server started on port ${port}...`);
})