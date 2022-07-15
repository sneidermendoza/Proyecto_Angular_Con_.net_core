import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: actorDTO = {nombre: 'felipe', fechaNacimiento: new Date(), foto: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2f/Tom_Holland.jpg'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      // alert(params.id);
    })
  }
  
  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
  }

}
