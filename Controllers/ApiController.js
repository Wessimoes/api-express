const fs = require('fs');
const apiController = {
    cidades: (req, res) => {
        res.status(200).json(require('../datas/cidades.json'));
    },

    orgaos: (req, res) => {
        res.status(200).json(require('../datas/orgaos.json'));
    },

    unidades: (req, res) => {
        res.status(200).json(require('../datas/unidades.json'));
    },

    orgaoseunidades: (req, res) => {
        res.status(200).json(require('../datas/orgaoseunidades.json'));
    },
}

module.exports = apiController;