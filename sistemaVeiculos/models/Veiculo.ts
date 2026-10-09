import { VeiculoProps } from "../interface/VeiculoProps.js";

export abstract class Veiculo<T extends VeiculoProps= VeiculoProps>{

constructor(protected props: T) {}
public get getMarca(): string { return this.props.marca; }
public get getModelo(): string { return this.props.modelo;}
public get getAno(): number { return this.props.ano;}
public get getPlaca(): number { return this.props.placa;}

public set setMarca(novoMarca: string) {
        if (novoMarca.trim().length === 0) {
            console.log("\n ERRO: O Marca não pode ser vazio!");
            return;
        }
        this.props.marca = novoMarca;
    }

    public set setModelo(novoModelo: string) {
        if (novoModelo.trim().length === 0) {
            console.log("\n ERRO: O Modelo não pode ser vazio!");
            return;
        }
        this.props.modelo = novoModelo;
    }

    public set setAno(novoAno: number) {
        if (novoAno === 0) {
            console.log("\n ERRO: O Ano não pode ser vazio!");
            return;
        }
        this.props.ano = novoAno;
    }
    public set setPlaca(novoPlaca: number) {
        if (novoPlaca === 0) {
            console.log("\n ERRO: O Placa não pode ser vazio!");
            return;
        }
        this.props.placa = novoPlaca;
    }


}