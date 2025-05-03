export default function(server, db){
    server.get('/viloes', (req, res) => {
        console.log('🙋‍♂️ recebi requisição GET em /viloes');
        res.json(db.get("/viloes"));
    });
    
    server.get('/viloes/:id', (req, res) => {
        console.log('🙋‍♂️ recebi requisição GET em /viloes');
        res.json( db.get("/viloes/"+req.params.id));
    });
    
    server.post('/viloes/:id', (req, res) => {
        console.log("🙋 Recebi requisição POST em /viloes/:id"); 
        let vilao =  db.get("/viloes/"+req.params.id);
        if(vilao != null){
            res.json({error:true, msg:"vilão cadastrado"});
        }
        let Nvilao = {
            id: req.body.id,
            vilao: req.body.vilao,
            nome: req.body.nome,
            poderes: req.body.poderes,
        }  
        db.set("/viloes/"+req.params.id, Nvilao)
        res.json({ msg: "ok" });
    });
    
    server.put('/viloes/:id', (req, res) => {
        console.log("🙋 Recebi requisição POST em /viloes/:id"); 
        let vilao =  db.get("/viloes/"+req.params.id);
        if(vilao == null){
            res.json({error:true, msg:"vilão não existe"});
            return
        }
        let Nvilao = {
            id: req.body.id,
            vilao: req.body.vilao,
            nome: req.body.nome,
            poderes: req.body.poderes,
        }  
        db.set("/viloes/"+req.params.id, Nvilao)
        res.json({ msg: "ok" });
    });
    
    server.delete('/viloes/:id', (req, res) => {
        console.log("🙋 Recebi requisição POST em /viloes/:id");
        let vilao =  db.get("/viloes/"+req.params.id);
        if(vilao == null){
            res.json({error:true, msg:"vilão não existe"});
            return
        }  
        db.set("/viloes/"+req.params.id, null)
        res.json({ msg: "vilão deletado" });
    });
}