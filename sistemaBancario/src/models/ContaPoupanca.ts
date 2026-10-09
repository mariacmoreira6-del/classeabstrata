import { ContaBancaria } from "./ContaBancaria.js";
import { ContaProps, ContaPoupancaProps } from "../interfaces/ContaProps.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps>{

constructor(props: ContaPoupancaProps) {
        super(props);
    }
public get getTaxaAniversario(): number { return this.props.taxaAniversario;}

public set setTaxaAniversario(novoTaxaAniversario: number) {
        if (novoTaxaAniversario=== 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.taxaAniversario = novoTaxaAniversario;
}}