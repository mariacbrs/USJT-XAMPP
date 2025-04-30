export default function(server, db){
    server.get('/frutas', (req, res) => {
        console.log('🙋‍♂️ recebi requisição GET em /frutas');
        res.json(db.get("/frutas"));
    });
    
    server.get('/frutas/:id', (req, res) => {
        console.log('🙋‍♂️ recebi requisição GET em /frutas');
        res.json( db.get("/frutas/"+req.params.id));
    });
    
    server.post('/frutas/:id', (req, res) => {
        console.log("🙋 Recebi requisição POST em /frutas/:id"); 
        let fruta =  db.get("/frutas/"+req.params.id);
        if(fruta != null){
            res.json({error:true, msg:"fruta cadastrada"});
        }
        let Nfruta = {
            id: req.body.id,
            nome: req.body.nome,
            cor: req.body.cor
        }  
        db.set("/frutas/"+req.params.id, Nfruta)
        res.json({ msg: "ok" });
    });
    
    server.put('/frutas/:id', (req, res) => {
        console.log("🙋 Recebi requisição POST em /frutas/:id"); 
        let fruta =  db.get("/frutas/"+req.params.id);
        if(fruta == null){
            res.json({error:true, msg:"fruta não existe"});
            return
        }
        let Nfruta = {
            id: req.body.id,
            nome: req.body.nome,
            cor: req.body.cor
        }  
        db.set("/frutas/"+req.params.id, Nfruta)
        res.json({ msg: "ok" });
    });
    
    server.delete('/frutas/:id', (req, res) => {
        console.log("🙋 Recebi requisição POST em /frutas/:id");
        let fruta =  db.get("/frutas/"+req.params.id);
        if(fruta == null){
            res.json({error:true, msg:"fruta não existe"});
            return
        }  
        db.set("/frutas/"+req.params.id, null)
        res.json({ msg: "deletado" });
    });
}