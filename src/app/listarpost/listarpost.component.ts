import { Component, OnInit } from '@angular/core';
import {ServicioappService} from './../servicioapp.service'; 

@Component({
  selector: 'app-listarpost',
  templateUrl: './listarpost.component.html',
  styleUrls: ['./listarpost.component.css']
})
export class ListarpostComponent implements OnInit {

   items: any[ ] = [] ; 

  constructor( private _servicio: ServicioappService) {
    this._servicio.getLista().subscribe(
      data => { 
        this.items = data
      // console.log(this.items); 
      } )

    
   }

  

  ngOnInit() {
  
   
  }



}
