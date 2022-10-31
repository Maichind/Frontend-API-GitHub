import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsuarios(inputValue: string): Observable<any>{
    const URL = 'https://api.github.com/search/users?q='+inputValue+'';
    //console.log(inputValue);
    return this.http.get(URL);
  }
}
