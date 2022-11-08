import { Component, OnInit } from '@angular/core';

import { DepartarmentoService } from '../departarmento.service';

@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css']
})
export class DepartamentoFormComponent implements OnInit {

  depName: any = '';

  constructor(
    private departamentoService: DepartarmentoService) { }

  ngOnInit(): void {
  }


  save() {
    this.departamentoService.adddepartament({ nome: this.depName });
    this.clear()
  }
  clear() {
    this.depName = "";
  }

}
