const User = require('../models/User')

module.exports = {

    async list(req, res) {
        try{
            const users = await User.find()

            return res.status(200).json({users})
        } catch(err) {
        
            return res.status(500).json({ msg:"Problemas no servidor" })
        }
    },

    
    async show(req, res) {
        try{
            const {userId} = req.params
            
            const users = await User.find({
                _id: userId
            })
           
            if (users.length === 0) {
                return res.status(401).json({error: "Nenhum usuário encontrado"})
            }

            return res.status(200).json({users})
        } catch(err) {
        
            return res.status(500).json({ msg:"Problemas no servidor" })
        }
    },


    async create(req, res) {
        try{
            const {nome, email, cargo} = req.body 
                const user = await User.create({nome, email, cargo})
                res.json({user});
            
        } catch(err) {
        
            return res.status(500).json({ msg:"Problemas no servidor" })
        }
    },


    async update(req, res) {
        try{
            const {nome, email, cargo} = req.body 
            const {userId} = req.params
            const userIdExist = await User.findById({_id: userId})

            if(!userIdExist) {
                return res.status(401).json({error: "Não foi possível atualizar, usuário não cadastrado"})
            }
            const user = await User.findByIdAndUpdate({
                _id: userId
            },{
                nome,
                email,
                cargo
            },{
                new:true
            })
        
            return res.status(200).json({user});
        } catch(err) {
        
            return res.status(500).json({ msg:"Problemas no servidor" })
        }
    },


    async delete(req, res) {
        try{
            const {userId} = req.params
            const userIdExist = await User.findById({_id: userId})

            if(!userIdExist) {
                return res.status(401).json({error: "Não foi possível deletar, usuário não cadastrado"})
            }

            const user = await User.findByIdAndDelete({_id: userId})
        
            res.status(200).json({user});
        } catch(err) {
        
            res.status(500).json({ msg:"Problemas no servidor" })
        }
    },

}