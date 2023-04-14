const express = require('express')
const app = express(); 


const port = 4000;
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true})); 
app.use(express.static("public")); 

let pLanguages = [] 


app.get("/", (req, res) => {
    res.render("main.ejs", {plNames: pLanguages});
}); 

app.get("/contact", (req, res) => {
    res.render("contact.ejs", {});
}); 

app.post("/", (req, res) => {
    const pLanguage = req.body.pLanguage; 
    pLanguages.push(pLanguage); 
    res.redirect("/"); 
})



app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});
