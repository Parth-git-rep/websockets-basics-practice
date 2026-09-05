const express=require('express');
const http=require('http');
const {Server}=require('socket.io');
const app=express();
const server=http.createServer(app);
const io= new Server(server,{cors:{origin:"*"}});
io.on('connection',function(socket){
    console.log("user connected",socket.id);
    socket.on('disconnect',function(){
        console.log("user disconnected:", socket.id);
    })
    socket.on("text update", function(data) {
  socket.broadcast.emit("text update", data);
});
})

server.listen(3001,function(){
console.log("WebSocket server running on http://localhost:3001");
})