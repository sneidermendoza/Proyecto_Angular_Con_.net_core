import { Component, Input, OnInit } from '@angular/core';
import { MultipleSelectorModelo } from './MultipleselectorModelo';

@Component({
  selector: 'app-selector-multipe',
  templateUrl: './selector-multipe.component.html',
  styleUrls: ['./selector-multipe.component.css']
})
export class SelectorMultipeComponent implements OnInit {

  constructor() { }

  @Input()
  Seleccionados: MultipleSelectorModelo[] = [];

  @Input()
  NoSeleccionados: MultipleSelectorModelo[] = [];

  ngOnInit(): void {
  }

  selccionar(item: MultipleSelectorModelo, index: number){
    this.Seleccionados.push(item);
    this.NoSeleccionados.splice(index, 1);
  }

  deselccionar(item: MultipleSelectorModelo, index: number){
    this.NoSeleccionados.push(item);
    this.Seleccionados.splice(index, 1);
  }

  seleccionarTodo(){
    this.Seleccionados.push(...this.NoSeleccionados);
    this.NoSeleccionados = [];
  }

  deseleccionarTodo(){
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados = [];
  }

}
