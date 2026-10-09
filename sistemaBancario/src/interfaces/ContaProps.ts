export interface ContaProps{
    numeroConta: string;
    titular: string;
    saldo: number;
    agencia: string;
    
}
 export interface ContaCorrenteProps extends ContaProps{
    limite:number;
 }
 export interface ContaPoupancaProps extends ContaProps{
    taxaAniversario:number;
 
 }