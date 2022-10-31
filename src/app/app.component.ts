import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'usuarios';
  listUsuario: string[]= [];
  loading = false;

  constructor(private usuarioService: UsuariosService){}

  getInputValue(inputValue:string){
    //console.log(parametros);
    this.loading = true;
    this.listUsuario = [];

    setTimeout(() => {
      this.usuarioService.getUsuarios(inputValue).subscribe(data => {
        //console.log(data);
        this.loading = false;
        this.listUsuario = data.items;
      })
    }, 300);
  }
}