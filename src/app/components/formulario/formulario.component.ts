import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  @Output() datoSeleccionado = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  inputValue = '';
  public getInputValue(inputValue:string){
    if(inputValue.length >= 5){
      if(inputValue === 'doublevpartners'){
        Swal.fire({
          title: '¡Error!',
          text: 'NO se permite la búsqueda de “doublevpartners”.'
        })
      } else{
        //console.log(inputValue);
        const dato = inputValue;
        this.datoSeleccionado.emit(dato)
      }
    } else{
      Swal.fire({
        title: '¡Error de longitud!',
        text: 'El usuario debe tener más de 4 carácteres.'
      })
    }
  }
}