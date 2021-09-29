const path = require("path");

const express = require("express");
const app = express();
const port = 3000; // Const para armanezar a porta do servidor
app.set("view engine", "ejs");
// Substituição de function por arrow function
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/index", (req, res) => {
    res.render("index", { titulo: "Blue" });
  });
// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));