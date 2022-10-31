import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})

export class ListadoUsuariosComponent implements OnInit {
  @Input() listUsuario: any;
  public pagina: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }
}