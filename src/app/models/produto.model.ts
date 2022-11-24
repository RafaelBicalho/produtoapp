import { Departamento } from "./departamento.model";

export interface Produto {
id?:number;
nome:string;
preco: number;
descricao:string;
departamento?:Departamento;
}