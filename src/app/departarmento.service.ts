import { Injectable } from '@angular/core';
import { Departamento } from "./models/departamento.model";

@Injectable({
  providedIn: 'root'
})
export class DepartarmentoService {

  departamentoss: Departamento[] = [
    { id: 1, nome: "contabil" },
    { id: 2, nome: "RH" },
    { id: 3, nome: "Info" },
    { id: 4, nome: "Compras" },
  ];

  nextid: number = 5;


  constructor() { }

  getdepartament(): Departamento[] {
    return this.departamentoss
  }

  adddepartament(d: Departamento) {
    this.departamentoss.push({ ...d, id: this.nextid++ });
    console.log(this.departamentoss);

  }
  getdepartamentById(id: number): Departamento | undefined {
    return this.departamentoss.find((d) => d.id == id);
  }

}
