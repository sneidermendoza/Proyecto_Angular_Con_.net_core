import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }
  @Input()
  peliculas;
  
  ngOnInit(): void {
    }
  
    remover(indicepelicula: number): void{
      this.peliculas.splice(indicepelicula, 1)
  }
}
