import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { peliculaCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }

  form : FormGroup

  @Output()
  onSubmit: EventEmitter<peliculaCreacionDTO> = new EventEmitter<peliculaCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      titulo: [
        '',
        {validators: [Validators.required]}
      ],
      resumen: '',
      enCine: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: ''
    })
  }

  archivoSeleccionado(archivo: File){
    this.form.get('poster').setValue(archivo)
  }

  changeMarkdown(texto){
    this.form.get('resumen').setValue(texto);
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

}
