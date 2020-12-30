//importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//Criar o objeto que ira fazer operaçõs no  banco de dados
const db =  new sqlite3.Database("./src/database/database.db")

module.exports = db


























//Utilizar o objetod e banco de dados para nossas operações

//db.serialize(() => {

// Com comandos sql eu vou:


 // 1) criar uma tabela

    /*db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            adress TEXT,
            adress2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );

    
    `)


    //2) Inserir dados na tabela
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
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmVjeWNsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "Colectoria",
    "Guilherme Gemballa, Jardim América",
    "Nº 260",
    "Santa Catarina",
    "Rio do Sul",
    "Residuos Eletrônicos, Lâmpadas"
  
  
  
  ]    


  function afterInsertData(err) {

    if(err){
        return console.log(err)
    }
    console.log("Cadastrado com sucesso")
    console.log(this)

  }
          db.run(query, values, afterInsertData)

  
        

    //4) Deletar um dado de uma tabela

    /*db.run(`DELETE FROM places WHERE id = ?`, [8], function(err){
        if(err){
            return console.log(err)
        }
      console.log("Registro deletado com sucesso!")
        
    })*/

    //3) consultar dados da tabela
        
   /* db.all(`SELECT * FROM places`, function(err, rows) {
      if(err){
          return console.log(err)
      }
       
       console.log("Aqui estão seus registros:")
       console.log(rows)
  })*/
//})