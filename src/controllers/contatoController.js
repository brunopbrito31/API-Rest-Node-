const mailService = require('../services/mailService');

const contatoController = {

    async cadastrarContato (req, res){
        const { nome, email, telefone, mensagem, prot } = req.body;
        const {send, origin} = req.query;
        const EMAIL_ONG = 'bruno123.testando@hotmail.com';
        
        // Verifica Parâmetros de Segurança, anti-robô
        if(send == 1 && origin == 0 && prot == 0){
            console.log('passou pelas validações')
            const dataEnvio = new Date();
            
            // Variável de controle de formulário, anti robô DEBUG
            console.log("prot= "+prot);

            // Ordem dos Parâmetros do envio de email: (Destinatário, Assunto, Mensagem em Html)

            // Envio do Email para a ONG informando sobre o contato
            mailService.enviarEmail(
                EMAIL_ONG,
                `Novo Voluntário Cadastrado, Data do Cadastro: ${dataEnvio.toLocaleDateString('pt-BR', {timeZone: 'UTC'})}.`,
                `<p>Olá, informamos que temos um novo contato cadastrado.</p>
                <p>Dados do contato:</p>
                <p>Nome: ${nome}, Dados Para Contato - Email: ${email}, Telefone: ${telefone},</p>
                <p>Mensagem:<br> ${mensagem}</p>`
            );

            // Envio do Email para o doador confirmando o contato
            mailService.enviarEmail(
                email,
                'Cadastro na ONG MAIS AMOR SP', 
                `<p>Olá ${nome}! Recebemos e agradecemos o seu contato, em breve entraremos em contato.</p>
                <img src="https://i.ibb.co/grX9T3z/campanha-pix-solid-rio.png">
                <style>*{background-color:pink;}</style>`
            );

            console.log("terminou os envios");

            // Retorno mockado
            res.json({resp:"ok"});
        }
    },
}

module.exports = contatoController;