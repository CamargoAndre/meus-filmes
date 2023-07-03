import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFilmeComponent } from './filmes/cadastro-filme/cadastro-filme.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TopoComponent } from './shared/components/topo/topo.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastroFilmeComponent,
    TopoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    MaterialModule
  ],
  entryComponents: [],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
