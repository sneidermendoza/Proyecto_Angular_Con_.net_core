import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor() { }

  control: FormControl = new FormControl();
  
  actores = [
    {nombre: 'Tom Holland', personaje: '', foto:'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQp7XNv6HleTfZwfX7nSAAOEM3Dntv26l7EICMisSls6G65kv_YNX9j87ORQ1TZhZTP'},
    {nombre: 'Tom Hanks', personaje: '',foto:'https://decine21.com/img/upload/perfiles/tom-hanks-5670/tom-hanks-2-1839-c.jpg'},
    {nombre: 'Samuel l Jackson', personaje: '', foto:'https://es.web.img2.acsta.net/pictures/15/07/27/12/24/354255.jpg'}
    ];

  actoresOriginal = this.actores;

  actoresSeleccionados = [];

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table: MatTable<any>;


  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1);
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if (this.table !== undefined){
      this.table.renderRows();
    }
  }

  eliminar(actor){
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }
  
  finalizarArrastre(event: CdkDragDrop<any[]>){
    const indicePrevio = this.actoresSeleccionados.findIndex(
      actor => actor === event.item.data
    )
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
    this.table.renderRows();
  }
}
