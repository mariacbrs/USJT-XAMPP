export default function(server, db){
    server.get('/superHeroi', (req, res) => {
        console.log('🙋‍♂️ recebi requisição GET em /superHeroi');
        res.json(db.get("/superHeroi"));
    });
    
    server.get('/superHeroi/:id', (req, res) => {
        console.log('🙋‍♂️ recebi requisição GET em /superHeroi');
        res.json( db.get("/superHeroi/"+req.params.id));
    });
    
    server.post('/superHeroi/:id', (req, res) => {
        console.log("🙋 Recebi requisição POST em /superHeroi/:id"); 
        let heroi =  db.get("/superHeroi/"+req.params.id);
        if(heroi != null){
            res.json({error:true, msg:"super Heroi cadastrado"});
        }
        let Nheroi = {
            id: req.body.id,
            heroi: req.body.heroi,
            nome: req.body.nome,
            poderes: req.body.poderes,
        }  
        db.set("/superHeroi/"+req.params.id, Nheroi)
        res.json({ msg: "ok" });
    });
    
    server.put('/superHeroi/:id', (req, res) => {
        console.log("🙋 Recebi requisição POST em /superHeroi/:id"); 
        let heroi =  db.get("/superHeroi/"+req.params.id);
        if(heroi == null){
            res.json({error:true, msg:"super heroi não existe"});
            return
        }
        let Nheroi = {
            id: req.body.id,
            heroi: req.body.heroi,
            nome: req.body.nome,
            poderes: req.body.poderes,
        }  
        db.set("/superHeroi/"+req.params.id, Nheroi)
        res.json({ msg: "ok" });
    });
    
    server.delete('/superHeroi/:id', (req, res) => {
        console.log("🙋 Recebi requisição POST em /superHeroi/:id");
        let heroi =  db.get("/superHeroi/"+req.params.id);
        if(heroi == null){
            res.json({error:true, msg:"super heroi não existe"});
            return
        }  
        db.set("/superHeroi/"+req.params.id, null)
        res.json({ msg: "super heroi deletado" });
    });
}