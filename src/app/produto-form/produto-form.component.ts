import { Component, OnInit } from '@angular/core';
import { Departamento } from '../models/departamento.model';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {


  name : string = '';
    price: number = 0 ;
  description: string = '';
  departamentos!: Departamento[];


  constructor() { }

  ngOnInit(): void {
  }
    

save() {

}

clear() {

}
}
