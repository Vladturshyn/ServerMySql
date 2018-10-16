const userController = {};

userController.listAll = (req,res) =>{
    req.getConnection((err,connection)=>{
        if(err){
            res.json(err)
        }
        connection.query('SELECT * FROM user',(err,user)=>{
            if(err) res.json(err);
            res.json(user);
        });            
    });
}
userController.insert = (req,res) =>{
    req.getConnection((err,connection)=>{
        if(err){
            res.json(err)
        }
        const data = {
            ID: req.body.id,
            Name: req.body.name,
            Age: req.body.age
        };
        const {ID,Name,Age} = data;

        const query = `INSERT INTO user(ID,Name,Age) VALUES (${ID},"${Name}",${Age})`;
        connection.query(query,(err,user)=>{
            if(err) res.json(err);
            res.json(user);
        });            
    });
}
userController.deleteByID = (req,res) =>{
    req.getConnection((err,connection)=>{
        if(err){
            res.json(err)
        }
        const query = `DELETE FROM user WHERE ID=${req.params.id}`;
        connection.query(query,(err,user)=>{
            if(err) res.json(err);
            res.json(user);
        });            
    });
}
userController.update = (req,res) =>{
    req.getConnection((err,connection)=>{
        if(err){
            res.json(err)
        }
        const data = {
            ID: req.body.id,
            Name: req.body.name,
            Age: req.body.age
        };
        const {ID,Name,Age} = data;

        const query = `UPDATE user SET Name="${Name}",Age=${Age} WHERE ID=${ID}`;
        connection.query(query,(err,user)=>{
            if(err) res.json(err);
            res.json(user);
        });            
    });
}

module.exports = userController;