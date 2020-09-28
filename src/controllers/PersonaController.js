const Persona = require('../models/Persona')

module.exports = {

    async list(req, res) {
        try{
            const persona = await Persona.find()

            return res.status(200).json({persona})
        } catch(err) {
        
            return res.status(500).json({ msg:"Problemas no servidor" })
        }
    },

    async show(req, res) {
        try{
            const {personaId} = req.params
            
            const persona = await Persona.find({
                _id: personaId
            })
           
            if (persona.length === 0) {
                return res.status(401).json({error: "Nenhum usuário encontrado"})
            }

            return res.status(200).json({persona})
        } catch(err) {
        
            return res.status(500).json({ msg:"Problemas no servidor" })
        }
    },

    async create(req, res) {

        try{
            const {
                owner, name, sex, age, position, workplace, scholarship,comunication_means,
                goals, problems, company_suport, staff, company_field, image
                } = req.body

            const persona = await Persona.create({
                owner, name, sex, age, position, workplace, scholarship,comunication_means,
                goals, problems, company_suport, staff, company_field, image
            })
        
            res.status(201).json({persona});
        } catch(err) {
        
            return res.status(500).json({ msg:"Problemas no servidor" })
        }
    },

    async update(req, res) {
        try{
            const {
                name, sex, age, position, workplace, scholarship,comunication_means,
                goals, problems, company_suport, staff, company_field, image
            } = req.body 

            const {personaId} = req.params

            const personaIdExist = await Persona.findById({_id: personaId})

            if(!personaIdExist) {
                return res.status(401).json({error: "Não foi possível atualizar, usuário não cadastrado"})
            }

            const persona = await Persona.findByIdAndUpdate({
                _id: personaId
            },{
                name, sex, age, position, workplace, scholarship,comunication_means,
                goals, problems, company_suport, staff, company_field, image
            },{
                new:true
            })
        
            return res.status(200).json({persona});
        } catch(err) {
        
            return res.status(500).json({ msg:"Problemas no servidor" })
        }
    },

    async delete(req, res) {
        try{
            const {personaId} = req.params
            const personaIdExist = await Persona.findById({_id: personaId})

            if(!personaIdExist) {
                return res.status(401).json({error: "Não foi possível deletar, usuário não cadastrado"})
            }

            const persona = await Persona.findByIdAndDelete({_id: personaId})
        
            res.status(200).json({persona});
        } catch(err) {
        
            res.status(500).json({ msg:"Problemas no servidor" })
        }
    },

}