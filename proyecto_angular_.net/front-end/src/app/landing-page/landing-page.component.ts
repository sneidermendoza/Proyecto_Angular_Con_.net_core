import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  peliculasEnCine: Array<any>;
  peliculasProximosEstrenos: Array<any>
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCine = [{
        titulo : 'Spider-man Far From home',
        fecha_lanzamiento : new Date(),
        precio: 1400.9,
        poster: '../assets/img/spider-man.jpg'
      },
      {
        titulo : 'The Avenger',
        fecha_lanzamiento : new Date('2016-11-14'),
        precio : 1800.20,
        poster: '../assets/img/the avenger.jpg'
      }]
      }, 2000);
      setTimeout(() => {
        this.peliculasProximosEstrenos =[]
      }, 2000);
  }

}
