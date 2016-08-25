//Sobe um servidor através do Node.js associando a uma instância do Express
var http = require("http");

//O express funcionará como request listener
var app = require("./config/express")();

http.createServer(app).listen(app.get("port"), function() {
    console.log("Express escutando na porta " + app.get("port"));
});