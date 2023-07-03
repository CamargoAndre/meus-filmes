import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TopoComponent } from './shared/components/topo/topo.component';
import { AlertaComponent } from './shared/components/alerta/alerta.component';
import { RodapeComponent } from './shared/components/rodape/rodape.component';
import { TabelaComponent } from './shared/components/tabela/tabela.component';
import { FilmesModule } from './filmes/filmes.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    AlertaComponent,
    RodapeComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    MaterialModule,
    FilmesModule,
    HttpClientModule,
  ],
  entryComponents: [AlertaComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
