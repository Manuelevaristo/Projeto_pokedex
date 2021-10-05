const path = require("path");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Const para armanezar a porta do servidor
app.set("view engine", "ejs");
// Substituição de function por arrow function
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
const pokedex=[];
let message = "";
app.get("/", (req, res) => {

  setTimeout(() => {
    message = "";
  }, 1000);
  res.render("index", {
    pokedex,
    message
  });
});
app.get("/cadastro", (req, res) =>{
  res.render("cadastro");
});
app.post("/new", (req, res) => {
  const pokemon={ numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade} = req.body;
  pokedex.push(pokemon);
  message = `Parabéns o pokemon ${nome}, foi cadastrado com sucesso!`;
  res.redirect("/");
});
app.get("/detalhes/:id",(req, res) =>{
  const id=req.params.id;
  const pokemon=pokedex[id];
  res.render("detalhes",{
    pokemon,
  })
});


// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));