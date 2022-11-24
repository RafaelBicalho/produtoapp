import { Injectable } from '@angular/core';
import { Departamento } from "./models/departamento.model";

@Injectable({
  providedIn: 'root'
})
export class DepartarmentoService {

  private departamentosss: Departamento[] = [
    { id: 1, nome: "contabil" },
    { id: 2, nome: "RH" },
    { id: 3, nome: "Info" },
    { id: 4, nome: "Compras" }
  ];

  private nextid: number =5;
    
           
  constructor() { }

  getdepartament(): Departamento[] {
    return this.departamentosss;
  }



  adddepartament(d: Departamento) {
    this.departamentosss.push({ ...d, id: this.nextid++ });
    console.log(this.departamentosss);

  }
  getdepartamentById(id: number): Departamento | undefined {
    return this.departamentosss.find((d) => d.id == id);
  }

}
