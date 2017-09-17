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

    public constructor(private capacidade:number) {
        this.passageiros = new Array<Passageiro>();
        this.ocupacao = 0;
    }

    public getEspacoLivre():number {
        return this.capacidade - this.ocupacao;
    }

    public getNumPassageiros():number {
        return this.ocupacao;
    }

    public embarcar(passageiro:Passageiro):void {
        if(this.ocupacao == this.capacidade)
            throw new Error(`Capacidade atingida!`);
        if(passageiro == null)
            throw new Error(`Passageiro inválido!`);
        this.passageiros.push(passageiro);
        this.ocupacao++;
    }

    public desembarcar(passageiro: Passageiro): void {
        if(this.procurarPassageiro(passageiro.id) == null)
            throw new Error(`Passageiro não encontrado!`);
        if(passageiro == null)
            throw new Error(`Passageiro inválido!`);;
        let i = this.passageiros.indexOf(passageiro);
        this.passageiros.splice(i, 1);
        this.ocupacao--;
    }

    public procurarPassageiro(id:number):Passageiro {
        for(let passageiro of this.passageiros)
            if(passageiro.id == id)
                return passageiro;
        return null;
    }

    public toString():string {
        let vagao:string;
        vagao = "[ ";
        for(let i = 0; i < this.capacidade; i++) {
            if(this.passageiros[i] != null)
                vagao += this.passageiros[i].id + "|" + this.passageiros[i].nome + " ";
            else
                vagao += "- ";
        }
        vagao += "]";
        return vagao;
    }
}

class Trem {

    private vagoes:Vagao[];
    private ocupacaoVagoes:number;

    public constructor(private limiteVagoes:number) {
        this.vagoes = [];
        this.ocupacaoVagoes = 0;
    }

    public addVagao(capacidade:number):void {
        if(capacidade <= 0)
            throw new Error(`Valor da inválido!`);
        if (capacidade == null)
            throw new Error(`Valor da capacidade inválido!`);
        if (this.limiteVagoes == this.ocupacaoVagoes)
            throw new Error(`Capacidade atingida!`);
        this.vagoes.push(new Vagao(capacidade));
        this.ocupacaoVagoes++;
        console.log(`Vagão adicionado com sucesso!`);
    }

    public getEspacoLivre(): number {
        let count;
        for(let vagao of this.vagoes)
            count += vagao.getEspacoLivre();
        return count;
    }

    private getNumPassageiros(): number {
        let count;
        for (let vagao of this.vagoes)
            count += vagao.getNumPassageiros();
        return count;
    }

    public embarcar(passageiro: Passageiro):void {
        for(let vagao of this.vagoes)
            if(vagao.getEspacoLivre() > 0) {
                try {
                    vagao.embarcar(passageiro);
                    console.log(`Passageiro embarcado com sucesso!`);
                    return;
                } catch (e) {
                    console.log("Error: " + e);
                }
            }
    }

    public desembarcar(id: number):void {
        let passageiro:Passageiro = this.procurarPassageiro(id);
        for(let vagao of this.vagoes)
            if(passageiro != null) {
                try {
                    vagao.desembarcar(passageiro);
                    console.log(`Passageiro desembarcado com sucesso!`);
                } catch (e) {
                    console.log("Error: " + e);
                }
            }
    }

    private procurarPassageiro(id: number): Passageiro {
        for (let vagao of this.vagoes)
            if(vagao.procurarPassageiro(id) != null)
                return vagao.procurarPassageiro(id);
        return null;
    }

    public toString(): string {
        let trem: string = "< ";
        for (let v of this.vagoes)
            trem += v.toString() + " ";
        trem += ">";
        return trem;
    }
}

class Exec {
    static nextId:number = 1;
    static main() {
        let t: Trem;
        while(true) {
            let command = prompt("Digite seu comando:").split(" ");
            let key = command[0];
            switch (key) {
                case "iniciarTrem":
                    t = new Trem(parseInt(command[1]));
                    console.log("Trem criado com sucesso!");
                    break;
                case "addVagao":
                    try {
                        t.addVagao(parseInt(command[1]));
                    } catch (error) {
                        console.log(error);
                    }
                    break;
                case "getEspacoLivre":
                    console.log(t.getEspacoLivre() + "espaços livres.");
                    break;
                case "embarcar":
                    t.embarcar(new Passageiro(Exec.nextId, command[1]));
                    Exec.nextId++;
                    break;
                case "desembarque":
                    t.desembarcar(parseInt(command[1]));
                    break;
                case "show":
                    console.log(t.toString());
                    break;
                default:
                    break;
            }
        }
    }
}

Exec.main();