import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private forBuilder: FormBuilder) { }

  form: FormGroup
  generos = [
    {id: 1, nombre:'Drama'},
    {id: 2, nombre:'Accion'},
    {id: 1, nombre:'Comedia'}
  ];

  peliculas = [
    {titulo: 'spider-Man Far From Home', enCines: false, proximosEstrenos: true, generos: [1,2],poster:'../assets/img/spider-man.jpg'},
    {titulo: 'The avenger', enCines: true, proximosEstrenos: false, generos: [3],poster:'../assets/img/the avenger.jpg'},
    {titulo: 'inception', enCines: false, proximosEstrenos: false, generos: [1,3],poster:'https://cdn.culturagenial.com/es/imagenes/inception-cke.jpg'}
  ]

  peliculasoriginal = this.peliculas;

  formularioOriginal = {
      titulo: '',
      generoId: 0,
      proximosEstrenos: false,
      enCines: false
  }

  ngOnInit(): void {
    this.form = this.forBuilder.group(this.formularioOriginal);
    this.form.valueChanges
    .subscribe(valores => {
      this.peliculas = this.peliculasoriginal;
      this.buscarPeliculas(valores);
    })
  }

  buscarPeliculas(valores: any){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }
    if (valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }
    if (valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos );
    }
    if (valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines );
    }
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }

}
