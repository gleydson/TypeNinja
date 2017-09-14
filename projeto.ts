interface Graduacao {
    realizarAutoMatricula(disciplina: Disciplina): boolean;
}

class Pessoa {
    constructor(private _nome: string, private _sobrenome: string, private _idade: number) { }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get sobrenome(): string {
        return this._sobrenome;
    }

    set sobrenome(sobrenome: string) {
        this._sobrenome = sobrenome;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(idade: number) {
        this._idade = idade;
    }
}

class Disciplina {

    constructor(private _id: number, private _nome: string) { }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }
}

class Aluno extends Pessoa implements Graduacao {

    constructor(private _matricula: string, nome: string, sobrenome: string, idade: number) {
        super(nome, sobrenome, idade);
    }

    get matricula(): string {
        return this._matricula;
    }

    set matricula(matricula: string) {
        this._matricula = matricula;
    }

    toString() {
        return `Matricula: ${this.matricula}
                Nome: ${this.nome} ${this.sobrenome}
                Idade: ${this.idade}`;
    }

    realizarAutoMatricula(disciplina: Disciplina): boolean {
        return true;
    }

}

class Main {
    public static main() {
        let leo: Aluno = new Aluno("378674", "Leo", "Jaimesson", 50);
        console.log(leo);
    }
}

Main.main();