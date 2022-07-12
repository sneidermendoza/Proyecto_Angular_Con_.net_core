import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  peliculasEnCine: Array<any>;
  peliculasProximosEstrenos: Array<any>

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCine = [{
        titulo : 'Spiderman - Far From Home',
        fecha_lanzamiento : new Date(),
        precio : 1400.9
      },
      {
        titulo : 'Avenger',
        fecha_lanzamiento : new Date('2016-11-14'),
        precio : 1800.20
      }]
      }, 2000);
      setTimeout(() => {
        this.peliculasProximosEstrenos =[]
      }, 2000);
  }   
}
