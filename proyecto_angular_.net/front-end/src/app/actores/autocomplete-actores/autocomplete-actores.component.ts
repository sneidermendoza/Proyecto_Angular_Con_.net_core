import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor() { }

  control: FormControl = new FormControl();
  
  actores = [
    {nombre: 'Tom Holland', foto:'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQp7XNv6HleTfZwfX7nSAAOEM3Dntv26l7EICMisSls6G65kv_YNX9j87ORQ1TZhZTP'},
    {nombre: 'Tom Hanks', foto:'https://decine21.com/img/upload/perfiles/tom-hanks-5670/tom-hanks-2-1839-c.jpg'},
    {nombre: 'Samuel l Jackson', foto:'https://es.web.img2.acsta.net/pictures/15/07/27/12/24/354255.jpg'}
    ];

  actoresOriginal = this.actores;

  actoresSeleccionados = [];

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
  }

}
