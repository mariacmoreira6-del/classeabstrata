import { ContaBancaria } from "./ContaBancaria.js";
import { ContaProps, ContaCorrenteProps } from "../interfaces/ContaProps.js";

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps>{

constructor(props: ContaCorrenteProps) {
        super(props);
    }
public get getLimite(): number { return this.props.limite;}

public set setLimite(novoLimite: number) {
        if (novoLimite=== 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.limite = novoLimite;
}}