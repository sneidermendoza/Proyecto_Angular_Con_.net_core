import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { peliculaCreacionDTO, peliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }

  form : FormGroup

  @Input()
  modelo: peliculaDTO

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
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
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
