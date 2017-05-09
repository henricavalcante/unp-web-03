'use strict';

const db = require('./db');

class Veiculo {

    constructor({Modelo, Descricao, Placa, Tarifa, Codigo = undefined}) {
        this.Modelo = Modelo;
        this.Descricao = Descricao;
        this.Placa = Placa;
        this.Tarifa = Tarifa;
        this.Codigo = Codigo;
    }

    static deleteAll() {
        return db.query('DELETE FROM Veiculo;');
    }

    static getAll() {
        return db.query('SELECT * FROM Veiculo;');
    }

    static get(codigo) {
        return db
            .query('SELECT * FROM Veiculo WHERE codigo = ? LIMIT 1;', codigo)
            .then(results => {
                const v = new Veiculo(results[0]);
                return v;
            });
    }

    insert() {
        if (this.codigo) throw 'Não permitido inserir se código existir';
        return db
            .query('INSERT INTO Veiculo SET ?', this)
            .then(result => (this.codigo = result.insertId, this));
    }

    delete() {
        if (!this.Codigo) throw 'Não permitido deletar se código não existir';
        return db
            .query('DELETE FROM Veiculo WHERE codigo = ?', [this.Codigo])
            .then(result => {
                this.Modelo = undefined;
                this.Descricao = undefined;
                this.Placa = undefined;
                this.Tarifa = undefined;
                this.Codigo = undefined;
                return this;
            });
    }
}

module.exports = Veiculo;
