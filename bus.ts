class Aluno {
    private id: number;
    private nome: string;

    public constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }
}

class Bus {
    private id: number;
    private qtdMax: number;
    private alunosSentados: number;
    private listAlunos: Aluno[];

    public constructor(id: number, qtdMax: number) {
        this.id = id;
        this.qtdMax = qtdMax;
        this.alunosSentados = 0;
        this.listAlunos = [];
    }

    public embarcar(aluno: Aluno): boolean {
        if (this.alunosSentados == this.qtdMax)
            return false;
        for (let a of this.listAlunos)
            if (a.getId() == aluno.getId())
                return false;
        this.listAlunos.push(aluno);
        this.alunosSentados += 1;
        return true;
    }

    public desembarcar(id: number): boolean {
        for (let aluno of this.listAlunos) {
            if (aluno.getId() == id) {
                let identificador = this.listAlunos.indexOf(aluno);
                this.listAlunos.splice(identificador, 1);
                this.alunosSentados -= 1;
                return true;
            }
        }
        return false;
    }

    public show(): string {
        let bus: string = "[ x ";
        for (let i = 0; i < this.qtdMax; i++) {
            if (this.listAlunos[i] != null) {
                bus += this.listAlunos[i].getNome() + " ";
            } else {
                bus += "- ";
            }
        }
        bus += "]";
        return bus;
    }

}

class Escola {
    public static main(): void {
        let info1: Aluno = new Aluno(1, "joao");
        let info2: Aluno = new Aluno(2, "maria");
        let info3: Aluno = new Aluno(3, "jose");

        let busao: Bus = new Bus(1, 5);

        console.log(busao.show());
        if (busao.embarcar(info1)) {
            console.log(info1.getNome() + " embarcou!");
        }

        if (busao.embarcar(info2)) {
            console.log(info2.getNome() + " embarcou!");
        }

        if (busao.embarcar(info3)) {
            console.log(info3.getNome() + " embarcou!");
        }

        if (busao.embarcar(info1)) {
            console.log(info1.getNome() + " embarcou!");
        } else {
            console.log("erro ao embarcar!");
        }
        console.log(busao.show());

        if (busao.desembarcar(3))
            console.log(info3.getNome() + "desembarcou com sucesso!");

        console.log(busao.show());

    }
}


Escola.main();