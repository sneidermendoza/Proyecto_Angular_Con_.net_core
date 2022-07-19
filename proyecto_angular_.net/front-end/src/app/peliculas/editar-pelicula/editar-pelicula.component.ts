import { Component, OnInit } from '@angular/core';
import { peliculaDTO, peliculaCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: peliculaDTO = {titulo: 'Spider-man', trailer: 'abc', enCines: true, resumen: 'cosa',
    fechaLanzamiento: new Date(), poster: 'https://www.gratistodo.com/wp-content/uploads/2016/09/imagenes-de-Spiderman-7.jpg' }

  ngOnInit(): void {
  }

  guardarCambios(pelicula: peliculaCreacionDTO){
    console.log(pelicula);
}
}
