var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(_nome, _sobrenome, _idade) {
        this._nome = _nome;
        this._sobrenome = _sobrenome;
        this._idade = _idade;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sobrenome", {
        get: function () {
            return this._sobrenome;
        },
        set: function (sobrenome) {
            this._sobrenome = sobrenome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            this._idade = idade;
        },
        enumerable: true,
        configurable: true
    });
    return Pessoa;
}());
var Disciplina = /** @class */ (function () {
    function Disciplina(_id, _nome) {
        this._id = _id;
        this._nome = _nome;
    }
    Object.defineProperty(Disciplina.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Disciplina.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: true,
        configurable: true
    });
    return Disciplina;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(_matricula, nome, sobrenome, idade) {
        var _this = _super.call(this, nome, sobrenome, idade) || this;
        _this._matricula = _matricula;
        return _this;
    }
    Object.defineProperty(Aluno.prototype, "matricula", {
        get: function () {
            return this._matricula;
        },
        set: function (matricula) {
            if (matricula == "" || matricula == null)
                throw new Error("Deixa de ser burro, matrícula não poder ser nula ou vazia. lesado!!!");
            this._matricula = matricula;
        },
        enumerable: true,
        configurable: true
    });
    Aluno.prototype.toString = function () {
        return "\n        Matricula: " + this.matricula + "\n        Nome: " + this.nome + " " + this.sobrenome + "\n        Idade: " + this.idade;
    };
    Aluno.prototype.realizarAutoMatricula = function (disciplina) {
        return true;
    };
    return Aluno;
}(Pessoa));
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var leo = new Aluno("378674", "Leo", "Jaimesson", 50);
        var dados = prompt("Digite seus dados:").split(" ");
        var gleydson = new Aluno(dados[0], dados[1], dados[2], parseInt(dados[3]));
        console.log(leo.toString());
        try {
            leo.matricula = "";
        }
        catch (e) {
            console.log(leo.toString());
        }
        console.log(gleydson.toString());
    };
    return Main;
}());
Main.main();
