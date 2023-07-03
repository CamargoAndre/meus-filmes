
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CamposModule } from 'src/app/shared/components/campos/campos.module';
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [CadastroFilmeComponent, ListarFilmesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    InfiniteScrollModule
   ],

})
export class FilmesModule {}
