const Payment = require('../models/Payment');
const User = require('../models/User');

module.exports = {
    
    async index(req, res){

        const payment = await Payment.find();
        res.json( payment );

    },

    async store(req, res){ // SignUp a new company
        const { Value, Description, my_date, User_id } = req.body;
        
        const user = await User.findOne({ _id: User_id })

        if(!user){
            res.json({
                error: "Não encontrei o usuário para fazer o cadastro do pagamento."
            })
        }
        else{
            const payment = await Payment.create({ Value, Description, my_date, User_id });
            return res.json({ payment });
        }

    },

    async deleteAll(req, res){ 
        
        Payment.deleteMany({ }, (err) => {
            
            if(err) return res.status(400).json({
                error: true,
                message: "Error: Tabela não foi corretamente esvaziada!"
            });
            
            return res.json({
                error: false,
                message: "Tabela completamente esvaziada!"
            });
        });
    },

    async delete(req, res){ 

        Payment.deleteOne({_id: req.params.id}, (err) => {    
            if(err) return res.status(400).json({
                error: true,
                message: "Erro: Não foi apagado com sucesso!"
            });
    
            return res.json({
                error: false,
                message: "Apagado com sucesso!"
            });
        });

    },

    async showByUser(req, res){

        const { User_id } = req.body;

        const payment = await Payment.find({ User_id });

        if(!payment){
            return res.status(400).send({error: 'User not found'});
        }
        else{
            return res.json({
                payment
            });
        }
    },


}