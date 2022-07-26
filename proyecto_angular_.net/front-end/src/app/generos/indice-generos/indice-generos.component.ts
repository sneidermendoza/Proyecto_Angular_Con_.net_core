import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { generoCreacionDTO, generoDTO } from '../genero';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  constructor(private generosService: GenerosService) { }

  generos: generoDTO[];
  columnasAMostrar= ['id', 'nombre', 'acciones'];
  cantidadTotalDeRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar );
  }

  cargarRegistros(pagina: number, cantidadRegistrosAMostrar){
    this.generosService.obtenerTodos(pagina,cantidadRegistrosAMostrar)
    .subscribe((respuesta: HttpResponse<generoDTO[]>) => {
      this.generos = respuesta.body;
      this.cantidadTotalDeRegistros = respuesta.headers.get("cantidadTotalDeRegistros");
    }, error => console.log(error));
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

}
