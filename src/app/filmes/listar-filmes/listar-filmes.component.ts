import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})


export class ListarFilmesComponent implements OnInit {

  readonly qtdPagina = 4;
  pagina = 0;
  filmes: Filme[] = [];


  constructor(private filmesService: FilmesService){}

  ngOnInit(): void {

    this.listarFilmes()
  }

  onScroll(): void{
    this.listarFilmes()

  }


  private listarFilmes(): void{

    this.pagina++;
    this.filmesService.listar(this.qtdPagina, this.qtdPagina)
    .subscribe((filmes: Filme[]) => this.filmes.push(...filmes));
  }

}
