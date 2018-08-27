import { Component, OnInit } from '@angular/core';
import {ServicioappService} from './../servicioapp.service'; 

@Component({
  selector: 'app-agregarpost',
  templateUrl: './agregarpost.component.html',
  styleUrls: ['./agregarpost.component.css']
})
export class AgregarpostComponent implements OnInit {

  item: any = {
    title: '',
    body: ''
  }

  lista: any[ ] = [] ;
  show : boolean = false; 

  constructor( private _servicio: ServicioappService) {
    // console.log(this.show);
   }

  ngOnInit() {
  }

  agregarItem()
  {
    this._servicio.insertarItem(this.item).subscribe(
      (data:any[]) => 
      {
      
           this.lista = data; 
           this.show = true; 
          console.log(this.lista); 
           //console.log(this.show);

           this.item.title= ''; 
           this.item.body = '';
        
      }
    )
  }

  cambiarEstado(){
    this.show = false; 
    //console.log(this.show);
  }

}
