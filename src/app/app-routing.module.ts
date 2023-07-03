import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFilmesComponent } from './filmes/listar-filmes/listar-filmes.component';
import { CadastroFilmeComponent } from './filmes/cadastro-filme/cadastro-filme.component';
import { FilmesModule } from './filmes/filmes.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'filmes',
    pathMatch: 'full'

  },
  {
    path: 'filmes',
    children: [
      {
        path: '',
        component: ListarFilmesComponent
      },
      {
        path: 'cadastro',
        component: CadastroFilmeComponent,
        pathMatch: 'full'
      }
    ]
  },
  {path: '**', redirectTo: 'filmes'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FilmesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
