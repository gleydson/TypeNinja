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

class Aluno extends Pessoa {

    constructor(private _matricula: string, nome: string, sobrenome: string, idade: number) {
        super(nome, sobrenome, idade);
    }

    get matricula(): string {
        return this._matricula;
    }

    set matricula(matricula: string) {
        if (matricula == "" || matricula == null)
            throw new Error("Deixa de ser burro, matrícula não poder ser nula ou vazia. lesado!!!");
        this._matricula = matricula;
    }

    toString() {
        return `
        Matricula: ${this.matricula}
        Nome: ${this.nome} ${this.sobrenome}
        Idade: ${this.idade}`;
    }

}

class GAluno implements Graduacao {

    private listAlunos: Set<Aluno>

    constructor() {
        this.listAlunos = new Set<Aluno>();
    }

    getAluno(matricula: string): Aluno {
        for (let aluno of this.listAlunos)
            if (aluno.matricula == matricula)
                return aluno;
        return null;
    }

    getAlunoAll(): Array<Aluno> {
        let list: Array<Aluno> = new Array<Aluno>();
        for (let aluno of this.listAlunos)
            list.push(aluno);
        return list;
    }

    criarAluno(aluno: Aluno): boolean {
        if (aluno != null) {
            this.listAlunos.add(aluno);
            return true;
        }
        return false;
    }

    realizarAutoMatricula(disciplina: Disciplina): boolean {
        return true;
    }

}

class Main {
    public static main() {
        let gAlunos:GAluno = new GAluno();
        gAlunos.criarAluno(new Aluno("378674", "Leo", "Jaimesson", 50));
        let dados = prompt("Digite seus dados:").split(" ");
        gAlunos.criarAluno(new Aluno(dados[0], dados[1], dados[2], parseInt(dados[3])));
        let leo = gAlunos.getAluno("378674");
        let gleydson = gAlunos.getAluno(dados[0]);
        console.log(leo.toString());
        try {
            leo.matricula = "";
        } catch (e) {
            console.log(leo.toString());
        }
        console.log(gleydson.toString());
    }
}

Main.main();
