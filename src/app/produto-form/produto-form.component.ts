import { Component, OnInit } from '@angular/core';
import { DepartarmentoService } from '../departarmento.service';
import { Departamento } from '../models/departamento.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  name : string = '';
    price:number=0;
  description: string = '';
  departamentoos:Departamento[]=[];


  constructor(
    private departamentoService : DepartarmentoService,
    private  produtoService : ProdutoService
     ) { }

  ngOnInit()   {
     this.departamentoos = this.departamentoService.getdepartament();
  }
    

save() {

}
 
clear() {

}
}
