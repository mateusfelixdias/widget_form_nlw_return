const { faturamentoday } = require('../../database/models_tables');
const nodemailer  = require('nodemailer');

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "unarutouzumakihokage@gmail.com",
        pass: "narutosasuke@"
    },
    tls: {
        rejectUnauthorized: false
    }
});

class sendEmail {
    async send (datas){
        await transport.sendMail({
            from: "Naruto <unarutouzumakihokage@gmail.com>",
            to: "unarutouzumakihokage@gmail.com",
            subject: "Faturamento Do Dia!",
            text: `${datas.data}:${datas.mes}:${datas.ano} as ${datas.hora} segundos.\n`
            + 'Faturamento do dia: ' + await faturamentoday.findAll() + '.'
        });
    };
};

module.exports = new sendEmail();
