import { Injectable } from '@angular/core';
import { timeStamp } from 'console';
import { DepartarmentoService } from './departarmento.service';
import { Produto } from "./models/produto.model";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private dataFromServer: any[] = [
    { id: 1, nome: "laptop1", preco: 40, descricao: "computador1", departamento_id: 4 },
    { id: 2, nome: "laptop2", preco: 41, descricao: "computador2", departamento_id: 1 },
    { id: 3, nome: "laptop3", preco: 42, descricao: "computador3", departamento_id: 1 },
    { id: 4, nome: "laptop4", preco: 43, descricao: "computador4", departamento_id: 3 }
  ]

  produtoss: Produto[] = [];

  nextID: number = 5;


  constructor(private departamentoService: DepartarmentoService) {
    for (let p of this.dataFromServer) {
      this.produtoss.push({
        id: p.id,
        nome: p.nome,
        descricao: p.descricao,
        preco: p.preco,
        departamento : this.departamentoService.getdepartamentById(p.id)
      });
      this.nextID =p.id+1;
    }
  }
  getProduto(): Produto[] {
    return this.produtoss
  }
  addProduto(p: Produto) {
    this.produtoss.push({ id: this.nextID++, ...p});

  }
}
