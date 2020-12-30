const express = require("express")
const server = express()

//Pegar o banco de dados

const db = require("./database/db.js")

//configurar pasta publication
server.use(express.static("public"))

//Habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({extended: true}))
//utilizando template engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/view", {
    express: server,
    noCache: true
})


// Configurar caminhos da minha aplicação
//pagina inicial
//req: requisição
//res: Resposta
server.get("/",(req, res)=> {
 
  return res.render("index.html", {title: "Um titulo"})

})
server.get("/create-point",(req, res)=> {

    // req.query: Query Strings da nossa url
    
    console.log("req.body") 


   return res.render("create-point.html")

})

server.post("/savepoint", (req, res) => {

      //req.body: O corpo do nosso formulario


    // Inserir dados no banco de dados
    const query = `
          
    INSERT INTO places (
        image,
        name,
        adress,
        adress2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);

`
const values = [
req.body.image,
req.body.name,
req.body.adress,
req.body.adress2,
req.body.state,
req.body.city,
req.body.items
]    


function afterInsertData(err) {

if(err){
return console.log(err)
return res.send("Erro no cadastro")
}
console.log("Cadastrado com sucesso")
console.log(this)

return res.render("create-point.html", {saved:true})
}
  db.run(query, values, afterInsertData)
      

})





server.get("/search",(req, res)=> {

const search = req.query.search

if(search == ""){
  //Pesquisa vazia

  return res.render("search-results.html", { total:0})
}



    //Pegar os dados do bd

     db.all(`SELECT * FROM places WHERE city LIKE  '%${search}%' `, function(err, rows) {
            if(err){
              return console.log(err)
           }
            
           const total = rows.length

            //Mostrar a pagina html com os dados do banco de dados
            return res.render("search-results.html", {places: rows, total: total})

        })

    
  
 }) 
// Ligar o servidor
server.listen(3000)