const body_parser = require('body-parser');
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
require('./app/adiministrative_invoicing_day/time_To_Send_The_Email_To_Adim').timeToSendEmail();


class config {
    constructor (){
        this.app = express();
        this.middlewares();
        this.routes();
    };

    middlewares(){
        this.app.use(cors());
        this.app.use(body_parser.json());
    };

    routes(){
        this.app.use(routes);
    };

};

module.exports = new config().app;

