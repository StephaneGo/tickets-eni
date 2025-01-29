const express = require("express");

const app = express();
const port = 3000;
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

let tickets = [{
    id: 1,
    titre: "Ticket 1",
    auteur: "John Doe",
    date_creation: new Date(),
    description: "Description du ticket 1",
    etat : "en cours"
    },
    {
        id: 2,  
        titre: "Ticket 2",
        auteur: "Jane Doe",
        date_creation: new Date(),
        description: "Description du ticket 2",
        etat : "en cours"}];

let idx = 3

/* Routes */
app.get(["/", "/tickets"], (req, res)=>{
    res.render("index", {tickets});
});

app.post("/tickets", (req, res)=>{
    tickets.push({
        id: idx++,
        titre: req.body.titre,
        auteur: req.body.auteur,
        date_creation: new Date(),
        description: req.body.description,
        etat : "en cours"});
    res.redirect("/tickets");
});

app.listen(port, () => {
    console.log("Le serveur tourne sur le port " + port);
  });
  