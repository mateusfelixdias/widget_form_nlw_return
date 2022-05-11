const sendEmail = require('./sendEmail').send;
const schedule = require('node-schedule'); 

class timeToSendEmail {
    async timeToSendEmail () {
        const Data = new Date();

        const alldata = { 
            hora: Data.toLocaleTimeString(),
            data: String(Data.getDate()).padStart(2, '0'),
            mes: String(Data.getMonth() + 1).padStart(2, '0'),
            ano: Data.getFullYear()
        };
        
        await schedule.scheduleJob({
            hour: 21,
            minute: 11,
            dayOfWeek: [0, new schedule.Range(0,6)]
        }, async function() { 
            await sendEmail(alldata), 
            console.log(`Olá, confira o seu email.`) 
        });

    };
};

module.exports = new timeToSendEmail();
