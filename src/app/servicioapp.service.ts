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

  insertarItem( item : IEmploye){
    return this.http.post("https://jsonplaceholder.typicode.com/posts", {
        title : item.title, 
        body: item.body
          }); 
         
  }

  eliminarItems(id){
    return this.http.delete("https://jsonplaceholder.typicode.com/posts/"+id); 
  }

  editarItem(item : IEmploye){
    return this.http.put("https://jsonplaceholder.typicode.com/posts/"+ item.id , {
      title : item.title, 
      body: item.body
    }); 
  }

}
