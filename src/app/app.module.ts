import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DepartamentoFormComponent } from './departamento-form/departamento-form.component';
import { ProdutoTabelaComponent } from './produto-tabela/produto-tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoFormComponent,
    DepartamentoFormComponent,
    ProdutoTabelaComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
