import { Component, OnInit } from '@angular/core';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-crear-actore',
  templateUrl: './crear-actore.component.html',
  styleUrls: ['./crear-actore.component.css']
})
export class CrearActoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
  }

}
