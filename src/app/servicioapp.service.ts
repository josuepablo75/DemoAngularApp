import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmploye } from './employee'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ServicioappService {

   consulta: any[] = []; 
   private _url: string = "https://jsonplaceholder.typicode.com/posts/"; 

  constructor( private http: HttpClient) { }

  getLista() : Observable<IEmploye[]>{
    return this.http.get<IEmploye[]>(this._url);
  }

  buscarItem(id) : Observable<IEmploye[]> {
    return this.http.get<IEmploye[]>( this._url+id); 
  }

}
