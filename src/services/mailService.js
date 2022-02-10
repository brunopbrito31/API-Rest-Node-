const mailService = {

    enviarEmail (destinatario, assunto, texto) {
        var nodemailer = require('nodemailer');
        const MAIL_PASSWORD = process.env.Mailer_Password;
        const MAIL_USER = 'brunopbrito31@gmail.com';

        let data = texto;

        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, 
            service: 'gmail',
            auth: {
                user: MAIL_USER,
                pass: MAIL_PASSWORD
            }
        });
        
        var mailOptions = {
            from: 'no-reply-ong@gmail.com',
            to: destinatario,
            subject: assunto,
            html: data
        };
    
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return ({ mensagem: "Falha" });
            } else {
                console.log('Email sent: ' + info.response);
                return ({ mensagem: "Sucesso" });
            }
        });
        
    }
    
}

module.exports = mailService;

