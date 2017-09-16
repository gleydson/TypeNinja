class Passageiro {
    constructor(private _id:number, private _nome:string) {}

    get id():number {
        return this._id;
    }

    set id(id:number) {
        this._id = id;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }
}

class Vagao {

    private passageiros:Array<Passageiro>;
    //private passageiros:Passageiro[];    /* Mesma coisa! */
    private ocupacao: number;

    constructor(private capacidade:number) {
        this.passageiros = new Array<Passageiro>();
        this.ocupacao = 0;
    }

    getEspacoLivre():number {
        return this.capacidade - this.ocupacao;
    }

    getNumPassageiros():number {
        return this.ocupacao;
    }

    embarcar(passageiro:Passageiro):boolean {
        if(this.ocupacao == this.capacidade)
            return false;
        if(passageiro == null)
            return false;
        this.passageiros.push(passageiro);
        this.ocupacao++;
        return true;
    }

    desembarcar(passageiro:Passageiro):boolean {
        if(passageiro != null)
            return false;
        let i = this.passageiros.indexOf(passageiro);
        this.passageiros.splice(i, 1);
        this.ocupacao--;
        return true;
    }

    procurarPassageiro(id:number):Passageiro {
        for(let passageiro of this.passageiros)
            if(passageiro.id == id)
                return passageiro;
        return null;
    }

    toString():string {
        let vagao:string;
        vagao = "[ ";
        for(let i = 0; i < this.capacidade; i++) {
            if(this.passageiros[i] != null)
                vagao += this.passageiros[i].nome + " ";
            else
                vagao += "- ";
        }
        vagao = "]";
        return vagao;
    }
}

class Trem {

    private vagoes:Vagao[];
    private ocupacaoVagoes:number;

    constructor(private limiteVagoes:number) {
        this.vagoes = [];
        this.ocupacaoVagoes = 0;
    }

    addVagao(vagao:Vagao):boolean {
        if (this.limiteVagoes == this.ocupacaoVagoes)
            return false;
        this.vagoes.push(vagao);
        this.ocupacaoVagoes++;
        return true;
    }

    getEspacoLivre(): number {
        let count;
        for(let vagao of this.vagoes)
            count += vagao.getEspacoLivre();
        return count;
    }

    getNumPassageiros(): number {
        let count;
        for (let vagao of this.vagoes)
            count += vagao.getNumPassageiros();
        return count;
    }

    embarcar(passageiro: Passageiro):boolean {
        for(let vagao of this.vagoes)
            if(vagao.getEspacoLivre() > 0) {
                vagao.embarcar(passageiro);
                return true;
            }
        return false;
    }

    desembarcar(passageiro: Passageiro):boolean {
        for(let vagao of this.vagoes)
            if(vagao.procurarPassageiro(passageiro.id) != null) {
                vagao.desembarcar(passageiro);
                return true;
            }
        return false;
    }

    procurarPassageiro(id: number): Passageiro {
        for (let vagao of this.vagoes)
            if(vagao.procurarPassageiro(id) != null)
                return vagao.procurarPassageiro(id);
        return null;
    }

    toString(): string {
        let trem: string = "< ";
        for (let v of this.vagoes)
            trem += v.toString() + " ";
        trem = ">";
        return trem;
    }
}

class Main {
    static main() {
        /* TODO */
    }
}

Main.main();