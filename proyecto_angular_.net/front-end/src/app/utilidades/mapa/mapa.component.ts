import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { Coordenada } from './cordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }
  
  @Output()
  cordenadaSeleccionada: EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  ngOnInit(): void {
  }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 14,
    center: latLng(10.997572621196852, -74.79071080654909)
  };

  capas:Marker<any>[] = [];

  manejarClick(event: LeafletMouseEvent){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log({latitud, longitud});

    this.capas = [];
    this.capas.push(marker([latitud, longitud]));
    this.cordenadaSeleccionada.emit({latitud: latitud, longitud: longitud});

  }

}
