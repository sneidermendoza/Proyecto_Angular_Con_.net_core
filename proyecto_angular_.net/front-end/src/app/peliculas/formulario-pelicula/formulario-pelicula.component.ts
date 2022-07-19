import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { peliculaCreacionDTO, peliculaDTO } from '../pelicula';
import { MultipleSelectorModelo } from '../../utilidades/selector-multipe/MultipleselectorModelo';

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

  generosNoSeleccionados: MultipleSelectorModelo[] = [
    {llave: 1, valor: 'Drama'}, 
    {llave: 2, valor: 'Accion'}, 
    {llave: 3, valor: 'Comedia'},
  ];

  generosSeleccionados: MultipleSelectorModelo[] = [];
  
  cinesNoSeleccionados: MultipleSelectorModelo[] = [
    { llave: 1, valor: 'Barranquilla'},
    { llave: 2, valor: 'Soledad'},
    { llave: 3, valor: 'Puerto colombia'},
  ];

  cinesSeleccionados: MultipleSelectorModelo[] = [];


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
      poster: '',
      generosID: '',
      cinesID: '',
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
    const generosIds = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosID').setValue(generosIds);

    const cinesIds = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesID').setValue(cinesIds);
    
    this.onSubmit.emit(this.form.value);
  }

}
